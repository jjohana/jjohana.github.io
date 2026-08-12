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
    id: "en-23", culture: "Anglais", place: "Monde anglophone", mark: "EN", lang: "en",
    original: "The last straw that broke the camel’s back.",
    french: "La dernière paille qui brisa le dos du chameau.",
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

const cultureOrder = ["France", "Anglais", "Grec ancien", "Latin", "Hébreu", "Chine", "Inde", "Monde"];
proverbs.sort((a, b) => {
  const cultureDelta = cultureOrder.indexOf(a.culture) - cultureOrder.indexOf(b.culture);
  if (cultureDelta) return cultureDelta;
  return a.id.localeCompare(b.id, undefined, { numeric: true });
});

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
