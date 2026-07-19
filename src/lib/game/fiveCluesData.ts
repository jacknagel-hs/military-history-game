export type ClueCategory = "person" | "place" | "battle" | "thing";

export interface FiveCluesSet {
  id: string;
  category: ClueCategory;
  answerLabel: string;
  acceptedAnswers: string[];
  clues: [string, string, string, string, string];
}

export const fiveCluesSets: FiveCluesSet[] = [
  {
    id: "rommel",
    category: "person",
    answerLabel: "Erwin Rommel",
    acceptedAnswers: ["Erwin Rommel", "Rommel", "Field Marshal Rommel"],
    clues: [
      "I commanded a light infantry battalion decorated for valor in a war most people don't associate me with.",
      "My tactical writing became required reading at military academies before my most famous campaign began.",
      "Hitler personally selected me to command an armored division in the invasion of France.",
      "Allied troops nicknamed me after a desert animal for my speed and cunning in North Africa.",
      "I was implicated in the July 1944 plot against Hitler and forced to take my own life.",
    ],
  },
  {
    id: "stalingrad",
    category: "place",
    answerLabel: "Stalingrad",
    acceptedAnswers: ["Stalingrad", "Battle of Stalingrad"],
    clues: [
      "Before the 20th century, this city changed its name twice for reasons unrelated to the war that made it famous.",
      "It sits on the west bank of a major river long used as a boundary between east and west.",
      'Fighting here was so close-quarters that soldiers called it "Rattenkrieg" — the war of rats.',
      "An entire enemy army group was encircled and forced to surrender here in early 1943.",
      "The city was renamed after the Soviet leader, then renamed again in the 1960s to remove his name.",
    ],
  },
  {
    id: "midway",
    category: "battle",
    answerLabel: "Battle of Midway",
    acceptedAnswers: ["Battle of Midway", "Midway"],
    clues: [
      "The outcome hinged partly on codebreakers confirming a target by having a base fake a water shortage in a message.",
      "Both sides had fought a major carrier battle a month earlier without either side's ships sighting each other.",
      "Four fleet carriers were lost by one side in a single day — a blow its naval air power never recovered from.",
      "It took place in the Pacific in June 1942, six months after a surprise attack on a nearby base.",
      "Historians often mark this as the turning point of the Pacific War.",
    ],
  },
  {
    id: "enigma",
    category: "thing",
    answerLabel: "Enigma machine",
    acceptedAnswers: ["Enigma", "Enigma machine", "The Enigma"],
    clues: [
      "I was originally developed for commercial banking use in the 1920s before being adopted for military purposes.",
      "My settings changed daily, and operators used codebooks to configure my rotors each morning.",
      "A team working at a British country estate built early computing machines specifically to break the codes I produced.",
      "Alan Turing is the figure most associated with cracking the codes I generated.",
      "I was a German cipher machine that looked like a typewriter with light-up letters.",
    ],
  },
];
