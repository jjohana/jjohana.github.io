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
  "he-22": {
    place: "Tradition rabbinique",
    mark: "מש",
    lang: "he",
    rtl: true,
    original: "כל המקיים נפש אחת מישראל מעלה עליו הכתוב כאילו קיים עולם מלא.",
    transliteration: "Kol hamekayem nefesh aḥat mi-Yisrael, maʿale alav hakatuv ke-ilu kiyem olam male.",
    french: "Quiconque préserve une seule vie d’Israël, l’Écriture le considère comme s’il avait préservé un monde entier.",
    meaning: "Chaque vie porte une valeur irréductible : la protéger revient symboliquement à préserver tout un monde de relations et de possibles.",
    source: "Mishna, Sanhédrin 4:5, recension imprimée de Vilna (1913)",
    sourceUrl: "https://www.sefaria.org/Mishnah_Sanhedrin.4.5",
    sourceKind: "text",
    sourceNote: "La recension imprimée porte « d’Israël » ; plusieurs manuscrits importants transmettent « une seule vie » sans ce complément. La traduction conserve ici le texte lié.",
    tags: ["Vie", "Dignité"],
  },
  "wo-3": {
    original: "Mwenye shibe hamjui mwenye njaa.",
    french: "Celui qui est rassasié ne connaît pas celui qui a faim.",
    meaning: "Le confort rend facilement invisible l’expérience de celui qui manque du nécessaire.",
    source: "Proverbe swahili recensé dans les collections de proverbes swahilis",
    sourceUrl: "https://en.wikiquote.org/wiki/Swahili_proverbs",
    sourceKind: "lexicographic",
    tags: ["Faim", "Empathie"],
  },
  "wo-5": {
    original: "La gatta frettolosa fece i gattini ciechi.",
    french: "La chatte trop pressée fit des chatons aveugles.",
    meaning: "Précipiter une tâche dont les étapes ont leur propre durée peut en compromettre irréversiblement le résultat.",
    source: "Proverbe italien recensé par le Vocabolario Treccani, entrée « gatta »",
    sourceUrl: "https://www.treccani.it/vocabolario/gatta2/",
    sourceKind: "lexicographic",
    tags: ["Précipitation", "Conséquence"],
  },
  "wo-7": {
    original: "Casa onde não há pão, todos ralham e ninguém tem razão.",
    french: "Dans une maison où il n’y a pas de pain, tout le monde se querelle et personne n’a raison.",
    meaning: "Le manque matériel alimente des conflits que l’on attribue ensuite à tort au seul caractère des personnes.",
    source: "Proverbe portugais recensé dans les collections lusophones",
    sourceUrl: "https://pt.wikiquote.org/wiki/Prov%C3%A9rbios_portugueses",
    sourceKind: "lexicographic",
    tags: ["Manque", "Conflit"],
  },
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
    sourceUrl: "https://www.dbnl.org/tekst/stoe002nede01_01/stoe002nede01_01_1991.php",
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
    sourceUrl: "https://www.treccani.it/vocabolario/abito/",
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
  ["en-92", "United we stand, divided we fall.", "Unis nous tenons, divisés nous tombons.", "La cohésion permet au groupe de résister à ce qui vaincrait ses membres séparément.", "Formule anglaise ancienne ; « The Liberty Song » de John Dickinson (1768) en donne une version américaine célèbre", "https://upload.wikimedia.org/wikipedia/commons/a/a9/Songs_and_ballads_of_the_American_Revolution_%28IA_songsballadsofam01moor%29.pdf", "text", ["Union", "Résistance"]],
  ["en-93", "Variety is the spice of life.", "La variété est l’épice de la vie.", "Le changement et la diversité donnent du relief à l’existence.", "William Cowper, The Task, livre II (1785)", "https://www.eighteenthcenturypoetry.org/works/o3795-w0020.shtml", "text", ["Diversité", "Vie"]],
  ["en-94", "What goes around comes around.", "Ce qui circule finit par revenir.", "Les actes et les attitudes produisent souvent des conséquences qui rejoignent leur auteur.", "Proverbe anglophone moderne, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Conséquence", "Réciprocité"]],
  ["en-95", "You can’t teach an old dog new tricks.", "On ne peut apprendre de nouveaux tours à un vieux chien.", "Les habitudes anciennes résistent aux apprentissages qui exigent de les remettre en cause.", "Proverbe anglais attesté au XVIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Habitude", "Apprentissage"]],
  ["en-96", "You reap what you sow.", "On récolte ce que l’on sème.", "La nature de nos actes prépare celle de leurs conséquences.", "Bible King James, Galatians 6:7, formulation devenue proverbiale", "https://en.wikisource.org/wiki/Bible_(King_James)/Galatians#6:7", "derived", ["Conséquence", "Action"], null, "La King James porte « whatsoever a man soweth, that shall he also reap » ; l’entrée donne sa condensation proverbiale."],
  ["en-97", "A chain is only as strong as its weakest link.", "Une chaîne n’est pas plus solide que son maillon le plus faible.", "La fiabilité d’un système dépend de la partie dont la défaillance suffit à compromettre l’ensemble.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Système", "Fragilité"]],
  ["en-98", "A fool and his money are soon parted.", "Un sot et son argent sont vite séparés.", "L’argent sans jugement attire les dépenses, les tromperies et les pertes.", "Proverbe anglais, forme chez Thomas Tusser au XVIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Argent", "Jugement"]],
  ["en-99", "A place for everything and everything in its place.", "Une place pour chaque chose, et chaque chose à sa place.", "L’ordre durable vient moins du rangement ponctuel que d’une règle simple appliquée à chaque objet.", "Maxime anglaise attestée au XVIIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Ordre", "Organisation"]],
  ["en-100", "Three may keep a secret, if two of them are dead.", "Trois personnes peuvent garder un secret, si deux d’entre elles sont mortes.", "L’hyperbole rappelle avec humour que chaque confident supplémentaire fragilise radicalement le secret.", "Benjamin Franklin, Poor Richard’s Almanack (1735)", "https://en.wikisource.org/wiki/Poor_Richard%27s_Almanack", "text", ["Secret", "Discrétion"]],
  ["en-101", "Barking dogs seldom bite.", "Les chiens qui aboient mordent rarement.", "La menace la plus bruyante n’est pas toujours celle qui passe à l’acte.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Menace", "Apparence"]],
  ["en-102", "Cleanliness is next to godliness.", "La propreté vient juste après la piété.", "La discipline du soin matériel est présentée comme proche de la discipline morale.", "Maxime popularisée par John Wesley, sermon « On Dress » (1769)", "https://wesley.nnu.edu/john-wesley/the-sermons-of-john-wesley-1872-edition/sermon-88-on-dress/", "text", ["Propreté", "Discipline"], null, "La formule est culturelle et morale, non une hiérarchie médicale ou religieuse universelle."],
  ["en-103", "Familiarity breeds contempt.", "La familiarité engendre le mépris.", "Une proximité sans attention peut faire perdre le sens de la valeur ou des limites de l’autre.", "Proverbe anglais issu d’une famille latine antique ; The Phrase Finder", ENGLISH_PROVERBS_URL, "derived", ["Familiarité", "Respect"]],
  ["en-104", "First come, first served.", "Premier arrivé, premier servi.", "Lorsque les droits sont égaux et les ressources limitées, l’ordre d’arrivée peut fournir une règle simple.", "Maxime anglaise issue de l’usage juridique médiéval ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Ordre", "Équité"]],
  ["en-105", "You catch more flies with honey than with vinegar.", "On attrape plus de mouches avec du miel qu’avec du vinaigre.", "La douceur et la courtoisie obtiennent souvent davantage que l’hostilité.", "Proverbe anglophone d’une famille européenne ancienne ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Douceur", "Persuasion"]],
  ["en-106", "God helps those who help themselves.", "Dieu aide ceux qui s’aident eux-mêmes.", "L’espoir d’un secours supérieur n’exonère pas de l’initiative personnelle.", "Maxime anglaise popularisée par Algernon Sidney puis Benjamin Franklin ; dossier The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Initiative", "Espoir"], null, "Cette phrase n’est pas une citation biblique littérale ; sa provenance proverbiale est explicitement distinguée."],
  ["en-107", "Don’t cut off your nose to spite your face.", "Ne te coupe pas le nez pour contrarier ton visage.", "Se venger sous le coup de la colère peut infliger à soi-même un dommage supérieur à celui que l’on voulait causer.", "Idiome proverbial anglais attesté depuis le XVIIIe siècle ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Vengeance", "Lucidité"]],
  ["en-108", "Haste makes waste.", "La hâte produit du gaspillage.", "La précipitation crée des erreurs dont la correction coûte plus de temps que la prudence initiale.", "Proverbe anglais recensé chez John Heywood (1546)", ENGLISH_PROVERBS_URL, "lexicographic", ["Hâte", "Erreur"]],
  ["en-109", "He who laughs last laughs best.", "Rit le mieux qui rit le dernier.", "Un avantage provisoire ne décide pas du résultat final.", "Proverbe anglais, documenté par The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Résultat", "Patience"]],
  ["en-110", "If the shoe fits, wear it.", "Si la chaussure te va, porte-la.", "Si une critique générale te décrit justement, reconnais-la au lieu de rejeter sa forme indirecte.", "Idiome proverbial américain, variante de l’anglais « if the cap fits » ; The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Critique", "Lucidité"]],
  ["en-111", "Where ignorance is bliss, ’tis folly to be wise.", "Là où l’ignorance fait le bonheur, il est folie d’être sage.", "Certaines vérités détruisent une innocence confortable sans fournir immédiatement le pouvoir d’agir.", "Thomas Gray, Ode on a Distant Prospect of Eton College (1747)", "https://en.wikisource.org/wiki/Ode_on_a_Distant_Prospect_of_Eton_College", "text", ["Ignorance", "Sagesse"]],
  ["en-112", "Imitation is the sincerest form of flattery.", "L’imitation est la forme la plus sincère de flatterie.", "Copier reconnaît implicitement la valeur de ce que l’on prend pour modèle.", "Forme proverbiale moderne développée à partir de Charles Caleb Colton, Lacon (1820) : « Imitation is the sincerest of flattery »", "https://upload.wikimedia.org/wikipedia/commons/1/1a/Lacon%3B_or%2C_Many_Things_in_Few_Words%2C_3rd_ed._%28IA_dli.granth.17413%29.pdf", "derived", ["Imitation", "Flatterie"], null, "Le texte de Colton porte « the sincerest of flattery » ; « the sincerest form of flattery » est la forme devenue proverbiale. La continuation ironique associée à Wilde est postérieure."],
  ["en-113", "It takes two to tango.", "Il faut être deux pour danser le tango.", "Une relation, une coopération ou certains conflits supposent la participation de deux parties.", "Idiome américain popularisé par la chanson de 1952 ; dossier The Phrase Finder", ENGLISH_PROVERBS_URL, "lexicographic", ["Réciprocité", "Responsabilité"]],
  ["en-114", "Knowledge is power.", "Le savoir est un pouvoir.", "Comprendre augmente la capacité de prévoir, de décider et d’agir.", "Maxime anglaise issue de Francis Bacon, Meditationes Sacrae (1597) : « ipsa scientia potestas est »", "https://en.wikisource.org/wiki/Page%3AHoyt%27s_New_Cyclopedia_Of_Practical_Quotations_%281922%29.djvu/458", "derived", ["Savoir", "Pouvoir"]],
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

