import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const INPUT = path.join(ROOT, "scripts", "data", "legacy-proverbs.json");
const OUTPUT_DIR = path.join(ROOT, "public", "sagesse-du-monde", "data");
const OUTPUT = path.join(OUTPUT_DIR, "proverbs.json");
const REPORT = path.join(ROOT, "docs", "sagesse-du-monde-corpus-report.md");

const EXCLUDED_IDS = new Set([
  "la-18", // quasi-doublon latin de « Audentes fortuna iuvat » (la-8)
  "zh-14", // attribution chinoise moderne non démontrée (« donner un poisson »)
  "in-8",  // attribution au Ramayana trop incertaine dans cette formulation
  "wo-15", // attribution panafricaine non localisée
  "wo-16", // attribution africaine populaire mais non établie
  "wo-17", // attribution panafricaine non vérifiable
]);

const SOURCE_OVERRIDES = {
  "fr-9": {
    source: "Jean de La Fontaine, Fables V, 20, « L’Ours et les deux Compagnons »",
    sourceUrl: "https://fr.wikisource.org/wiki/L’Ours_et_les_deux_Compagnons",
    sourceKind: "text",
  },
  "fr-10": {
    source: "Destouches, Le Glorieux, acte III, scène 5 (1732)",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Glorieux",
    sourceKind: "text",
  },
  "fr-14": {
    source: "Jean de La Fontaine, Fables V, 3, « Le Petit Poisson et le Pêcheur »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Petit_Poisson_et_le_Pêcheur",
    sourceKind: "text",
  },
  "fr-16": {
    source: "Jean de La Fontaine, Fables VI, 18, « Le Chartier embourbé »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Chartier_embourbé",
    sourceKind: "text",
  },
  "en-19": {
    source: "Edward Bulwer-Lytton, Richelieu, acte II, scène 2 (1839)",
    sourceUrl: "https://www.gutenberg.org/ebooks/8639",
    sourceKind: "text",
  },
  "wo-25": {
    culture: "Grec ancien",
    place: "Monde gréco-romain",
    mark: "ΕΛ",
    lang: "grc",
    source: "Suétone, Vie d’Auguste 25.4 (formule grecque associée à Auguste)",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Suet.+Aug.+25.4",
    sourceKind: "text",
  },
  "la-14": {
    source: "Forme proverbiale d’après Cicéron, Lettres à Atticus 9.10.3 : « dum anima est, spes est »",
    sourceUrl: "https://atlas.perseus.tufts.edu/dictionaries/entry/urn%3Acite2%3Ascaife-viewer%3Adictionary-entries.atlas_v1%3Alat.ls.perseus-eng2-n44971/",
    sourceKind: "derived",
  },
};

