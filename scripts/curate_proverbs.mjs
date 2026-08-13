import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const INPUT = path.join(ROOT, "scripts", "data", "legacy-proverbs.json");
const OUTPUT_DIR = path.join(ROOT, "public", "sagesse-du-monde", "data");
const OUTPUT = path.join(OUTPUT_DIR, "proverbs.json");
const REPORT = path.join(ROOT, "docs", "sagesse-du-monde-corpus-report.md");

const EXCLUDED_IDS = new Set([
  "la-5",  // complément médiéval artificiellement séparé ; fusionné avec le texte-source de Cicéron (la-4)
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
  "la-1": {
    sourceUrl: "https://www.thelatinlibrary.com/horace/carm1.shtml",
    sourceKind: "text",
  },
  "en-2": {
    original: "Don’t change horses in midstream.",
    french: "Ne changez pas de cheval au milieu du courant.",
    meaning: "Modifier brutalement de direction ou de responsable pendant une crise peut ajouter le désordre au danger.",
    source: "Idiome proverbial américain popularisé par Abraham Lincoln pendant la campagne de 1864 ; The Phrase Finder",
    sourceUrl: "https://www.phrases.org.uk/meanings/115400.html",
    sourceKind: "lexicographic",
    tags: ["Continuité", "Crise"],
  },
  "la-2": {
    source: "Suétone, Vie de César 37.2, rapportant l’inscription du triomphe pontique",
    sourceUrl: "https://www.thelatinlibrary.com/suetonius/suet.caesar.html",
    sourceKind: "text",
  },
  "la-3": {
    source: "Suétone, Vie de César 32.1 ; la tradition grecque parallèle est rapportée par Plutarque",
    sourceUrl: "https://www.thelatinlibrary.com/suetonius/suet.caesar.html",
    sourceKind: "text",
  },
  "la-4": {
    original: "Cuiusvis hominis est errare, nullius nisi insipientis in errore perseverare.",
    french: "Tout homme peut se tromper ; seul l’insensé persévère dans son erreur.",
    meaning: "L’erreur est humaine, mais refuser de la corriger transforme une faiblesse commune en faute de jugement.",
    source: "Cicéron, Philippiques XII, 5",
    sourceUrl: "https://www.thelatinlibrary.com/cicero/phil12.shtml",
    sourceKind: "text",
    sourceNote: "Cette formulation remplace l’attribution imprécise à Sénèque et réunit la pensée complète de Cicéron.",
    tags: ["Erreur", "Correction"],
  },
  "la-6": {
    source: "Juvénal, Satires X, 356 : « orandum est ut sit mens sana in corpore sano »",
    sourceUrl: "https://www.thelatinlibrary.com/juvenal/10.shtml",
    sourceKind: "text",
  },
  "la-8": {
    source: "Virgile, Énéide X, 284 : « audentis Fortuna iuvat »",
    sourceUrl: "https://www.thelatinlibrary.com/vergil/aen10.shtml",
    sourceKind: "text",
  },
  "la-9": {
    original: "Lupus est homo homini, non homo, quom qualis sit non novit.",
    french: "L’homme est un loup pour l’homme qu’il ne connaît pas.",
    meaning: "Plaute ne condamne pas toute relation humaine : il montre comment l’absence de reconnaissance ouvre la voie à la prédation.",
    source: "Plaute, Asinaria 495",
    sourceUrl: "https://www.thelatinlibrary.com/plautus/asinaria.shtml",
    sourceKind: "text",
    sourceNote: "La phrase complète rétablit la restriction souvent perdue dans la forme abrégée moderne.",
  },
  "la-10": {
    source: "Végèce, Epitoma rei militaris III, prologue : « qui desiderat pacem, praeparet bellum »",
    sourceUrl: "https://www.thelatinlibrary.com/vegetius3.html",
    sourceKind: "derived",
    sourceNote: "La forme proverbiale condense la phrase de Végèce sans lui attribuer mot pour mot une rédaction ultérieure.",
  },
  "la-12": {
    original: "Sed fugit interea, fugit irreparabile tempus.",
    french: "Mais pendant ce temps il fuit, il fuit, le temps irréparable.",
    meaning: "Le temps perdu ne revient pas ; l’occupation secondaire peut dévorer silencieusement l’essentiel.",
    source: "Virgile, Géorgiques III, 284",
    sourceUrl: "https://www.thelatinlibrary.com/vergil/geo3.shtml",
    sourceKind: "text",
  },
  "la-17": {
    original: "Historia vero testis temporum, lux veritatis, vita memoriae, magistra vitae.",
    french: "L’histoire est témoin des temps, lumière de la vérité, vie de la mémoire, maîtresse de la vie.",
    meaning: "La mémoire historique éclaire le présent à condition d’être interrogée plutôt que récitée.",
    source: "Cicéron, De oratore II, 36",
    sourceUrl: "https://www.thelatinlibrary.com/cicero/oratore2.shtml",
    sourceKind: "text",
  },
  "la-19": {
    source: "Virgile, Bucoliques X, 69 : « omnia vincit Amor »",
    sourceUrl: "https://www.thelatinlibrary.com/vergil/ec10.shtml",
    sourceKind: "text",
  },
  "la-20": {
    original: "Labor omnia vicit improbus.",
    french: "Un travail acharné est venu à bout de tout.",
    meaning: "Virgile décrit la nécessité du labeur après l’âge d’or ; la formule moderne au présent en est une adaptation.",
    source: "Virgile, Géorgiques I, 145–146",
    sourceUrl: "https://www.thelatinlibrary.com/vergil/geo1.shtml",
    sourceKind: "text",
    sourceNote: "Le texte original porte « vicit » et qualifie le travail d’« improbus » ; la citation n’est pas modernisée silencieusement.",
  },
  "la-21": {
    original: "Gutta cavat lapidem, consumitur anulus usu.",
    french: "La goutte creuse la pierre ; l’anneau s’use à force d’être porté.",
    meaning: "Une action minuscule mais répétée transforme même la matière qui semble la plus résistante.",
    source: "Ovide, Épîtres du Pont IV, 10, 5",
    sourceUrl: "https://www.thelatinlibrary.com/ovid/ovid.ponto4.shtml",
    sourceKind: "text",
  },
  "la-23": {
    source: "Juvénal, Satires X, 81 : « panem et circenses »",
    sourceUrl: "https://www.thelatinlibrary.com/juvenal/10.shtml",
    sourceKind: "text",
  },
  "la-24": {
    original: "Quot homines, tot sententiae; suus cuique mos.",
    french: "Autant d’hommes, autant d’avis ; chacun a sa manière.",
    meaning: "La pluralité des jugements tient aussi à la diversité des expériences et des habitudes.",
    source: "Térence, Phormion 454",
    sourceUrl: "https://www.thelatinlibrary.com/ter.phormio.html",
    sourceKind: "text",
  },
  "la-26": {
    source: "Renversement moderne de Sénèque, Lettres à Lucilius 106.12 : « non vitae sed scholae discimus »",
    sourceUrl: "https://www.thelatinlibrary.com/sen/seneca.ep17-18.shtml",
    sourceKind: "derived",
    sourceNote: "Sénèque reprochait aux études de former pour l’école plutôt que pour la vie ; la maxime actuelle inverse volontairement son constat.",
  },
  "la-28": {
    source: "Suétone, Vie d’Auguste 25.4, devise grecque « σπεῦδε βραδέως », rendue en latin par « festina lente »",
    sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Suet.+Aug.+25.4",
    sourceKind: "derived",
  },
  "la-29": {
    source: "Ennius, cité par Cicéron, Laelius de amicitia 64",
    sourceUrl: "https://www.thelatinlibrary.com/cicero/amic.shtml",
    sourceKind: "text",
  },
  "la-30": {
    source: "Vulgate, Genèse 1:3",
    sourceUrl: "https://www.thelatinlibrary.com/bible/genesis.shtml",
    sourceKind: "text",
  },
  "zh-1": {
    sourceUrl: "https://ctext.org/dao-de-jing",
    sourceKind: "text",
  },
  "zh-2": {
    sourceUrl: "https://ctext.org/analects/xue-er",
    sourceKind: "text",
  },
  "zh-3": {
    sourceUrl: "https://ctext.org/analects/shu-er",
    sourceKind: "text",
  },
  "zh-5": {
    source: "Huainanzi, chapitre 18, « Enseignements du monde humain »",
    sourceUrl: "https://ctext.org/huainanzi/lessons-of-the-human-world",
    sourceKind: "text",
  },
  "zh-6": {
    sourceUrl: "https://ctext.org/analects/zi-lu",
    sourceKind: "text",
  },
  "zh-13": {
    source: "Sunzi, L’Art de la guerre, chapitre 3",
    sourceUrl: "https://ctext.org/art-of-war/attack-by-stratagem",
    sourceKind: "text",
  },
  "in-5": {
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/dv/bhagavadgita/2.47",
    sourceKind: "text",
  },
  "wo-1": {
    source: "Proverbe japonais, documenté dans les dictionnaires de langue japonaise",
    sourceUrl: "https://ja.wiktionary.org/wiki/%E4%B8%83%E8%BB%A2%E3%81%B3%E5%85%AB%E8%B5%B7%E3%81%8D",
    sourceKind: "lexicographic",
  },
  "wo-4": {
    sourceUrl: "https://es.wiktionary.org/wiki/no_hay_mal_que_por_bien_no_venga",
    sourceKind: "lexicographic",
  },
  "wo-8": {
    sourceUrl: "https://nl.wiktionary.org/wiki/na_regen_komt_zonneschijn",
    sourceKind: "lexicographic",
  },
  "wo-9": {
    sourceUrl: "https://ja.wiktionary.org/wiki/%E7%8C%BF%E3%82%82%E6%9C%A8%E3%81%8B%E3%82%89%E8%90%BD%E3%81%A1%E3%82%8B",
    sourceKind: "lexicographic",
  },
  "wo-10": {
    sourceUrl: "https://ja.wiktionary.org/wiki/%E7%9F%B3%E3%81%AE%E4%B8%8A%E3%81%AB%E3%82%82%E4%B8%89%E5%B9%B4",
    sourceKind: "lexicographic",
  },
  "wo-11": {
    sourceUrl: "https://ja.wiktionary.org/wiki/%E5%87%BA%E3%82%8B%E6%9D%AD%E3%81%AF%E6%89%93%E3%81%9F%E3%82%8C%E3%82%8B",
    sourceKind: "lexicographic",
  },
  "wo-18": {
    sourceUrl: "https://es.wiktionary.org/wiki/m%C3%A1s_vale_tarde_que_nunca",
    sourceKind: "lexicographic",
  },
  "wo-20": {
    sourceUrl: "https://it.wiktionary.org/wiki/l%27abito_non_fa_il_monaco",
    sourceKind: "lexicographic",
  },
  "wo-22": {
    sourceUrl: "https://de.wiktionary.org/wiki/%C3%9Cbung_macht_den_Meister",
    sourceKind: "lexicographic",
  },
  "wo-23": {
    sourceUrl: "https://de.wiktionary.org/wiki/Ende_gut,_alles_gut",
    sourceKind: "lexicographic",
  },
  "wo-30": {
    sourceUrl: "https://ja.wiktionary.org/wiki/%E6%80%A5%E3%81%8C%E3%81%B0%E5%9B%9E%E3%82%8C",
    sourceKind: "lexicographic",
  },
  "wo-31": {
    sourceUrl: "https://ja.wiktionary.org/wiki/%E4%B8%80%E6%9C%9F%E4%B8%80%E4%BC%9A",
    sourceKind: "lexicographic",
  },
};

const makePriorityEntry = ({ culture, place, mark, lang, rtl = false }) => ([
  id, original, french, meaning, source, sourceUrl, sourceKind, tags, transliteration, sourceNote,
]) => ({
  id, culture, place, mark, lang, ...(rtl ? { rtl: true } : {}), original,
  ...(transliteration ? { transliteration } : {}), french, meaning, source, sourceUrl, sourceKind, tags,
  ...(sourceNote ? { sourceNote } : {}),
});

const makeFrench = makePriorityEntry({ culture: "France", place: "France", mark: "FR", lang: "fr" });
const makeEnglish = makePriorityEntry({ culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en" });
const makeHebrew = makePriorityEntry({ culture: "Hébreu", place: "Israël & diaspora", mark: "עב", lang: "he", rtl: true });

const FRENCH_EXPANSION = [
  ["fr-61", "À beau mentir qui vient de loin.", "Celui qui revient de loin peut raconter des choses difficiles à vérifier.", "La distance donne au récit invérifiable une apparence d’autorité ; l’auditeur doit conserver son esprit critique.", "Dictionnaire de l’Académie française, 9e éd., entrée « loin »", "https://www.cnrtl.fr/definition/academie9/loin", "lexicographic", ["Vérité", "Esprit critique"]],
  ["fr-62", "À bon entendeur, salut.", "L’avertissement suffit à celui qui sait comprendre.", "Une allusion claire n’a pas besoin d’être répétée à un interlocuteur attentif.", "Locution proverbiale française ; TLFi/CNRTL, entrée « entendeur »", "https://www.cnrtl.fr/definition/entendeur", "lexicographic", ["Avertissement", "Compréhension"]],
  ["fr-63", "À cheval donné, on ne regarde pas les dents.", "On ne critique pas un cadeau en en examinant les défauts.", "La gratitude commande d’accueillir un don sans le soumettre aux exigences d’un achat.", "Proverbe français ; TLFi/CNRTL, entrée « cheval »", "https://www.cnrtl.fr/definition/cheval", "lexicographic", ["Gratitude", "Don"]],
  ["fr-64", "À chaque jour suffit sa peine.", "Il est inutile d’ajouter les inquiétudes de demain aux difficultés d’aujourd’hui.", "La sagesse consiste à traiter le présent sans se laisser écraser par l’anticipation.", "Évangile selon Matthieu 6:34, traduction Louis Segond (1899)", "https://fr.wikisource.org/wiki/Bible_Segond_1899/Matthieu/ch06", "text", ["Présent", "Inquiétude"]],
  ["fr-65", "À malin, malin et demi.", "Un rusé rencontre toujours plus rusé que lui.", "L’habileté manipulatrice n’assure jamais une supériorité définitive.", "Proverbe français ; TLFi/CNRTL, entrée « malin »", "https://www.cnrtl.fr/definition/malin", "lexicographic", ["Ruse", "Humilité"]],
  ["fr-66", "Au royaume des aveugles, les borgnes sont rois.", "Parmi ceux qui manquent totalement d’une capacité, celui qui n’en possède qu’un peu paraît supérieur.", "Le prestige dépend parfois moins de l’excellence que de la faiblesse du contexte de comparaison.", "Proverbe européen popularisé en français ; TLFi/CNRTL, entrée « borgne »", "https://www.cnrtl.fr/definition/borgne", "lexicographic", ["Comparaison", "Pouvoir"]],
  ["fr-67", "Bien faire et laisser dire.", "Agis correctement sans te laisser gouverner par les commentaires.", "Une conduite juste se mesure à ses actes, non au bruit des jugements extérieurs.", "Proverbe français ; TLFi/CNRTL, entrée « dire »", "https://www.cnrtl.fr/definition/dire", "lexicographic", ["Action", "Indépendance"]],
  ["fr-68", "Il ne faut pas jeter le manche après la cognée.", "Un premier échec ne doit pas conduire à abandonner tout l’effort.", "La frustration transforme un revers limité en défaite complète lorsque l’on renonce trop vite.", "Locution proverbiale française ; TLFi/CNRTL, entrée « cognée »", "https://www.cnrtl.fr/definition/cogn%C3%A9e", "lexicographic", ["Persévérance", "Échec"]],
  ["fr-69", "Ce qui est pris n’est plus à prendre.", "Un avantage déjà acquis ne dépend plus d’une promesse future.", "Dans l’incertitude, un résultat concret possède une valeur propre, même s’il reste modeste.", "Proverbe français ; TLFi/CNRTL, entrée « prendre »", "https://www.cnrtl.fr/definition/prendre", "lexicographic", ["Prudence", "Acquis"]],
  ["fr-70", "Charité bien ordonnée commence par soi-même.", "Pour aider durablement autrui, il faut aussi prendre soin de ses propres devoirs et moyens.", "La maxime ne justifie pas l’égoïsme : elle rappelle qu’une générosité incohérente s’épuise vite.", "Proverbe français ; TLFi/CNRTL, entrée « charité »", "https://www.cnrtl.fr/definition/charit%C3%A9", "lexicographic", ["Charité", "Responsabilité"]],
  ["fr-71", "Comme on fait son lit, on se couche.", "On subit les conséquences de la situation que l’on a soi-même préparée.", "Nos choix présents fabriquent les conditions dans lesquelles nous devrons ensuite vivre.", "Proverbe français ; TLFi/CNRTL, entrée « lit »", "https://www.cnrtl.fr/definition/lit", "lexicographic", ["Conséquence", "Responsabilité"]],
  ["fr-72", "De deux maux, il faut choisir le moindre.", "Lorsque toute solution comporte un dommage, il faut retenir la moins mauvaise.", "Le jugement pratique ne choisit pas toujours un bien parfait, mais limite parfois une perte inévitable.", "Maxime proverbiale française ; TLFi/CNRTL, entrée « moindre »", "https://www.cnrtl.fr/definition/moindre", "lexicographic", ["Choix", "Prudence"]],
  ["fr-73", "Dis-moi qui tu hantes, je te dirai qui tu es.", "Les fréquentations révèlent et façonnent le caractère.", "Choisir son entourage, c’est aussi choisir les influences auxquelles on expose son jugement et sa conduite.", "Proverbe français ; TLFi/CNRTL, entrée « hanter »", "https://www.cnrtl.fr/definition/hanter", "lexicographic", ["Fréquentations", "Caractère"]],
  ["fr-74", "Faute de grives, on mange des merles.", "Quand le meilleur manque, on se contente d’une solution moins recherchée.", "L’adaptation raisonnable permet d’avancer sans confondre préférence et nécessité.", "Proverbe français ; TLFi/CNRTL, entrée « grive »", "https://www.cnrtl.fr/definition/grive", "lexicographic", ["Adaptation", "Nécessité"]],
  ["fr-75", "Il faut de tout pour faire un monde.", "La diversité des caractères et des conditions compose la société.", "La coexistence exige d’accepter que le monde humain ne soit ni uniforme ni entièrement conforme à nos goûts.", "Proverbe français ; TLFi/CNRTL, entrée « monde »", "https://www.cnrtl.fr/definition/monde", "lexicographic", ["Diversité", "Tolérance"]],
  ["fr-76", "Rendez à César ce qui est à César, et à Dieu ce qui est à Dieu.", "Il faut restituer à chaque ordre ce qui lui appartient.", "La formule distingue les responsabilités temporelles et spirituelles sans les confondre.", "Évangile selon Matthieu 22:21, traduction Louis Segond (1899)", "https://fr.wikisource.org/wiki/Bible_Segond_1899/Matthieu/ch22", "text", ["Devoir", "Discernement"]],
  ["fr-77", "Jamais deux sans trois.", "Deux événements semblables font attendre un troisième.", "La formule exprime une attente populaire de série ; elle relève davantage du réflexe narratif que d’une loi réelle.", "Dicton français ; TLFi/CNRTL, entrée « deux »", "https://www.cnrtl.fr/definition/deux", "lexicographic", ["Répétition", "Attente"]],
  ["fr-78", "L’appétit vient en mangeant.", "Le désir augmente à mesure qu’on le satisfait.", "Rabelais applique plaisamment à l’ambition et à la possession une observation née de la table.", "François Rabelais, Gargantua, chapitre V", "https://fr.wikisource.org/wiki/Page:Rabelais_-_Gargantua_et_Pantagruel,_Tome_I_(Texte_transcrit_et_annot%C3%A9_par_Clouzot).djvu/50", "text", ["Désir", "Mesure"]],
  ["fr-79", "L’argent ne fait pas le bonheur.", "La richesse ne garantit ni la joie ni l’accomplissement.", "Les moyens matériels résolvent certains besoins, mais ne remplacent ni le lien, ni le sens, ni la paix intérieure.", "Proverbe français ; TLFi/CNRTL, entrée « argent »", "https://www.cnrtl.fr/definition/argent", "lexicographic", ["Richesse", "Bonheur"]],
  ["fr-80", "Loin des yeux, loin du cœur.", "L’éloignement affaiblit souvent l’attachement et le souvenir.", "Sans présence ni attention renouvelée, même un lien réel peut perdre de sa force.", "Proverbe français ; TLFi/CNRTL, entrée « loin »", "https://www.cnrtl.fr/definition/loin", "lexicographic", ["Absence", "Affection"]],
  ["fr-81", "Mieux vaut être seul que mal accompagné.", "La solitude vaut mieux qu’une compagnie nuisible.", "Le besoin d’appartenance ne doit pas conduire à sacrifier son intégrité ou sa tranquillité.", "Proverbe français ; TLFi/CNRTL, entrée « accompagner »", "https://www.cnrtl.fr/definition/accompagner", "lexicographic", ["Solitude", "Relations"]],
  ["fr-82", "Mieux vaut faire envie que pitié.", "Il est préférable d’assumer une réussite visible que d’inspirer la compassion par son renoncement.", "Cette maxime d’orgueil populaire invite à ne pas rapetisser sa vie pour éviter le regard d’autrui.", "Proverbe français ; TLFi/CNRTL, entrée « envie »", "https://www.cnrtl.fr/definition/envie", "lexicographic", ["Dignité", "Réussite"]],
  ["fr-83", "Mieux vaut prévenir que guérir.", "Éviter un mal est préférable à devoir le réparer.", "L’anticipation réduit le coût humain et matériel des problèmes avant qu’ils ne deviennent des crises.", "Proverbe français ; TLFi/CNRTL, entrée « prévenir »", "https://www.cnrtl.fr/definition/pr%C3%A9venir", "lexicographic", ["Prévention", "Prudence"]],
  ["fr-84", "Nul n’est prophète en son pays.", "La valeur d’une personne est souvent moins reconnue par ceux qui lui sont familiers.", "La proximité peut empêcher de voir la transformation ou l’exception chez celui que l’on croit déjà connaître.", "Évangile selon Luc 4:24, traduction Louis Segond (1899)", "https://fr.wikisource.org/wiki/Bible_Segond_1899/Luc/ch04", "text", ["Reconnaissance", "Proximité"]],
  ["fr-85", "On ne prête qu’aux riches.", "Les ressources et les avantages vont plus facilement à ceux qui en possèdent déjà.", "La confiance économique et sociale tend à renforcer les positions acquises plutôt qu’à corriger les inégalités.", "Proverbe français ; TLFi/CNRTL, entrée « prêter »", "https://www.cnrtl.fr/definition/pr%C3%AAter", "lexicographic", ["Richesse", "Inégalité"]],
  ["fr-86", "Paris ne s’est pas fait en un jour.", "Une œuvre considérable demande du temps.", "L’ampleur d’un projet oblige à accepter les étapes, les reprises et une maturation progressive.", "Proverbe français ; TLFi/CNRTL, entrée « Paris »", "https://www.cnrtl.fr/definition/Paris", "lexicographic", ["Patience", "Construction"]],
  ["fr-87", "Pas de nouvelles, bonnes nouvelles.", "L’absence d’alerte autorise à supposer que tout va bien.", "Dans certaines situations, le silence n’est pas un vide inquiétant mais le signe qu’aucun problème n’exige d’être signalé.", "Proverbe français ; TLFi/CNRTL, entrée « nouvelle »", "https://www.cnrtl.fr/definition/nouvelle", "lexicographic", ["Nouvelles", "Confiance"]],
  ["fr-88", "Plus on est de fous, plus on rit.", "La joie collective grandit souvent avec le nombre des participants.", "La convivialité accepte une part de désordre lorsque chacun contribue au plaisir commun.", "Locution proverbiale française ; TLFi/CNRTL, entrée « fou »", "https://www.cnrtl.fr/definition/fou", "lexicographic", ["Joie", "Collectif"]],
  ["fr-89", "Pour vivre heureux, vivons cachés.", "Le bonheur se protège parfois en restant loin de l’exposition et de l’envie.", "Florian oppose la tranquillité discrète au prestige qui attire le danger.", "Jean-Pierre Claris de Florian, Fables, « Le Grillon » (1793)", "https://fr.wikisource.org/wiki/Le_Grillon_(Florian)", "text", ["Discrétion", "Bonheur"]],
  ["fr-90", "Quand on parle du loup, on en voit la queue.", "La personne dont on parle apparaît précisément au même moment.", "Le hasard d’une arrivée transforme la conversation en scène proverbiale immédiatement reconnaissable.", "Proverbe français ; TLFi/CNRTL, entrée « loup »", "https://www.cnrtl.fr/definition/loup", "lexicographic", ["Hasard", "Présence"]],
  ["fr-91", "Qui aime bien châtie bien.", "Une affection exigeante peut conduire à corriger plutôt qu’à tout approuver.", "La maxime historique ne légitime pas la violence : elle rappelle que l’amour responsable sait aussi poser des limites.", "Proverbe français ; TLFi/CNRTL, entrée « châtier »", "https://www.cnrtl.fr/definition/ch%C3%A2tier", "lexicographic", ["Éducation", "Limites"], null, "Lecture historique contextualisée : le verbe « châtier » signifie ici corriger ; aucune violence n’est présentée comme vertu."],
  ["fr-92", "Qui dort dîne.", "Le sommeil fait oublier la faim lorsque le repas manque.", "Cette consolation populaire dit sobrement comment le repos peut suspendre un besoin sans réellement le résoudre.", "Proverbe français ; TLFi/CNRTL, entrée « dormir »", "https://www.cnrtl.fr/definition/dormir", "lexicographic", ["Sommeil", "Nécessité"]],
  ["fr-93", "Qui va à la chasse perd sa place.", "Celui qui quitte momentanément sa place risque de la trouver occupée à son retour.", "Un avantage abandonné, même brièvement, ne reste pas toujours réservé.", "Proverbe français ; TLFi/CNRTL, entrée « chasse »", "https://www.cnrtl.fr/definition/chasse", "lexicographic", ["Absence", "Occasion"]],
  ["fr-94", "Qui vole un œuf vole un bœuf.", "Une petite malhonnêteté révèle une disposition qui peut conduire à de plus grandes fautes.", "La gravité morale tient aussi au principe violé, pas seulement à la valeur de l’objet dérobé.", "Proverbe français ; TLFi/CNRTL, entrée « œuf »", "https://www.cnrtl.fr/definition/%C5%93uf", "lexicographic", ["Honnêteté", "Faute"]],
  ["fr-95", "Tous les chemins mènent à Rome.", "Plusieurs voies différentes peuvent conduire au même but.", "L’unité de l’objectif n’impose pas l’uniformité des méthodes.", "Proverbe français ; TLFi/CNRTL, entrée « Rome »", "https://www.cnrtl.fr/definition/Rome", "lexicographic", ["Chemin", "Pluralité"]],
  ["fr-96", "Tout vient à point à qui sait attendre.", "Celui qui sait patienter voit souvent arriver le moment favorable.", "Attendre utilement n’est pas rester passif : c’est ne pas gâcher une possibilité par impatience.", "Proverbe français ; TLFi/CNRTL, entrée « point »", "https://www.cnrtl.fr/definition/point", "lexicographic", ["Patience", "Moment"]],
  ["fr-97", "Un malheur ne vient jamais seul.", "Une difficulté semble souvent en entraîner d’autres.", "Les crises se cumulent parce qu’un premier choc fragilise les protections ordinaires et rend les suivants plus visibles.", "Proverbe français ; TLFi/CNRTL, entrée « malheur »", "https://www.cnrtl.fr/definition/malheur", "lexicographic", ["Malheur", "Enchaînement"]],
  ["fr-98", "Une hirondelle ne fait pas le printemps.", "Un seul signe favorable ne suffit pas à établir une tendance.", "Le jugement solide attend plusieurs indices avant de conclure à un changement durable.", "Proverbe d’origine antique, passé dans l’usage français ; TLFi/CNRTL, entrée « hirondelle »", "https://www.cnrtl.fr/definition/hirondelle", "lexicographic", ["Preuve", "Prudence"]],
  ["fr-99", "Quand le vin est tiré, il faut le boire.", "Une fois une affaire engagée, il faut en assumer les conséquences jusqu’au bout.", "La décision crée une responsabilité que le premier obstacle ne suffit pas à annuler.", "Locution proverbiale française ; TLFi/CNRTL, entrée « vin »", "https://www.cnrtl.fr/definition/vin", "lexicographic", ["Engagement", "Conséquence"]],
  ["fr-100", "Les voyages forment la jeunesse.", "Voyager développe l’expérience et ouvre le jugement des jeunes.", "La rencontre concrète d’autres lieux et usages élargit ce que l’éducation livresque peut seulement décrire.", "Proverbe français ; TLFi/CNRTL, entrée « voyage »", "https://www.cnrtl.fr/definition/voyage", "lexicographic", ["Voyage", "Apprentissage"]],
  ["fr-101", "C’est l’hôpital qui se moque de la charité.", "Une personne reproche à une autre un défaut qu’elle possède elle-même.", "La critique perd sa force lorsqu’elle refuse de s’appliquer le même examen.", "Locution proverbiale française ; TLFi/CNRTL, entrée « hôpital »", "https://www.cnrtl.fr/definition/h%C3%B4pital", "lexicographic", ["Hypocrisie", "Jugement"]],
  ["fr-102", "C’est la goutte d’eau qui fait déborder le vase.", "Un dernier incident minime déclenche une réaction préparée par une longue accumulation.", "Le seuil visible d’une rupture ne doit pas être confondu avec l’ensemble de ses causes.", "Locution proverbiale française ; TLFi/CNRTL, entrée « goutte »", "https://www.cnrtl.fr/definition/goutte", "lexicographic", ["Accumulation", "Rupture"]],
  ["fr-103", "Entre l’arbre et l’écorce, il ne faut pas mettre le doigt.", "Il est imprudent de s’interposer dans un conflit intime, notamment familial.", "La proximité des adversaires peut les réunir contre l’intervenant extérieur.", "Proverbe français ; TLFi/CNRTL, entrée « écorce »", "https://www.cnrtl.fr/definition/%C3%A9corce", "lexicographic", ["Conflit", "Prudence"]],
  ["fr-104", "Il faut laver son linge sale en famille.", "Les différends intimes gagnent souvent à être réglés sans exposition publique.", "La discrétion peut protéger la réparation d’un conflit, à condition qu’elle ne serve pas à dissimuler un abus.", "Locution proverbiale popularisée par Napoléon ; TLFi/CNRTL, entrée « linge »", "https://www.cnrtl.fr/definition/linge", "lexicographic", ["Famille", "Discrétion"], null, "La réserve proverbiale ne doit jamais empêcher de chercher une aide extérieure face à la violence ou à l’injustice."],
  ["fr-105", "Il n’est pire eau que l’eau qui dort.", "Le calme apparent peut cacher une force ou une intention dangereuse.", "L’absence de bruit n’est pas une preuve d’innocuité ; la vigilance porte aussi sur ce qui ne se montre pas.", "Proverbe français ; TLFi/CNRTL, entrée « eau »", "https://www.cnrtl.fr/definition/eau", "lexicographic", ["Apparence", "Vigilance"]],
  ["fr-106", "Il n’y a que la vérité qui blesse.", "Une critique fait particulièrement mal lorsqu’elle touche un point que l’on reconnaît vrai.", "La douleur de l’objection peut devenir un indice à examiner, sans faire de toute parole blessante une vérité.", "Proverbe français ; TLFi/CNRTL, entrée « vérité »", "https://www.cnrtl.fr/definition/v%C3%A9rit%C3%A9", "lexicographic", ["Vérité", "Critique"]],
  ["fr-107", "Les bons comptes font les bons amis.", "Des obligations claires et équitables protègent l’amitié.", "La confiance durable n’exclut pas la précision ; elle évite que les non-dits matériels deviennent des ressentiments.", "Proverbe français ; TLFi/CNRTL, entrée « compte »", "https://www.cnrtl.fr/definition/compte", "lexicographic", ["Amitié", "Équité"]],
  ["fr-108", "Les paroles s’envolent, les écrits restent.", "La parole disparaît, tandis que l’écrit conserve une trace.", "Écrire engage, transmet et permet la vérification bien au-delà du moment de l’énonciation.", "Forme française du latin médiéval « Verba volant, scripta manent » ; TLFi/CNRTL, entrée « parole »", "https://www.cnrtl.fr/definition/parole", "derived", ["Écriture", "Mémoire"]],
  ["fr-109", "On n’apprend pas aux vieux singes à faire la grimace.", "Une personne expérimentée n’a pas besoin qu’un novice lui enseigne les ruses de son métier.", "L’ancienneté ne garantit pas tout, mais elle accumule des réflexes que la théorie seule ne remplace pas.", "Proverbe français ; TLFi/CNRTL, entrée « singe »", "https://www.cnrtl.fr/definition/singe", "lexicographic", ["Expérience", "Savoir-faire"]],
  ["fr-110", "La parole est moitié à celui qui parle, moitié à celui qui l’écoute.", "Le sens d’une parole se construit entre l’intention du locuteur et l’interprétation de l’auditeur.", "Communiquer oblige à répondre de ce que l’on dit tout en reconnaissant l’activité de celui qui reçoit.", "Michel de Montaigne, Essais, livre III, chapitre 13", "https://fr.wikisource.org/wiki/Essais/Livre_III/Chapitre_13", "text", ["Parole", "Écoute"]],
  ["fr-111", "Plus ça change, plus c’est la même chose.", "Les transformations apparentes peuvent laisser intactes les structures profondes.", "La nouveauté de surface ne suffit pas à prouver qu’un système a réellement changé.", "Alphonse Karr, Les Guêpes, janvier 1849", "https://fr.wikisource.org/wiki/Les_Gu%C3%AApes", "text", ["Changement", "Continuité"]],
  ["fr-112", "Qui paie ses dettes s’enrichit.", "Se libérer d’une dette augmente réellement ce dont on peut disposer.", "La richesse se mesure aussi aux obligations éteintes, à la confiance conservée et à la liberté retrouvée.", "Proverbe français ; TLFi/CNRTL, entrée « dette »", "https://www.cnrtl.fr/definition/dette", "lexicographic", ["Dette", "Responsabilité"]],
  ["fr-113", "Qui se ressemble s’assemble.", "Les personnes ayant des goûts ou des caractères proches se rapprochent.", "L’affinité facilite la formation des groupes, pour le meilleur comme pour le risque d’entre-soi.", "Proverbe français ; TLFi/CNRTL, entrée « ressembler »", "https://www.cnrtl.fr/definition/ressembler", "lexicographic", ["Affinité", "Groupe"]],
  ["fr-114", "Un de perdu, dix de retrouvés.", "Une perte sentimentale n’épuise pas les possibilités de nouvelles rencontres.", "La consolation exagère volontairement l’abondance de l’avenir pour desserrer l’emprise du manque présent.", "Proverbe familier français ; TLFi/CNRTL, entrée « perdre »", "https://www.cnrtl.fr/definition/perdre", "lexicographic", ["Perte", "Espoir"]],
  ["fr-115", "Le jeu n’en vaut pas la chandelle.", "Le résultat espéré ne justifie pas le coût de l’effort.", "Une action raisonnable compare la valeur du gain à toutes les ressources qu’elle exige.", "Locution proverbiale française ; TLFi/CNRTL, entrée « chandelle »", "https://www.cnrtl.fr/definition/chandelle", "lexicographic", ["Coût", "Choix"]],
  ["fr-116", "Les loups ne se mangent pas entre eux.", "Ceux qui partagent les mêmes pratiques prédatrices évitent souvent de se nuire mutuellement.", "La solidarité d’intérêt peut unir des personnes sans rendre leurs actes plus justes.", "Proverbe français ; TLFi/CNRTL, entrée « loup »", "https://www.cnrtl.fr/definition/loup", "lexicographic", ["Complicité", "Intérêt"]],
  ["fr-117", "Je plie, et ne romps pas.", "La souplesse permet de survivre à la force qui brise la rigidité.", "Dans la fable, le roseau accepte de céder momentanément au vent et conserve ainsi son existence.", "Jean de La Fontaine, Fables I, 22, « Le Chêne et le Roseau »", "https://fr.wikisource.org/wiki/Le_Ch%C3%AAne_et_le_Roseau", "text", ["Souplesse", "Résilience"]],
  ["fr-118", "Il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau.", "Il ne faut pas jurer que l’on n’aura jamais recours à ce que l’on dédaigne aujourd’hui.", "Les circonstances futures peuvent renverser nos certitudes et rendre nécessaire l’option autrefois rejetée.", "Locution proverbiale française ; TLFi/CNRTL, entrée « fontaine »", "https://www.cnrtl.fr/definition/fontaine", "lexicographic", ["Humilité", "Imprévu"]],
  ["fr-119", "Ce que l’on conçoit bien s’énonce clairement.", "Une pensée réellement maîtrisée peut être exprimée avec clarté.", "L’obscurité du langage révèle souvent une idée encore mal ordonnée plutôt qu’une profondeur supérieure.", "Nicolas Boileau, L’Art poétique, chant I (1674)", "https://fr.wikisource.org/wiki/L%E2%80%99Art_po%C3%A9tique/Chant_I", "text", ["Clarté", "Pensée"]],
  ["fr-120", "Hâtez-vous lentement, et sans perdre courage.", "Avancez avec diligence, mais sans sacrifier la justesse à la précipitation.", "Boileau unit deux exigences : travailler sans relâche et corriger patiemment.", "Nicolas Boileau, L’Art poétique, chant I (1674)", "https://fr.wikisource.org/wiki/L%E2%80%99Art_po%C3%A9tique/Chant_I", "text", ["Patience", "Travail"]],
].map(makeFrench);

const ENGLISH_PROVERBS_URL = "https://www.phrases.org.uk/meanings/proverbs.html";
const ENGLISH_EXPANSION = [
  ["en-61", "Absence makes the heart grow fonder.", "L’absence rend le cœur plus amoureux.", "La distance peut raviver l’attachement en rendant plus sensible la valeur d’une présence perdue.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Absence", "Affection"]],
  ["en-62", "All good things must come to an end.", "Toutes les bonnes choses ont une fin.", "Reconnaître la finitude d’un bonheur aide à le goûter sans exiger qu’il dure toujours.", "Proverbe anglais, attesté dès le XIVe siècle ; dossier The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Finitude", "Bonheur"]],
  ["en-63", "All work and no play makes Jack a dull boy.", "Du travail sans aucun jeu rend Jack ennuyeux.", "L’effort privé de repos, de jeu et de curiosité finit par appauvrir l’intelligence qu’il voulait rendre productive.", "Proverbe anglais, forme imprimée chez James Howell, Paroimiographia (1659)", ENGLISH_PROVERBS_URL, "lexicographic", ["Travail", "Équilibre"]],
  ["en-64", "An apple a day keeps the doctor away.", "Une pomme par jour éloigne le médecin.", "La rime populaire transforme une habitude de santé simple en rappel quotidien.", "Proverbe gallois passé en anglais ; forme moderne documentée par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Santé", "Habitude"]],
  ["en-65", "Beauty is in the eye of the beholder.", "La beauté est dans l’œil de celui qui regarde.", "Le jugement esthétique dépend autant du regard et de l’expérience que de l’objet regardé.", "Formule anglaise popularisée par Margaret Wolfe Hungerford, Molly Bawn (1878)", ENGLISH_PROVERBS_URL, "lexicographic", ["Beauté", "Perception"]],
  ["en-66", "Beauty is only skin deep.", "La beauté ne va pas plus loin que la peau.", "L’apparence physique ne renseigne pas sur la profondeur morale ou affective d’une personne.", "Proverbe anglais ancien, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Apparence", "Caractère"]],
  ["en-67", "Blood is thicker than water.", "Le sang est plus épais que l’eau.", "Les liens familiaux sont réputés résister davantage que les relations plus circonstancielles.", "Proverbe anglophone d’histoire médiévale ; dossier The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Famille", "Loyauté"], null, "La formule décrit une priorité culturelle donnée à la parenté ; elle ne rend pas toute relation familiale saine ni toute amitié secondaire."],
  ["en-68", "Curiosity killed the cat.", "La curiosité a tué le chat.", "Une enquête sans mesure peut exposer à des risques que l’information recherchée ne justifie pas.", "Proverbe anglais ; évolution de l’ancienne formule « care killed the cat », documentée par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Curiosité", "Risque"]],
  ["en-69", "Easy come, easy go.", "Vite venu, vite parti.", "Ce qui est obtenu sans effort ni attachement se perd souvent sans grande résistance.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Gain", "Perte"]],
  ["en-70", "Every dog has its day.", "Chaque chien a son jour.", "Même celui que l’on néglige peut connaître son moment de réussite ou de revanche.", "Proverbe anglais ancien ; forme voisine dans Shakespeare, Hamlet V.1", "https://www.folger.edu/explore/shakespeares-works/hamlet/read/5/1/", "text", ["Occasion", "Revanche"], null, "Shakespeare écrit « The cat will mew, and dog will have his day » ; l’entrée conserve la forme proverbiale moderne sans les confondre mot pour mot."],
  ["en-71", "Fortune favours the bold.", "La fortune favorise les audacieux.", "L’occasion récompense plus volontiers celui qui accepte d’agir malgré l’incertitude.", "Proverbe anglais hérité de la famille latine « fortes Fortuna adiuvat » ; The Phrase Finder", ENGLISH_PROVERBS_URL, "derived", ["Audace", "Fortune"]],
  ["en-72", "A change is as good as a rest.", "Un changement vaut parfois autant qu’un repos.", "Changer d’activité peut renouveler l’attention lorsque la fatigue vient surtout de la répétition.", "Proverbe anglais popularisé au XIXe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Changement", "Repos"]],
  ["en-73", "If wishes were horses, beggars would ride.", "Si les souhaits étaient des chevaux, les mendiants monteraient à cheval.", "Le désir seul ne produit ni moyens ni résultats.", "Proverbe anglais, famille attestée en Écosse au XVIIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Désir", "Action"]],
  ["en-74", "It never rains but it pours.", "Il ne pleut jamais sans qu’il ne tombe des trombes.", "Les difficultés donnent souvent l’impression d’arriver toutes ensemble plutôt qu’isolément.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Difficulté", "Accumulation"]],
  ["en-75", "Kill two birds with one stone.", "Tuer deux oiseaux avec une seule pierre.", "Une action bien conçue peut atteindre deux objectifs à la fois.", "Expression proverbiale anglaise attestée au XVIIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Efficacité", "Action"]],
  ["en-76", "Laughter is the best medicine.", "Le rire est le meilleur remède.", "L’humour ne remplace pas les soins, mais il soulage, relie et rend l’épreuve plus supportable.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Rire", "Santé"]],
  ["en-77", "Lightning never strikes the same place twice.", "La foudre ne frappe jamais deux fois au même endroit.", "On se rassure en imaginant qu’un événement rare ne se répétera pas, bien que la maxime ne soit pas une loi physique.", "Dicton anglophone, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Risque", "Répétition"], null, "Présenté comme dicton et non comme fait scientifique : certains lieux sont frappés de nombreuses fois."],
  ["en-78", "Live and let live.", "Vis et laisse vivre.", "La coexistence devient possible lorsque chacun revendique sa liberté sans retirer celle d’autrui.", "Maxime anglaise, documentée par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Tolérance", "Liberté"]],
  ["en-79", "Misery loves company.", "Le malheur aime la compagnie.", "La souffrance cherche des semblables, tantôt pour être comprise, tantôt pour entraîner autrui dans son humeur.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Malheur", "Compagnie"]],
  ["en-80", "No news is good news.", "Pas de nouvelles, bonnes nouvelles.", "En l’absence d’alerte, on suppose que rien de grave ne s’est produit.", "Proverbe anglais, forme attestée au XVIIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Nouvelles", "Confiance"]],
  ["en-81", "Don’t cross the bridge until you come to it.", "Ne traverse pas le pont avant de l’avoir atteint.", "Il est inutile de résoudre par avance des difficultés qui ne se présenteront peut-être jamais.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Inquiétude", "Présent"]],
  ["en-82", "One good turn deserves another.", "Un bon service en mérite un autre.", "La gratitude transforme l’aide reçue en disposition à aider en retour.", "Proverbe anglais recensé chez John Heywood (1546)", ENGLISH_PROVERBS_URL, "lexicographic", ["Réciprocité", "Gratitude"]],
  ["en-83", "One man’s trash is another man’s treasure.", "Le rebut de l’un est le trésor d’un autre.", "La valeur dépend des besoins, du regard et de l’usage plutôt que d’une qualité unique et fixe.", "Proverbe anglophone moderne, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Valeur", "Perspective"]],
  ["en-84", "A rising tide lifts all boats.", "Une marée montante soulève tous les bateaux.", "Une amélioration largement partagée peut bénéficier à l’ensemble plutôt qu’à un seul acteur.", "Aphorisme américain attesté avant sa popularisation politique au XXe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Prospérité", "Collectif"]],
  ["en-85", "Penny wise and pound foolish.", "Économe sur les sous, prodigue sur les livres.", "Épargner sur les petits coûts peut provoquer une perte bien plus grande lorsque l’on néglige l’ensemble.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Économie", "Jugement"]],
  ["en-86", "The road to hell is paved with good intentions.", "La route de l’enfer est pavée de bonnes intentions.", "Une intention louable ne vaut pas l’action juste qu’elle promet mais ne réalise jamais.", "Proverbe anglais d’une famille ancienne ; attribution moderne unique non établie, The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Intention", "Action"]],
  ["en-87", "The exception proves the rule.", "L’exception confirme la règle.", "Dans son sens logique ancien, mentionner une exception délimitée peut révéler qu’une règle vaut ailleurs.", "Maxime juridique issue du latin « exceptio probat regulam » ; dossier The Phrase Finder", ENGLISH_PROVERBS_URL, "derived", ["Règle", "Logique"], null, "L’entrée restitue le sens probatoire historique ; une exception ne rend pas vraie n’importe quelle généralisation."],
  ["en-88", "A leopard cannot change its spots.", "Un léopard ne peut changer ses taches.", "Un caractère profondément installé se transforme difficilement par simple déclaration.", "Bible King James, Jeremiah 13:23 ; devenu proverbe anglais", "https://en.wikisource.org/wiki/Bible_(King_James)/Jeremiah#13:23", "text", ["Caractère", "Changement"]],
  ["en-89", "The pot calls the kettle black.", "Le pot traite la bouilloire de noire.", "On condamne chez autrui un défaut que l’on possède soi-même.", "Expression proverbiale anglaise attestée au XVIIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Hypocrisie", "Critique"]],
  ["en-90", "There’s no place like home.", "Il n’y a pas d’endroit comme chez soi.", "Aucun ailleurs ne remplace entièrement la sécurité affective du foyer.", "John Howard Payne, chanson « Home! Sweet Home! » (1823), forme devenue proverbiale", "https://en.wikisource.org/wiki/Home,_Sweet_Home", "text", ["Foyer", "Appartenance"]],
  ["en-91", "There’s no such thing as a free lunch.", "Un déjeuner gratuit, cela n’existe pas.", "Un avantage apparemment sans coût est toujours payé par quelqu’un ou produit une contrepartie.", "Aphorisme économique américain du XXe siècle, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Coût", "Économie"]],
  ["en-92", "United we stand, divided we fall.", "Unis nous tenons, divisés nous tombons.", "La cohésion permet au groupe de résister à ce qui vaincrait ses membres séparément.", "Formule anglaise ancienne ; « The Liberty Song » de John Dickinson (1768) en donne une version américaine célèbre", "https://en.wikisource.org/wiki/The_Liberty_Song", "text", ["Union", "Résistance"]],
  ["en-93", "Variety is the spice of life.", "La variété est l’épice de la vie.", "Le changement et la diversité donnent du relief à l’existence.", "William Cowper, The Task, livre II (1785)", "https://en.wikisource.org/wiki/The_Task_(Cowper)/Book_II", "text", ["Diversité", "Vie"]],
  ["en-94", "What goes around comes around.", "Ce qui circule finit par revenir.", "Les actes et les attitudes produisent souvent des conséquences qui rejoignent leur auteur.", "Proverbe anglophone moderne, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Conséquence", "Réciprocité"]],
  ["en-95", "You can’t teach an old dog new tricks.", "On ne peut apprendre de nouveaux tours à un vieux chien.", "Les habitudes anciennes résistent aux apprentissages qui exigent de les remettre en cause.", "Proverbe anglais attesté au XVIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Habitude", "Apprentissage"]],
  ["en-96", "You reap what you sow.", "On récolte ce que l’on sème.", "La nature de nos actes prépare celle de leurs conséquences.", "Bible King James, Galatians 6:7, formulation devenue proverbiale", "https://en.wikisource.org/wiki/Bible_(King_James)/Galatians#6:7", "derived", ["Conséquence", "Action"], null, "La King James porte « whatsoever a man soweth, that shall he also reap » ; l’entrée donne sa condensation proverbiale."],
  ["en-97", "A chain is only as strong as its weakest link.", "Une chaîne n’est pas plus solide que son maillon le plus faible.", "La fiabilité d’un système dépend de la partie dont la défaillance suffit à compromettre l’ensemble.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Système", "Fragilité"]],
  ["en-98", "A fool and his money are soon parted.", "Un sot et son argent sont vite séparés.", "L’argent sans jugement attire les dépenses, les tromperies et les pertes.", "Proverbe anglais, forme chez Thomas Tusser au XVIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Argent", "Jugement"]],
  ["en-99", "A place for everything and everything in its place.", "Une place pour chaque chose, et chaque chose à sa place.", "L’ordre durable vient moins du rangement ponctuel que d’une règle simple appliquée à chaque objet.", "Maxime anglaise attestée au XVIIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Ordre", "Organisation"]],
  ["en-100", "Three may keep a secret, if two of them are dead.", "Trois personnes peuvent garder un secret, si deux d’entre elles sont mortes.", "L’hyperbole rappelle avec humour que chaque confident supplémentaire fragilise radicalement le secret.", "Benjamin Franklin, Poor Richard’s Almanack (1735)", "https://en.wikisource.org/wiki/Poor_Richard%27s_Almanack", "text", ["Secret", "Discrétion"]],
  ["en-101", "Barking dogs seldom bite.", "Les chiens qui aboient mordent rarement.", "La menace la plus bruyante n’est pas toujours celle qui passe à l’acte.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Menace", "Apparence"]],
  ["en-102", "Cleanliness is next to godliness.", "La propreté vient juste après la piété.", "La discipline du soin matériel est présentée comme proche de la discipline morale.", "Maxime popularisée par John Wesley, sermon « On Dress » (1769)", "https://en.wikisource.org/wiki/Sermons_on_Several_Occasions/Sermon_88", "text", ["Propreté", "Discipline"], null, "La formule est culturelle et morale, non une hiérarchie médicale ou religieuse universelle."],
  ["en-103", "Familiarity breeds contempt.", "La familiarité engendre le mépris.", "Une proximité sans attention peut faire perdre le sens de la valeur ou des limites de l’autre.", "Proverbe anglais issu d’une famille latine antique ; The Phrase Finder", ENGLISH_PROVERBS_URL, "derived", ["Familiarité", "Respect"]],
  ["en-104", "First come, first served.", "Premier arrivé, premier servi.", "Lorsque les droits sont égaux et les ressources limitées, l’ordre d’arrivée peut fournir une règle simple.", "Maxime anglaise issue de l’usage juridique médiéval ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Ordre", "Équité"]],
  ["en-105", "You catch more flies with honey than with vinegar.", "On attrape plus de mouches avec du miel qu’avec du vinaigre.", "La douceur et la courtoisie obtiennent souvent davantage que l’hostilité.", "Proverbe anglophone d’une famille européenne ancienne ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Douceur", "Persuasion"]],
  ["en-106", "God helps those who help themselves.", "Dieu aide ceux qui s’aident eux-mêmes.", "L’espoir d’un secours supérieur n’exonère pas de l’initiative personnelle.", "Maxime anglaise popularisée par Algernon Sidney puis Benjamin Franklin ; dossier The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Initiative", "Espoir"], null, "Cette phrase n’est pas une citation biblique littérale ; sa provenance proverbiale est explicitement distinguée."],
  ["en-107", "Don’t cut off your nose to spite your face.", "Ne te coupe pas le nez pour contrarier ton visage.", "Se venger sous le coup de la colère peut infliger à soi-même un dommage supérieur à celui que l’on voulait causer.", "Idiome proverbial anglais attesté depuis le XVIIIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Vengeance", "Lucidité"]],
  ["en-108", "Haste makes waste.", "La hâte produit du gaspillage.", "La précipitation crée des erreurs dont la correction coûte plus de temps que la prudence initiale.", "Proverbe anglais recensé chez John Heywood (1546)", ENGLISH_PROVERBS_URL, "lexicographic", ["Hâte", "Erreur"]],
  ["en-109", "He who laughs last laughs best.", "Rit le mieux qui rit le dernier.", "Un avantage provisoire ne décide pas du résultat final.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Résultat", "Patience"]],
  ["en-110", "If the shoe fits, wear it.", "Si la chaussure te va, porte-la.", "Si une critique générale te décrit justement, reconnais-la au lieu de rejeter sa forme indirecte.", "Idiome proverbial américain, variante de l’anglais « if the cap fits » ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Critique", "Lucidité"]],
  ["en-111", "Where ignorance is bliss, ’tis folly to be wise.", "Là où l’ignorance fait le bonheur, il est folie d’être sage.", "Certaines vérités détruisent une innocence confortable sans fournir immédiatement le pouvoir d’agir.", "Thomas Gray, Ode on a Distant Prospect of Eton College (1747)", "https://en.wikisource.org/wiki/Ode_on_a_Distant_Prospect_of_Eton_College", "text", ["Ignorance", "Sagesse"]],
  ["en-112", "Imitation is the sincerest form of flattery.", "L’imitation est la forme la plus sincère de flatterie.", "Copier reconnaît implicitement la valeur de ce que l’on prend pour modèle.", "Charles Caleb Colton, Lacon (1820) ; forme souvent attribuée à tort à Oscar Wilde", "https://en.wikisource.org/wiki/Lacon_(Colton)", "text", ["Imitation", "Flatterie"], null, "La formulation courte est attribuée à Colton ; la continuation ironique associée à Wilde est postérieure."],
  ["en-113", "It takes two to tango.", "Il faut être deux pour danser le tango.", "Une relation, une coopération ou certains conflits supposent la participation de deux parties.", "Idiome américain popularisé par la chanson de 1952 ; dossier The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Réciprocité", "Responsabilité"]],
  ["en-114", "Knowledge is power.", "Le savoir est un pouvoir.", "Comprendre augmente la capacité de prévoir, de décider et d’agir.", "Maxime anglaise issue de Francis Bacon, Meditationes Sacrae (1597) : « ipsa scientia potestas est »", "https://en.wikisource.org/wiki/Meditationes_Sacrae", "derived", ["Savoir", "Pouvoir"]],
  ["en-115", "Least said, soonest mended.", "Moins on en dit, plus vite on répare.", "Dans un conflit échauffé, retenir les paroles supplémentaires limite les blessures qu’il faudra ensuite guérir.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Silence", "Conflit"]],
  ["en-116", "Might makes right.", "La force fait le droit.", "La formule décrit, souvent pour la dénoncer, le moment où la puissance se substitue à la justice.", "Aphorisme anglais d’une famille antique, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Force", "Justice"], null, "Lecture descriptive et critique : la collection ne présente pas la domination comme un principe moral."],
  ["en-117", "Never put off till tomorrow what you can do today.", "Ne remets jamais à demain ce que tu peux faire aujourd’hui.", "Reporter sans nécessité transforme une tâche présente en dette future.", "Maxime popularisée par Benjamin Franklin dans Poor Richard’s Almanack", "https://en.wikisource.org/wiki/Poor_Richard%27s_Almanack", "text", ["Action", "Procrastination"]],
  ["en-118", "A bird in the hand is worth two in the bush.", "Un oiseau dans la main en vaut deux dans le buisson.", "Un bien certain vaut davantage que plusieurs gains encore hypothétiques.", "Proverbe anglais recensé chez John Heywood (1546)", ENGLISH_PROVERBS_URL, "lexicographic", ["Prudence", "Certitude"]],
  ["en-119", "A drowning man will clutch at a straw.", "Un homme qui se noie s’agrippe même à une paille.", "Dans le désespoir, la plus faible possibilité de salut prend une valeur immense.", "Proverbe anglais ancien, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Désespoir", "Espoir"]],
  ["en-120", "Don’t throw the baby out with the bathwater.", "Ne jette pas le bébé avec l’eau du bain.", "En supprimant un défaut, il faut préserver ce qui demeure précieux dans l’ensemble.", "Idiome anglais traduit d’un proverbe allemand et attesté en anglais au XIXe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "derived", ["Réforme", "Discernement"]],
].map(makeEnglish);