const makeGreek = makePriorityEntry({ culture: "Grec ancien", place: "Monde grec antique", mark: "ΕΛ", lang: "grc" });
const makeLatin = makePriorityEntry({ culture: "Latin", place: "Monde romain", mark: "LA", lang: "la" });
const makeChinese = makePriorityEntry({ culture: "Chine", place: "Chine ancienne", mark: "中", lang: "zh" });
const makeSanskrit = makePriorityEntry({ culture: "Inde", place: "Inde ancienne", mark: "अ", lang: "sa" });
const makeTamil = makePriorityEntry({ culture: "Inde", place: "Tamilakam", mark: "த", lang: "ta" });
const makePali = makePriorityEntry({ culture: "Inde", place: "Inde bouddhique", mark: "𑀧", lang: "pi" });
const makeBengali = makePriorityEntry({ culture: "Inde", place: "Bengale", mark: "ব", lang: "bn" });

const GREEK_EXPANSION = [
  ["gr-8", "Ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ.", "Une vie sans examen ne mérite pas d’être vécue par l’être humain.", "Socrate place l’examen de soi et de ses raisons au cœur d’une existence pleinement humaine.", "Platon, Apologie de Socrate 38a", "https://www.perseus.tufts.edu/hopper/text?doc=Plat.+Apol.+38a", "text", ["Examen", "Vie"], "Ho de anexetastos bios ou biotos anthropo."],
  ["gr-9", "Πάντων χρημάτων μέτρον ἄνθρωπον εἶναι.", "L’être humain est la mesure de toutes choses.", "La formule de Protagoras rappelle que notre accès au réel passe par la perception et le jugement humains.", "Protagoras, fragment rapporté par Platon, Théétète 152a", "https://www.perseus.tufts.edu/hopper/text?doc=Plat.+Theaet.+152a", "text", ["Mesure", "Perception"], "Panton chrematon metron anthropon einai."],
  ["gr-10", "Κοινὰ τὰ τῶν φίλων.", "Entre amis, les biens sont communs.", "L’amitié authentique transforme la possession isolée en disponibilité réciproque.", "Proverbe pythagoricien cité par Platon, République 424a", "https://www.perseus.tufts.edu/hopper/text?doc=Plat.+Rep.+424a", "text", ["Amitié", "Partage"], "Koina ta ton philon."],
  ["gr-11", "Οἱ ὀρθῶς φιλοσοφοῦντες ἀποθνῄσκειν μελετῶσι.", "Ceux qui philosophent véritablement s’exercent à mourir.", "La philosophie apprend à desserrer l’emprise de la peur et des attachements qui empêchent de vivre lucidement.", "Platon, Phédon 64a", "https://www.perseus.tufts.edu/hopper/text?doc=Plat.+Phaedo+64a", "text", ["Philosophie", "Mort"], "Hoi orthos philosophountes apothneskein meletosi."],
  ["gr-12", "Πρὶν δ᾽ ἂν τελευτήσῃ, ἐπισχεῖν μηδὲ καλέειν κω ὄλβιον, ἀλλ᾽ εὐτυχέα.", "Avant sa fin, retiens ton jugement : ne dis pas encore un homme heureux, mais seulement favorisé.", "Une prospérité présente ne suffit pas à juger l’ensemble d’une vie encore exposée au changement.", "Hérodote, Histoires 1.32, conseil de Solon à Crésus", "https://www.perseus.tufts.edu/hopper/text?doc=Hdt.+1.32", "text", ["Bonheur", "Finitude"], "Prin d'an teleutese, epischein mede kaleein ko olbion, all' eutüchea."],
  ["gr-13", "Κτῆμά τε ἐς αἰεὶ μᾶλλον ἢ ἀγώνισμα ἐς τὸ παραχρῆμα ἀκούειν ξύγκειται.", "Cette œuvre est composée comme un acquis pour toujours plutôt que comme un morceau d’apparat pour l’audition du moment.", "Thucydide oppose la connaissance durable au succès immédiat destiné à séduire un public.", "Thucydide, Guerre du Péloponnèse 1.22.4", "https://www.perseus.tufts.edu/hopper/text?doc=Thuc.+1.22.4", "text", ["Histoire", "Durée"], "Ktema te es aiei mallon e agonisma es to parachrema akouein xynkeitai."],
  ["gr-14", "Ἀμήχανον δὲ παντὸς ἀνδρὸς ἐκμαθεῖν ψυχήν τε καὶ φρόνημα καὶ γνώμην, πρὶν ἂν ἀρχαῖς τε καὶ νόμοισιν ἐντριβὴς φανῇ.", "Il est impossible de connaître l’âme, la pensée et le jugement d’un homme avant de l’avoir vu exercer le pouvoir et appliquer les lois.", "L’autorité révèle les dispositions que la vie privée permettait de dissimuler.", "Sophocle, Antigone 175–177", "https://www.perseus.tufts.edu/hopper/text?doc=Soph.+Ant.+175", "text", ["Pouvoir", "Caractère"], "Amechanon de pantos andros ekmathein psychen te kai phronema kai gnomen, prin an archais te kai nomoisin entribes phane."],
  ["gr-15", "Χρόνος δίκαιον ἄνδρα δείκνυσιν μόνος.", "Le temps seul révèle l’homme juste.", "La justice d’un caractère se vérifie dans la continuité des actes plutôt que dans une déclaration ponctuelle.", "Sophocle, Œdipe roi 614", "https://www.perseus.tufts.edu/hopper/text?doc=Soph.+OT+614", "text", ["Temps", "Justice"], "Chronos dikaion andra deiknysin monos."],
  ["gr-16", "Πάθει μάθος.", "Par la souffrance, l’apprentissage.", "L’épreuve peut produire une connaissance qu’aucune explication abstraite ne suffisait à transmettre.", "Eschyle, Agamemnon 177", "https://www.perseus.tufts.edu/hopper/text?doc=Aesch.+Ag.+177", "text", ["Épreuve", "Apprentissage"], "Pathei mathos."],
  ["gr-17", "Νήπιοι, οὐδὲ ἴσασιν ὅσῳ πλέον ἥμισυ παντός.", "Insensés, ils ne savent pas combien la moitié vaut plus que le tout.", "La mesure peut conserver davantage que l’avidité qui veut tout saisir et finit par tout perdre.", "Hésiode, Les Travaux et les Jours 40", "https://www.perseus.tufts.edu/hopper/text?doc=Hes.+WD+40", "text", ["Mesure", "Avidité"], "Nepioi, oude isasin hoso pleon hemisy pantos."],
  ["gr-18", "Ἦθος ἀνθρώπῳ δαίμων.", "Le caractère de l’être humain est son destin.", "Les dispositions cultivées jour après jour orientent une vie plus sûrement qu’un destin imaginé comme entièrement extérieur.", "Héraclite, fragment B119 Diels-Kranz", "https://el.wikisource.org/wiki/%CE%97%CF%81%CE%AC%CE%BA%CE%BB%CE%B5%CE%B9%CF%84%CE%BF%CF%82", "text", ["Caractère", "Destin"], "Ethos anthropo daimon."],
  ["gr-19", "Αἰὲν ἀριστεύειν καὶ ὑπείροχον ἔμμεναι ἄλλων.", "Toujours exceller et se montrer supérieur aux autres.", "L’idéal héroïque homérique exige de transformer l’héritage reçu en actes dignes de mémoire.", "Homère, Iliade 6.208", "https://www.perseus.tufts.edu/hopper/text?doc=Hom.+Il.+6.208", "text", ["Excellence", "Honneur"], "Aien aristeuein kai hypeirochon emmenai allon."],
  ["gr-20", "Τοῖος γὰρ νόος ἐστὶν ἐπιχθονίων ἀνθρώπων, οἷον ἐπ᾽ ἦμαρ ἄγησι πατὴρ ἀνδρῶν τε θεῶν τε.", "L’esprit des humains sur la terre est tel que le jour que leur envoie le père des hommes et des dieux.", "Notre disposition dépend fortement des circonstances ; se croire immuable est une illusion.", "Homère, Odyssée 18.136–137", "https://www.perseus.tufts.edu/hopper/text?doc=Hom.+Od.+18.136", "text", ["Circonstance", "Esprit"], "Toios gar noos estin epichthonion anthropon, hoion ep' emar agesi pater andron te theon te."],
  ["gr-21", "Γένοι᾽ οἷος ἐσσὶ μαθών.", "Deviens qui tu es, après l’avoir appris.", "L’accomplissement de soi suppose une connaissance exigeante de ses dispositions et de sa vocation.", "Pindare, Pythiques 2.72", "https://www.perseus.tufts.edu/hopper/text?doc=Pind.+P.+2.72", "text", ["Connaissance de soi", "Accomplissement"], "Genoio hoios essi mathon."],
  ["gr-22", "Ἡ γλῶσσ᾽ ὀμώμοχ᾽, ἡ δὲ φρὴν ἀνώμοτος.", "Ma langue a juré, mais mon esprit n’a pas prêté serment.", "La formule dramatique expose la rupture dangereuse entre la parole donnée et l’intention intérieure.", "Euripide, Hippolyte 612", "https://www.perseus.tufts.edu/hopper/text?doc=Eur.+Hipp.+612", "text", ["Serment", "Intention"], "He gloss' omomoch', he de phren anomotos."],
  ["gr-23", "Ὁ ἄνθρωπος φύσει πολιτικὸν ζῷον.", "L’être humain est par nature un animal politique.", "La vie humaine se construit dans des communautés, des règles et une parole partagée.", "Aristote, Politique 1253a2", "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0057%3Abook%3D1%3Asection%3D1253a", "text", ["Cité", "Humanité"], "Ho anthropos physei politikon zoon."],
  ["gr-24", "Τῶν ὄντων τὰ μέν ἐστιν ἐφ᾽ ἡμῖν, τὰ δὲ οὐκ ἐφ᾽ ἡμῖν.", "Parmi les choses, les unes dépendent de nous, les autres n’en dépendent pas.", "Distinguer notre jugement et nos actes de ce qui nous échappe protège l’action de l’agitation stérile.", "Épictète, Manuel 1", "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0235%3Atext%3Denc%3Achapter%3D1", "text", ["Liberté", "Discernement"], "Ton onton ta men estin eph' hemin, ta de ouk eph' hemin."],
  ["gr-25", "Ταράσσει τοὺς ἀνθρώπους οὐ τὰ πράγματα, ἀλλὰ τὰ περὶ τῶν πραγμάτων δόγματα.", "Ce ne sont pas les choses qui troublent les humains, mais les jugements qu’ils portent sur les choses.", "Le travail sur l’interprétation peut réduire une souffrance ajoutée aux événements eux-mêmes.", "Épictète, Manuel 5", "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0235%3Atext%3Denc%3Achapter%3D5", "text", ["Jugement", "Trouble"], "Tarassei tous anthropous ou ta pragmata, alla ta peri ton pragmaton dogmata."],
  ["gr-26", "Μὴ ζήτει τὰ γινόμενα γίνεσθαι ὡς θέλεις, ἀλλὰ θέλε τὰ γινόμενα ὡς γίνεται.", "Ne cherche pas à ce que les événements arrivent comme tu le veux ; veuille-les comme ils arrivent.", "L’acceptation du réel libère l’énergie auparavant dépensée à exiger que le passé ou l’inévitable soient autres.", "Épictète, Manuel 8", "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0235%3Atext%3Denc%3Achapter%3D8", "text", ["Acceptation", "Volonté"], "Me zetei ta ginomena ginesthai hos theleis, alla thele ta ginomena hos ginetai."],
  ["gr-27", "Ἔνδον σκάπτε· ἔνδον ἡ πηγὴ τοῦ ἀγαθοῦ.", "Creuse au-dedans : au-dedans est la source du bien.", "La ressource morale doit être entretenue intérieurement plutôt qu’attendue de circonstances toujours favorables.", "Marc Aurèle, Pensées 7.59", "https://el.wikisource.org/wiki/%CE%A4%E1%BD%B0_%CE%B5%E1%BC%B0%CF%82_%E1%BC%91%CE%B1%CF%85%CF%84%CF%8C%CE%BD", "text", ["Intériorité", "Bien"], "Endon skapte; endon he pege tou agathou."],
  ["gr-28", "Τὸ ἐμποδίζον τῇ ἐνεργείᾳ προάγει τὴν ἐνέργειαν, καὶ τὸ ἐπιστατοῦν τῇ ὁδῷ ἐν τῇ ὁδῷ γίνεται.", "Ce qui entrave l’action fait avancer l’action ; ce qui barrait le chemin devient le chemin.", "L’obstacle peut être intégré à l’action et devenir la matière même du progrès.", "Marc Aurèle, Pensées 5.20", "https://el.wikisource.org/wiki/%CE%A4%E1%BD%B0_%CE%B5%E1%BC%B0%CF%82_%E1%BC%91%CE%B1%CF%85%CF%84%CF%8C%CE%BD", "text", ["Obstacle", "Action"], "To empodizon te energeia proagei ten energeian, kai to epistatoun te hodo en te hodo ginetai."],
  ["gr-29", "Πόλλ᾽ οἶδ᾽ ἀλώπηξ, ἀλλ᾽ ἐχῖνος ἓν μέγα.", "Le renard sait beaucoup de choses, mais le hérisson en sait une grande.", "La multiplicité des ruses et la maîtrise d’un principe central sont deux formes différentes d’intelligence.", "Archiloque, fragment 201 West", "https://en.wikiquote.org/wiki/Archilochus", "text", ["Intelligence", "Stratégie"], "Poll' oid' alopex, all' echinos hen mega."],
  ["gr-30", "Ὅμοιος ὁμοίῳ ἀεὶ πελάζει.", "Le semblable va toujours vers son semblable.", "Les affinités de caractère, d’habitude ou de désir rapprochent spontanément les personnes.", "Proverbe ancien cité par Platon, Banquet 195b", "https://www.perseus.tufts.edu/hopper/text?doc=Plat.+Sym.+195b", "text", ["Affinité", "Caractère"], "Homoios homoio aei pelazei."],
  ["gr-31", "Ἰδοὺ Ῥόδος, ἰδοὺ καὶ τὸ πήδημα.", "Voici Rhodes : saute ici.", "Une prétention doit être démontrée maintenant par l’acte, non protégée par un exploit invérifiable raconté ailleurs.", "Ésope, « L’Athlète fanfaron », fable 203 dans l’édition de Karl Halm", "https://en.wikisource.org/wiki/On_the_Basis_of_Morality/Part_II", "text", ["Preuve", "Action"], "Idou Rhodos, idou kai to pedema."],
  ["gr-32", "Δὶς ἐξαμαρτεῖν οὐκ ἀνδρὸς σοφοῦ.", "Se tromper deux fois de la même manière n’est pas le fait d’un sage.", "L’erreur devient une leçon seulement lorsque l’expérience modifie la conduite suivante.", "Sentence grecque traditionnellement attribuée à Ménandre ; locution documentée par le Centre de la langue grecque", "https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/search.html?lq=%CE%B4%CE%B9%CF%82", "lexicographic", ["Erreur", "Apprentissage"], "Dis examartein ouk andros sophou."],
  ["gr-33", "Ἀνάγκᾳ δ᾽ οὐδὲ θεοὶ μάχονται.", "Même les dieux ne combattent pas la nécessité.", "La sagesse commence parfois par reconnaître une contrainte qu’aucune puissance ne peut abolir.", "Simonide de Céos, fragment 542 Page", "https://en.wikiquote.org/wiki/Simonides_of_Ceos", "text", ["Nécessité", "Limite"], "Ananka d' oude theoi machontai."],
  ["gr-34", "Μολὼν λαβέ.", "Viens les prendre.", "La réponse de Léonidas oppose à l’ultimatum une détermination concise qui accepte lucidement le risque.", "Plutarque, Apophtegmes laconiens 225c, Léonidas 11", "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Moralia/Sayings_of_Spartans%2A/main.html", "text", ["Courage", "Résistance"], "Molon labe."],
  ["gr-35", "Ἢ τὰν ἢ ἐπὶ τᾶς.", "Ou avec ton bouclier, ou sur lui.", "La formule spartiate exige de revenir fidèle à son devoir plutôt que d’abandonner les siens pour sauver seulement sa vie.", "Plutarque, Apophtegmes de femmes spartiates, 241f", "https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0007.tlg082b.perseus-eng2/", "text", ["Devoir", "Courage"], "E tan e epi tas."],
  ["gr-36", "Καιρὸν γνῶθι.", "Reconnais le moment opportun.", "Une action juste dépend aussi du moment où elle peut produire son effet.", "Maxime delphique conservée par Stobée, Anthologie 3.1.173", "https://archive.org/details/joannisstobaeian03stovuoft/page/122/mode/2up", "text", ["Occasion", "Discernement"], "Kairon gnothi."],
  ["gr-37", "Νόμῳ πείθου.", "Obéis à la loi.", "La vie commune exige que la volonté particulière reconnaisse une règle partagée.", "Maxime delphique conservée par Stobée, Anthologie 3.1.173", "https://archive.org/details/joannisstobaeian03stovuoft/page/122/mode/2up", "text", ["Loi", "Cité"], "Nomo peithou."],
  ["gr-38", "Πρᾶττε δίκαια.", "Agis justement.", "La justice ne vaut pleinement que lorsqu’elle devient une pratique et non une opinion favorable sur soi-même.", "Maxime delphique conservée par Stobée, Anthologie 3.1.173", "https://archive.org/details/joannisstobaeian03stovuoft/page/122/mode/2up", "text", ["Justice", "Action"], "Pratte dikaia."],
  ["gr-39", "Σοφίαν τίμα.", "Honore la sagesse.", "Ce que l’on choisit d’honorer oriente peu à peu ce que l’on cherche à devenir.", "Maxime delphique conservée par Stobée, Anthologie 3.1.173", "https://archive.org/details/joannisstobaeian03stovuoft/page/122/mode/2up", "text", ["Sagesse", "Honneur"], "Sophian tima."],
].map(makeGreek);

