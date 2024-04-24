export type ItemType = {
  id: string;
  name: string;
  price: {
    amount: string;
    quantity: string;
  }[];
  searchTexts: string[];
};

const items: ItemType[] = [
  {
    id: "ashirwad",
    name: "Aashirwad aata",
    price: [
      {
        amount: "220",
        quantity: "5 kg",
      },
    ],
    searchTexts: ["aata", "ata", "aashirwad", "ashirwad"],
  },
  {
    id: "shital",
    name: "Shital Bhog aata",
    price: [
      {
        amount: "185",
        quantity: "5 kg",
      },
      {
        amount: "40 / 42",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["aata", "ata", "shital", "sheetal"],
  },
  {
    id: "aata",
    name: "aata",
    price: [
      {
        amount: "34",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["ata", "aata", "khula aata"],
  },
  {
    id: "chini",
    name: "chini",
    price: [
      {
        amount: "48",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["chini", "cheni"],
  },
  {
    id: "dal",
    name: "chana dal",
    price: [
      {
        amount: "90/85",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["dal", "chanadal", "chana dal"],
  },
  {
    id: "dal",
    name: "rahar dal",
    price: [
      {
        amount: "180/190",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["dal", "rahardal", "rahar dal"],
  },
  {
    id: "dal",
    name: "masoor dal",
    price: [
      {
        amount: "100/130",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["dal", "masoori", "masoor dal"],
  },
  {
    id: "dal",
    name: "mong dal",
    price: [
      {
        amount: "130/120",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["dal", "mong", "mong dal"],
  },
  {
    id: "dal",
    name: "urad dal",
    price: [
      {
        amount: "140/160",
        quantity: "1kg",
      },
    ],
    searchTexts: ["dal", "urad", "urad dal"],
  },
  {
    id: "chana",
    name: "chana",
    price: [
      {
        amount: "80",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["chana", "kala chana", "chota chana"],
  },
  {
    id: "chura",
    name: "chura",
    price: [
      {
        amount: "50/45",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["chura"],
  },
  {
    id: "chura",
    name: "basmati chura",
    price: [
      {
        amount: "60",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["chura", "basmati chura"],
  },
  {
    id: "matar",
    name: "peela matar",
    price: [
      {
        amount: "80",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["matar", "peela matar", "pila matar"],
  },
  {
    id: "matar",
    name: "hara matar",
    price: [
      {
        amount: "120/140",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["matar", "hara matar"],
  },
  {
    id: "badam",
    name: "badam,",
    price: [
      {
        amount: "180",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["badam", "badaam"],
  },
  {
    id: "nakuldana",
    name: "nakuldana",
    price: [
      {
        amount: "80",
        quantity: "1 kg",
      },
      {
        amount: "10",
        quantity: "100 g",
      },
    ],
    searchTexts: ["nakuldana"],
  },
  {
    id: "misri",
    name: "tal misri",
    price: [
      {
        amount: "120",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["misri", "tal misri", "talmisri"],
  },
  {
    id: "misri",
    name: "diamond misri",
    price: [
      {
        amount: "80",
        quantity: "1 kg",
      },
      {
        amount: "10",
        quantity: "100 g",
      },
    ],
    searchTexts: ["misri", "diamond", "diamond misri"],
  },
  {
    id: "kaju",
    name: "kaju",
    price: [
      {
        amount: "800",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["kaaju", "kaju"],
  },
  {
    id: "kismish",
    name: "kismish",
    price: [
      {
        amount: "300",
        quantity: "1 kg",
      },
      {
        amount: "80",
        quantity: "250 g",
      },
    ],
    searchTexts: ["kismis", "kishmish", "kismish"],
  },
  {
    id: "chuhara",
    name: "chuhara",
    price: [
      {
        amount: "40",
        quantity: "100 g",
      },
    ],
    searchTexts: ["chuhara", "chuara"],
  },
  {
    id: "makhana",
    name: "makhana",
    price: [
      {
        amount: "200/250",
        quantity: "packet",
      },
    ],
    searchTexts: ["makhana", "makana"],
  },
  {
    id: "badam",
    name: "pista badam",
    price: [
      {
        amount: "800",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["badam", "pista", "pista badam"],
  },
  {
    id: "gadi",
    name: "gadi",
    price: [
      {
        amount: "30/35",
        quantity: "100 g",
      },
    ],
    searchTexts: ["gari", "gadi"],
  },
  {
    id: "chawal",
    name: "amrit chawal",
    price: [
      {
        amount: "42/40",
        quantity: "1 kg",
      },
      {
        amount: "920/960",
        quantity: "25 kg",
      },
    ],
    searchTexts: ["chawal", "amrit", "amrit chawal"],
  },
  {
    id: "chawal",
    name: "laxmichawal",
    price: [
      {
        amount: "40/38",
        quantity: "1 kg",
      },
      {
        amount: "850/880",
        quantity: "25 kg",
      },
    ],
    searchTexts: ["chawal", "laxmi", "laxmi chawal"],
  },
  {
    id: "chawal",
    name: "baba katrani chawal",
    price: [
      {
        amount: "55",
        quantity: "1 kg",
      },
      {
        amount: "1274",
        quantity: "25 kg",
      },
    ],
    searchTexts: ["chawal", "baba", "baba chawal", "baba katrani"],
  },
  {
    id: "chawal",
    name: "taj mahal chawal",
    price: [
      {
        amount: "38",
        quantity: "1 kg",
      },
      {
        amount: "860/1000",
        quantity: "25 kg",
      },
    ],
    searchTexts: ["chawal", "taj mahal", "taj chawal", "taj"],
  },
  {
    id: "chawal",
    name: "gol dana chawal",
    price: [
      {
        amount: "100",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["chawal", "gol dana", "gol dana chawal", "goldana"],
  },
  {
    id: "chawal",
    name: "modo chawal",
    price: [
      {
        amount: "36/35",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["chawal", "modo", "modo chawal"],
  },
  {
    id: "chawal",
    name: "nilgiri chawal",
    price: [
      {
        amount: "32/34",
        quantity: "1 kg",
      },
      {
        amount: "750",
        quantity: "25 kg",
      },
    ],
    searchTexts: ["chawal", "nilgiri", "nilgiri chawal"],
  },
  {
    id: "chawal",
    name: "pragati chawal",
    price: [
      {
        amount: "32/34",
        quantity: "1 kg",
      },
      {
        amount: "1210",
        quantity: "25 kg",
      },
    ],
    searchTexts: ["chawal", "pragati", "pragati chawal"],
  },
  {
    id: "mung",
    name: "mung",
    price: [
      {
        amount: "140/120",
        quantity: "1 kg",
      },
    ],
    searchTexts: ["mong", "mung"],
  },
  {
    id: "chawal",
    name: "pragati miliket",
    price: [
      {
        amount: "54/52",
        quantity: "1 kg",
      },
    ],
    searchTexts: [
      "chawal",
      "miliket",
      "pragati miliket chawal",
      "pragati miliket",
    ],
  },
  {
    id: "mangrel",
    name: "mangrel",
    price: [
      {
        amount: "20/25",
        quantity: "50 g",
      },
    ],
    searchTexts: ["mangrel", "mangrail"],
  },
  {
    id: "sarso",
    name: "pela sarso",
    price: [
      {
        amount: "20",
        quantity: "100 g",
      },
    ],
    searchTexts: ["pila sarso", "peela sarso", "pela sarso"],
  },
  {
    id: "sarso",
    name: "kala sarso",
    price: [
      {
        amount: "20",
        quantity: "100 g",
      },
    ],
    searchTexts: ["kala sarso", "kaala sarso"],
  },
  {
    id: "methi",
    name: "methi",
    price: [
      {
        amount: "20",
        quantity: "100 g",
      },
    ],
    searchTexts: ["methi", "meethi"],
  },
  {
    id: "golki",
    name: "golki",
    price: [
      {
        amount: "60/50/45",
        quantity: "50 g",
      },
    ],
    searchTexts: ["gota golki", "golki"],
  },
  {
    id: "pachforan",
    name: "pachforan",
    price: [
      {
        amount: "15",
        quantity: "50 g",
      },
    ],
    searchTexts: ["foran", "panchforan", "pachforan"],
  },
  {
    id: "jeera",
    name: "jeera",
    price: [
      {
        amount: "60/70",
        quantity: "100 g",
      },
    ],
    searchTexts: ["jira", "jeera", "jera"],
  },
  {
    id: "jawaeen",
    name: "jawaeen",
    price: [
      {
        amount: "20/25",
        quantity: "50 g",
      },
    ],
    searchTexts: ["jawaen", "jawaeen"],
  },
  {
    id: " powder",
    name: "jeera powder",
    price: [
      {
        amount: "50",
        quantity: "50 g",
      },
    ],
    searchTexts: ["powder", "jera powder", "jeera powder", "jira powder"],
  },
  {
    id: "masala",
    name: "mix masala",
    price: [
      {
        amount: "40",
        quantity: "100 g",
      },
    ],
    searchTexts: ["masala", "mix", "mix masala"],
  },
  {
    id: "powder",
    name: "dhaniya powder",
    price: [
      {
        amount: "30",
        quantity: "100 g",
      },
    ],
    searchTexts: ["dhaniya powder"],
  },
  {
    id: "powder",
    name: "mircha powder",
    price: [
      {
        amount: "25",
        quantity: "50 g",
      },
    ],
    searchTexts: ["lal mircha powder", "mircha powder"],
  },
  {
    id: "powder",
    name: "golki powder",
    price: [
      {
        amount: "60",
        quantity: "50 g",
      },
    ],
    searchTexts: ["golki powder"],
  },
  {
    id: "soaf",
    name: "soaf",
    price: [
      {
        amount: "20",
        quantity: "50 g",
      },
    ],
    searchTexts: ["sof", "suaf", "soaf"],
  },
  {
    id: "postu",
    name: "postu",
    price: [
      {
        amount: "80",
        quantity: "50 g",
      },
    ],
    searchTexts: ["postu", "pustu", "poshtu"],
  },
  {
    id: "anda",
    name: "anda",
    price: [
      {
        amount: "90",
        quantity: "8 pc",
      },
    ],
    searchTexts: ["andaa", "aanda", "anda"],
  },
  {
    id: "sobean",
    name: "sobean",
    price: [
      {
        amount: "30",
        quantity: "250 g",
      },
    ],
    searchTexts: ["soyabean", "soobean", "sobean", "sobeen"],
  },
  {
    id: "chana ",
    name: "kabali chana",
    price: [
      {
        amount: "180",
        quantity: "250 g",
      },
    ],
    searchTexts: ["kabali", "kabali chana", "bara chana", "bada chana"],
  },
  {
    id: "aalo",
    name: "aalo",
    price: [
      {
        amount: "20/22/24/25",
        quantity: "kg",
      },
    ],
    searchTexts: ["alo", "aalo"],
  },
  {
    id: "piyaj",
    name: "piyaj",
    price: [
      {
        amount: "30/32/34",
        quantity: "kg",
      },
    ],
    searchTexts: ["piyaz", "piyaj", "peyaj"],
  },
  {
    id: "chowmein",
    name: "chowmein",
    price: [
      {
        amount: "35/40/20",
        quantity: "kg",
      },
    ],
    searchTexts: ["chow", "chowmein", "noodle"],
  },
  {
    id: "soji",
    name: "soji",
    price: [
      {
        amount: "25/30",
        quantity: "1/2 kg",
      },
    ],
    searchTexts: ["suji", "soji", "sooji"],
  },
  {
    id: "maida",
    name: "maida",
    price: [
      {
        amount: "35",
        quantity: "1/2kg",
      },
    ],
    searchTexts: ["meda", "maida"],
  },
  {
    id: "sattu",
    name: "sattu",
    price: [
      {
        amount: "80",
        quantity: "1/2kg",
      },
    ],
    searchTexts: ["satu", "sattu"],
  },
  {
    id: "besan",
    name: "besan",
    price: [
      {
        amount: "130",
        quantity: "1 kg",
      },
      {
        amount: "65",
        quantity: "1/2 kg",
      },
    ],
    searchTexts: ["besan"],
  },
  {
    id: "refine",
    name: "mahakush refine",
    price: [
      {
        amount: "115/120",
        quantity: "1 l",
      },
    ],
    searchTexts: ["refine", "mahakush"],
  },
  {
    id: "refine",
    name: "saffola",
    price: [
      {
        amount: "130/140",
        quantity: "1 l",
      },
    ],
    searchTexts: ["saffola", "saffola refine"],
  },
  {
    id: "tel",
    name: "hathi tel",
    price: [
      {
        amount: "140",
        quantity: "1 l",
      },
    ],
    searchTexts: ["hathi tel", "sarso tel"],
  },
  {
    id: "tel",
    name: "saloni tel",
    price: [
      {
        amount: "135",
        quantity: "1 l",
      },
    ],
    searchTexts: ["saloni", "shaloni"],
  },
  {
    id: "",
    name: "",
    price: [
      {
        amount: "2",
        quantity: "4kg",
      },
    ],
    searchTexts: [],
  },
];

export { items };