const HEBREW_EXPANSION = [
  ["he-51", "יִרְאַת יְהוָה רֵאשִׁית דָּעַת", "La crainte de l’Éternel est le commencement de la connaissance.", "La sagesse biblique commence par reconnaître une mesure supérieure à son propre jugement.", "Proverbes 1:7", "https://www.sefaria.org/Proverbs.1.7", "text", ["Sagesse", "Connaissance"], "Yirat Adonai reshit da'at."],
  ["he-52", "בְּטַח אֶל יְהוָה בְּכָל לִבֶּךָ, וְאֶל בִּינָתְךָ אַל תִּשָּׁעֵן", "Mets ta confiance en l’Éternel de tout ton cœur, et ne t’appuie pas uniquement sur ta propre intelligence.", "La confiance n’abolit pas la raison ; elle lui interdit de se croire autosuffisante.", "Proverbes 3:5", "https://www.sefaria.org/Proverbs.3.5", "text", ["Confiance", "Humilité"], "Bétaḥ el Adonai bekhol libékha, ve-el binatkha al tisha'en."],
  ["he-53", "דְּרָכֶיהָ דַרְכֵי נֹעַם, וְכָל נְתִיבוֹתֶיהָ שָׁלוֹם", "Ses voies sont des voies de douceur, et tous ses sentiers sont paix.", "Une sagesse digne de ce nom se reconnaît aussi à la manière pacifique dont elle conduit les relations.", "Proverbes 3:17", "https://www.sefaria.org/Proverbs.3.17", "text", ["Paix", "Douceur"], "Derakhéha darkhei no'am, vekhol netivotéha shalom."],
  ["he-54", "עֵץ חַיִּים הִיא לַמַּחֲזִיקִים בָּהּ", "Elle est un arbre de vie pour ceux qui s’y attachent.", "La sagesse est figurée comme une vie enracinée, nourricière et transmissible.", "Proverbes 3:18", "https://www.sefaria.org/Proverbs.3.18", "text", ["Vie", "Sagesse"], "Etz ḥayim hi lamaḥazikim bah."],
  ["he-55", "מִכָּל מִשְׁמָר נְצֹר לִבֶּךָ, כִּי מִמֶּנּוּ תּוֹצְאוֹת חַיִּים", "Plus que toute chose à garder, protège ton cœur, car de lui jaillissent les sources de la vie.", "Les dispositions intérieures orientent les paroles, les choix et finalement la forme d’une existence.", "Proverbes 4:23", "https://www.sefaria.org/Proverbs.4.23", "text", ["Cœur", "Vigilance"], "Mikol mishmar netzor libékha, ki miménou totséot ḥayim."],
  ["he-56", "לֵךְ אֶל נְמָלָה עָצֵל, רְאֵה דְרָכֶיהָ וַחֲכָם", "Va vers la fourmi, paresseux ; observe ses voies et deviens sage.", "Une créature minuscule enseigne la prévoyance par son travail régulier, sans discours ni contrainte.", "Proverbes 6:6", "https://www.sefaria.org/Proverbs.6.6", "text", ["Travail", "Prévoyance"], "Lekh el nemala atsel, re'é derakhéha vaḥakham."],
  ["he-57", "דְּאָגָה בְלֶב אִישׁ יַשְׁחֶנָּה, וְדָבָר טוֹב יְשַׂמְּחֶנָּה", "Le souci dans le cœur de l’homme l’abat ; une bonne parole lui rend la joie.", "Une inquiétude portée seul pèse, tandis qu’une parole juste peut rouvrir l’espace intérieur.", "Proverbes 12:25", "https://www.sefaria.org/Proverbs.12.25", "text", ["Inquiétude", "Réconfort"], "De'aga velev ish yashḥenna, vedavar tov yesammeḥenna."],
  ["he-58", "בֵּן חָכָם יְשַׂמַּח אָב, וּבֵן כְּסִיל תּוּגַת אִמּוֹ", "Un fils sage réjouit son père ; un fils insensé fait le chagrin de sa mère.", "Les choix d’une génération ne lui appartiennent jamais entièrement : ils touchent ceux qui l’ont élevée.", "Proverbes 10:1", "https://www.sefaria.org/Proverbs.10.1", "text", ["Famille", "Sagesse"], "Ben ḥakham yesamaḥ av, ouven kesil tougat imo."],
  ["he-59", "שִׂנְאָה תְּעֹרֵר מְדָנִים, וְעַל כָּל פְּשָׁעִים תְּכַסֶּה אַהֲבָה", "La haine éveille les querelles, mais l’amour couvre toutes les fautes.", "La haine réactive sans cesse le conflit ; l’amour cherche la réparation sans entretenir chaque offense.", "Proverbes 10:12", "https://www.sefaria.org/Proverbs.10.12", "text", ["Amour", "Conflit"], "Sin'a te'orer medanim, ve'al kol pesha'im tekhasé ahava."],
  ["he-60", "בְּרֹב דְּבָרִים לֹא יֶחְדַּל פָּשַׁע, וְחוֹשֵׂךְ שְׂפָתָיו מַשְׂכִּיל", "Quand les paroles abondent, la faute ne manque pas ; celui qui retient ses lèvres agit avec intelligence.", "La maîtrise de la parole réduit les excès que produit l’envie de toujours ajouter quelque chose.", "Proverbes 10:19", "https://www.sefaria.org/Proverbs.10.19", "text", ["Parole", "Maîtrise"], "Berov devarim lo yeḥdal pasha, veḥosékh sefatav maskil."],
  ["he-61", "בְּכָל עֶצֶב יִהְיֶה מוֹתָר, וּדְבַר שְׂפָתַיִם אַךְ לְמַחְסוֹר", "Tout travail procure un avantage ; le bavardage ne mène qu’au manque.", "L’effort concret produit quelque chose, tandis que la parole qui se substitue à l’action laisse la tâche entière.", "Proverbes 14:23", "https://www.sefaria.org/Proverbs.14.23", "text", ["Travail", "Action"], "Bekhol etsev yihyé motar, oudevar sefatayim akh lemaḥsor."],
  ["he-62", "בְּאֵין תַּחְבֻּלוֹת יִפָּל עָם, וּתְשׁוּעָה בְּרֹב יוֹעֵץ", "Faute de conseils, un peuple tombe ; le salut vient du grand nombre des conseillers.", "Une décision collective robuste confronte plusieurs expériences au lieu de dépendre d’une seule certitude.", "Proverbes 11:14", "https://www.sefaria.org/Proverbs.11.14", "text", ["Conseil", "Gouvernance"], "Be-ein taḥboulot yipol am, outeshou'a berov yo'ets."],
  ["he-63", "יֵשׁ בּוֹטֶה כְּמַדְקְרוֹת חָרֶב, וּלְשׁוֹן חֲכָמִים מַרְפֵּא", "Il est des paroles irréfléchies comme des coups d’épée ; la langue des sages apporte la guérison.", "La parole peut blesser profondément ou devenir un instrument précis de soin et de réconciliation.", "Proverbes 12:18", "https://www.sefaria.org/Proverbs.12.18", "text", ["Parole", "Guérison"], "Yesh boté kemadkerot ḥerev, ouleshon ḥakhamim marpé."],
  ["he-64", "הוֹלֵךְ אֶת חֲכָמִים יֶחְכָּם", "Celui qui marche avec les sages deviendra sage.", "La fréquentation n’est pas neutre : elle façonne progressivement les normes, les questions et les réflexes.", "Proverbes 13:20", "https://www.sefaria.org/Proverbs.13.20", "text", ["Fréquentations", "Sagesse"], "Holekh et ḥakhamim yeḥkam.", "L’original suit la lecture massorétique (qeré) affichée par Sefaria ; le texte consonantique (ketiv) est signalé sur la page-source."],
  ["he-65", "עֹשֵׁק דָּל חֵרֵף עֹשֵׂהוּ, וּמְכַבְּדוֹ חֹנֵן אֶבְיוֹן", "Opprimer le pauvre, c’est outrager son Créateur ; l’honorer, c’est secourir l’indigent.", "La dignité spirituelle se mesure concrètement à la manière dont on traite le plus vulnérable.", "Proverbes 14:31", "https://www.sefaria.org/Proverbs.14.31", "text", ["Justice", "Dignité"], "Oshek dal ḥeref oséhou, oumekhabdo ḥonen evyon."],
  ["he-66", "מַעֲנֶה רַךְ יָשִׁיב חֵמָה", "Une réponse douce détourne la fureur.", "Le ton choisi peut désamorcer une escalade avant même de résoudre le désaccord de fond.", "Proverbes 15:1", "https://www.sefaria.org/Proverbs.15.1", "text", ["Douceur", "Colère"], "Ma'ané rakh yashiv ḥema."],
  ["he-67", "טוֹב אֲרֻחַת יָרָק וְאַהֲבָה שָׁם, מִשּׁוֹר אָבוּס וְשִׂנְאָה בוֹ", "Mieux vaut un repas de légumes avec l’amour qu’un bœuf engraissé accompagné de haine.", "La qualité du lien vaut davantage que le luxe d’une table rendue amère par l’hostilité.", "Proverbes 15:17", "https://www.sefaria.org/Proverbs.15.17", "text", ["Amour", "Simplicité"], "Tov arouḥat yarak ve-ahava sham, mishor avous vesin'a vo."],
  ["he-68", "לֵב אָדָם יְחַשֵּׁב דַּרְכּוֹ, וַיהוָה יָכִין צַעֲדוֹ", "Le cœur de l’homme médite sa route, mais l’Éternel affermit son pas.", "Planifier est nécessaire tout en gardant conscience de ce qui échappe à la volonté humaine.", "Proverbes 16:9", "https://www.sefaria.org/Proverbs.16.9", "text", ["Projet", "Incertitude"], "Lev adam yeḥashev darko, va-Adonai yakhin tsa'ado."],
  ["he-69", "לִפְנֵי שֶׁבֶר גָּאוֹן, וְלִפְנֵי כִשָּׁלוֹן גֹּבַהּ רוּחַ", "L’orgueil précède la ruine, et l’arrogance précède la chute.", "La certitude de sa propre invulnérabilité supprime les précautions qui auraient empêché l’effondrement.", "Proverbes 16:18", "https://www.sefaria.org/Proverbs.16.18", "text", ["Orgueil", "Chute"], "Lifnei shever gaon, velifnei khishalon govah rouaḥ."],
  ["he-70", "צוּף דְּבַשׁ אִמְרֵי נֹעַם, מָתוֹק לַנֶּפֶשׁ וּמַרְפֵּא לָעָצֶם", "Les paroles bienveillantes sont un rayon de miel, douces à l’âme et salutaires au corps.", "La bonté du langage nourrit la relation et produit des effets qui dépassent le seul instant de parole.", "Proverbes 16:24", "https://www.sefaria.org/Proverbs.16.24", "text", ["Bienveillance", "Parole"], "Tsouf devash imrei no'am, matok lanefesh oumarpé la'atsem."],
  ["he-71", "צַדִּיק הָרִאשׁוֹן בְּרִיבוֹ, וּבָא רֵעֵהוּ וַחֲקָרוֹ", "Le premier qui plaide sa cause paraît juste ; puis vient l’autre et il l’examine.", "Un récit convaincant reste une version à éprouver tant que la contradiction et les faits n’ont pas été entendus.", "Proverbes 18:17", "https://www.sefaria.org/Proverbs.18.17", "text", ["Justice", "Esprit critique"], "Tsadik harishon berivo, ouva rééhou vaḥakaro.", "L’original suit la lecture massorétique (qeré) affichée par Sefaria ; le ketiv est également indiqué sur la page-source."],
  ["he-72", "בְּכָל עֵת אֹהֵב הָרֵעַ, וְאָח לְצָרָה יִוָּלֵד", "L’ami aime en tout temps, et dans le malheur il se montre un frère.", "La fidélité se révèle lorsque la relation cesse d’être avantageuse ou facile.", "Proverbes 17:17", "https://www.sefaria.org/Proverbs.17.17", "text", ["Amitié", "Fidélité"], "Bekhol et ohev haréa, ve-aḥ letsara yivaled."],
  ["he-73", "מִגְדַּל עֹז שֵׁם יְהוָה, בּוֹ יָרוּץ צַדִּיק וְנִשְׂגָּב", "Le nom de l’Éternel est une tour forte ; le juste y court et s’y trouve en sûreté.", "La confiance spirituelle est représentée comme un refuge auquel on peut réellement revenir dans l’épreuve.", "Proverbes 18:10", "https://www.sefaria.org/Proverbs.18.10", "text", ["Refuge", "Confiance"], "Migdal oz shem Adonai, bo yarouts tsadik venisgav."],
  ["he-74", "שֵׂכֶל אָדָם הֶאֱרִיךְ אַפּוֹ, וְתִפְאַרְתּוֹ עֲבֹר עַל פָּשַׁע", "La sagesse d’un homme le rend lent à la colère ; sa gloire est de passer sur une offense.", "La maîtrise de soi donne la liberté de ne pas répondre à chaque blessure par une nouvelle blessure.", "Proverbes 19:11", "https://www.sefaria.org/Proverbs.19.11", "text", ["Colère", "Pardon"], "Sekhel adam he'erikh apo, vetifarto avor al pasha."],
  ["he-75", "לֵץ הַיַּיִן הֹמֶה שֵׁכָר, וְכָל שֹׁגֶה בּוֹ לֹא יֶחְכָּם", "Le vin est moqueur, la boisson forte tapageuse ; qui s’y égare n’est pas sage.", "Ce qui promet la désinhibition peut aussi retirer jugement, mesure et liberté.", "Proverbes 20:1", "https://www.sefaria.org/Proverbs.20.1", "text", ["Mesure", "Lucidité"], "Lets hayayin, homé shekhar; vekhol shogé bo lo yeḥkam."],
  ["he-76", "אַל תֹּאמַר אֲשַׁלְּמָה רָע", "Ne dis pas : je rendrai le mal.", "Refuser la vengeance interrompt la chaîne par laquelle chaque offense prétend justifier la suivante.", "Proverbes 20:22", "https://www.sefaria.org/Proverbs.20.22", "text", ["Vengeance", "Retenue"], "Al tomar ashalema ra."],
  ["he-77", "שֹׁמֵר פִּיו וּלְשׁוֹנוֹ, שֹׁמֵר מִצָּרוֹת נַפְשׁוֹ", "Celui qui garde sa bouche et sa langue préserve son âme des détresses.", "La prudence verbale évite des conflits qu’une phrase irréfléchie aurait rendus difficiles à reprendre.", "Proverbes 21:23", "https://www.sefaria.org/Proverbs.21.23", "text", ["Parole", "Prudence"], "Shomer piv ouleshono, shomer mitsarot nafsho."],
  ["he-78", "הִתְרַפִּיתָ בְּיוֹם צָרָה, צַר כֹּחֶכָה", "Si tu faiblis au jour de la détresse, ta force est étroite.", "La force véritable n’est pas celle que l’on proclame dans le calme, mais celle que l’épreuve peut mobiliser.", "Proverbes 24:10", "https://www.sefaria.org/Proverbs.24.10", "text", ["Épreuve", "Force"], "Hitrapita beyom tsara, tsar koḥékha."],
  ["he-79", "תַּפּוּחֵי זָהָב בְּמַשְׂכִּיּוֹת כָּסֶף, דָּבָר דָּבֻר עַל אָפְנָיו", "Des pommes d’or dans des ciselures d’argent : telle est une parole dite à propos.", "Le mot juste doit sa beauté autant à son contenu qu’au moment et à la forme choisis.", "Proverbes 25:11", "https://www.sefaria.org/Proverbs.25.11", "text", ["Justesse", "Parole"], "Tapouḥei zahav bemaskiyot kasef, davar davour al ofnav."],
  ["he-80", "אִם רָעֵב שֹׂנַאֲךָ הַאֲכִלֵהוּ לָחֶם, וְאִם צָמֵא הַשְׁקֵהוּ מָיִם", "Si ton ennemi a faim, donne-lui du pain ; s’il a soif, donne-lui de l’eau.", "La dignité due à l’être humain ne disparaît pas avec l’hostilité qui nous oppose à lui.", "Proverbes 25:21", "https://www.sefaria.org/Proverbs.25.21", "text", ["Ennemi", "Humanité"], "Im ra'ev sona'akha ha'akhiléhou leḥem, ve-im tsamé hashkéhou mayim."],
  ["he-81", "כֹּרֶה שַּׁחַת בָּהּ יִפּוֹל, וְגוֹלֵל אֶבֶן אֵלָיו תָּשׁוּב", "Celui qui creuse une fosse y tombera ; la pierre qu’il roule reviendra sur lui.", "Le mal préparé pour autrui porte déjà en lui le mécanisme de son retour.", "Proverbes 26:27", "https://www.sefaria.org/Proverbs.26.27", "text", ["Piège", "Retour"], "Koré shaḥat bah yipol, vegolel even elav tashouv."],
  ["he-82", "טוֹבָה תּוֹכַחַת מְגֻלָּה מֵאַהֲבָה מְסֻתָּרֶת", "Mieux vaut une réprimande ouverte qu’un amour caché.", "Une affection qui ose parler avec justesse peut être plus utile qu’un sentiment silencieux et sans effet.", "Proverbes 27:5", "https://www.sefaria.org/Proverbs.27.5", "text", ["Critique", "Amour"], "Tova tokhaḥat megoula me-ahava mesouteret."],
  ["he-83", "כַּמַּיִם הַפָּנִים לַפָּנִים, כֵּן לֵב הָאָדָם לָאָדָם", "Comme l’eau reflète le visage, le cœur de l’homme répond au cœur de l’homme.", "L’attitude offerte à l’autre suscite souvent une disposition semblable en retour.", "Proverbes 27:19", "https://www.sefaria.org/Proverbs.27.19", "text", ["Réciprocité", "Cœur"], "Kamayim hapanim lapanim, ken lev ha-adam la-adam."],
  ["he-84", "מְכַסֶּה פְשָׁעָיו לֹא יַצְלִיחַ, וּמוֹדֶה וְעֹזֵב יְרֻחָם", "Celui qui cache ses fautes ne réussira pas ; celui qui les reconnaît et les abandonne obtiendra miséricorde.", "La réparation commence par la vérité, puis exige un changement plutôt qu’un aveu sans conséquence.", "Proverbes 28:13", "https://www.sefaria.org/Proverbs.28.13", "text", ["Aveu", "Réparation"], "Mekhasé pesha'av lo yatsliaḥ, oumodé ve-ozév yerouḥam."],
  ["he-85", "חֶרְדַּת אָדָם יִתֵּן מוֹקֵשׁ, וּבוֹטֵחַ בַּיהוָה יְשֻׂגָּב", "La peur des hommes tend un piège ; celui qui place sa confiance en l’Éternel est mis à l’abri.", "Vivre sous le seul regard social enferme ; une référence plus haute rend une liberté intérieure.", "Proverbes 29:25", "https://www.sefaria.org/Proverbs.29.25", "text", ["Peur", "Liberté"], "Ḥerdat adam yiten mokesh, ouvotéaḥ ba-Adonai yesougav."],
  ["he-86", "טוֹב אַחֲרִית דָּבָר מֵרֵאשִׁיתוֹ", "Mieux vaut la fin d’une chose que son commencement.", "La valeur d’une œuvre apparaît dans son accomplissement, pas seulement dans l’enthousiasme de son départ.", "Ecclésiaste 7:8", "https://www.sefaria.org/Ecclesiastes.7.8", "text", ["Accomplissement", "Persévérance"], "Tov aḥarit davar mereshito."],
  ["he-87", "אַל תְּבַהֵל בְּרוּחֲךָ לִכְעוֹס", "Ne te hâte pas en ton esprit de t’irriter.", "La colère rapide transforme une première émotion en parole ou en décision qu’il sera plus difficile de réparer.", "Ecclésiaste 7:9", "https://www.sefaria.org/Ecclesiastes.7.9", "text", ["Colère", "Patience"], "Al tevahel berouḥakha likh'os."],
  ["he-88", "זְבוּבֵי מָוֶת יַבְאִישׁ יַבִּיעַ שֶׁמֶן רוֹקֵחַ; יָקָר מֵחָכְמָה מִכָּבוֹד סִכְלוּת מְעָט", "Des mouches mortes infectent et font fermenter l’huile du parfumeur ; un peu de folie pèse plus que sagesse et honneur.", "Une faute minime peut contaminer une œuvre longue lorsque sa nature touche au cœur même de la confiance.", "Ecclésiaste 10:1", "https://www.sefaria.org/Ecclesiastes.10.1", "text", ["Folie", "Réputation"], "Zevouvei mavet yav'ish yabia shemen rokéaḥ; yakar meḥokhma mikavod sikhlout me'at."],
  ["he-89", "כֹּל אֲשֶׁר תִּמְצָא יָדְךָ לַעֲשׂוֹת בְּכֹחֲךָ עֲשֵׂה", "Tout ce que ta main trouve à faire, fais-le avec ta force.", "L’engagement entier donne au présent sa densité face à la brièveté de la vie.", "Ecclésiaste 9:10", "https://www.sefaria.org/Ecclesiastes.9.10", "text", ["Action", "Engagement"], "Kol asher timtsa yadkha la'asot bekoḥakha asé."],
  ["he-90", "שֹׁמֵר רוּחַ לֹא יִזְרָע, וְרֹאֶה בֶעָבִים לֹא יִקְצוֹר", "Celui qui observe le vent ne sèmera pas ; celui qui regarde les nuages ne moissonnera pas.", "Attendre des conditions parfaitement sûres peut empêcher toute initiative et donc toute récolte.", "Ecclésiaste 11:4", "https://www.sefaria.org/Ecclesiastes.11.4", "text", ["Action", "Incertitude"], "Shomer rouaḥ lo yizra, vero'é ve'avim lo yiktsor."],
  ["he-91", "סוּר מֵרָע וַעֲשֵׂה טוֹב, בַּקֵּשׁ שָׁלוֹם וְרָדְפֵהוּ", "Éloigne-toi du mal et fais le bien ; recherche la paix et poursuis-la.", "La paix n’est pas seulement l’absence de conflit : elle demande une démarche active et persistante.", "Psaumes 34:15", "https://www.sefaria.org/Psalms.34.15", "text", ["Paix", "Action"], "Sour mera va'asé tov, bakesh shalom verodféhou."],
  ["he-92", "לִמְנוֹת יָמֵינוּ כֵּן הוֹדַע, וְנָבִא לְבַב חָכְמָה", "Apprends-nous à compter nos jours, afin que nous acquérions un cœur sage.", "La conscience de la finitude donne du poids aux choix et dégage l’essentiel de l’accessoire.", "Psaumes 90:12", "https://www.sefaria.org/Psalms.90.12", "text", ["Temps", "Sagesse"], "Limnot yaménou ken hoda, venavi levav ḥokhma."],
  ["he-93", "נֵר לְרַגְלִי דְבָרֶךָ, וְאוֹר לִנְתִיבָתִי", "Ta parole est une lampe à mes pieds et une lumière sur mon sentier.", "Un enseignement n’éclaire pas forcément tout l’horizon ; il peut suffire à rendre visible le prochain pas.", "Psaumes 119:105", "https://www.sefaria.org/Psalms.119.105", "text", ["Chemin", "Lumière"], "Ner leragli devarékha, ve-or lintivati."],
  ["he-94", "הַזֹּרְעִים בְּדִמְעָה, בְּרִנָּה יִקְצֹרוּ", "Ceux qui sèment dans les larmes moissonneront dans la joie.", "La peine investie dans un travail fécond peut préparer une joie qui n’est pas encore visible.", "Psaumes 126:5", "https://www.sefaria.org/Psalms.126.5", "text", ["Espoir", "Persévérance"], "Hazor'im bedim'a, berina yiktsorou."],
  ["he-95", "הִנֵּה מַה טּוֹב וּמַה נָּעִים, שֶׁבֶת אַחִים גַּם יָחַד", "Qu’il est bon et agréable que des frères demeurent ensemble.", "L’unité vécue possède une valeur propre, au-delà de la seule efficacité du groupe.", "Psaumes 133:1", "https://www.sefaria.org/Psalms.133.1", "text", ["Fraternité", "Unité"], "Hiné ma tov ouma na'im, shevet aḥim gam yaḥad."],
  ["he-96", "אֵין לְךָ אָדָם שֶׁאֵין לוֹ שָׁעָה", "Il n’est personne qui n’ait son heure.", "Toute personne et toute chose peuvent rencontrer un moment où leur valeur particulière devient décisive.", "Pirqé Avot 4:3", "https://www.sefaria.org/Pirkei_Avot.4.3", "text", ["Dignité", "Moment"], "Ein lekha adam she-ein lo sha'a."],
  ["he-97", "מְאֹד מְאֹד הֱוֵי שְׁפַל רוּחַ", "Sois, très profondément, humble d’esprit.", "L’humilité doit être cultivée avec force parce que l’orgueil se réinstalle facilement sous des formes discrètes.", "Pirqé Avot 4:4", "https://www.sefaria.org/Pirkei_Avot.4.4", "text", ["Humilité", "Caractère"], "Meod meod hevei shefal rouaḥ."],
  ["he-98", "יָפָה שָׁעָה אַחַת בִּתְשׁוּבָה וּמַעֲשִׂים טוֹבִים בָּעוֹלָם הַזֶּה מִכָּל חַיֵּי הָעוֹלָם הַבָּא", "Une heure de retour et de bonnes actions en ce monde vaut mieux que toute la vie du monde à venir.", "Le présent possède une valeur irremplaçable parce que lui seul permet encore de choisir, réparer et agir.", "Pirqé Avot 4:17", "https://www.sefaria.org/Pirkei_Avot.4.17", "text", ["Réparation", "Présent"], "Yafa sha'a aḥat biteshuva ouma'asim tovim ba'olam hazé mikol ḥayei ha'olam haba."],
  ["he-99", "וְאַף עַל פִּי שֶׁשַּׁעֲרֵי תְפִילָּה נִנְעֲלוּ, שַׁעֲרֵי דְמָעוֹת לֹא נִנְעֲלוּ", "Même lorsque les portes de la prière se sont fermées, les portes des larmes ne se sont pas fermées.", "La parole peut se trouver empêchée ; l’expression nue de la douleur demeure encore une voie d’appel.", "Talmud de Babylone, Bava Metzia 59a", "https://www.sefaria.org/Bava_Metzia.59a", "text", ["Larmes", "Prière"], "Ve-af al pi she-sha'arei tefila nin'alou, sha'arei dema'ot lo nin'alou."],
  ["he-100", "בְּדֶרֶךְ שֶׁאָדָם רוֹצֶה לֵילֵךְ בָּהּ מוֹלִיכִין אוֹתוֹ", "Sur le chemin qu’une personne désire prendre, on la conduit.", "L’orientation répétée du désir ouvre progressivement des voies et façonne la personne qui les emprunte.", "Talmud de Babylone, Makkot 10b", "https://www.sefaria.org/Makkot.10b", "text", ["Désir", "Chemin"], "Bederekh she-adam rotsé leilekh bah molikhin oto."],
].map(makeHebrew);

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
    original: "Amour, amour, quand tu nous tiens, on peut bien dire : Adieu prudence.",
    french: "Sous l’emprise de l’amour, la prudence perd facilement son autorité.",
    meaning: "La Fontaine sourit de la puissance du désir, capable de renverser les calculs les mieux établis.",
    source: "Jean de La Fontaine, Fables IV, 1, « Le Lion amoureux »",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Lion_amoureux", sourceKind: "text",
    tags: ["Amour", "Prudence"],
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
    original: "אֵין אָדָם נִתְפָּס בִּשְׁעַת צַעֲרוֹ",
    transliteration: "Ein adam nitpas bish'at tsa'aro.",
    french: "On ne tient pas une personne rigoureusement responsable dans l’instant de sa détresse.",
    meaning: "La douleur altère la parole ; le jugement humain doit laisser une place à la compassion et au contexte.",
    source: "Talmud de Babylone, Bava Batra 16b",
    sourceUrl: "https://www.sefaria.org/Bava_Batra.16b", sourceKind: "text",
    tags: ["Compassion", "Détresse"],
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
const priorityExpansion = [...FRENCH_EXPANSION, ...ENGLISH_EXPANSION, ...HEBREW_EXPANSION];
const candidates = [
  ...legacy.filter((entry) => !EXCLUDED_IDS.has(entry.id)),
  ...ADDED,
  ...priorityExpansion,
].map(enrich);

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
const translationNearDuplicates = [];
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
for (let left = 0; left < proverbs.length; left += 1) {
  for (let right = left + 1; right < proverbs.length; right += 1) {
    if (proverbs[left].culture !== proverbs[right].culture) continue;
    const similarity = tokenSimilarity(proverbs[left].french, proverbs[right].french);
    if (similarity >= 0.82) translationNearDuplicates.push({
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
for (const entry of priorityExpansion) {
  if (!entry.sourceUrl) qualityIssues.push(`${entry.id}: source cliquable obligatoire pour l’expansion ×2`);
  if (entry.culture === "Hébreu" && !entry.transliteration) {
    qualityIssues.push(`${entry.id}: translittération manquante pour l’expansion hébraïque ×2`);
  }
}
if (exactDuplicates.length) qualityIssues.push(`${exactDuplicates.length} doublon(s) exact(s) dans les candidats`);
if (nearDuplicates.length) qualityIssues.push(`${nearDuplicates.length} paire(s) quasi identique(s) à revoir`);
if (translationNearDuplicates.length) {
  qualityIssues.push(`${translationNearDuplicates.length} paire(s) de traductions quasi identiques à revoir`);
}
const priorityTargets = new Map([["France", 120], ["Anglais", 120], ["Hébreu", 100]]);
for (const [culture, target] of priorityTargets) {
  const count = proverbs.filter((entry) => entry.culture === culture).length;
  if (count < target) {
    qualityIssues.push(`${culture}: ${count} entrées, sous le seuil ×2 de ${target}`);
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
  translationNearDuplicates,
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
- Paires de traductions quasi identiques signalées à revoir : **${translationNearDuplicates.length}**.

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