const LATIN_EXPANSION = [
  ["la-34", "Homo sum: humani nihil a me alienum puto.", "Je suis humain : rien de ce qui est humain ne m’est étranger.", "L’appartenance à l’humanité oblige à ne pas traiter l’expérience d’autrui comme radicalement étrangère.", "Térence, Heautontimoroumenos 77", "https://www.thelatinlibrary.com/ter.heauton.html", "text", ["Humanité", "Empathie"]],
  ["la-35", "Est modus in rebus.", "Il est une juste mesure en toute chose.", "La sagesse pratique cherche une limite entre le manque et l’excès.", "Horace, Satires I, 1, 106", "https://www.thelatinlibrary.com/horace/serm1.shtml", "text", ["Mesure", "Équilibre"]],
  ["la-36", "Omne tulit punctum qui miscuit utile dulci.", "Il remporte tous les suffrages, celui qui mêle l’utile à l’agréable.", "Une œuvre transmet mieux lorsqu’elle joint la valeur de son enseignement au plaisir de sa forme.", "Horace, Art poétique 343", "https://www.thelatinlibrary.com/horace/arspoet.shtml", "text", ["Art", "Transmission"]],
  ["la-37", "Quidquid id est, timeo Danaos et dona ferentes.", "Quoi qu’il en soit, je crains les Grecs même lorsqu’ils apportent des présents.", "Un cadeau peut servir une stratégie cachée ; la générosité apparente n’abolit pas l’examen des intentions.", "Virgile, Énéide II, 49", "https://www.thelatinlibrary.com/vergil/aen2.shtml", "text", ["Prudence", "Don"]],
  ["la-38", "Facilis descensus Averno.", "La descente vers l’Averne est facile.", "Il est souvent plus facile d’entrer dans une voie destructrice que d’en revenir.", "Virgile, Énéide VI, 126", "https://www.thelatinlibrary.com/vergil/aen6.shtml", "text", ["Chute", "Retour"]],
  ["la-39", "Non est ad astra mollis e terris via.", "Il n’est pas de chemin facile de la terre jusqu’aux étoiles.", "Toute élévation véritable demande de traverser une difficulté proportionnée à son ambition.", "Sénèque, Hercule furieux 437", "https://la.wikisource.org/wiki/Hercules_furens", "text", ["Effort", "Élévation"]],
  ["la-40", "Forsan et haec olim meminisse iuvabit.", "Peut-être qu’un jour il sera doux de se souvenir même de ces épreuves.", "La distance peut transformer l’épreuve présente en mémoire de courage et de chemin parcouru.", "Virgile, Énéide I, 203", "https://www.thelatinlibrary.com/vergil/aen1.shtml", "text", ["Épreuve", "Mémoire"]],
  ["la-41", "Amantium irae amoris integratio est.", "Les querelles des amants renouvellent l’amour.", "Certains conflits intimes, lorsqu’ils sont réparés, peuvent rendre la relation plus consciente et plus forte.", "Térence, Andrienne 555", "https://www.thelatinlibrary.com/ter.andria.html", "text", ["Amour", "Réconciliation"]],
  ["la-42", "Inopi beneficium bis dat, qui dat celeriter.", "À celui qui manque, il donne deux fois, celui qui donne vite.", "Une aide reçue au moment du besoin vaut davantage qu’un secours tardif pourtant équivalent.", "Publilius Syrus, Sentences I, 5", "https://thelatinlibrary.com/syrus.html", "text", ["Aide", "Promptitude"]],
].map(makeLatin);

