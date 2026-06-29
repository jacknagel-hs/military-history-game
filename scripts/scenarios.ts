type Difficulty = "easy" | "tougher" | "very_tough";
type QuestionType = "map" | "weapon_photo" | "person_photo" | "trivia";

export interface ScenarioQuestion {
  order_index: number;
  type: QuestionType;
  difficulty: Difficulty;
  prompt: string;
  image_url: string | null;
  answer_label: string;
  accepted_answers: string[] | null;
  target_lat: number | null;
  target_lng: number | null;
}

export const scenarios: Record<string, ScenarioQuestion[]> = {
  scenario1: [
    {
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "On June 6, 1944, Allied forces launched the largest amphibious invasion in history. Drop your pin where troops stormed the beaches.",
      image_url: null,
      answer_label: "Normandy, France",
      accepted_answers: null,
      target_lat: 49.372,
      target_lng: -0.879,
    },
    {
      order_index: 2,
      type: "weapon_photo",
      difficulty: "easy",
      prompt: "Name this weapon.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/6/67/AK-47_type_II.png",
      answer_label: "AK-47",
      accepted_answers: ["AK-47", "AK47", "Kalashnikov", "AK 47"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In the summer of 1943, the two largest tank fleets ever assembled clashed here, in what became the largest tank battle in history. Drop your pin where it happened.",
      image_url: null,
      answer_label: "Kursk, Russia",
      accepted_answers: null,
      target_lat: 51.7373,
      target_lng: 36.1874,
    },
    {
      order_index: 4,
      type: "person_photo",
      difficulty: "tougher",
      prompt: "Name this man.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/General_Friedrich_Paulus_1890-1957.jpg",
      answer_label: "Friedrich Paulus",
      accepted_answers: ["Friedrich Paulus", "Paulus", "Field Marshal Paulus"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 5,
      type: "trivia",
      difficulty: "very_tough",
      prompt:
        "During the Russo-Japanese War, this 1905 naval battle saw a Russian fleet that had sailed over 18,000 nautical miles around the world annihilated by the Imperial Japanese Navy in a matter of hours — the first major defeat of a European power by an Asian power in the modern era. Name the battle.",
      image_url: null,
      answer_label: "Battle of Tsushima",
      accepted_answers: ["Battle of Tsushima", "Tsushima", "Battle of Tsushima Strait"],
      target_lat: null,
      target_lng: null,
    },
  ],

  scenario2: [
    {
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "An iconic photograph of six servicemen raising a flag atop a volcanic peak was taken during this brutal 1945 battle. Drop your pin where it was fought.",
      image_url: null,
      answer_label: "Iwo Jima, Japan",
      accepted_answers: null,
      target_lat: 24.7834,
      target_lng: 141.323,
    },
    {
      order_index: 2,
      type: "weapon_photo",
      difficulty: "easy",
      prompt: "Name this weapon.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d6/M1C.jpg",
      answer_label: "M1 Garand",
      accepted_answers: ["M1 Garand", "M1Garand", "Garand", "M1C", "M-1 Garand", "M1 Garand rifle"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In 216 BC, a Carthaginian general won what is still studied today as one of the greatest tactical victories in military history, encircling and annihilating a much larger Roman army. Drop your pin where this battle was fought.",
      image_url: null,
      answer_label: "Cannae, Italy",
      accepted_answers: null,
      target_lat: 41.3083,
      target_lng: 16.1333,
    },
    {
      order_index: 4,
      type: "person_photo",
      difficulty: "tougher",
      prompt: "Name this man.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/8/80/Georgy_Zhukov_1.jpg",
      answer_label: "Georgy Zhukov",
      accepted_answers: ["Georgy Zhukov", "Zhukov", "Marshal Zhukov", "Georgy Konstantinovich Zhukov"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 5,
      type: "trivia",
      difficulty: "very_tough",
      prompt:
        "In 1879, despite being equipped with modern rifles and artillery, a British colonial force was decisively defeated by a numerically superior army fighting mainly with spears and cowhide shields — one of the most stunning defeats in British colonial history. Name the battle.",
      image_url: null,
      answer_label: "Battle of Isandlwana",
      accepted_answers: ["Battle of Isandlwana", "Isandlwana"],
      target_lat: null,
      target_lng: null,
    },
  ],

  scenario3: [
    {
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "Over three days in July 1863, the largest battle ever fought in North America turned the tide of a civil war. Drop your pin where it was fought.",
      image_url: null,
      answer_label: "Gettysburg, Pennsylvania, USA",
      accepted_answers: null,
      target_lat: 39.8309,
      target_lng: -77.2311,
    },
    {
      order_index: 2,
      type: "weapon_photo",
      difficulty: "easy",
      prompt: "Name this weapon.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/JGSDF_M1911_Colt_Government_20120422.jpg",
      answer_label: "Colt M1911",
      accepted_answers: ["Colt M1911", "M1911", "Colt 1911", "1911"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In June 1942, codebreaking gave the US Navy a decisive edge in a naval battle at this remote Pacific atoll, considered the turning point of the war against Japan. Drop your pin where it was fought.",
      image_url: null,
      answer_label: "Midway Atoll",
      accepted_answers: null,
      target_lat: 28.2,
      target_lng: -177.37,
    },
    {
      order_index: 4,
      type: "person_photo",
      difficulty: "tougher",
      prompt: "Name this man.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Yamamoto-Isoroku.jpg",
      answer_label: "Isoroku Yamamoto",
      accepted_answers: ["Isoroku Yamamoto", "Yamamoto", "Admiral Yamamoto"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 5,
      type: "trivia",
      difficulty: "very_tough",
      prompt:
        "In 1939, a relatively obscure border conflict between Soviet and Japanese forces in Mongolia ended in a decisive Soviet victory under a young general who would later become famous for defending Moscow and Stalingrad. The defeat convinced Japan to look south rather than north for further expansion. Name the battle.",
      image_url: null,
      answer_label: "Battle of Khalkhin Gol",
      accepted_answers: ["Battle of Khalkhin Gol", "Khalkhin Gol", "Khalkhyn Gol"],
      target_lat: null,
      target_lng: null,
    },
  ],

  scenario4: [
    {
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "In June 1815, this battle near Brussels ended one emperor's final bid for power once and for all. Drop your pin where it was fought.",
      image_url: null,
      answer_label: "Waterloo, Belgium",
      accepted_answers: null,
      target_lat: 50.6803,
      target_lng: 4.4096,
    },
    {
      order_index: 2,
      type: "weapon_photo",
      difficulty: "easy",
      prompt: "Name this weapon.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/7/70/MP_40_AYF_3.JPG",
      answer_label: "MP40",
      accepted_answers: ["MP40", "MP-40", "MP 40", "Maschinenpistole 40"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In 1954, a decisive siege here ended decades of French colonial rule in Indochina, after Viet Minh forces hauled artillery through the mountains to surround a French garrison. Drop your pin where it was fought.",
      image_url: null,
      answer_label: "Dien Bien Phu, Vietnam",
      accepted_answers: null,
      target_lat: 21.3856,
      target_lng: 103.0166,
    },
    {
      order_index: 4,
      type: "person_photo",
      difficulty: "tougher",
      prompt: "Name this man.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/d/db/General_Sir_Bernard_Montgomery_in_England%2C_1943_TR1036.jpg",
      answer_label: "Bernard Montgomery",
      accepted_answers: ["Bernard Montgomery", "Montgomery", "Field Marshal Montgomery", "Monty"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 5,
      type: "trivia",
      difficulty: "very_tough",
      prompt:
        "In 1757, a small force of the British East India Company decisively defeated a much larger army of the Nawab of Bengal, thanks largely to bribery and defection among the Nawab's own commanders. This battle effectively began British colonial rule over India. Name the battle.",
      image_url: null,
      answer_label: "Battle of Plassey",
      accepted_answers: ["Battle of Plassey", "Plassey"],
      target_lat: null,
      target_lng: null,
    },
  ],

  scenario5: [
    {
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "In 1066, a Norman duke crossed the English Channel and defeated the Anglo-Saxon king in a battle that reshaped England forever. Drop your pin where it was fought.",
      image_url: null,
      answer_label: "Hastings, England",
      accepted_answers: null,
      target_lat: 50.9094,
      target_lng: 0.4286,
    },
    {
      order_index: 2,
      type: "weapon_photo",
      difficulty: "easy",
      prompt: "Name this weapon.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Luger_P08_%286971793777%29.jpg",
      answer_label: "Luger P08",
      accepted_answers: ["Luger", "Luger P08", "P08", "Parabellum"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In 1415, a heavily outnumbered English army, exhausted and sick after a long siege, won a stunning victory in northern France thanks largely to its longbowmen. Drop your pin where it was fought.",
      image_url: null,
      answer_label: "Agincourt, France",
      accepted_answers: null,
      target_lat: 50.466,
      target_lng: 1.852,
    },
    {
      order_index: 4,
      type: "person_photo",
      difficulty: "tougher",
      prompt: "Name this man.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Erwin_Rommel.jpg",
      answer_label: "Erwin Rommel",
      accepted_answers: ["Erwin Rommel", "Rommel", "Field Marshal Rommel"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 5,
      type: "trivia",
      difficulty: "very_tough",
      prompt:
        "In 1896, an African kingdom inflicted a stunning defeat on an Italian colonial invasion force, becoming the only African nation to successfully repel a European colonization attempt during the Scramble for Africa. Name the battle.",
      image_url: null,
      answer_label: "Battle of Adwa",
      accepted_answers: ["Battle of Adwa", "Adwa", "Battle of Adowa"],
      target_lat: null,
      target_lng: null,
    },
  ],
};