const ADDED = [
  {
    id: "fr-23", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Pierre qui roule n’amasse pas mousse.",
    french: "Qui change sans cesse de lieu ou d’état accumule difficilement des biens.",
    meaning: "La mobilité permanente peut empêcher l’enracinement et l’accumulation patiente.",
    source: "CNRTL, attestations de 1611, 1688, 1823 et 1893",
    sourceUrl: "https://www.cnrtl.fr/definition/mousses", sourceKind: "lexicographic",
    sourceNote: "Le CNRTL documente l’évolution de la forme française, de « pierre qui se remue » à la formule actuelle.",
    tags: ["Constance", "Enracinement"],
  },
  {
    id: "fr-24", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Rien ne sert de courir ; il faut partir à point.",
    french: "La précipitation ne remplace ni la préparation ni le bon départ.",
    meaning: "La régularité et le sens du moment juste l’emportent sur l’agitation tardive.",
    source: "Jean de La Fontaine, Fables VI, 10, « Le Lièvre et la Tortue »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Lièvre_et_la_Tortue", sourceKind: "text",
    tags: ["Patience", "Préparation"],
  },
  {
    id: "fr-25", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Patience et longueur de temps font plus que force ni que rage.",
    french: "La durée et la maîtrise peuvent vaincre ce que la violence ne résout pas.",
    meaning: "L’efficacité n’est pas toujours du côté de la puissance immédiate.",
    source: "Jean de La Fontaine, Fables II, 11, « Le Lion et le Rat »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Lion_et_le_Rat", sourceKind: "text",
    tags: ["Patience", "Mesure"],
  },
  {
    id: "fr-26", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Tout flatteur vit aux dépens de celui qui l’écoute.",
    french: "La flatterie prospère grâce à la vanité de celui qui l’accueille.",
    meaning: "Le discernement commence par la vigilance envers son propre désir d’être admiré.",
    source: "Jean de La Fontaine, Fables I, 2, « Le Corbeau et le Renard »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Corbeau_et_le_Renard", sourceKind: "text",
    tags: ["Flatterie", "Discernement"],
  },
  {
    id: "fr-27", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Tel est pris qui croyait prendre.",
    french: "Le piège préparé pour autrui peut se refermer sur son auteur.",
    meaning: "La ruse donne facilement une illusion de maîtrise.",
    source: "Jean de La Fontaine, Fables VIII, 9, « Le Rat et l’Huître »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Rat_et_l’Huître", sourceKind: "text",
    tags: ["Ruse", "Retour"],
  },
  {
    id: "fr-28", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "La raison du plus fort est toujours la meilleure.",
    french: "Le puissant impose souvent sa version de la justice.",
    meaning: "La formule est ironique : elle dénonce la force qui se déguise en droit.",
    source: "Jean de La Fontaine, Fables I, 10, « Le Loup et l’Agneau »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Loup_et_l’Agneau", sourceKind: "text",
    tags: ["Pouvoir", "Justice"],
  },
  {
    id: "fr-29", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "On a souvent besoin d’un plus petit que soi.",
    french: "La puissance n’abolit pas l’interdépendance.",
    meaning: "Une aide décisive peut venir de celui que les apparences font sous-estimer.",
    source: "Jean de La Fontaine, Fables II, 11, « Le Lion et le Rat »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Lion_et_le_Rat", sourceKind: "text",
    tags: ["Entraide", "Humilité"],
  },
  {
    id: "fr-30", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Science sans conscience n’est que ruine de l’âme.",
    french: "Le savoir sans responsabilité morale peut devenir destructeur.",
    meaning: "La compétence n’est pleinement humaine que guidée par le jugement éthique.",
    source: "François Rabelais, Pantagruel, chapitre VIII",
    sourceUrl: "https://fr.wikisource.org/wiki/Pantagruel/Chapitre_VIII", sourceKind: "text",
    tags: ["Savoir", "Conscience"],
  },
  {
    id: "fr-31", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Il faut cultiver notre jardin.",
    french: "Il faut agir sur la part du monde qui dépend réellement de nous.",
    meaning: "Voltaire clôt le voyage spéculatif de Candide par un retour lucide au travail concret.",
    source: "Voltaire, Candide, chapitre XXX",
    sourceUrl: "https://fr.wikisource.org/wiki/Candide,_ou_l’Optimisme/Chapitre_30", sourceKind: "text",
    tags: ["Action", "Lucidité"],
  },
  {
    id: "fr-32", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Le mieux est l’ennemi du bien.",
    french: "La recherche excessive de perfection peut détruire une solution déjà bonne.",
    meaning: "Voltaire met en garde contre l’idéal impossible qui empêche d’apprécier ou d’achever ce qui fonctionne.",
    source: "Voltaire, La Bégueule (1772)",
    sourceUrl: "https://fr.wikisource.org/wiki/Contes_en_vers_(Voltaire)/La_B%C3%A9gueule", sourceKind: "text",
    tags: ["Mesure", "Perfection"],
  },
  {
    id: "fr-33", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Le cœur a ses raisons que la raison ne connaît point.",
    french: "Le sentiment possède ses propres voies de connaissance.",
    meaning: "Pascal distingue les vérités saisies intérieurement de celles que démontre le raisonnement discursif.",
    source: "Blaise Pascal, Pensées, fragment 277 (éd. Brunschvicg)",
    sourceUrl: "https://fr.wikisource.org/wiki/Pens%C3%A9es_(Pascal,_%C3%A9d._Brunschvicg)/Pens%C3%A9es/Section_IV", sourceKind: "text",
    tags: ["Cœur", "Raison"],
  },
  {
    id: "fr-34", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Je pense, donc je suis.",
    french: "L’acte même de penser atteste l’existence de celui qui pense.",
    meaning: "Descartes trouve dans la conscience du doute une certitude que le doute lui-même ne peut abolir.",
    source: "René Descartes, Discours de la méthode, quatrième partie (1637)",
    sourceUrl: "https://fr.wikisource.org/wiki/Discours_de_la_m%C3%A9thode_(%C3%A9d._Cousin)/Quatri%C3%A8me_partie", sourceKind: "text",
    tags: ["Pensée", "Certitude"],
  },
  {
    id: "fr-35", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Qui veut voyager loin ménage sa monture.",
    french: "Pour aller loin, il faut préserver ses forces et ses moyens.",
    meaning: "L’endurance naît d’un effort réglé plutôt que d’une dépense précipitée.",
    source: "Jean Racine, Les Plaideurs, acte I, scène 1 (1668)",
    sourceUrl: "https://fr.wikisource.org/wiki/Les_Plaideurs_(1679)", sourceKind: "text",
    tags: ["Endurance", "Mesure"],
  },
  {
    id: "fr-36", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "À vaincre sans péril, on triomphe sans gloire.",
    french: "Une victoire facile ne révèle ni courage ni grandeur.",
    meaning: "La valeur d’un triomphe dépend aussi de la difficulté réellement affrontée.",
    source: "Pierre Corneille, Le Cid, acte II, scène 2 (1637)",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Cid/%C3%89dition_Marty-Laveaux/Le_Cid", sourceKind: "text",
    tags: ["Courage", "Gloire"],
  },
  {
    id: "fr-37", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Aux âmes bien nées, la valeur n’attend point le nombre des années.",
    french: "La jeunesse n’empêche ni le courage ni la noblesse d’âme.",
    meaning: "Le mérite se juge à la qualité des actes, non au seul privilège de l’âge.",
    source: "Pierre Corneille, Le Cid, acte II, scène 2 (1637)",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Cid/%C3%89dition_Marty-Laveaux/Le_Cid", sourceKind: "text",
    tags: ["Jeunesse", "Valeur"],
  },
  {
    id: "fr-38", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "La critique est aisée et l’art est difficile.",
    french: "Juger une œuvre est plus facile que la créer.",
    meaning: "La formule rappelle au critique l’effort, les choix et les risques que suppose toute création.",
    source: "Philippe Néricault Destouches, Le Glorieux, acte II, scène 5 (1732)",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_glorieux", sourceKind: "text",
    tags: ["Création", "Jugement"],
  },
  {
    id: "fr-39", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Selon que vous serez puissant ou misérable, les jugements de cour vous rendront blanc ou noir.",
    french: "La justice peut changer de verdict selon la puissance sociale de celui qu’elle juge.",
    meaning: "La Fontaine dénonce une justice qui absout les forts et fait payer les faibles.",
    source: "Jean de La Fontaine, Fables VII, 1, « Les Animaux malades de la peste »",
    sourceUrl: "https://fr.wikisource.org/wiki/Fables_de_La_Fontaine/%C3%A9dition_1874/Les_Animaux_malades_de_la_peste", sourceKind: "text",
    tags: ["Justice", "Pouvoir"],
  },
  {
    id: "fr-40", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Le travail est un trésor.",
    french: "La capacité de travailler vaut davantage qu’un héritage vite dissipé.",
    meaning: "Le père de la fable lègue à ses enfants le goût de l’effort sous la forme d’un trésor à chercher.",
    source: "Jean de La Fontaine, Fables V, 9, « Le Laboureur et ses Enfants »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Laboureur_et_ses_Enfants", sourceKind: "text",
    tags: ["Travail", "Transmission"],
  },
  {
    id: "fr-41", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "La méfiance est mère de la sûreté.",
    french: "Une prudence lucide protège des pièges trop séduisants.",
    meaning: "La prudence n’est pas ici une peur générale, mais l’attention à ce qui paraît anormalement facile.",
    source: "Jean de La Fontaine, Fables III, 18, « Le Chat et un vieux Rat »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Chat_et_un_vieux_Rat", sourceKind: "text",
    tags: ["Prudence", "Vigilance"],
  },
  {
    id: "fr-42", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Ventre affamé n’a point d’oreilles.",
    french: "La nécessité physique rend les beaux discours impuissants.",
    meaning: "On ne persuade pas celui dont un besoin vital n’est pas satisfait par de simples paroles.",
    source: "Jean de La Fontaine, Fables IX, 18, « Le Milan et le Rossignol »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Milan_et_le_Rossignol", sourceKind: "text",
    tags: ["Nécessité", "Parole"],
  },
  {
    id: "fr-43", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Chat échaudé craint l’eau froide.",
    french: "Une expérience douloureuse rend méfiant même devant un danger seulement ressemblant.",
    meaning: "La mémoire de la blessure protège, mais peut aussi étendre la crainte au-delà du risque réel.",
    source: "Proverbe français traditionnel ; locution documentée par le TLFi",
    sourceUrl: "https://www.cnrtl.fr/definition/%C3%A9chaud%C3%A9", sourceKind: "lexicographic",
    tags: ["Expérience", "Crainte"],
  },
  {
    id: "fr-44", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Il faut battre le fer pendant qu’il est chaud.",
    french: "Il faut agir pendant que les conditions sont favorables.",
    meaning: "Une occasion utile se transforme par une action menée au moment où elle peut encore produire son effet.",
    source: "Locution proverbiale française documentée par le TLFi, entrée « fer »",
    sourceUrl: "https://www.cnrtl.fr/definition/fer", sourceKind: "lexicographic",
    tags: ["Occasion", "Action"],
  },
  {
    id: "fr-45", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "À l’impossible nul n’est tenu.",
    french: "On ne peut exiger de quelqu’un ce qu’il lui est réellement impossible d’accomplir.",
    meaning: "L’adage fixe une limite raisonnable à l’obligation morale ou juridique.",
    source: "Adage juridique français documenté par le TLFi, entrée « impossible »",
    sourceUrl: "https://www.cnrtl.fr/definition/impossible", sourceKind: "lexicographic",
    tags: ["Limite", "Justice"],
  },
  {
    id: "fr-46", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "L’occasion fait le larron.",
    french: "Une circonstance favorable peut susciter une faute qui n’était pas préméditée.",
    meaning: "Le contexte éprouve la probité et peut réveiller une tentation jusque-là dormante.",
    source: "Proverbe français documenté par le TLFi, entrée « occasion »",
    sourceUrl: "https://www.cnrtl.fr/definition/occasion", sourceKind: "lexicographic",
    tags: ["Tentation", "Circonstance"],
  },
  {
    id: "fr-47", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Les conseilleurs ne sont pas les payeurs.",
    french: "Celui qui conseille ne supporte pas nécessairement les conséquences de son conseil.",
    meaning: "Un avis se juge aussi à la part de risque que son auteur accepte réellement d’assumer.",
    source: "Proverbe français traditionnel documenté par le TLFi, entrée « conseilleur »",
    sourceUrl: "https://www.cnrtl.fr/definition/conseilleur", sourceKind: "lexicographic",
    tags: ["Conseil", "Responsabilité"],
  },
  {
    id: "fr-48", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "La nuit porte conseil.",
    french: "Le repos et le recul peuvent éclairer une décision difficile.",
    meaning: "Suspendre le jugement permet aux émotions de retomber et à la pensée de se réorganiser.",
    source: "Proverbe français traditionnel documenté par le TLFi, entrée « nuit »",
    sourceUrl: "https://www.cnrtl.fr/definition/nuit", sourceKind: "lexicographic",
    tags: ["Décision", "Recul"],
  },
  {
    id: "fr-49", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Bien mal acquis ne profite jamais.",
    french: "Un gain obtenu injustement finit par se perdre ou se retourner contre son possesseur.",
    meaning: "La formule relie la solidité d’un bien à la justice des moyens employés pour l’obtenir.",
    source: "Jean de La Fontaine, Fables IX, 16, « Le Trésor et les deux Hommes »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Tr%C3%A9sor_et_les_deux_Hommes", sourceKind: "text",
    tags: ["Justice", "Gain"],
  },
  {
    id: "fr-50", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Quand le chat n’est pas là, les souris dansent.",
    french: "L’absence d’autorité libère les comportements qu’elle contenait.",
    meaning: "La discipline fondée uniquement sur la surveillance disparaît avec celui qui la fait respecter.",
    source: "Proverbe français traditionnel documenté par le TLFi, entrée « chat »",
    sourceUrl: "https://www.cnrtl.fr/definition/chat", sourceKind: "lexicographic",
    tags: ["Autorité", "Liberté"],
  },
  {
    id: "fr-51", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Tant va la cruche à l’eau qu’à la fin elle se casse.",
    french: "À répéter une conduite risquée, on finit par en subir les conséquences.",
    meaning: "Le succès provisoire ne supprime pas le danger : l’exposition répétée rend la rupture de plus en plus probable.",
    source: "Proverbe français ancien documenté par le TLFi, entrée « cruche »",
    sourceUrl: "https://www.cnrtl.fr/definition/cruche", sourceKind: "lexicographic",
    tags: ["Risque", "Répétition"],
  },
  {
    id: "fr-52", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Qui trop embrasse mal étreint.",
    french: "Celui qui entreprend trop de choses à la fois n’en maîtrise aucune.",
    meaning: "L’ambition dispersée affaiblit l’attention et la qualité de l’exécution.",
    source: "Proverbe français documenté par le TLFi, entrée « embrasser »",
    sourceUrl: "https://www.cnrtl.fr/definition/embrasser", sourceKind: "lexicographic",
    tags: ["Mesure", "Priorité"],
  },
  {
    id: "fr-53", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Il ne faut pas courir deux lièvres à la fois.",
    french: "Poursuivre simultanément deux objectifs incompatibles risque de faire perdre les deux.",
    meaning: "Le proverbe invite à choisir une priorité quand les efforts ne peuvent être efficacement partagés.",
    source: "Locution proverbiale française documentée par le TLFi, entrée « lièvre »",
    sourceUrl: "https://www.cnrtl.fr/definition/li%C3%A8vre", sourceKind: "lexicographic",
    tags: ["Choix", "Concentration"],
  },
  {
    id: "fr-54", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "C’est au pied du mur qu’on voit le maçon.",
    french: "La compétence se révèle au moment de l’épreuve concrète.",
    meaning: "La réputation et les promesses comptent moins que la capacité à réaliser effectivement le travail.",
    source: "Proverbe français documenté par le TLFi, entrée « mur »",
    sourceUrl: "https://www.cnrtl.fr/definition/mur", sourceKind: "lexicographic",
    tags: ["Compétence", "Épreuve"],
  },
  {
    id: "fr-55", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Il ne faut pas mettre la charrue avant les bœufs.",
    french: "Il faut respecter l’ordre nécessaire des étapes.",
    meaning: "Commencer par la conséquence avant d’avoir établi les conditions qui la rendent possible conduit au désordre.",
    source: "Locution proverbiale française documentée par le TLFi, entrée « charrue »",
    sourceUrl: "https://www.cnrtl.fr/definition/charrue", sourceKind: "lexicographic",
    tags: ["Ordre", "Préparation"],
  },
  {
    id: "fr-56", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Les murs ont des oreilles.",
    french: "Une parole supposée secrète peut toujours être entendue et rapportée.",
    meaning: "Le proverbe rappelle que la confidentialité dépend autant du lieu et des témoins invisibles que de l’intention.",
    source: "Locution proverbiale française documentée par le TLFi, entrée « mur »",
    sourceUrl: "https://www.cnrtl.fr/definition/mur", sourceKind: "lexicographic",
    tags: ["Secret", "Prudence"],
  },
  {
    id: "fr-57", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Il ne faut pas réveiller le chat qui dort.",
    french: "Il vaut mieux ne pas ranimer un conflit ou un danger momentanément apaisé.",
    meaning: "Une intervention inutile peut transformer un risque dormant en problème actif.",
    source: "Locution proverbiale française documentée par le TLFi, entrée « chat »",
    sourceUrl: "https://www.cnrtl.fr/definition/chat", sourceKind: "lexicographic",
    tags: ["Prudence", "Conflit"],
  },
  {
    id: "fr-58", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "À chacun son métier, et les vaches seront bien gardées.",
    french: "Une tâche est mieux accomplie lorsqu’elle est confiée à celui qui en connaît le métier.",
    meaning: "La fable défend la compétence propre de chaque art contre l’improvisation présomptueuse.",
    source: "Jean de La Fontaine, Fables V, 8, « Le Cheval et le Loup »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Cheval_et_le_Loup", sourceKind: "text",
    tags: ["Métier", "Compétence"],
  },
  {
    id: "fr-59", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Il n’y a pas de sot métier, il n’y a que de sottes gens.",
    french: "Aucun travail honnête n’est indigne ; seul le mépris qu’on lui porte peut l’être.",
    meaning: "La dignité dépend moins du prestige social d’une activité que de la manière dont elle est exercée.",
    source: "Proverbe français traditionnel documenté par le TLFi, entrée « métier »",
    sourceUrl: "https://www.cnrtl.fr/definition/m%C3%A9tier", sourceKind: "lexicographic",
    tags: ["Travail", "Dignité"],
  },
  {
    id: "fr-60", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "À bon chat, bon rat.",
    french: "À un adversaire habile répond un adversaire de force comparable.",
    meaning: "La ruse ou la puissance rencontre parfois une résistance exactement à sa mesure.",
    source: "Locution proverbiale française documentée par le TLFi, entrée « chat »",
    sourceUrl: "https://www.cnrtl.fr/definition/chat", sourceKind: "lexicographic",
    tags: ["Rivalité", "Équilibre"],
  },
  {
    id: "en-23", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "The straw that broke the camel’s back.",
    french: "La paille qui brisa le dos du chameau.",
    meaning: "Une charge minuscule peut déclencher la rupture quand tout le reste s’est déjà accumulé.",
    source: "Proverbe anglais ; forme au chameau attestée dans The Edinburgh Advertiser (1816)",
    sourceUrl: "https://www.phrases.org.uk/meanings/the-last-straw.html", sourceKind: "lexicographic",
    tags: ["Limite", "Accumulation"],
  },
  {
    id: "en-24", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "A rolling stone gathers no moss.",
    french: "Pierre qui roule n’amasse pas mousse.",
    meaning: "La mobilité protège de l’immobilisme, mais peut aussi empêcher l’enracinement ; le sens varie selon l’époque.",
    source: "John Heywood, A Dialogue Containing the Number in Effect of All the Proverbs (1546)",
    sourceKind: "text", sourceNote: "La famille proverbiale est plus ancienne et possède des parallèles latins et européens.",
    tags: ["Mobilité", "Enracinement"],
  },
  {
    id: "en-25", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "All that glisters is not gold.",
    french: "Tout ce qui brille n’est pas or.",
    meaning: "L’éclat extérieur ne garantit ni la valeur ni la vérité.",
    source: "William Shakespeare, The Merchant of Venice, II.7",
    sourceUrl: "https://www.folger.edu/explore/shakespeares-works/the-merchant-of-venice/read/2/7/", sourceKind: "text",
    tags: ["Apparence", "Jugement"],
  },
  {
    id: "en-26", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "No man is an island, entire of itself.",
    french: "Nul homme n’est une île, entière en elle-même.",
    meaning: "Chaque existence est liée aux autres et affectée par leur perte.",
    source: "John Donne, Devotions upon Emergent Occasions, Méditation XVII (1624)",
    sourceUrl: "https://www.gutenberg.org/ebooks/23772", sourceKind: "text",
    tags: ["Humanité", "Interdépendance"],
  },
  {
    id: "en-27", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Brevity is the soul of wit.",
    french: "La brièveté est l’âme de l’esprit.",
    meaning: "La formule célèbre la concision, tout en étant prononcée ironiquement par le bavard Polonius.",
    source: "William Shakespeare, Hamlet, II.2",
    sourceUrl: "https://www.folger.edu/explore/shakespeares-works/hamlet/read/2/2/", sourceKind: "text",
    tags: ["Parole", "Concision"],
  },
  {
    id: "en-28", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "To err is human; to forgive, divine.",
    french: "L’erreur est humaine ; le pardon, divin.",
    meaning: "La faillibilité est commune ; le pardon demande une élévation supplémentaire.",
    source: "Alexander Pope, An Essay on Criticism, vers 525 (1711)",
    sourceUrl: "https://www.gutenberg.org/ebooks/7409", sourceKind: "text",
    tags: ["Erreur", "Pardon"],
  },
  {
    id: "en-29", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "A stitch in time saves nine.",
    french: "Un point fait à temps en épargne neuf.",
    meaning: "Une petite réparation précoce évite un dommage beaucoup plus coûteux.",
    source: "Proverbe anglais, attesté notamment chez Thomas Fuller, Gnomologia (1732)", sourceKind: "lexicographic",
    tags: ["Prévention", "Temps"],
  },
  {
    id: "en-30", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "Look before you leap.",
    french: "Regarde avant de sauter.",
    meaning: "L’action gagne à être précédée d’un examen lucide des conséquences.",
    source: "John Heywood, A Dialogue Containing the Number in Effect of All the Proverbs (1546)", sourceKind: "text",
    tags: ["Prudence", "Décision"],
  },
  {
    id: "en-31", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "Don’t count your chickens before they hatch.",
    french: "Ne comptez pas vos poulets avant leur éclosion.",
    meaning: "Un résultat espéré ne doit pas être traité comme déjà acquis.",
    source: "Famille proverbiale issue d’Ésope ; forme anglaise attestée au XVIe siècle", sourceKind: "derived",
    tags: ["Prudence", "Anticipation"],
  },
  {
    id: "en-32", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Time and tide wait for no man.",
    french: "Le temps et la marée n’attendent personne.",
    meaning: "Les occasions soumises au temps avancent sans s’adapter à nos hésitations.",
    source: "Proverbe anglais ancien ; recensé par Walter K. Kelly, Proverbs of All Nations (1870)",
    sourceUrl: "https://www.gutenberg.org/files/63190/63190-h/63190-h.htm", sourceKind: "lexicographic",
    tags: ["Temps", "Occasion"],
  },
  {
    id: "en-33", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Many hands make light work.",
    french: "Beaucoup de mains rendent le travail léger.",
    meaning: "Un effort lourd devient supportable lorsqu’il est réparti entre plusieurs personnes.",
    source: "John Heywood, A Dialogue Containing the Number in Effect of All the Proverbs (1546)",
    sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/The_proverbs_of_John_Heywood._Being_the_%22Proverbes%22_of_that_author_printed_1546._Ed.%2C_with_notes_and_introduction_%28IA_cu31924027146566%29.pdf", sourceKind: "text",
    tags: ["Coopération", "Travail"],
  },
  {
    id: "en-34", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Beggars can’t be choosers.",
    french: "Les mendiants ne peuvent faire les difficiles.",
    meaning: "Celui qui dépend entièrement de ce qu’on lui offre dispose de peu de marge pour en dicter les conditions.",
    source: "Forme moderne de « Beggars should be no choosers », John Heywood (1546)",
    sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/The_proverbs_of_John_Heywood._Being_the_%22Proverbes%22_of_that_author_printed_1546._Ed.%2C_with_notes_and_introduction_%28IA_cu31924027146566%29.pdf", sourceKind: "derived",
    tags: ["Nécessité", "Choix"],
  },
  {
    id: "en-35", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "The proof of the pudding is in the eating.",
    french: "La preuve du pudding est dans le fait de le manger.",
    meaning: "La valeur réelle d’une chose se vérifie par l’expérience et le résultat, non par les promesses.",
    source: "Proverbe anglais attesté chez John Taylor (1615), puis dans Camden, Remaines (éd. 1623)",
    sourceUrl: "https://www.wordorigins.org/big-list-entries/proof-of-the-pudding", sourceKind: "lexicographic",
    tags: ["Expérience", "Preuve"],
  },
  {
    id: "en-36", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "Waste not, want not.",
    french: "Qui ne gaspille pas ne manquera pas.",
    meaning: "L’usage attentif des ressources présentes protège contre la pénurie future.",
    source: "Proverbe anglais, forme attestée en 1772 ; variante plus ancienne en 1576",
    sourceUrl: "https://www.dictionary.com/browse/waste-not-want-not", sourceKind: "lexicographic",
    tags: ["Économie", "Prévision"],
  },
  {
    id: "en-37", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Make hay while the sun shines.",
    french: "Fais les foins pendant que le soleil brille.",
    meaning: "Une condition favorable doit être utilisée avant qu’elle ne disparaisse.",
    source: "Proverbe propre à la tradition anglaise ; Walter K. Kelly, Proverbs of All Nations (1870)",
    sourceUrl: "https://www.gutenberg.org/files/63190/63190-h/63190-h.htm", sourceKind: "lexicographic",
    tags: ["Occasion", "Action"],
  },
  {
    id: "en-38", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "A watched pot never boils.",
    french: "Une casserole surveillée ne bout jamais.",
    meaning: "L’attente anxieuse donne l’impression que le temps ralentit.",
    source: "Proverbe anglais ; forme voisine chez Benjamin Franklin, rapport de 1785",
    sourceUrl: "https://www.phrases.org.uk/meanings/watched-pot-never-boils.html", sourceKind: "lexicographic",
    tags: ["Patience", "Attente"],
  },
  {
    id: "en-39", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Out of sight, out of mind.",
    french: "Loin des yeux, loin de l’esprit.",
    meaning: "Ce qui disparaît de l’expérience quotidienne tend aussi à perdre sa place dans l’attention.",
    source: "John Heywood, A Dialogue Containing the Number in Effect of All the Proverbs (1546)",
    sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/The_proverbs_of_John_Heywood._Being_the_%22Proverbes%22_of_that_author_printed_1546._Ed.%2C_with_notes_and_introduction_%28IA_cu31924027146566%29.pdf", sourceKind: "text",
    tags: ["Absence", "Mémoire"],
  },
  {
    id: "en-40", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "The better part of valour is discretion.",
    french: "La meilleure part du courage est la prudence.",
    meaning: "Falstaff transforme avec esprit sa fuite en principe : survivre peut exiger de renoncer à une bravoure aveugle.",
    source: "William Shakespeare, Henry IV, Part 1, V.4",
    sourceUrl: "https://www.folger.edu/explore/shakespeares-works/henry-iv-part-1/read/5/4/", sourceKind: "text",
    tags: ["Courage", "Prudence"],
  },
  {
    id: "en-41", culture: "Anglais", place: "Écosse littéraire", mark: "EN", lang: "en",
    original: "What’s done cannot be undone.",
    french: "Ce qui est fait ne peut être défait.",
    meaning: "Certaines conséquences deviennent irréversibles et obligent à regarder lucidement ce qui demeure possible.",
    source: "William Shakespeare, Macbeth, V.1",
    sourceUrl: "https://www.folger.edu/explore/shakespeares-works/macbeth/read/5/1/", sourceKind: "text",
    tags: ["Irréversibilité", "Conséquence"],
  },
  {
    id: "en-42", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Cowards die many times before their deaths.",
    french: "Les lâches meurent plusieurs fois avant leur mort.",
    meaning: "La peur fait vivre par anticipation de multiples défaites avant même que l’événement redouté survienne.",
    source: "William Shakespeare, Julius Caesar, II.2",
    sourceUrl: "https://www.folger.edu/explore/shakespeares-works/julius-caesar/read/2/2/", sourceKind: "text",
    tags: ["Peur", "Courage"],
  },
  {
    id: "en-43", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Uneasy lies the head that wears a crown.",
    french: "Inquiète repose la tête qui porte une couronne.",
    meaning: "Le pouvoir apporte une charge et une insécurité que son prestige extérieur dissimule.",
    source: "William Shakespeare, Henry IV, Part 2, III.1",
    sourceUrl: "https://www.folger.edu/explore/shakespeares-works/henry-iv-part-2/read/3/1/", sourceKind: "text",
    tags: ["Pouvoir", "Responsabilité"],
  },
  {
    id: "en-44", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "The course of true love never did run smooth.",
    french: "Le cours du véritable amour ne fut jamais paisible.",
    meaning: "Les liens profonds se construisent à travers des obstacles plutôt que dans une continuité sans heurts.",
    source: "William Shakespeare, A Midsummer Night’s Dream, I.1",
    sourceUrl: "https://www.folger.edu/explore/shakespeares-works/a-midsummer-nights-dream/read/1/1/", sourceKind: "text",
    tags: ["Amour", "Épreuve"],
  },
  {
    id: "en-45", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Hope springs eternal in the human breast.",
    french: "L’espoir jaillit éternellement dans le cœur humain.",
    meaning: "L’être humain reporte naturellement son attente de bonheur vers ce qui reste à venir.",
    source: "Alexander Pope, An Essay on Man, épître I, vers 95 (1733)",
    sourceUrl: "https://www.gutenberg.org/cache/epub/9413/pg9413-images.html", sourceKind: "text",
    tags: ["Espoir", "Avenir"],
  },
  {
    id: "en-46", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Fools rush in where angels fear to tread.",
    french: "Les fous se précipitent là où les anges craignent de poser le pied.",
    meaning: "L’ignorance sûre d’elle-même s’engage sans percevoir les dangers qui rendent le sage prudent.",
    source: "Alexander Pope, An Essay on Criticism, vers 625 (1711)",
    sourceUrl: "https://www.gutenberg.org/files/43271/43271-h/43271-h.htm", sourceKind: "text",
    tags: ["Imprudence", "Ignorance"],
  },
  {
    id: "en-47", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "A little learning is a dangerous thing.",
    french: "Un peu de savoir est une chose dangereuse.",
    meaning: "Une connaissance superficielle peut produire davantage de certitude que de compréhension.",
    source: "Alexander Pope, An Essay on Criticism, vers 215 (1711)",
    sourceUrl: "https://www.gutenberg.org/files/43271/43271-h/43271-h.htm", sourceKind: "text",
    tags: ["Savoir", "Humilité"],
  },
  {
    id: "en-48", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Reading maketh a full man; conference a ready man; and writing an exact man.",
    french: "La lecture forme un homme complet ; l’échange, un homme prêt ; l’écriture, un homme précis.",
    meaning: "Bacon distingue trois disciplines complémentaires : nourrir l’esprit, répondre avec agilité et clarifier la pensée.",
    source: "Francis Bacon, Essays, « Of Studies » (éd. 1625)",
    sourceUrl: "https://www.gutenberg.org/files/10699/10699-h/10699-h.htm", sourceKind: "text",
    tags: ["Lecture", "Écriture"],
  },
  {
    id: "en-49", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "If Winter comes, can Spring be far behind?",
    french: "Si l’hiver vient, le printemps peut-il être loin derrière ?",
    meaning: "Le moment le plus sombre contient déjà la possibilité d’un recommencement.",
    source: "Percy Bysshe Shelley, Ode to the West Wind (1820)",
    sourceUrl: "https://www.poetryfoundation.org/poems/45134/ode-to-the-west-wind", sourceKind: "text",
    tags: ["Espoir", "Renouveau"],
  },
  {
    id: "en-50", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "The Child is father of the Man.",
    french: "L’enfant est le père de l’homme.",
    meaning: "Les dispositions et les émerveillements de l’enfance façonnent l’adulte à venir.",
    source: "William Wordsworth, My Heart Leaps Up (1802)",
    sourceUrl: "https://www.poetryfoundation.org/poems/45502/my-heart-leaps-up", sourceKind: "text",
    tags: ["Enfance", "Transmission"],
  },
  {
    id: "en-51", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "Don’t bite off more than you can chew.",
    french: "Ne mords pas plus que tu ne peux mâcher.",
    meaning: "Une tâche trop vaste pour les moyens disponibles transforme l’ambition en incapacité d’achever.",
    source: "Proverbe anglophone documenté par Phrase Finder",
    sourceUrl: "https://www.phrases.org.uk/idioms/bite-off-more-than-you-can-chew.html", sourceKind: "lexicographic",
    tags: ["Mesure", "Capacité"],
  },
  {
    id: "en-52", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "Don’t put the cart before the horse.",
    french: "Ne mets pas la charrette avant le cheval.",
    meaning: "Inverser les étapes nécessaires compromet le résultat avant même de commencer.",
    source: "Proverbe anglais ancien documenté par Phrase Finder",
    sourceUrl: "https://www.phrases.org.uk/meanings/put-the-cart-before-the-horse.html", sourceKind: "lexicographic",
    tags: ["Ordre", "Préparation"],
  },
  {
    id: "en-53", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "You can lead a horse to water, but you can’t make it drink.",
    french: "On peut mener un cheval à l’eau, mais on ne peut le forcer à boire.",
    meaning: "On peut offrir une occasion ou un savoir, jamais contraindre quelqu’un à s’en saisir intérieurement.",
    source: "Proverbe anglais attesté dès le XIIe siècle ; historique documenté par Phrase Finder",
    sourceUrl: "https://www.phrases.org.uk/meanings/you-can-lead-a-horse-to-water.html", sourceKind: "lexicographic",
    tags: ["Liberté", "Persuasion"],
  },
  {
    id: "en-54", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Don’t look a gift horse in the mouth.",
    french: "Ne regarde pas dans la bouche d’un cheval offert.",
    meaning: "Examiner avec ingratitude la valeur d’un don fait oublier qu’il a été librement reçu.",
    source: "Famille proverbiale ancienne ; forme anglaise chez John Heywood (1546)",
    sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/The_proverbs_of_John_Heywood._Being_the_%22Proverbes%22_of_that_author_printed_1546._Ed.%2C_with_notes_and_introduction_%28IA_cu31924027146566%29.pdf", sourceKind: "derived",
    tags: ["Don", "Gratitude"],
  },
  {
    id: "en-55", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "Let sleeping dogs lie.",
    french: "Laisse dormir les chiens qui dorment.",
    meaning: "Ranimer une vieille querelle ou un danger inactif peut créer un dommage évitable.",
    source: "Proverbe anglais, famille attestée chez Chaucer ; historique documenté par Phrase Finder",
    sourceUrl: "https://www.phrases.org.uk/meanings/let-sleeping-dogs-lie.html", sourceKind: "lexicographic",
    tags: ["Prudence", "Conflit"],
  },
  {
    id: "en-56", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "Don’t cry over spilt milk.",
    french: "Ne pleure pas sur le lait renversé.",
    meaning: "Le regret ne répare pas une perte irréversible ; l’énergie doit revenir à ce qui peut encore changer.",
    source: "Proverbe anglais documenté dans les recueils des XVIIe et XIXe siècles",
    sourceUrl: "https://www.gutenberg.org/files/63190/63190-h/63190-h.htm", sourceKind: "lexicographic",
    tags: ["Regret", "Irréversibilité"],
  },
  {
    id: "en-57", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "There’s many a slip ’twixt the cup and the lip.",
    french: "Il y a bien des faux pas entre la coupe et les lèvres.",
    meaning: "Même très proche, un résultat n’est pas acquis tant que l’action n’est pas achevée.",
    source: "Proverbe anglais d’une famille antique ; recensé par Walter K. Kelly (1870)",
    sourceUrl: "https://www.gutenberg.org/files/63190/63190-h/63190-h.htm", sourceKind: "lexicographic",
    tags: ["Incertitude", "Achèvement"],
  },
  {
    id: "en-58", culture: "Anglais", place: "Angleterre", mark: "EN", lang: "en",
    original: "You can’t make a silk purse out of a sow’s ear.",
    french: "On ne peut faire une bourse de soie avec l’oreille d’une truie.",
    meaning: "La transformation a des limites lorsque la matière de départ ne possède pas les qualités indispensables.",
    source: "Proverbe anglais, forme ancienne chez Stephen Gosson (1579)",
    sourceUrl: "https://en.wiktionary.org/wiki/you_can%27t_make_a_silk_purse_out_of_a_sow%27s_ear", sourceKind: "lexicographic",
    tags: ["Limite", "Transformation"],
  },
  {
    id: "en-59", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "A bad workman blames his tools.",
    french: "Un mauvais ouvrier accuse ses outils.",
    meaning: "L’incompétence cherche volontiers une cause extérieure plutôt que d’examiner sa propre part d’échec.",
    source: "Proverbe anglais d’une famille médiévale ; recensé dans Proverbs of All Nations (1870)",
    sourceUrl: "https://www.gutenberg.org/files/63190/63190-h/63190-h.htm", sourceKind: "lexicographic",
    tags: ["Responsabilité", "Compétence"],
  },
  {
    id: "en-60", culture: "Anglais", place: "États-Unis", mark: "EN", lang: "en",
    original: "The squeaky wheel gets the grease.",
    french: "La roue qui grince reçoit la graisse.",
    meaning: "Un besoin exprimé avec insistance obtient plus facilement l’attention qu’un problème silencieux.",
    source: "Proverbe américain ; famille formulée par Josh Billings au XIXe siècle",
    sourceUrl: "https://en.wiktionary.org/wiki/the_squeaky_wheel_gets_the_grease", sourceKind: "lexicographic",
    tags: ["Expression", "Attention"],
  },
  {
    id: "gr-1", culture: "Grec ancien", place: "Delphes", mark: "ΕΛ", lang: "grc",
    original: "Γνῶθι σεαυτόν.", transliteration: "Gnôthi seautón.",
    french: "Connais-toi toi-même.",
    meaning: "La connaissance de ses limites est une condition de la sagesse.",
    source: "Maxime delphique ; Pausanias, Description de la Grèce 10.24.1",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Paus.+10.24.1", sourceKind: "text",
    tags: ["Connaissance", "Humilité"],
  },
  {
    id: "gr-2", culture: "Grec ancien", place: "Grèce antique", mark: "ΕΛ", lang: "grc",
    original: "Μηδὲν ἄγαν.", transliteration: "Mēdèn ágan.",
    french: "Rien de trop.",
    meaning: "L’excès détruit souvent la qualité qu’il prétend augmenter.",
    source: "Maxime attribuée à Chilon ; Aristote, Rhétorique 1389b",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Aristot.+Rh.+1389b", sourceKind: "text",
    tags: ["Mesure", "Équilibre"],
  },
  {
    id: "gr-3", culture: "Grec ancien", place: "Grèce antique", mark: "ΕΛ", lang: "grc",
    original: "Ὁ βίος βραχύς, ἡ δὲ τέχνη μακρή.", transliteration: "Ho bíos brakhýs, hē dè tékhnē makrḗ.",
    french: "La vie est brève, l’art est long.",
    meaning: "Une vie humaine suffit à peine pour maîtriser un art et transmettre l’expérience.",
    source: "Corpus hippocratique, Aphorismes 1.1",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0248%3Atext%3DAph.", sourceKind: "text",
    tags: ["Temps", "Art"],
  },
  {
    id: "gr-4", culture: "Grec ancien", place: "Grèce antique", mark: "ΕΛ", lang: "grc",
    original: "Μία χελιδὼν ἔαρ οὐ ποιεῖ.", transliteration: "Mía khelidṑn éar ou poieî.",
    french: "Une hirondelle ne fait pas le printemps.",
    meaning: "Un signe isolé ne suffit pas à établir une tendance ni un bonheur durable.",
    source: "Aristote, Éthique à Nicomaque 1098a18",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0053%3Abekker+page%3D1098a%3Abekker+line%3D15", sourceKind: "text",
    tags: ["Preuve", "Patience"],
  },
  {
    id: "gr-5", culture: "Grec ancien", place: "Grèce antique", mark: "ΕΛ", lang: "grc",
    original: "Χαλεπὰ τὰ καλά.", transliteration: "Khalepà tà kalá.",
    french: "Les belles choses sont difficiles.",
    meaning: "Ce qui possède une vraie valeur exige souvent un effort soutenu.",
    source: "Proverbe ancien cité par Platon, République 435c",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=urn%3Acts%3AgreekLit%3Atlg0059.tlg030.perseus-grc1%3A435c", sourceKind: "text",
    tags: ["Effort", "Valeur"],
  },
  {
    id: "gr-6", culture: "Grec ancien", place: "Grèce antique", mark: "ΕΛ", lang: "grc",
    original: "Ἀρχὴ ἥμισυ παντός.", transliteration: "Arkhḕ hḗmisy pantós.",
    french: "Le commencement est la moitié du tout.",
    meaning: "Commencer transforme une intention abstraite en œuvre déjà engagée.",
    source: "Proverbe cité par Aristote, Éthique à Nicomaque I.7",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0054%3Abook%3D1%3Achapter%3D7", sourceKind: "text",
    tags: ["Commencement", "Action"],
  },
  {
    id: "gr-7", culture: "Grec ancien", place: "Grèce antique", mark: "ΕΛ", lang: "grc",
    original: "Πάντα ῥεῖ.", transliteration: "Pánta rheî.",
    french: "Tout s’écoule.",
    meaning: "La formule résume la pensée du changement perpétuel associée à Héraclite.",
    source: "Épitomé tardif de la doctrine d’Héraclite ; voir Platon, Cratyle 402a",
    sourceUrl: "https://scaife-reader.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0059.tlg005.perseus-grc2/", sourceKind: "derived",
    sourceNote: "La formule exacte n’est pas conservée comme fragment littéral d’Héraclite.",
    tags: ["Changement", "Temps"],
  },
  {
    id: "he-24", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "he", rtl: true,
    original: "תָּפַשְׂתָּ מְרֻבֶּה לֹא תָּפַשְׂתָּ; תָּפַשְׂתָּ מוּעָט תָּפַשְׂתָּ",
    transliteration: "Tafasta meroubé lo tafasta ; tafasta mouat tafasta.",
    french: "Qui veut saisir trop ne saisit rien ; qui saisit peu, saisit.",
    meaning: "Dans l’incertitude, une ambition limitée mais certaine vaut mieux qu’une prétention impossible à tenir.",
    source: "Talmud de Babylone, Yoma 80a",
    sourceUrl: "https://www.sefaria.org/Yoma.80a.4-5", sourceKind: "text",
    tags: ["Mesure", "Prudence"],
  },
  {
    id: "he-25", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "he", rtl: true,
    original: "אֵין חָבוּשׁ מַתִּיר עַצְמוֹ מִבֵּית הָאֲסוּרִים",
    transliteration: "Ein ḥavoush matir atsmo mi-beit ha-assourim.",
    french: "Un prisonnier ne se libère pas lui-même de sa prison.",
    meaning: "Même le sage ou le soignant peut avoir besoin d’autrui pour sortir de sa propre épreuve.",
    source: "Talmud de Babylone, Berakhot 5b:13",
    sourceUrl: "https://www.sefaria.org/Berakhot.5b.13", sourceKind: "text",
    tags: ["Entraide", "Limite"],
  },
  {
    id: "he-26", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "he", rtl: true,
    original: "גָּדוֹל תַּלְמוּד שֶׁהַתַּלְמוּד מֵבִיא לִידֵי מַעֲשֶׂה",
    transliteration: "Gadol talmoud, she-ha-talmoud mevi lidei maassé.",
    french: "Grande est l’étude, car l’étude conduit à l’action.",
    meaning: "L’apprentissage tire sa grandeur de sa capacité à transformer la conduite.",
    source: "Talmud de Babylone, Kiddushin 40b:8",
    sourceUrl: "https://www.sefaria.org/Kiddushin.40b.8", sourceKind: "text",
    tags: ["Étude", "Action"],
  },
  {
    id: "he-27", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "arc", rtl: true,
    original: "כָּל דְּעָבֵיד רַחְמָנָא לְטַב עָבֵיד",
    transliteration: "Kol de-avid Raḥmana le-tav avid.",
    french: "Tout ce que fait le Miséricordieux, Il le fait pour le bien.",
    meaning: "La confiance religieuse cherche un sens favorable même dans l’événement incompréhensible.",
    source: "Talmud de Babylone, Berakhot 60b",
    sourceUrl: "https://www.sefaria.org/Berakhot.60b", sourceKind: "text",
    tags: ["Confiance", "Épreuve"],
  },
  {
    id: "he-28", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "עֲשֵׂה לְךָ רַב, וּקְנֵה לְךָ חָבֵר",
    transliteration: "Aseh lekha rav, ou-qneh lekha haver.",
    french: "Donne-toi un maître et acquiers-toi un ami.",
    meaning: "La formation du jugement demande à la fois une exigence qui guide et une relation qui accompagne.",
    source: "Pirqé Avot 1:6",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.1.6", sourceKind: "text",
    tags: ["Étude", "Amitié"],
  },
  {
    id: "he-29", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "אַל תָּדִין אֶת חֲבֵרְךָ עַד שֶׁתַּגִּיעַ לִמְקוֹמוֹ",
    transliteration: "Al tadin et haverkha ad she-tagui'a limkomo.",
    french: "Ne juge pas ton prochain avant d’être arrivé à sa place.",
    meaning: "Comprendre une conduite exige de considérer la situation concrète dans laquelle l’autre a dû agir.",
    source: "Pirqé Avot 2:4",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.2.4", sourceKind: "text",
    tags: ["Jugement", "Empathie"],
  },
  {
    id: "he-30", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "לֹא הַבַּיְשָׁן לָמֵד, וְלֹא הַקַּפְּדָן מְלַמֵּד",
    transliteration: "Lo ha-baishan lamed, ve-lo ha-kapdan melamed.",
    french: "Le timide n’apprend pas, et l’irritable n’enseigne pas.",
    meaning: "Apprendre suppose d’oser demander ; enseigner suppose de créer un espace où la question est possible.",
    source: "Pirqé Avot 2:5",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.2.5", sourceKind: "text",
    tags: ["Apprentissage", "Transmission"],
  },
  {
    id: "he-31", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "מַרְבֶּה נְכָסִים, מַרְבֶּה דְאָגָה",
    transliteration: "Marbeh nekhasim, marbeh deagah.",
    french: "Qui multiplie les biens multiplie les soucis.",
    meaning: "L’accumulation matérielle augmente aussi les charges, la surveillance et la peur de perdre.",
    source: "Pirqé Avot 2:7",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.2.7", sourceKind: "text",
    tags: ["Richesse", "Souci"],
  },
  {
    id: "he-32", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "הַיּוֹם קָצָר וְהַמְּלָאכָה מְרֻבָּה",
    transliteration: "Ha-yom katsar ve-ha-melakha meroubah.",
    french: "Le jour est court et le travail abondant.",
    meaning: "Le temps limité donne à l’action sa gravité et interdit de remettre indéfiniment l’essentiel.",
    source: "Pirqé Avot 2:15",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.2.15", sourceKind: "text",
    tags: ["Temps", "Devoir"],
  },
  {
    id: "he-33", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "אִם אֵין קֶמַח, אֵין תּוֹרָה; אִם אֵין תּוֹרָה, אֵין קֶמַח",
    transliteration: "Im ein kemah, ein Torah; im ein Torah, ein kemah.",
    french: "Sans farine, pas de Torah ; sans Torah, pas de farine.",
    meaning: "Les conditions matérielles et la vie de l’esprit se soutiennent mutuellement au lieu de pouvoir s’ignorer.",
    source: "Pirqé Avot 3:17",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.3.17", sourceKind: "text",
    tags: ["Matière", "Esprit"],
  },
  {
    id: "he-34", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "הֱוֵי זָנָב לָאֲרָיוֹת, וְאַל תְּהִי רֹאשׁ לַשּׁוּעָלִים",
    transliteration: "Hevei zanav la-arayot, ve-al tehi rosh la-shoualim.",
    french: "Sois la queue des lions plutôt que la tête des renards.",
    meaning: "Mieux vaut grandir parmi ceux qui nous dépassent que dominer un milieu qui ne nous élève pas.",
    source: "Pirqé Avot 4:15",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.4.15", sourceKind: "text",
    tags: ["Exigence", "Entourage"],
  },
  {
    id: "he-35", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "אַל תִּסְתַּכֵּל בַּקַּנְקַן, אֶלָּא בְמַה שֶּׁיֶּשׁ בּוֹ",
    transliteration: "Al tistakel ba-kankan, ela be-ma she-yesh bo.",
    french: "Ne regarde pas la cruche, mais ce qu’elle contient.",
    meaning: "L’apparence, l’âge ou l’emballage ne suffisent pas à révéler la valeur intérieure.",
    source: "Pirqé Avot 4:20",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.4.20", sourceKind: "text",
    tags: ["Apparence", "Valeur"],
  },
  {
    id: "he-36", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "arc", rtl: true,
    original: "לְפוּם צַעֲרָא אַגְרָא",
    transliteration: "Lefoum tsaara agra.",
    french: "Selon l’effort, la récompense.",
    meaning: "La valeur d’un accomplissement se mesure aussi à la difficulté qu’il a fallu traverser.",
    source: "Pirqé Avot 5:23",
    sourceUrl: "https://www.sefaria.org/Pirkei_Avot.5.23", sourceKind: "text",
    tags: ["Effort", "Récompense"],
  },
  {
    id: "he-37", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "arc", rtl: true,
    original: "דַּעֲלָךְ סְנֵי לְחַבְרָךְ לָא תַּעֲבֵיד",
    transliteration: "De-alakh seni le-haverakh la ta'avid.",
    french: "Ce qui t’est odieux, ne le fais pas à ton prochain.",
    meaning: "Hillel formule la réciprocité comme un test immédiat de la justice de notre conduite.",
    source: "Talmud de Babylone, Shabbat 31a:6",
    sourceUrl: "https://www.sefaria.org/Shabbat.31a.6", sourceKind: "text",
    tags: ["Réciprocité", "Justice"],
  },
  {
    id: "he-38", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "he", rtl: true,
    original: "כָּל יִשְׂרָאֵל עֲרֵבִים זֶה בָּזֶה",
    transliteration: "Kol Yisrael arevim zeh ba-zeh.",
    french: "Tout Israël est garant l’un de l’autre.",
    meaning: "La responsabilité morale ne s’arrête pas à l’individu : une communauté répond aussi de ses membres.",
    source: "Talmud de Babylone, Shevuot 39a:22",
    sourceUrl: "https://www.sefaria.org/Shevuot.39a.22", sourceKind: "text",
    tags: ["Solidarité", "Responsabilité"],
  },
  {
    id: "he-39", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "he", rtl: true,
    original: "קִנְאַת סוֹפְרִים תַּרְבֶּה חָכְמָה",
    transliteration: "Kin'at soferim tarbeh hokhmah.",
    french: "L’émulation des savants accroît la sagesse.",
    meaning: "Une rivalité orientée vers l’étude peut pousser chacun à approfondir et à transmettre davantage.",
    source: "Talmud de Babylone, Bava Batra 21a:11",
    sourceUrl: "https://www.sefaria.org/Bava_Batra.21a.11", sourceKind: "text",
    tags: ["Émulation", "Savoir"],
  },
  {
    id: "he-40", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "he", rtl: true,
    original: "אֵין אָדָם לוֹמֵד תּוֹרָה אֶלָּא מִמָּקוֹם שֶׁלִּבּוֹ חָפֵץ",
    transliteration: "Ein adam lomed Torah ela mi-makom she-libo hafets.",
    french: "On n’étudie la Torah que là où son cœur désire.",
    meaning: "L’apprentissage durable demande une inclination véritable et ne se réduit pas à une contrainte extérieure.",
    source: "Talmud de Babylone, Avodah Zarah 19a:5",
    sourceUrl: "https://www.sefaria.org/Avodah_Zarah.19a.5", sourceKind: "text",
    tags: ["Étude", "Désir"],
  },
  {
    id: "he-41", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "he", rtl: true,
    original: "גְּדוֹלָה הַכְנָסַת אוֹרְחִין מֵהַקְבָּלַת פְּנֵי שְׁכִינָה",
    transliteration: "Gedolah hakhnasat orhim mi-kabalat penei Shekhinah.",
    french: "Accueillir des hôtes est plus grand que recevoir la Présence divine.",
    meaning: "L’hospitalité concrète envers une personne est élevée au-dessus de l’expérience spirituelle solitaire.",
    source: "Talmud de Babylone, Shabbat 127a:13",
    sourceUrl: "https://www.sefaria.org/Shabbat.127a.13", sourceKind: "text",
    tags: ["Hospitalité", "Présence"],
  },
  {
    id: "he-42", culture: "Hébreu", place: "Talmud de Babylone", mark: "עב", lang: "he", rtl: true,
    original: "כָּל הַמְרַחֵם עַל הַבְּרִיּוֹת, מְרַחֲמִין עָלָיו מִן הַשָּׁמַיִם",
    transliteration: "Kol ha-merahem al ha-beriyot, merahemin alav min ha-Shamayim.",
    french: "Qui prend les créatures en pitié reçoit la miséricorde du Ciel.",
    meaning: "La compassion exercée envers autrui devient elle-même la mesure de la compassion espérée.",
    source: "Talmud de Babylone, Shabbat 151b:14",
    sourceUrl: "https://www.sefaria.org/Shabbat.151b.14", sourceKind: "text",
    tags: ["Compassion", "Réciprocité"],
  },
  {
    id: "he-43", culture: "Hébreu", place: "Mishna", mark: "עב", lang: "he", rtl: true,
    original: "לֹא מָצָא הַקָּדוֹשׁ בָּרוּךְ הוּא כְּלִי מַחֲזִיק בְּרָכָה לְיִשְׂרָאֵל אֶלָּא הַשָּׁלוֹם",
    transliteration: "Lo matsa Ha-Kadosh Barukh Hu keli mahazik berakha le-Yisrael ela ha-shalom.",
    french: "Le Saint, béni soit-Il, n’a trouvé pour Israël d’autre récipient de bénédiction que la paix.",
    meaning: "La paix n’est pas une bénédiction parmi d’autres : elle est la condition qui permet aux autres de durer.",
    source: "Mishna, Oktzin 3:12",
    sourceUrl: "https://www.sefaria.org/Mishnah_Oktzin.3.12", sourceKind: "text",
    tags: ["Paix", "Bénédiction"],
  },
  {
    id: "he-44", culture: "Hébreu", place: "Bible hébraïque", mark: "עב", lang: "he", rtl: true,
    original: "מָוֶת וְחַיִּים בְּיַד לָשׁוֹן",
    transliteration: "Mavet ve-hayim be-yad lashon.",
    french: "La mort et la vie sont au pouvoir de la langue.",
    meaning: "La parole peut détruire une existence ou lui rendre force, dignité et avenir.",
    source: "Proverbes 18:21",
    sourceUrl: "https://www.sefaria.org/Proverbs.18.21", sourceKind: "text",
    tags: ["Parole", "Responsabilité"],
  },
  {
    id: "he-45", culture: "Hébreu", place: "Bible hébraïque", mark: "עב", lang: "he", rtl: true,
    original: "טוֹב שָׁכֵן קָרוֹב מֵאָח רָחוֹק",
    transliteration: "Tov shakhen karov me-ah rahok.",
    french: "Mieux vaut un voisin proche qu’un frère éloigné.",
    meaning: "La proximité disponible dans l’épreuve peut compter davantage qu’un lien fort mais inaccessible.",
    source: "Proverbes 27:10",
    sourceUrl: "https://www.sefaria.org/Proverbs.27.10", sourceKind: "text",
    tags: ["Proximité", "Entraide"],
  },
  {
    id: "he-46", culture: "Hébreu", place: "Bible hébraïque", mark: "עב", lang: "he", rtl: true,
    original: "חֲנֹךְ לַנַּעַר עַל פִּי דַרְכּוֹ",
    transliteration: "Hanokh la-na'ar al pi darko.",
    french: "Éduque le jeune selon sa voie.",
    meaning: "La transmission juste tient compte de la singularité de celui qui apprend au lieu de lui imposer une forme unique.",
    source: "Proverbes 22:6",
    sourceUrl: "https://www.sefaria.org/Proverbs.22.6", sourceKind: "text",
    tags: ["Éducation", "Singularité"],
  },
  {
    id: "he-47", culture: "Hébreu", place: "Bible hébraïque", mark: "עב", lang: "he", rtl: true,
    original: "בַּרְזֶל בְּבַרְזֶל יָחַד, וְאִישׁ יַחַד פְּנֵי רֵעֵהוּ",
    transliteration: "Barzel be-varzel yahad, ve-ish yahad penei re'ehu.",
    french: "Le fer aiguise le fer, et l’homme aiguise le visage de son prochain.",
    meaning: "La rencontre exigeante entre deux personnes affine le caractère et la pensée de chacune.",
    source: "Proverbes 27:17",
    sourceUrl: "https://www.sefaria.org/Proverbs.27.17", sourceKind: "text",
    tags: ["Émulation", "Amitié"],
  },
  {
    id: "he-48", culture: "Hébreu", place: "Bible hébraïque", mark: "עב", lang: "he", rtl: true,
    original: "כִּי שֶׁבַע יִפּוֹל צַדִּיק וָקָם",
    transliteration: "Ki sheva yipol tsadik va-kam.",
    french: "Car sept fois le juste tombe et se relève.",
    meaning: "La justice ne consiste pas à ne jamais tomber, mais à retrouver la capacité de se relever.",
    source: "Proverbes 24:16",
    sourceUrl: "https://www.sefaria.org/Proverbs.24.16", sourceKind: "text",
    tags: ["Résilience", "Justice"],
  },
  {
    id: "he-49", culture: "Hébreu", place: "Bible hébraïque", mark: "עב", lang: "he", rtl: true,
    original: "לַכֹּל זְמָן, וְעֵת לְכָל חֵפֶץ תַּחַת הַשָּׁמָיִם",
    transliteration: "La-kol zman, ve-et le-khol hefets tahat ha-shamayim.",
    french: "Il y a un temps pour tout, et un moment pour chaque chose sous les cieux.",
    meaning: "La sagesse consiste aussi à reconnaître le moment propre de l’action, du retrait, de la parole et du silence.",
    source: "Ecclésiaste 3:1",
    sourceUrl: "https://www.sefaria.org/Ecclesiastes.3.1", sourceKind: "text",
    tags: ["Temps", "Discernement"],
  },
  {
    id: "he-50", culture: "Hébreu", place: "Bible hébraïque", mark: "עב", lang: "he", rtl: true,
    original: "טוֹבִים הַשְּׁנַיִם מִן הָאֶחָד",
    transliteration: "Tovim ha-shenayim min ha-ehad.",
    french: "Deux valent mieux qu’un.",
    meaning: "L’effort partagé apporte soutien, secours dans la chute et fruit plus durable du travail.",
    source: "Ecclésiaste 4:9",
    sourceUrl: "https://www.sefaria.org/Ecclesiastes.4.9", sourceKind: "text",
    tags: ["Coopération", "Entraide"],
  },
  {
    id: "zh-16", culture: "Chine", place: "Chine ancienne", mark: "中", lang: "zh",
    original: "己所不欲，勿施于人。", transliteration: "Jǐ suǒ bù yù, wù shī yú rén.",
    french: "Ce que tu ne désires pas pour toi, ne l’impose pas aux autres.",
    meaning: "La réciprocité offre une règle simple pour éprouver la justice de son action.",
    source: "Confucius, Entretiens 15.24",
    sourceUrl: "https://ctext.org/text.pl?if=en&node=1504", sourceKind: "text",
    tags: ["Réciprocité", "Justice"],
  },
  {
    id: "zh-17", culture: "Chine", place: "Chine ancienne", mark: "中", lang: "zh",
    original: "温故而知新，可以为师矣。", transliteration: "Wēn gù ér zhī xīn, kě yǐ wéi shī yǐ.",
    french: "Réchauffer l’ancien et comprendre le nouveau : ainsi peut-on devenir maître.",
    meaning: "L’innovation féconde s’appuie sur une fréquentation vivante de l’héritage.",
    source: "Confucius, Entretiens 2.11",
    sourceUrl: "https://ctext.org/analects/wei-zheng", sourceKind: "text",
    tags: ["Mémoire", "Apprentissage"],
  },
  {
    id: "zh-18", culture: "Chine", place: "Chine ancienne", mark: "中", lang: "zh",
    original: "知之为知之，不知为不知，是知也。", transliteration: "Zhī zhī wéi zhī zhī, bù zhī wéi bù zhī, shì zhī yě.",
    french: "Savoir que l’on sait, et savoir que l’on ne sait pas : voilà le savoir.",
    meaning: "La connaissance commence par une frontière honnêtement reconnue.",
    source: "Confucius, Entretiens 2.17",
    sourceUrl: "https://ctext.org/analects/wei-zheng", sourceKind: "text",
    tags: ["Savoir", "Humilité"],
  },
  {
    id: "zh-19", culture: "Chine", place: "Chine ancienne", mark: "中", lang: "zh",
    original: "工欲善其事，必先利其器。", transliteration: "Gōng yù shàn qí shì, bì xiān lì qí qì.",
    french: "L’artisan qui veut bien faire son travail doit d’abord affûter ses outils.",
    meaning: "La qualité du résultat dépend aussi du soin apporté à la préparation.",
    source: "Confucius, Entretiens 15.10",
    sourceUrl: "https://ctext.org/analects/wei-ling-gong", sourceKind: "text",
    tags: ["Préparation", "Travail"],
  },
  {
    id: "zh-20", culture: "Chine", place: "Chine ancienne", mark: "中", lang: "zh",
    original: "祸兮福之所倚，福兮祸之所伏。", transliteration: "Huò xī fú zhī suǒ yǐ, fú xī huò zhī suǒ fú.",
    french: "Le malheur s’appuie sur le bonheur ; le bonheur recèle le malheur.",
    meaning: "Les contraires se transforment et rendent tout jugement immédiat fragile.",
    source: "Laozi, Daodejing 58",
    sourceUrl: "https://ctext.org/dao-de-jing", sourceKind: "text",
    tags: ["Destin", "Perspective"],
  },
  {
    id: "zh-21", culture: "Chine", place: "Chine ancienne", mark: "中", lang: "zh",
    original: "知人者智，自知者明。", transliteration: "Zhī rén zhě zhì, zì zhī zhě míng.",
    french: "Connaître les autres est intelligence ; se connaître soi-même est lumière.",
    meaning: "La lucidité intérieure est présentée comme une compréhension plus profonde.",
    source: "Laozi, Daodejing 33",
    sourceUrl: "https://ctext.org/dao-de-jing", sourceKind: "text",
    tags: ["Connaissance", "Lucidité"],
  },
  {
    id: "in-13", culture: "Inde", place: "Inde ancienne", mark: "अ", lang: "sa",
    original: "योगः कर्मसु कौशलम्", transliteration: "Yogaḥ karmasu kauśalam.",
    french: "Le yoga est habileté dans l’action.",
    meaning: "L’action juste unit compétence, équilibre intérieur et détachement du résultat.",
    source: "Bhagavad-Gītā 2.50",
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=2&field_nsutra_value=50&language=dv", sourceKind: "text",
    tags: ["Action", "Maîtrise"],
  },
  {
    id: "in-14", culture: "Inde", place: "Inde ancienne", mark: "अ", lang: "sa",
    original: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते", transliteration: "Na hi jñānena sadṛśaṃ pavitram iha vidyate.",
    french: "Il n’est ici rien d’aussi purificateur que la connaissance.",
    meaning: "La connaissance véritable transforme celui qui la reçoit.",
    source: "Bhagavad-Gītā 4.38",
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=4&field_nsutra_value=38&language=dv", sourceKind: "text",
    tags: ["Savoir", "Transformation"],
  },
  {
    id: "in-15", culture: "Inde", place: "Inde ancienne", mark: "अ", lang: "sa",
    original: "उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत्", transliteration: "Uddhared ātmanātmānaṃ nātmānam avasādayet.",
    french: "Que chacun s’élève par lui-même et ne s’abaisse pas.",
    meaning: "Le même esprit peut devenir son propre allié ou son propre adversaire.",
    source: "Bhagavad-Gītā 6.5",
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=6&field_nsutra_value=5&language=dv", sourceKind: "text",
    tags: ["Responsabilité", "Maîtrise"],
  },
  {
    id: "in-16", culture: "Inde", place: "Inde ancienne", mark: "अ", lang: "sa",
    original: "आ नो भद्राः क्रतवो यन्तु विश्वतः", transliteration: "Ā no bhadrāḥ kratavo yantu viśvataḥ.",
    french: "Que de nobles pensées nous viennent de toutes parts.",
    meaning: "La sagesse accueille le vrai et le bon sans les enfermer dans une seule provenance.",
    source: "Ṛg-Veda 1.89.1",
    sourceUrl: "https://sacred-texts.com/hin/rigveda/rv01089.htm", sourceKind: "text",
    tags: ["Ouverture", "Savoir"],
  },
  {
    id: "la-31", culture: "Latin", place: "Rome antique", mark: "LA", lang: "la",
    original: "Sapere aude.", french: "Ose savoir.",
    meaning: "Le courage intellectuel consiste à commencer et à exercer son propre jugement.",
    source: "Horace, Épîtres I.2.40",
    sourceUrl: "https://atlas.perseus.tufts.edu/library/passage/urn%3Acts%3AlatinLit%3Aphi0893.phi005.perseus-lat2%3A1.2/", sourceKind: "text",
    tags: ["Savoir", "Courage"],
  },
  {
    id: "la-32", culture: "Latin", place: "Rome antique", mark: "LA", lang: "la",
    original: "Nulla dies sine linea.", french: "Pas un jour sans une ligne.",
    meaning: "Une pratique quotidienne, même minime, entretient et approfondit l’art.",
    source: "Pline l’Ancien, Histoire naturelle 35.84, à propos d’Apelle",
    sourceUrl: "https://atlas.perseus.tufts.edu/dictionaries/entry/urn%3Acite2%3Ascaife-viewer%3Adictionary-entries.atlas_v1%3Alat.ls.perseus-eng2-n26680/", sourceKind: "text",
    tags: ["Constance", "Art"],
  },
  {
    id: "la-33", culture: "Latin", place: "Rome antique", mark: "LA", lang: "la",
    original: "Manus manum lavat.", french: "Une main lave l’autre.",
    meaning: "L’entraide peut être réciproque ; le contexte antique peut aussi suggérer l’échange intéressé.",
    source: "Sénèque, Apocoloquintose 9",
    sourceUrl: "https://atlas.perseus.tufts.edu/library/passage/urn%3Acts%3AlatinLit%3Aphi1017.phi011.perseus-lat2%3A9-10/", sourceKind: "text",
    tags: ["Réciprocité", "Entraide"],
  },
  {
    id: "wo-27", culture: "Monde", place: "Perse", mark: "FA", lang: "fa", rtl: true,
    original: "بنی‌آدم اعضای یکدیگرند", transliteration: "Banī Ādam aʿżā-ye yek peykarand.",
    french: "Les enfants d’Adam sont les membres d’un même corps.",
    meaning: "La souffrance d’un être humain concerne l’humanité entière.",
    source: "Saadi, Golestan, livre I, récit 10 (XIIIe siècle)",
    sourceUrl: "https://ganjoor.net/saadi/golestan/gbab1/sh10", sourceKind: "text",
    tags: ["Humanité", "Compassion"],
  },
  {
    id: "wo-28", culture: "Monde", place: "Espagne", mark: "ES", lang: "es",
    original: "Caminante, no hay camino, se hace camino al andar.",
    french: "Voyageur, il n’y a pas de chemin ; le chemin se fait en marchant.",
    meaning: "L’itinéraire d’une vie se découvre par l’action plus que par un plan déjà tracé.",
    source: "Antonio Machado, Proverbios y cantares XXIX, Campos de Castilla (1912)",
    sourceUrl: "https://es.wikisource.org/wiki/Proverbios_y_cantares", sourceKind: "text",
    tags: ["Chemin", "Action"],
  },
  {
    id: "wo-29", culture: "Monde", place: "Allemagne", mark: "DE", lang: "de",
    original: "Was mich nicht umbringt, macht mich stärker.",
    french: "Ce qui ne me tue pas me rend plus fort.",
    meaning: "L’épreuve surmontée peut devenir une force, sans que toute souffrance soit pour autant bénéfique.",
    source: "Friedrich Nietzsche, Crépuscule des idoles, « Maximes et pointes », 8 (1889)",
    sourceUrl: "https://de.wikisource.org/wiki/Götzen-Dämmerung/Sprüche_und_Pfeile", sourceKind: "text",
    tags: ["Épreuve", "Force"],
  },
  {
    id: "wo-30", culture: "Monde", place: "Japon", mark: "日", lang: "ja",
    original: "急がば回れ", transliteration: "Isogaba maware.",
    french: "Si tu es pressé, prends le détour.",
    meaning: "La voie apparemment plus longue peut être la plus sûre et donc la plus rapide.",
    source: "Proverbe japonais, attesté dans une poésie liée au lac Biwa à l’époque Muromachi", sourceKind: "traditional",
    tags: ["Prudence", "Chemin"],
  },
  {
    id: "wo-31", culture: "Monde", place: "Japon", mark: "日", lang: "ja",
    original: "一期一会", transliteration: "Ichi-go ichi-e.",
    french: "Une fois, une rencontre.",
    meaning: "Chaque rencontre doit être vécue comme unique et non reproductible.",
    source: "Tradition du thé ; formulation diffusée par Ii Naosuke, Chanoyu Ichie Shū (1858)", sourceKind: "text",
    tags: ["Présence", "Rencontre"],
  },
];