const CHINESE_EXPANSION = [
  ["zh-22", "學而不思則罔，思而不學則殆。", "Étudier sans réfléchir égare ; réfléchir sans étudier met en danger.", "Le savoir exige le va-et-vient entre l’héritage reçu et l’examen personnel.", "Confucius, Entretiens 2.15", "https://ctext.org/analects/wei-zheng/zh", "text", ["Étude", "Réflexion"], "Xué ér bù sī zé wǎng, sī ér bù xué zé dài."],
  ["zh-23", "見賢思齊焉，見不賢而內自省也。", "Voyant un homme de valeur, cherche à l’égaler ; voyant son contraire, examine-toi intérieurement.", "Autrui peut devenir un miroir : l’exemple inspire et le défaut observé invite à se corriger soi-même.", "Confucius, Entretiens 4.17", "https://ctext.org/analects/li-ren/zh", "text", ["Exemple", "Examen"], "Jiàn xián sī qí yān, jiàn bù xián ér nèi zì xǐng yě."],
  ["zh-24", "德不孤，必有鄰。", "La vertu n’est jamais solitaire ; elle aura nécessairement des voisins.", "Une conduite droite crée autour d’elle des affinités et des alliances que l’intérêt seul ne produit pas.", "Confucius, Entretiens 4.25", "https://ctext.org/analects/li-ren/zh", "text", ["Vertu", "Affinité"], "Dé bù gū, bì yǒu lín."],
  ["zh-25", "己欲立而立人，己欲達而達人。", "Souhaitant t’établir toi-même, aide les autres à s’établir ; souhaitant réussir, aide-les à réussir.", "L’accomplissement personnel devient pleinement humain lorsqu’il ouvre aussi un chemin à autrui.", "Confucius, Entretiens 6.30", "https://ctext.org/analects/yong-ye/zh", "text", ["Réciprocité", "Accomplissement"], "Jǐ yù lì ér lì rén, jǐ yù dá ér dá rén."],
  ["zh-26", "三軍可奪帥也，匹夫不可奪志也。", "On peut enlever son général aux trois armées ; on ne peut enlever sa résolution au plus humble des hommes.", "La puissance extérieure peut être vaincue sans que la liberté intérieure consente à l’être.", "Confucius, Entretiens 9.26", "https://ctext.org/analects/zi-han/zh", "text", ["Résolution", "Liberté"], "Sān jūn kě duó shuài yě, pǐ fū bù kě duó zhì yě."],
  ["zh-27", "歲寒，然後知松柏之後凋也。", "C’est dans le froid de l’année que l’on reconnaît que pins et cyprès se flétrissent les derniers.", "L’adversité révèle les fidélités et les caractères qui résistent lorsque les conditions favorables disparaissent.", "Confucius, Entretiens 9.28", "https://ctext.org/analects/zi-han/zh", "text", ["Adversité", "Fidélité"], "Suì hán, ránhòu zhī sōng bǎi zhī hòu diāo yě."],
  ["zh-28", "知者不惑，仁者不憂，勇者不懼。", "Le sage n’est pas dans la confusion, l’homme de bien n’est pas dans l’inquiétude, le courageux n’est pas dans la peur.", "Savoir, bienveillance et courage libèrent chacun d’une forme différente d’asservissement intérieur.", "Confucius, Entretiens 9.29", "https://ctext.org/analects/zi-han/zh", "text", ["Sagesse", "Courage"], "Zhì zhě bù huò, rén zhě bù yōu, yǒng zhě bù jù."],
  ["zh-29", "君子和而不同，小人同而不和。", "L’homme de bien recherche l’harmonie sans exiger l’uniformité ; l’homme mesquin recherche l’uniformité sans produire l’harmonie.", "L’accord véritable supporte la différence, tandis que le conformisme peut masquer la rivalité.", "Confucius, Entretiens 13.23", "https://ctext.org/analects/zi-lu/zh", "text", ["Harmonie", "Différence"], "Jūnzǐ hé ér bù tóng, xiǎorén tóng ér bù hé."],
  ["zh-30", "人無遠慮，必有近憂。", "Qui ne pense pas au loin connaîtra bientôt l’inquiétude.", "Prévoir les conséquences éloignées évite que les problèmes négligés deviennent des urgences proches.", "Confucius, Entretiens 15.12", "https://ctext.org/analects/wei-ling-gong/zh", "text", ["Prévoyance", "Conséquence"], "Rén wú yuǎn lǜ, bì yǒu jìn yōu."],
  ["zh-31", "君子求諸己，小人求諸人。", "L’homme de bien exige de lui-même ; l’homme mesquin exige des autres.", "La responsabilité commence par examiner sa propre part avant d’attribuer l’échec à autrui.", "Confucius, Entretiens 15.21", "https://ctext.org/analects/wei-ling-gong/zh", "text", ["Responsabilité", "Exigence"], "Jūnzǐ qiú zhū jǐ, xiǎorén qiú zhū rén."],
  ["zh-32", "過而不改，是謂過矣。", "Commettre une faute et ne pas la corriger : voilà la véritable faute.", "L’erreur première devient moralement décisive lorsque l’on refuse d’en tirer une correction.", "Confucius, Entretiens 15.30", "https://ctext.org/analects/wei-ling-gong/zh", "text", ["Erreur", "Correction"], "Guò ér bù gǎi, shì wèi guò yǐ."],
  ["zh-33", "天時不如地利，地利不如人和。", "Le moment donné par le Ciel vaut moins que l’avantage du terrain ; l’avantage du terrain vaut moins que l’harmonie entre les hommes.", "La cohésion humaine peut compter davantage que des circonstances ou des ressources pourtant favorables.", "Mencius 2A.1", "https://ctext.org/mengzi/gong-sun-chou-i/zh", "text", ["Harmonie", "Stratégie"], "Tiān shí bù rú dì lì, dì lì bù rú rén hé."],
  ["zh-34", "得道者多助，失道者寡助。", "Celui qui suit la Voie reçoit beaucoup d’aide ; celui qui s’en écarte en reçoit peu.", "La légitimité morale rassemble plus durablement que la contrainte isolée.", "Mencius 2B.1", "https://ctext.org/mengzi/gong-sun-chou-ii/zh", "text", ["Légitimité", "Soutien"], "Dé dào zhě duō zhù, shī dào zhě guǎ zhù."],
  ["zh-35", "生於憂患，死於安樂。", "On grandit dans les épreuves et l’on dépérit dans un confort sans vigilance.", "La difficulté peut maintenir l’attention et développer les forces que l’aisance prolongée endort.", "Mencius 6B.15", "https://ctext.org/mengzi/gaozi-ii/zh", "text", ["Épreuve", "Vigilance"], "Shēng yú yōu huàn, sǐ yú ān lè."],
  ["zh-36", "窮則獨善其身，達則兼善天下。", "Dans l’adversité, perfectionne-toi seul ; dans la réussite, contribue au bien du monde.", "La portée de l’action change avec les moyens disponibles, mais l’exigence morale demeure.", "Mencius 7A.9", "https://ctext.org/mengzi/jin-xin-i/zh", "text", ["Intégrité", "Responsabilité"], "Qióng zé dú shàn qí shēn, dá zé jiān shàn tiān xià."],
  ["zh-37", "上善若水。水善利萬物而不爭。", "La bonté suprême est comme l’eau : elle profite à tous les êtres sans rivaliser.", "La force la plus féconde sert, s’adapte et demeure basse sans réclamer la première place.", "Laozi, Daodejing 8", "https://ctext.org/dao-de-jing/zh", "text", ["Eau", "Humilité"], "Shàng shàn ruò shuǐ. Shuǐ shàn lì wàn wù ér bù zhēng."],
  ["zh-38", "知足不辱，知止不殆，可以長久。", "Savoir se contenter évite l’humiliation ; savoir s’arrêter évite le danger et permet de durer.", "Reconnaître le point suffisant protège du mouvement par lequel l’excès détruit ce qu’il voulait accroître.", "Laozi, Daodejing 44", "https://ctext.org/dao-de-jing/zh", "text", ["Contentement", "Limite"], "Zhī zú bù rǔ, zhī zhǐ bù dài, kě yǐ cháng jiǔ."],
  ["zh-39", "不戰而屈人之兵，善之善者也。", "Soumettre l’armée adverse sans combattre est l’excellence suprême.", "La stratégie la plus accomplie obtient son but sans payer le coût humain et matériel de l’affrontement.", "Sunzi, L’Art de la guerre, chapitre 3", "https://ctext.org/art-of-war/attack-by-stratagem/zh", "text", ["Stratégie", "Paix"], "Bù zhàn ér qū rén zhī bīng, shàn zhī shàn zhě yě."],
  ["zh-40", "吾生也有涯，而知也無涯。", "Notre vie a une limite, mais la connaissance n’en a pas.", "Zhuangzi avertit qu’une vie finie s’épuise si elle prétend poursuivre sans mesure un savoir infini.", "Zhuangzi, « Nourrir le principe vital » 3", "https://ctext.org/zhuangzi/nourishing-the-lord-of-life/zh", "text", ["Savoir", "Limite"], "Wú shēng yě yǒu yá, ér zhī yě wú yá."],
  ["zh-41", "相濡以沫，不如相忘於江湖。", "Plutôt que de s’humecter mutuellement de leur écume, mieux vaut que les poissons s’oublient dans les fleuves et les lacs.", "L’aide héroïque dans un milieu étouffant vaut parfois moins que le retour à des conditions où chacun peut vivre librement.", "Zhuangzi, « Le Grand et Vénérable Maître » 6", "https://ctext.org/zhuangzi/great-and-most-honoured-master/zh", "text", ["Liberté", "Milieu"], "Xiāng rú yǐ mò, bù rú xiāng wàng yú jiāng hú."],
].map(makeChinese);

