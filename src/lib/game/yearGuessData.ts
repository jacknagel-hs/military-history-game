import type { Era } from "./yearScoring";

export interface YearGuessItem {
  id: string;
  imageUrl: string;
  year: number;
  era: Era;
  context: string;
}

export const yearGuessItems: YearGuessItem[] = [
  {
    id: "pompeii-fresco",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/The_so-called_Sappho_portrait%2C_Pompeii_%28AD_45-79%29.jpg",
    year: 60,
    era: "ancient",
    context: "A Roman fresco, preserved by the eruption that buried Pompeii.",
  },
  {
    id: "tres-riches-heures",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_Janvier.jpg",
    year: 1414,
    era: "classical",
    context: "An illuminated manuscript page from a medieval book of hours.",
  },
  {
    id: "night-watch",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Rembrandt_van_Rijn-De_Nachtwacht-1642.jpg",
    year: 1642,
    era: "early_modern",
    context: "A famous Dutch group portrait painting.",
  },
  {
    id: "valley-of-death",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Roger_Fenton_-_Shadow_of_the_Valley_of_Death.jpg",
    year: 1855,
    era: "early_modern",
    context: "One of the earliest surviving war photographs, from the Crimean War.",
  },
  {
    id: "somme-1916",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/The_Battle_of_the_Somme%2C_July-november_1916_Q1608.jpg",
    year: 1916,
    era: "modern",
    context: "A photograph of troops marching to the front during the First World War.",
  },
  {
    id: "iwo-jima-flag",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Raising_the_Flag_on_Iwo_Jima_by_Joe_Rosenthal.jpg",
    year: 1945,
    era: "modern",
    context: "A photograph from the Pacific theater of the Second World War.",
  },
  {
    id: "apollo-11",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Aldrin_Apollo_11.jpg",
    year: 1969,
    era: "modern",
    context: "A photograph from the Space Race.",
  },
];
