import { type Product } from "@/types";

export const productCategories = {
  klassikerne: "Klassikerne",
  nyeVarianter: "Nye varianter",
};

export type ProductCategory = keyof typeof productCategories;

export const products: Product[] = [
  {
    id: "509df97d-eef5-490b-b4bf-2db48ad5cb0c",
    name: "Alkoholfri Classic",
    description:
      "Vores alkoholfrie Classic er en forfriskende og elegant drik, der leverer den tidløse smag og raffinement, du forventer fra en klassisk cocktail, uden alkoholens indvirkning. Denne smagsoplevelse byder på nøje udvalgte ingredienser, der fusionerer sammen i en harmonisk blanding af friskhed og kompleksitet. Nyd den sofistikerede karakter af denne alkoholfrie drik, perfekt til enhver lejlighed, hvor du ønsker at opretholde elegance og smag uden alkoholens tilstedeværelse.",
    rating: 5,
    price: 10,
    images: [
      {
        id: "trøjborgbryg-classic",
        name: "trøjborgbryg classic",
        url: "/img/products/trøjborgbryg-classic.png",
        primary: true,
      },
    ],
    category: "klassikerne",
  },
  {
    id: "4df2334b-2ff2-4e2d-8f88-465c8d9f7870",
    name: "Alkoholfri Pilsner",
    description:
      "Vores alkoholfrie pilsner er den ideelle ledsager til ølentusiaster, der ønsker at nyde den forfriskende smag af en kvalitetspilsner uden alkoholens indhold. Denne nøje håndværkede alkoholfrie øl byder på den karakteristiske lysgyldne farve og skummende krone, der kendetegner en klassisk pilsner. Med en forfriskende og let maltet smag kombineret med behagelig bitterhed, tilbyder vores alkoholfrie pilsner en autentisk øloplevelse, der er perfekt til dem, der ønsker at nyde en kølig og velsmagende øl uden alkohol.",
    rating: 5,
    price: 10,
    images: [
      {
        id: "trøjborgbryg-pilsner",
        name: "trøjborgbryg pilsner",
        url: "/img/products/trøjborgbryg-pilsner.png",
        primary: true,
      },
    ],
    category: "klassikerne",
  },
  {
    id: "d621ba31-c0a2-4bd5-8ef4-645443eb64db",
    name: "Alkoholfri IPA",
    description:
      "Vores alkoholfrie IPA er en banebrydende kombination af smagsrige humler og forfriskende frugtighed, skabt specielt til dem, der sætter pris på kompleksiteten i en India Pale Ale uden alkoholens påvirkning. Denne alkoholfrie IPA er fyldt med livlige aromaer af citrus, tropiske frugter og har en balanceret bitterhed, der efterlader dine smagsløg opfyldt uden alkoholens tyngde. Nyd den fulde oplevelse af en velbrygget IPA med vores alkoholfrie alternativ, der leverer friskhed og karakter uden at gå på kompromis med smagen.",
    rating: 5,
    price: 10,
    images: [
      {
        id: "trøjborgbryg-ipa",
        name: "trøjborgbryg ipa",
        url: "/img/products/trøjborgbryg-ipa.png",
        primary: true,
      },
    ],
    category: "klassikerne",
  },
  {
    id: "dc313496-933e-45a6-9448-b08f4af89161",
    name: "Alkoholfri Citrus",
    description:
      "Vores alkoholfrie Citrus-øl er en forfriskende bryg, der kombinerer den klassiske fornemmelse af øl med en sprudlende citrustvist. Den lette gyldne farve og den forfriskende skumtop er ledsaget af en livlig duft af citrusfrugter. Med en harmonisk blanding af citron, lime og appelsin skaber denne øl en lys og livlig smagsoplevelse uden alkoholens indflydelse. Hvert slurk inviterer dig til en kølig, forfriskende rejse gennem citrusfrugternes verden. Nyd denne alkoholfrie Citrus-øl som det ideelle valg for dem, der søger en smagsfuld og opkvikkende øloplevelse uden alkoholens virkning.",
    rating: 5,
    price: 10,
    images: [
      {
        id: "trøjborgbryg-citrus",
        name: "trøjborgbryg citrus",
        url: "/img/products/trøjborgbryg-citrus.png",
        primary: true,
      },
    ],
    category: "nyeVarianter",
  },
  {
    id: "270b0abd-b1c1-4d64-83b9-d7bf249358fd",
    name: "Alkoholfri Mango & Passionsfrugt",
    description:
      "Vores alkoholfrie Mango & Passionsfrugt-øl er en eksotisk rejse for dine smagsløg. Den gyldne drik åbner op for en forfriskende kombination af saftig mango og intens passionsfrugt, der tager dine smagsløg med på en tropisk ferie. Den lette og brusende konsistens skaber en behagelig mundfølelse, mens de naturlige frugtsmage danser på tungen. Vores alkoholfrie Mango & Passionsfrugt-øl er den perfekte ledsager til dem, der søger en spændende og velsmagende oplevelse uden alkoholens tilstedeværelse. Tag et øjeblik og lad dig forføre af denne frugtagtige symfoni, der bringer solrige smagsnoter til enhver lejlighed",
    rating: 5,
    price: 10,
    images: [
      {
        id: "trøjborgbryg-mango-passionsfrugt",
        name: "trøjborgbryg Mango & Passionsfrugt",
        url: "/img/products/trøjborgbryg-mango-passionsfrugt.png",
        primary: true,
      },
    ],
    category: "nyeVarianter",
  },
  {
    id: "625f3828-8983-4590-87f0-b243497d4ae5",
    name: "Alkoholfri Appelsin",
    description:
      "Vores alkoholfrie Appelsin-øl er en forfriskende bryg, der kombinerer den klassiske øloplevelse med den saftige og livlige smag af solmoden appelsin. Med en gylden farve og en frisk duft af appelsinskal åbner denne øl op for en frugtagtig symfoni på tungen. Den lette brusen og subtile bitterhed skaber en forfriskende smagsprofil, der gør denne alkoholfrie Appelsin-øl til det perfekte valg for dem, der ønsker at nyde en let og velsmagende øl uden alkoholens virkning. Tag et sip, lad de citrusnoter fortrylle dine smagsløg, og oplev en forfriskende nydelse til enhver lejlighed.",
    rating: 5,
    price: 10,
    images: [
      {
        id: "trøjborgbryg-appelsin",
        name: "trøjborgbryg appelsin",
        url: "/img/products/trøjborgbryg-appelsin.png",
        primary: true,
      },
    ],
    category: "nyeVarianter",
  },
];