const SANSKRIT_EXPANSION = [
  ["in-17", "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥", "Le contact des sens donne froid et chaleur, plaisir et douleur ; ces états viennent et passent, ils sont impermanents : endure-les.", "Reconnaître le passage des sensations empêche de traiter chaque inconfort ou plaisir comme une réalité définitive.", "Bhagavad-Gītā 2.14", "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=2&field_nsutra_value=14&language=dv", "text", ["Impermanence", "Endurance"], "Mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ; āgamāpāyino'nityās tāṃs titikṣasva bhārata."],
  ["in-18", "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥", "Il ne naît ni ne meurt jamais ; ancien et éternel, il n’est pas tué lorsque le corps est tué.", "Le texte distingue le soi profond des transformations et de la disparition du corps.", "Bhagavad-Gītā 2.20", "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=2&field_nsutra_value=20&language=dv", "text", ["Âme", "Éternité"], "Na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ; ajo nityaḥ śāśvato'yaṃ purāṇo na hanyate hanyamāne śarīre."],
  ["in-19", "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥", "Quoi que fasse l’être exemplaire, les autres le font à leur tour ; la norme qu’il établit, le monde la suit.", "La responsabilité grandit avec la visibilité : l’exemple enseigne plus fortement que le discours.", "Bhagavad-Gītā 3.21", "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=3&field_nsutra_value=21&language=dv", "text", ["Exemple", "Responsabilité"], "Yad yad ācarati śreṣṭhas tat tad evetaro janaḥ; sa yat pramāṇaṃ kurute lokas tad anuvartate."],
  ["in-20", "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥", "Chaque fois que le dharma décline et que l’injustice s’élève, alors je me manifeste.", "La restauration de l’ordre juste est présentée comme une réponse récurrente aux crises morales de l’histoire.", "Bhagavad-Gītā 4.7", "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=4&field_nsutra_value=7&language=dv", "text", ["Justice", "Renouveau"], "Yadā yadā hi dharmasya glānir bhavati bhārata; abhyutthānam adharmasya tadātmānaṃ sṛjāmy aham."],
  ["in-21", "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।", "Mieux vaut son propre devoir imparfaitement accompli que le devoir d’un autre parfaitement exécuté.", "Une vocation authentique mérite d’être travaillée malgré ses défauts plutôt que remplacée par l’imitation brillante d’une voie étrangère.", "Bhagavad-Gītā 3.35", "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=3&field_nsutra_value=35&language=dv", "text", ["Vocation", "Authenticité"], "Śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt."],
  ["in-22", "अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।", "C’est par la pratique et le détachement que l’esprit se laisse maîtriser.", "La constance entraîne l’attention tandis que le détachement l’empêche de devenir captive du résultat.", "Bhagavad-Gītā 6.35", "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=6&field_nsutra_value=35&language=dv", "text", ["Pratique", "Détachement"], "Abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate."],
  ["in-23", "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।", "Sans haine envers aucun être, amical et compatissant envers tous.", "La vie spirituelle se vérifie dans une bienveillance qui ne réserve pas l’humanité au seul cercle des proches.", "Bhagavad-Gītā 12.13", "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=12&field_nsutra_value=13&language=dv", "text", ["Compassion", "Bienveillance"], "Adveṣṭā sarva-bhūtānāṃ maitraḥ karuṇa eva ca."],
  ["in-24", "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।", "Abandonnant tous les dharmas, cherche en moi seul ton refuge.", "Le texte conclut par un abandon de la maîtrise absolue au profit d’une confiance sans partage.", "Bhagavad-Gītā 18.66", "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=18&field_nsutra_value=66&language=dv", "text", ["Refuge", "Confiance"], "Sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja."],
  ["in-25", "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।", "Tout ce qui se meut dans ce monde est enveloppé par le Seigneur.", "La possession humaine est replacée dans une totalité qui invite à jouir sans accaparer.", "Īśā Upaniṣad 1", "https://sanskritdocuments.org/doc_upanishhat/iisha.html", "text", ["Unité", "Détachement"], "Īśāvāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat."],
  ["in-26", "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।", "Levez-vous, éveillez-vous, approchez les maîtres et comprenez.", "La connaissance demande un réveil actif et la fréquentation de ceux qui peuvent réellement transmettre.", "Kaṭha Upaniṣad 1.3.14", "https://sanskritdocuments.org/doc_upanishhat/katha.html", "text", ["Éveil", "Apprentissage"], "Uttiṣṭhata jāgrata prāpya varān nibodhata."],
  ["in-27", "असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्माऽमृतं गमय॥", "Conduis-moi de l’irréel au réel, des ténèbres à la lumière, de la mort à l’immortalité.", "La triple prière rassemble une quête de vérité, de connaissance et de dépassement de la finitude.", "Bṛhadāraṇyaka Upaniṣad 1.3.28", "https://sanskritdocuments.org/doc_upanishhat/bribasic.html", "text", ["Vérité", "Lumière"], "Asato mā sad gamaya; tamaso mā jyotir gamaya; mṛtyor mā amṛtaṃ gamaya."],
  ["in-28", "तत्त्वमसि श्वेतकेतो।", "Tu es Cela, Śvetaketu.", "La formule identifie le soi profond à la réalité fondamentale qui traverse tous les êtres.", "Chāndogya Upaniṣad 6.8.7", "https://sanskritdocuments.org/doc_upanishhat/chhaandogya.html", "text", ["Soi", "Unité"], "Tat tvam asi, Śvetaketo."],
  ["in-29", "अहं ब्रह्मास्मि।", "Je suis le brahman.", "La conscience profonde n’est pas séparée du principe absolu que la recherche croyait extérieur.", "Bṛhadāraṇyaka Upaniṣad 1.4.10", "https://sanskritdocuments.org/doc_upanishhat/bribasic.html", "text", ["Soi", "Absolu"], "Ahaṃ brahmāsmi."],
  ["in-30", "अयमात्मा ब्रह्म।", "Ce soi est le brahman.", "La maxime condense l’unité entre l’expérience intérieure et le fondement universel du réel.", "Māṇḍūkya Upaniṣad 2", "https://sanskritdocuments.org/doc_upanishhat/maandu.html", "text", ["Soi", "Réalité"], "Ayam ātmā brahma."],
  ["in-31", "विद्या ददाति विनयं विनयाद् याति पात्रताम्। पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥", "Le savoir donne l’humilité ; l’humilité rend digne ; la dignité ouvre la prospérité, d’où viennent le devoir juste puis le bonheur.", "La connaissance vaut par la transformation du caractère et par l’usage juste des capacités qu’elle procure.", "Subhāṣita sanskrit transmis dans les recueils didactiques", "https://sanskritdocuments.org/doc_z_misc_subhaashita/subhash.html", "lexicographic", ["Savoir", "Humilité"], "Vidyā dadāti vinayaṃ vinayād yāti pātratām; pātratvād dhanam āpnoti dhanād dharmaṃ tataḥ sukham."],
  ["in-32", "काकचेष्टा बको ध्यानं श्वाननिद्रा तथैव च। अल्पहारी गृहत्यागी विद्यार्थी पञ्चलक्षणम्॥", "L’effort du corbeau, la concentration du héron, le sommeil léger du chien, peu de nourriture et le détachement du foyer : cinq traits de l’étudiant.", "L’apprentissage est décrit comme une discipline d’attention, d’endurance et de simplicité.", "Subhāṣita sanskrit sur les qualités de l’étudiant", "https://sanskritdocuments.org/~sanskrit/doc_trial/fortransfer/Umesh/subhAShitAni_sa.html", "lexicographic", ["Étude", "Discipline"], "Kāka-ceṣṭā bako dhyānaṃ śvāna-nidrā tathaiva ca; alpāhārī gṛha-tyāgī vidyārthī pañca-lakṣaṇam."],
  ["in-33", "न कश्चित् कस्यचिन्मित्रं न कश्चित् कस्यचिद्रिपुः। व्यवहारेण जायन्ते मित्राणि रिपवस्तथा॥", "Nul n’est par nature l’ami ou l’ennemi de quelqu’un ; amis et ennemis naissent de la conduite.", "Les relations se construisent par les actes plutôt que par des étiquettes supposées immuables.", "Hitopadeśa, Mitralābha 1.72", "https://sa.wikisource.org/wiki/%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%8B%E0%A4%AA%E0%A4%A6%E0%A5%87%E0%A4%B6%E0%A4%83", "text", ["Relation", "Conduite"], "Na kaścit kasyacin mitraṃ na kaścit kasyacid ripuḥ; vyavahāreṇa jāyante mitrāṇi ripavas tathā."],
  ["in-34", "उत्सवे व्यसने चैव दुर्भिक्षे राष्ट्रविप्लवे। राजद्वारे श्मशाने च यस्तिष्ठति स बान्धवः॥", "Dans la fête comme l’épreuve, la famine, la crise du royaume, au tribunal comme au bûcher funéraire : celui qui demeure présent est un proche.", "La parenté véritable se reconnaît à une présence qui ne disparaît pas lorsque le coût de la fidélité augmente.", "Cāṇakya-nīti 1.12 ; variante également transmise par le Pañcatantra", "https://sanskritdocuments.org/doc_subhaashita/ChanakyaNeetiV8.pdf", "text", ["Fidélité", "Épreuve"], "Utsave vyasane caiva durbhikṣe rāṣṭra-viplave; rāja-dvāre śmaśāne ca yas tiṣṭhati sa bāndhavaḥ."],
].map(makeSanskrit);