const TEXT_SOURCE_PATTERN = /(Avot|Talmud|Mishna|Ecclésiaste|Confucius|Entretiens|Laozi|Daodejing|Huainanzi|Sun Tzu|Upanishad|Mahabharata|Bhagavad|Panchatantra|Ramayana|Horace|Virgile|Plaute|Végèce|Juvénal|Térence|Ovide|Cicéron|Salluste|Ennius|Vulgate|Genèse|Suétone|Sénèque|Pline|Platon|Aristote|Hippocratique|Rabelais|Voltaire|Shakespeare|Pope|Donne|Nietzsche|Machado|Saadi)/i;

const normalize = (value = "") => value
  .normalize("NFKD")
  .replace(/\p{M}/gu, "")
  .toLocaleLowerCase("und")
  .replace(/[’'`´]/g, " ")
  .replace(/[^\p{L}\p{N}]+/gu, " ")
  .trim();

const inferLanguage = (entry) => {
  if (entry.lang) return entry.lang;
  return ({ France: "fr", Anglais: "en", Latin: "la", Hébreu: "he", Chine: "zh", Inde: "sa" })[entry.culture] || "und";
};

const sefariaUrl = (source = "") => {
  const avot = source.match(/Pirqé Avot (\d+):(\d+)/i);
  if (avot) return `https://www.sefaria.org/Pirkei_Avot.${avot[1]}.${avot[2]}`;
  const tanit = source.match(/Ta[’']anit (\d+)([ab])/i);
  if (tanit) return `https://www.sefaria.org/Taanit.${tanit[1]}${tanit[2]}`;
  const sanhedrin = source.match(/Sanhédrin (\d+):(\d+)/i);
  if (sanhedrin) return `https://www.sefaria.org/Mishnah_Sanhedrin.${sanhedrin[1]}.${sanhedrin[2]}`;
  const ecclesiastes = source.match(/Ecclésiaste (\d+):(\d+)/i);
  if (ecclesiastes) return `https://www.sefaria.org/Ecclesiastes.${ecclesiastes[1]}.${ecclesiastes[2]}`;
  return undefined;
};

const enrich = (entry) => {
  const override = SOURCE_OVERRIDES[entry.id] || {};
  const merged = { ...entry, ...override };
  merged.lang = inferLanguage(merged);
  if (!merged.source) {
    merged.source = merged.culture === "France"
      ? "Proverbe français traditionnel — auteur unique non établi"
      : "Proverbe anglais traditionnel — auteur unique non établi";
  }
  merged.sourceUrl ||= merged.culture === "Hébreu" ? sefariaUrl(merged.source) : undefined;
  merged.sourceKind ||= TEXT_SOURCE_PATTERN.test(merged.source)
    ? "text"
    : /tradition|proverbe|maxime|adage|expression/i.test(merged.source)
      ? "traditional"
      : "attributed";
  merged.sourceNote ||= merged.sourceKind === "traditional"
    ? "Forme transmise collectivement ; la collection n’invente pas d’auteur lorsqu’aucun texte-source unique n’est établi."
    : "Référence donnée au texte, à l’attestation ou à la tradition la plus utile pour vérifier la formule.";
  merged.searchText = normalize([
    merged.original, merged.french, merged.meaning, merged.source, merged.place, ...(merged.tags || []),
  ].join(" "));
  return merged;
};

const tokenSimilarity = (left, right) => {
  const a = new Set(normalize(left).split(" ").filter(Boolean));
  const b = new Set(normalize(right).split(" ").filter(Boolean));
  if (!a.size || !b.size) return 0;
  const intersection = [...a].filter((token) => b.has(token)).length;
  return intersection / (a.size + b.size - intersection);
};

const legacy = JSON.parse(await readFile(INPUT, "utf8"));
const candidates = [...legacy.filter((entry) => !EXCLUDED_IDS.has(entry.id)), ...ADDED].map(enrich);

const exactSeen = new Map();
const exactDuplicates = [];
const proverbs = [];
for (const entry of candidates) {
  const key = `${entry.lang}:${normalize(entry.original)}`;
  if (exactSeen.has(key)) {
    exactDuplicates.push([exactSeen.get(key), entry.id]);
    continue;
  }
  exactSeen.set(key, entry.id);
  proverbs.push(entry);
}

const nearDuplicates = [];
for (let left = 0; left < proverbs.length; left += 1) {
  for (let right = left + 1; right < proverbs.length; right += 1) {
    if (proverbs[left].lang !== proverbs[right].lang) continue;
    const similarity = tokenSimilarity(proverbs[left].original, proverbs[right].original);
    if (similarity >= 0.78) nearDuplicates.push({
      left: proverbs[left].id,
      right: proverbs[right].id,
      similarity: Number(similarity.toFixed(2)),
    });
  }
}

const cultureOrder = ["France", "Anglais", "Hébreu", "Grec ancien", "Latin", "Chine", "Inde", "Monde"];
proverbs.sort((a, b) => {
  const cultureDelta = cultureOrder.indexOf(a.culture) - cultureOrder.indexOf(b.culture);
  if (cultureDelta) return cultureDelta;
  return a.id.localeCompare(b.id, undefined, { numeric: true });
});

const requiredFields = ["id", "culture", "place", "mark", "lang", "original", "french", "meaning", "source", "sourceKind", "tags"];
const allowedSourceKinds = new Set(["attributed", "derived", "lexicographic", "text", "traditional"]);
const qualityIssues = [];
const seenIds = new Set();
for (const entry of proverbs) {
  for (const field of requiredFields) {
    const value = entry[field];
    if (value === undefined || value === null || value === "" || (field === "tags" && !Array.isArray(value))) {
      qualityIssues.push(`${entry.id || "entrée sans identifiant"}: champ ${field} manquant ou invalide`);
    }
  }
  if (seenIds.has(entry.id)) qualityIssues.push(`${entry.id}: identifiant dupliqué`);
  seenIds.add(entry.id);
  if (!allowedSourceKinds.has(entry.sourceKind)) qualityIssues.push(`${entry.id}: type de source inconnu (${entry.sourceKind})`);
  if (entry.sourceUrl) {
    try {
      const url = new URL(entry.sourceUrl);
      if (!/^https?:$/.test(url.protocol)) qualityIssues.push(`${entry.id}: protocole de source non web`);
    } catch {
      qualityIssues.push(`${entry.id}: URL de source invalide`);
    }
  }
  if (entry.culture === "Hébreu" && !entry.rtl) qualityIssues.push(`${entry.id}: direction RTL manquante`);
}
if (exactDuplicates.length) qualityIssues.push(`${exactDuplicates.length} doublon(s) exact(s) dans les candidats`);
if (nearDuplicates.length) qualityIssues.push(`${nearDuplicates.length} paire(s) quasi identique(s) à revoir`);
for (const culture of ["France", "Anglais", "Hébreu"]) {
  if (proverbs.filter((entry) => entry.culture === culture).length < 50) {
    qualityIssues.push(`${culture}: renforcement éditorial inférieur au seuil de 50 entrées`);
  }
}

if (qualityIssues.length) {
  throw new Error(`Échec du contrôle qualité :\n- ${qualityIssues.join("\n- ")}`);
}

const summary = {
  generatedAt: new Date().toISOString(),
  count: proverbs.length,
  cultureCount: new Set(proverbs.map((entry) => entry.culture)).size,
  languageCount: new Set(proverbs.map((entry) => entry.lang)).size,
  linkedSourceCount: proverbs.filter((entry) => entry.sourceUrl).length,
  textSourceCount: proverbs.filter((entry) => entry.sourceKind === "text").length,
  excludedLegacyIds: [...EXCLUDED_IDS],
  exactDuplicates,
  nearDuplicates,
  qualityIssues,
};

await mkdir(OUTPUT_DIR, { recursive: true });
await writeFile(OUTPUT, `${JSON.stringify({ summary, proverbs }, null, 2)}\n`, "utf8");

const counts = cultureOrder
  .map((culture) => [culture, proverbs.filter((entry) => entry.culture === culture).length])
  .filter(([, count]) => count);
const report = `# Rapport éditorial — Sagesse du monde

- Corpus hérité : ${legacy.length} entrées réellement distinctes avant la génération artificielle de variantes.
- Entrées héritées écartées pour provenance insuffisante : ${EXCLUDED_IDS.size}.
- Nouvelles entrées classiques ajoutées et sourcées : ${ADDED.length}.
- Corpus publié : **${proverbs.length} proverbes et maximes**.
- Langues ou traditions linguistiques : **${summary.languageCount}**.
- Références avec lien direct : **${summary.linkedSourceCount}**.
- Doublons exacts résiduels : **${exactDuplicates.length}**.
- Paires quasi identiques signalées à revoir : **${nearDuplicates.length}**.

## Répartition

${counts.map(([culture, count]) => `- ${culture} : ${count}`).join("\n")}

## Politique de provenance

1. Un passage littéraire ou religieux reçoit une référence d’œuvre et, lorsque possible, un lien vers le texte.
2. Un proverbe de tradition orale n’est pas artificiellement attribué à un auteur.
3. Une formule dérivée ou une paraphrase célèbre est explicitement signalée comme telle.
4. Les attributions panafricaines ou nationales non localisables ont été retirées plutôt que présentées comme certaines.
5. Les parallèles entre langues sont conservés quand ils documentent une circulation culturelle réelle ; les variantes mécaniques à un mot d’écart sont supprimées.

## Paires proches signalées

${nearDuplicates.length ? nearDuplicates.map((pair) => `- ${pair.left} / ${pair.right} — similarité lexicale ${pair.similarity}`).join("\n") : "Aucune."}
`;
await writeFile(REPORT, report, "utf8");

console.log(JSON.stringify(summary, null, 2));