const TAMIL_EXPANSION = [
  ["in-35", "தீயினாற் சுட்ட புண் உள்ளாறும்; ஆறாதே நாவினாற் சுட்ட வடு.", "La blessure causée par le feu guérit à l’intérieur ; la cicatrice laissée par la langue ne guérit pas.", "Une parole cruelle peut demeurer dans la mémoire bien après la disparition d’une blessure physique.", "Tiruvalluvar, Tirukkuṟaḷ 129", "https://www.projectmadurai.org/pm_etexts/utf8/pmuni0017.html", "text", ["Parole", "Blessure"], "Tīyiṉāṟ cuṭṭa puṇ uḷḷāṟum; āṟātē nāviṉāṟ cuṭṭa vaṭu."],
  ["in-36", "இன்னா செய்தாரை ஒறுத்தல் அவர்நாண நன்னயம் செய்து விடல்.", "Punir celui qui vous a fait du mal, c’est lui faire du bien jusqu’à ce qu’il ait honte.", "Répondre à l’offense par la noblesse retire au conflit sa logique de reproduction.", "Tiruvalluvar, Tirukkuṟaḷ 314", "https://www.projectmadurai.org/pm_etexts/utf8/pmuni0017.html", "text", ["Pardon", "Noblesse"], "Iṉṉā ceytārai oṟuttal avar nāṇa naṉṉayam ceytu viṭal."],
  ["in-37", "கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக.", "Apprends parfaitement ce qui mérite d’être appris ; puis vis conformément à cet apprentissage.", "Le savoir n’est achevé que lorsqu’il devient une manière cohérente de se tenir et d’agir.", "Tiruvalluvar, Tirukkuṟaḷ 391", "https://www.projectmadurai.org/pm_etexts/utf8/pmuni0017.html", "text", ["Étude", "Conduite"], "Kaṟka kacaṭaṟak kaṟpavai kaṟṟapiṉ niṟka ataṟkut taka."],
  ["in-38", "உழுதுண்டு வாழ்வாரே வாழ்வார்; மற்றெல்லாம் தொழுதுண்டு பின்செல் பவர்.", "Seuls vivent véritablement ceux qui labourent et mangent de leur travail ; les autres les suivent en dépendant d’eux.", "Le vers honore le travail nourricier dont dépend silencieusement toute la société.", "Tiruvalluvar, Tirukkuṟaḷ 1033", "https://www.projectmadurai.org/pm_etexts/utf8/pmuni0017.html", "text", ["Travail", "Nourriture"], "Uḻutuṇṭu vāḻvārē vāḻvār; maṟṟellām toḻutuṇṭu piṉcel pavar."],
].map(makeTamil);

const PALI_EXPANSION = [
  ["in-39", "Na hi verena verāni sammantīdha kudācanaṃ; averena ca sammanti, esa dhammo sanantano.", "Jamais les haines ne s’apaisent ici par la haine ; elles s’apaisent par l’absence de haine : telle est la loi éternelle.", "La vengeance entretient précisément la force qu’elle prétend supprimer ; seule une rupture de réciprocité peut interrompre la chaîne.", "Dhammapada 5", "https://www.tipitaka.net/tipitaka/dhp/verseload.php?verse=005", "text", ["Haine", "Paix"], "Na hi verena verāni sammantīdha kudācanaṃ; averena ca sammanti, esa dhammo sanantano."],
  ["in-40", "Appamādo amatapadaṃ, pamādo maccuno padaṃ.", "La vigilance est le chemin de l’immortel ; la négligence est le chemin de la mort.", "L’attention soutenue protège la vie intérieure tandis que l’insouciance la livre aux automatismes destructeurs.", "Dhammapada 21", "https://www.tipitaka.net/tipitaka/dhp/verseload.php?verse=021", "text", ["Vigilance", "Vie"], "Appamādo amatapadaṃ, pamādo maccuno padaṃ."],
].map(makePali);

const BENGALI_EXPANSION = [
  ["in-41", "যদি তোর ডাক শুনে কেউ না আসে তবে একলা চলো রে।", "Si personne ne répond à ton appel, alors marche seul.", "La solitude ne doit pas empêcher d’avancer lorsqu’une cause juste n’a pas encore trouvé de compagnons.", "Rabindranath Tagore, « Ekla Chalo Re », dans Gitabitan", "https://bn.wikisource.org/wiki/%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%98%E0%A6%A3%E0%A7%8D%E0%A6%9F%3A%E0%A6%97%E0%A7%80%E0%A6%A4%E0%A6%AC%E0%A6%BF%E0%A6%A4%E0%A6%BE%E0%A6%A8.djvu", "text", ["Courage", "Solitude"], "Jodi tor ḍāk śune keu nā āse tobe eklā colo re."],
].map(makeBengali);

const makeWorldEntry = ([
  id, place, mark, lang, rtl, original, french, meaning, source, sourceUrl, sourceKind, tags, transliteration, sourceNote,
]) => ({
  id, culture: "Monde", place, mark, lang, ...(rtl ? { rtl: true } : {}), original,
  ...(transliteration ? { transliteration } : {}), french, meaning, source, sourceUrl, sourceKind, tags,
  ...(sourceNote ? { sourceNote } : {}),
});

const WORLD_EXPANSION = [
  ["wo-32", "Corée", "한", "ko", false, "가는 말이 고와야 오는 말도 곱다.", "Il faut que les paroles qui partent soient belles pour que celles qui reviennent le soient aussi.", "Le ton que nous donnons à l’échange façonne souvent la réponse que nous recevons.", "Proverbe coréen recensé par le Wiktionnaire coréen", "https://ko.wiktionary.org/wiki/%EA%B0%80%EB%8A%94_%EB%A7%90%EC%9D%B4_%EA%B3%A0%EC%99%80%EC%95%BC_%EC%98%A4%EB%8A%94_%EB%A7%90%EB%8F%84_%EA%B3%B1%EB%8B%A4", "lexicographic", ["Parole", "Réciprocité"], "Ganeun mari gowaya oneun maldo gopda."],
  ["wo-33", "Turquie", "TR", "tr", false, "Gülü seven dikenine katlanır.", "Qui aime la rose supporte ses épines.", "Aimer une personne ou une œuvre implique d’accepter les difficultés inséparables de ce qui lui donne sa valeur.", "Proverbe turc expliqué d’après le dictionnaire de la Türk Dil Kurumu", "https://www.hurriyet.com.tr/egitim/gulu-seven-dikenine-katlanir-atasozunun-anlami-ve-ornek-cumle-icinde-kullanimi-tdk-41746025", "lexicographic", ["Amour", "Acceptation"], null],
  ["wo-34", "Pologne", "PL", "pl", false, "Miej serce i patrzaj w serce.", "Aie du cœur et regarde dans le cœur.", "La compréhension humaine demande une sensibilité capable d’aller au-delà des apparences et du raisonnement froid.", "Adam Mickiewicz, « Romantyczność », Ballady i romanse (1822)", "https://pl.wikisource.org/wiki/Poezye_Adama_Mickiewicza/Romantyczno%C5%9B%C4%87", "text", ["Cœur", "Compréhension"], null],
  ["wo-35", "Portugal", "PT", "pt", false, "Tudo vale a pena se a alma não é pequena.", "Tout en vaut la peine si l’âme n’est pas petite.", "La grandeur intérieure peut donner un sens à l’effort et au risque sans nier la douleur qu’ils comportent.", "Fernando Pessoa, Mensagem, « Mar português » (1934)", "https://pt.wikisource.org/wiki/Anexo%3AImprimir/Mensagem_%28Fernando_Pessoa%2C_1934%29", "text", ["Courage", "Grandeur"], null],
  ["wo-36", "Finlande", "FI", "fi", false, "Oma maa mansikka, muu maa mustikka.", "Son propre pays est une fraise ; le pays étranger, une myrtille.", "L’image affectueuse exprime la saveur particulière du foyer sans prétendre que l’ailleurs est sans valeur.", "Proverbe finnois attesté dans la tradition imprimée et recensé par le Wiktionnaire", "https://en.wiktionary.org/wiki/oma_maa_mansikka%2C_muu_maa_mustikka", "lexicographic", ["Patrie", "Foyer"], null],
  ["wo-37", "Suède", "SE", "sv", false, "Delad glädje är dubbel glädje, delad sorg är halv sorg.", "Une joie partagée est une joie doublée ; un chagrin partagé est un chagrin diminué de moitié.", "Le lien amplifie le bonheur et rend la peine plus supportable en rompant son isolement.", "Proverbe suédois recensé par le Wiktionnaire", "https://en.wiktionary.org/wiki/delad_gl%C3%A4dje_%C3%A4r_dubbel_gl%C3%A4dje", "lexicographic", ["Partage", "Émotion"], null],
  ["wo-38", "Irlande", "GA", "ga", false, "Is minic a bhris béal duine a shrón.", "Souvent, c’est la bouche d’une personne qui lui a cassé le nez.", "Une parole provocatrice peut déclencher le dommage physique ou social qu’un silence prudent aurait évité.", "Proverbe irlandais documenté par Daltaí na Gaeilge", "https://daltai.com/is-minic-a-bhris-beal-duine-a-shron/", "lexicographic", ["Parole", "Prudence"], null],
  ["wo-39", "Pays yoruba", "YO", "yo", false, "Bí ọmọde bá ṣubú, a wo iwájú; bí àgbà bá ṣubú, a wo ẹ̀hìn.", "Quand l’enfant tombe, il regarde devant lui ; quand l’ancien tombe, il regarde derrière lui.", "L’expérience invite à rechercher la cause d’une chute afin que le prochain pas ne la répète pas.", "Proverbe yoruba documenté avec marques tonales dans une collection linguistique", "https://www.settemilalingue.com/en/languages/yo/grammar/proverbs-and-idiomatic-expressions", "lexicographic", ["Expérience", "Cause"], null],
  ["wo-40", "Afrique australe", "ZU", "zu", false, "Umuntu ngumuntu ngabantu.", "Une personne devient une personne à travers les autres.", "L’humanité individuelle se forme et se reconnaît dans les relations, les soins et la communauté.", "Maxime ngunie sur l’ubuntu, citée par le gouvernement sud-africain", "https://www.gov.za/news/p-mlambo-ngcuka-national-imbizo-ubuntu-and-nation-building-17-nov-2006", "text", ["Humanité", "Communauté"], null],
  ["wo-41", "Aotearoa — Nouvelle-Zélande", "MĀ", "mi", false, "He aha te mea nui o te ao? He tangata, he tangata, he tangata.", "Quelle est la chose la plus importante au monde ? Ce sont les personnes, les personnes, les personnes.", "Le whakataukī place la dignité et les liens humains au-dessus de toute richesse impersonnelle.", "Whakataukī māori présenté par Te Ara, Encyclopédie de Nouvelle-Zélande", "https://teara.govt.nz/mi/photograph/7963/pa-harakeke", "text", ["Humanité", "Priorité"], null],
  ["wo-42", "Indonésie et monde malais", "ID", "id", false, "Berat sama dipikul, ringan sama dijinjing.", "Le lourd se porte ensemble sur les épaules, le léger se porte ensemble à la main.", "Une communauté digne de ce nom partage aussi bien les grandes épreuves que les tâches modestes.", "Proverbe malais-indonésien recensé par le portail lexicographique du Dewan Bahasa dan Pustaka", "https://prpm.dbp.gov.my/Cari1?d=175768&keyword=dijinjing", "lexicographic", ["Solidarité", "Travail"], null],
  ["wo-43", "Afrique de l’Est", "SW", "sw", false, "Asiyefunzwa na mamaye hufunzwa na ulimwengu.", "Celui que sa mère n’a pas instruit sera instruit par le monde.", "Les leçons négligées dans un cadre protecteur reviennent souvent sous la forme plus rude de l’expérience.", "Proverbe swahili attesté dans les ressources pédagogiques du National Examinations Council of Tanzania", "https://www.necta.go.tz/publications/Performance%20Analysis%20Books/Candidates%27%20Item%20Response%20Analysis%20%28CIRA%29%20Reports%20/CSEE/2018/021_KISWAHILI.pdf", "text", ["Éducation", "Expérience"], null],
  ["wo-44", "Arménie", "ՀՅ", "hy", false, "Քանի լեզու գիտես՝ այնքան մարդ ես։", "Tu es autant de personnes que tu connais de langues.", "Chaque langue apprise ouvre une nouvelle manière d’habiter le monde et de comprendre ceux qui le décrivent autrement.", "Proverbe arménien documenté par l’Université du Michigan", "https://lsa.umich.edu/content/dam/armenian-assets/armenian-documents/Armenian-wisdom--101--Poster.pdf", "lexicographic", ["Langues", "Humanité"], "Kani lezu gites, aynkan mard es."],
].map(makeWorldEntry);

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
    sourceUrl: "https://fr.wikisource.org/wiki/Gargantua_et_Pantagruel_(Texte_transcrit_et_annot%C3%A9_par_Clouzot)/Pantagruel", sourceKind: "text",
    tags: ["Savoir", "Conscience"],
  },
  {
    id: "fr-31", culture: "France", place: "France", mark: "FR", lang: "fr",
    original: "Il faut cultiver notre jardin.",
    french: "Il faut agir sur la part du monde qui dépend réellement de nous.",
    meaning: "Voltaire clôt le voyage spéculatif de Candide par un retour lucide au travail concret.",
    source: "Voltaire, Candide, chapitre XXX",
    sourceUrl: "https://fr.wikisource.org/wiki/Candide%2C_ou_l%E2%80%99Optimisme/Garnier_1877/Texte_entier", sourceKind: "text",
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
    sourceUrl: "https://cvc.cervantes.es/aula/didactired/anteriores/mayo_09/11052009_01.htm", sourceKind: "text",
    tags: ["Chemin", "Action"],
  },
  {
    id: "wo-29", culture: "Monde", place: "Allemagne", mark: "DE", lang: "de",
    original: "Was mich nicht umbringt, macht mich stärker.",
    french: "Ce qui ne me tue pas me rend plus fort.",
    meaning: "L’épreuve surmontée peut devenir une force, sans que toute souffrance soit pour autant bénéfique.",
    source: "Friedrich Nietzsche, Crépuscule des idoles, « Maximes et pointes », 8 (1889)",
    sourceUrl: "https://projekt-gutenberg.org/authors/friedrich-wilhelm-nietzsche/books/goetzen-daemmerung/chapter/3/", sourceKind: "text",
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

const ENGLISH_LEGACY_LEXICAL_IDS = new Set([
  "en-1", "en-3", "en-4", "en-5", "en-6", "en-7", "en-8", "en-9", "en-10", "en-11", "en-12", "en-13",
  "en-14", "en-15", "en-16", "en-17", "en-18", "en-20", "en-21", "en-22",
]);

const SOURCE_LINK_OVERRIDES = {
  "fr-1": { sourceUrl: "https://www.cnrtl.fr/definition/ruisseau", sourceKind: "lexicographic" },
  "fr-2": { sourceUrl: "https://www.cnrtl.fr/definition/petit", sourceKind: "lexicographic" },
  "fr-3": { sourceUrl: "https://www.cnrtl.fr/definition/pluie", sourceKind: "lexicographic" },
  "fr-4": { sourceUrl: "https://www.cnrtl.fr/definition/habit", sourceKind: "lexicographic" },
  "fr-5": { sourceUrl: "https://www.cnrtl.fr/definition/tard", sourceKind: "lexicographic" },
  "fr-6": { sourceUrl: "https://www.cnrtl.fr/definition/omelette", sourceKind: "lexicographic" },
  "fr-7": { sourceUrl: "https://www.cnrtl.fr/definition/vivre", sourceKind: "lexicographic" },
  "fr-8": { sourceUrl: "https://www.cnrtl.fr/definition/vaillant", sourceKind: "lexicographic" },
  "fr-11": { sourceUrl: "https://www.cnrtl.fr/definition/fum%C3%A9e", sourceKind: "lexicographic" },
  "fr-12": { sourceUrl: "https://www.cnrtl.fr/definition/faute", sourceKind: "lexicographic" },
  "fr-13": { sourceUrl: "https://www.cnrtl.fr/definition/absent", sourceKind: "lexicographic" },
  "fr-15": { sourceUrl: "https://www.cnrtl.fr/definition/forger", sourceKind: "lexicographic" },
  "fr-17": { sourceUrl: "https://www.cnrtl.fr/definition/semer", sourceKind: "lexicographic" },
  "fr-18": { sourceUrl: "https://www.cnrtl.fr/definition/langue", sourceKind: "lexicographic" },
  "fr-19": { sourceUrl: "https://www.cnrtl.fr/definition/union", sourceKind: "lexicographic" },
  "fr-20": { sourceUrl: "https://www.cnrtl.fr/definition/malheur", sourceKind: "lexicographic" },
  "fr-21": { sourceUrl: "https://www.cnrtl.fr/definition/risque", sourceKind: "lexicographic" },
  "fr-22": { sourceUrl: "https://www.cnrtl.fr/definition/chien", sourceKind: "lexicographic" },
  "en-24": { sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/The_proverbs_of_John_Heywood._Being_the_%22Proverbes%22_of_that_author_printed_1546._Ed.%2C_with_notes_and_introduction_%28IA_cu31924027146566%29.pdf", sourceKind: "text" },
  "en-29": { sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Gnomologia-_adages_and_proverbs%2C_wise_sentences%2C_and_witty_sayings_%28IA_gnomologiaadages00full%29.pdf", sourceKind: "text" },
  "en-30": { sourceUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/The_proverbs_of_John_Heywood._Being_the_%22Proverbes%22_of_that_author_printed_1546._Ed.%2C_with_notes_and_introduction_%28IA_cu31924027146566%29.pdf", sourceKind: "text" },
  "en-31": { sourceUrl: "https://www.gutenberg.org/ebooks/21", sourceKind: "derived" },
  "he-5": { sourceUrl: "https://www.sefaria.org/Lekha_Dodi.2", sourceKind: "text" },
  "he-8": { sourceUrl: "https://he.wiktionary.org/wiki/%D7%90%D7%99%D7%9F_%D7%94%D7%A0%D7%97%D7%AA%D7%95%D7%9D_%D7%9E%D7%A2%D7%99%D7%93_%D7%A2%D7%9C_%D7%A2%D7%99%D7%A1%D7%AA%D7%95", sourceKind: "lexicographic" },
  "he-19": { sourceUrl: "https://www.sefaria.org/Vayikra_Rabbah.9.3", sourceKind: "text" },
  "he-22": { sourceUrl: "https://www.sefaria.org/Mishnah_Sanhedrin.4.5", sourceKind: "text" },
  "he-23": { sourceUrl: "https://he.wiktionary.org/wiki/%D7%90%D7%99%D7%9F_%D7%93%D7%91%D7%A8_%D7%94%D7%A2%D7%95%D7%9E%D7%93_%D7%91%D7%A4%D7%A0%D7%99_%D7%94%D7%A8%D7%A6%D7%95%D7%9F", sourceKind: "lexicographic" },
  "la-7": { sourceUrl: "https://www.treccani.it/vocabolario/verba-volant-scripta-manent/", sourceKind: "lexicographic" },
  "la-11": { sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0137%3Abook%3D14%3Achapter%3D28", sourceKind: "text" },
  "la-13": { sourceUrl: "https://www.treccani.it/vocabolario/memento/", sourceKind: "lexicographic" },
  "la-15": { sourceUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0248%3Atext%3DAph.", sourceKind: "derived" },
  "la-16": { sourceUrl: "https://lex.dk/repetitio_est_mater_studiorum", sourceKind: "lexicographic" },
  "la-22": { sourceUrl: "https://en.wiktionary.org/wiki/qui_tacet_consentire_videtur", sourceKind: "lexicographic" },
  "la-25": { sourceUrl: "https://www.thelatinlibrary.com/bible/luke.shtml", sourceKind: "derived" },
  "la-27": { sourceUrl: "https://www.treccani.it/vocabolario/faber-est-suae-quisque-fortunae/", sourceKind: "lexicographic" },
  "in-1": { sourceUrl: "https://sanskritdocuments.org/doc_upanishhat/mundaka.html", sourceKind: "text" },
  "in-2": { sourceUrl: "https://sanskritdocuments.org/mirrors/mahabharata/unic/mbh13_sa.html", sourceKind: "text" },
  "in-3": { sourceUrl: "https://sanskritdocuments.org/doc_upanishhat/maha.html", sourceKind: "text" },
  "in-4": { sourceUrl: "https://sanskritdocuments.org/doc_z_misc_subhaashita/subhash.html", sourceKind: "lexicographic" },
  "in-6": { sourceUrl: "https://sa.wikisource.org/wiki/%E0%A4%AA%E0%A4%9E%E0%A5%8D%E0%A4%9A%E0%A4%A4%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A5%8D", sourceKind: "text" },
  "in-7": { sourceUrl: "https://sanskritdocuments.org/doc_z_misc_subhaashita/subhash.html", sourceKind: "lexicographic" },
  "in-9": { sourceUrl: "https://hi.wikiquote.org/wiki/%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80_%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A5%8B%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%81", sourceKind: "lexicographic" },
  "in-10": { sourceUrl: "https://hi.wikiquote.org/wiki/%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80_%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A5%8B%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%81", sourceKind: "lexicographic" },
  "in-11": { sourceUrl: "https://hi.wikiquote.org/wiki/%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80_%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A5%8B%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%81", sourceKind: "lexicographic" },
  "in-12": { sourceUrl: "https://hi.wikiquote.org/wiki/%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80_%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A5%8B%E0%A4%95%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%81", sourceKind: "lexicographic" },
  "wo-2": { sourceUrl: "https://ar.wikisource.org/wiki/%D8%B5%D9%8A%D8%AF_%D8%A7%D9%84%D8%AE%D8%A7%D8%B7%D8%B1/%D9%81%D8%B5%D9%84%3A_%D8%A7%D9%84%D8%B5%D8%A8%D8%B1_%D9%85%D9%81%D8%AA%D8%A7%D8%AD_%D8%A7%D9%84%D9%81%D8%B1%D8%AC", sourceKind: "text" },
  "wo-3": { sourceUrl: "https://en.wikiquote.org/wiki/Swahili_proverbs", sourceKind: "lexicographic" },
  "wo-5": { sourceUrl: "https://www.treccani.it/vocabolario/gatta2/", sourceKind: "lexicographic" },
  "wo-6": { sourceUrl: "https://cvc.cervantes.es/lengua/refranero/Ficha.aspx?Lng=11&Par=58652", sourceKind: "lexicographic" },
  "wo-7": { sourceUrl: "https://pt.wiktionary.org/wiki/devagar_se_vai_ao_longe", sourceKind: "lexicographic" },
  "wo-12": { sourceUrl: "https://ar.wikiquote.org/wiki/%D8%A7%D9%84%D8%AC%D9%87%D9%84", sourceKind: "lexicographic" },
  "wo-13": { sourceUrl: "https://ar.wikiquote.org/wiki/%D8%A3%D9%85%D8%AB%D8%A7%D9%84_%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D8%A9", sourceKind: "lexicographic" },
  "wo-14": { sourceUrl: "https://ar.wikiquote.org/wiki/%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%87%D8%A7%D8%AF", sourceKind: "lexicographic" },
  "wo-19": { sourceUrl: "https://cvc.cervantes.es/lengua/refranero/ficha.aspx?Lng=0&Par=58122", sourceKind: "lexicographic" },
  "wo-21": { sourceUrl: "https://www.treccani.it/enciclopedia/proverbi_%28Enciclopedia-dell%27Italiano%29/", sourceKind: "lexicographic" },
  "wo-24": { sourceUrl: "https://ru.wiktionary.org/wiki/%D1%81%D0%B5%D0%BC%D1%8C_%D1%80%D0%B0%D0%B7_%D0%BE%D1%82%D0%BC%D0%B5%D1%80%D1%8C,_%D0%BE%D0%B4%D0%B8%D0%BD_%D1%80%D0%B0%D0%B7_%D0%BE%D1%82%D1%80%D0%B5%D0%B6%D1%8C", sourceKind: "lexicographic" },
  "wo-26": { sourceUrl: "https://ordnet.dk/ddo/ordbog?def_id=21033616&mpage=3&query=%3Fil&subentry_id=59004182", sourceKind: "lexicographic" },
};

for (const [id, original] of [
  ["zh-4", "滴水穿石"], ["zh-7", "失敗是成功之母"], ["zh-8", "百聞不如一見"], ["zh-9", "冰凍三尺，非一日之寒"],
  ["zh-10", "活到老，學到老"], ["zh-11", "眾人拾柴火焰高"], ["zh-12", "前人栽樹，後人乘涼"], ["zh-15", "不怕慢，就怕站"],
]) {
  SOURCE_LINK_OVERRIDES[id] = {
    sourceUrl: `https://ctext.org/dictionary.pl?if=zh&char=${encodeURIComponent(original)}`,
    sourceKind: "lexicographic",
  };
}

for (const [id, original] of [
  ["zh-1", "千里之行，始於足下。"], ["zh-2", "學而時習之，不亦說乎？"], ["zh-3", "三人行，必有我師焉。"],
  ["zh-4", "滴水穿石。"], ["zh-5", "塞翁失馬，焉知非福。"], ["zh-6", "欲速則不達。"],
  ["zh-7", "失敗是成功之母。"], ["zh-8", "百聞不如一見。"], ["zh-9", "冰凍三尺，非一日之寒。"],
  ["zh-10", "活到老，學到老。"], ["zh-11", "眾人拾柴火焰高。"], ["zh-12", "前人栽樹，後人乘涼。"],
  ["zh-13", "知己知彼，百戰不殆。"], ["zh-15", "不怕慢，就怕站。"], ["zh-16", "己所不欲，勿施於人。"],
  ["zh-17", "溫故而知新，可以為師矣。"], ["zh-18", "知之為知之，不知為不知，是知也。"],
  ["zh-19", "工欲善其事，必先利其器。"], ["zh-20", "禍兮福之所倚，福兮禍之所伏。"],
  ["zh-21", "知人者智，自知者明。"],
]) {
  SOURCE_LINK_OVERRIDES[id] = { ...SOURCE_LINK_OVERRIDES[id], original };
}

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
  const lexicalFallback = ENGLISH_LEGACY_LEXICAL_IDS.has(entry.id)
    ? { sourceUrl: ENGLISH_PROVERBS_URL, sourceKind: "lexicographic" }
    : {};
  const linkOverride = SOURCE_LINK_OVERRIDES[entry.id] || {};
  const merged = { ...entry, ...lexicalFallback, ...linkOverride, ...override };
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
const worldClassicsExpansion = [
  ...GREEK_EXPANSION,
  ...LATIN_EXPANSION,
  ...CHINESE_EXPANSION,
  ...SANSKRIT_EXPANSION,
  ...TAMIL_EXPANSION,
  ...PALI_EXPANSION,
  ...BENGALI_EXPANSION,
  ...WORLD_EXPANSION,
];
const candidates = [
  ...legacy.filter((entry) => !EXCLUDED_IDS.has(entry.id)),
  ...ADDED,
  ...priorityExpansion,
  ...worldClassicsExpansion,
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
  if (!entry.sourceUrl) qualityIssues.push(`${entry.id}: provenance cliquable manquante`);
  if (entry.sourceUrl) {
    try {
      const url = new URL(entry.sourceUrl);
      if (!/^https?:$/.test(url.protocol)) qualityIssues.push(`${entry.id}: protocole de source non web`);
    } catch {
      qualityIssues.push(`${entry.id}: URL de source invalide`);
    }
  }
  if (entry.culture === "Hébreu" && !entry.rtl) qualityIssues.push(`${entry.id}: direction RTL manquante`);
  if (["he", "grc", "zh", "sa", "hi", "ta", "pi", "bn", "ko", "hy", "ja", "ar", "ru", "fa"].includes(entry.lang)
    && /[^\x00-\x7F]/.test(entry.original) && !entry.transliteration) {
    qualityIssues.push(`${entry.id}: translittération manquante pour une écriture non latine`);
  }
}
for (const entry of priorityExpansion) {
  if (!entry.sourceUrl) qualityIssues.push(`${entry.id}: source cliquable obligatoire pour l’expansion ×2`);
  if (entry.culture === "Hébreu" && !entry.transliteration) {
    qualityIssues.push(`${entry.id}: translittération manquante pour l’expansion hébraïque ×2`);
  }
}
for (const entry of worldClassicsExpansion) {
  if (!entry.sourceUrl) qualityIssues.push(`${entry.id}: source cliquable obligatoire pour l’expansion mondiale`);
  if (["grc", "zh", "sa", "ta", "pi", "bn", "ko", "hy"].includes(entry.lang) && !entry.transliteration) {
    qualityIssues.push(`${entry.id}: translittération manquante pour une langue à écriture non latine`);
  }
}
if (exactDuplicates.length) qualityIssues.push(`${exactDuplicates.length} doublon(s) exact(s) dans les candidats`);
if (nearDuplicates.length) qualityIssues.push(`${nearDuplicates.length} paire(s) quasi identique(s) à revoir`);
if (translationNearDuplicates.length) {
  qualityIssues.push(`${translationNearDuplicates.length} paire(s) de traductions quasi identiques à revoir`);
}
const priorityTargets = new Map([
  ["France", 120],
  ["Anglais", 120],
  ["Hébreu", 100],
  ["Grec ancien", 40],
  ["Latin", 40],
  ["Chine", 40],
  ["Inde", 40],
  ["Monde", 40],
]);
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
- Nouvelles entrées classiques ajoutées et sourcées : ${ADDED.length + priorityExpansion.length + worldClassicsExpansion.length}.
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
