type Difficulty = "easy" | "tougher" | "very_tough";
type QuestionType = "map" | "person_photo" | "trivia";

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

// Map-clue rule: prompts may name the battle itself (that's the whole
// point — find where "Battle of X" happened) but must never add extra
// geographic hints (country, city, region, landmark) beyond the battle's
// own name. Trivia prompts are exempt since the answer there is the
// battle name, not a pin location.
export const scenarios: Record<string, ScenarioQuestion[]> = {
  scenario1: [
    {
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "On June 6, 1944, Allied forces launched the largest amphibious invasion in history. Drop your pin on the location of D-Day (Operation Overlord).",
      image_url: null,
      answer_label: "Normandy, France",
      accepted_answers: null,
      target_lat: 49.372,
      target_lng: -0.879,
    },
    {
      order_index: 2,
      type: "map",
      difficulty: "easy",
      prompt:
        "On the morning of December 7, 1941, carrier-launched aircraft struck a U.S. naval base without warning, drawing the United States into the Second World War. Drop your pin on the location of the attack on Pearl Harbor.",
      image_url: null,
      answer_label: "Pearl Harbor, Hawaii, USA",
      accepted_answers: null,
      target_lat: 21.365,
      target_lng: -157.95,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In the summer of 1943, the two largest tank fleets ever assembled clashed in what became the largest tank battle in history. Drop your pin on the location of the Battle of Kursk.",
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
      difficulty: "tougher",
      prompt:
        "During the Russo-Japanese War, a Russian fleet that had sailed over 18,000 nautical miles around the world was annihilated in a matter of hours by Admiral Tōgō Heihachirō's Imperial Japanese Navy, fighting in the strait between Korea and Japan — the first major defeat of a European power by an Asian power in the modern era. Name this 1905 naval battle.",
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
        "An iconic photograph of six servicemen raising a flag atop a volcanic peak was taken during this brutal 1945 battle. Drop your pin on the location of the Battle of Iwo Jima.",
      image_url: null,
      answer_label: "Iwo Jima, Japan",
      accepted_answers: null,
      target_lat: 24.7834,
      target_lng: 141.323,
    },
    {
      order_index: 2,
      type: "map",
      difficulty: "easy",
      prompt:
        "On October 21, 1805, a British fleet under a one-armed, one-eyed admiral shattered a combined enemy fleet, securing British naval dominance for a century — though the admiral himself was killed by a sniper's bullet during the fight. Drop your pin on the location of the Battle of Trafalgar.",
      image_url: null,
      answer_label: "Cape Trafalgar, Spain",
      accepted_answers: null,
      target_lat: 36.25,
      target_lng: -6.2,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In 216 BC, a Carthaginian general won what is still studied today as one of the greatest tactical victories in military history, encircling and annihilating a much larger Roman army. Drop your pin on the location of the Battle of Cannae.",
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
      difficulty: "tougher",
      prompt:
        "In 1879, despite being equipped with modern rifles and artillery, a British colonial force was decisively defeated by a numerically superior Zulu army fighting mainly with spears and cowhide shields — still remembered as one of the most stunning defeats of a modern army by an indigenous force in the 19th century. Name this 1879 battle in southern Africa.",
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
        "Over three days in July 1863, the largest battle ever fought in North America turned the tide of a civil war, ending with a disastrous Confederate infantry assault known as Pickett's Charge. Drop your pin on the location of the Battle of Gettysburg.",
      image_url: null,
      answer_label: "Gettysburg, Pennsylvania, USA",
      accepted_answers: null,
      target_lat: 39.8309,
      target_lng: -77.2311,
    },
    {
      order_index: 2,
      type: "map",
      difficulty: "easy",
      prompt:
        "In 480 BC, a small force of Greek soldiers — famously including 300 Spartans — held off a massive Persian army for three days at a narrow mountain pass before being outflanked and overwhelmed. Drop your pin on the location of the Battle of Thermopylae.",
      image_url: null,
      answer_label: "Thermopylae, Greece",
      accepted_answers: null,
      target_lat: 38.79583,
      target_lng: 22.53694,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In June 1942, codebreaking gave the US Navy a decisive edge in a naval battle at a remote Pacific atoll, considered the turning point of the war against Japan. Drop your pin on the location of the Battle of Midway.",
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
      difficulty: "tougher",
      prompt:
        "In 1939, a relatively obscure border conflict between Soviet and Japanese forces ended in a decisive Soviet victory under a young general named Georgy Zhukov, who would later become famous for defending Moscow and Stalingrad. The defeat convinced Japan to look south rather than north for further expansion. Name this 1939 battle.",
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
        "In June 1815, this battle ended one emperor's final bid for power once and for all, as reinforcements arrived just in time to overwhelm his exhausted army. Drop your pin on the location of the Battle of Waterloo.",
      image_url: null,
      answer_label: "Waterloo, Belgium",
      accepted_answers: null,
      target_lat: 50.6803,
      target_lng: 4.4096,
    },
    {
      order_index: 2,
      type: "map",
      difficulty: "easy",
      prompt:
        "On July 1, 1916, the first day of this offensive became the bloodiest single day in the history of the British Army, with roughly 20,000 killed before nightfall. Drop your pin on the location of the Battle of the Somme.",
      image_url: null,
      answer_label: "Somme, France",
      accepted_answers: null,
      target_lat: 50.01556,
      target_lng: 2.6975,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In 1954, a decisive siege ended decades of French colonial rule in Southeast Asia, after Viet Minh forces hauled heavy artillery through the mountains to surround a French garrison. Drop your pin on the location of the Battle of Dien Bien Phu.",
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
      difficulty: "tougher",
      prompt:
        "In 1757, a small force of the British East India Company decisively defeated a much larger army after its commander-in-chief, Mir Jafar, secretly defected in exchange for a promised throne. This battle effectively began British colonial rule over India. Name this 1757 battle.",
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
        "In 1066, a Norman duke crossed a narrow sea and defeated the last Anglo-Saxon king in a single day's fighting that reshaped a kingdom forever. Drop your pin on the location of the Battle of Hastings.",
      image_url: null,
      answer_label: "Hastings, England",
      accepted_answers: null,
      target_lat: 50.9094,
      target_lng: 0.4286,
    },
    {
      order_index: 2,
      type: "map",
      difficulty: "easy",
      prompt:
        "In October 1781, a combined force trapped a British army against a river while an allied fleet blocked its escape by sea, forcing a surrender that effectively ended a war for independence. Drop your pin on the location of the Battle of Yorktown.",
      image_url: null,
      answer_label: "Yorktown, Virginia, USA",
      accepted_answers: null,
      target_lat: 37.23083,
      target_lng: -76.5025,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In 1415, a heavily outnumbered English army, exhausted and sick after a long siege, won a stunning victory thanks largely to its longbowmen cutting down waves of armored knights. Drop your pin on the location of the Battle of Agincourt.",
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
      difficulty: "tougher",
      prompt:
        "In 1896, an African kingdom led by Emperor Menelik II inflicted a stunning defeat on an Italian colonial invasion force, becoming the only African nation to successfully repel a European colonization attempt during the Scramble for Africa. Name this 1896 battle.",
      image_url: null,
      answer_label: "Battle of Adwa",
      accepted_answers: ["Battle of Adwa", "Adwa", "Battle of Adowa"],
      target_lat: null,
      target_lng: null,
    },
  ],

  scenario6: [
    {
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "Fighting here in the winter of 1942–43 was so brutal that soldiers called it the 'war of rats,' contested street by street and building by building until an entire German army was encircled and forced to surrender. Drop your pin on the location of the Battle of Stalingrad.",
      image_url: null,
      answer_label: "Stalingrad (Volgograd), Russia",
      accepted_answers: null,
      target_lat: 48.7,
      target_lng: 44.517,
    },
    {
      order_index: 2,
      type: "map",
      difficulty: "easy",
      prompt:
        "In 1836, a small garrison of defenders held out for thirteen days against a much larger army before being overwhelmed, giving rise to a rallying cry still shouted today. Drop your pin on the location of the Battle of the Alamo.",
      image_url: null,
      answer_label: "San Antonio, Texas, USA",
      accepted_answers: null,
      target_lat: 29.42556,
      target_lng: -98.48611,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In 1805, an emperor at the height of his power won what many consider his greatest victory, splitting an allied army in two atop a fog-covered plateau. Drop your pin on the location of the Battle of Austerlitz.",
      image_url: null,
      answer_label: "Austerlitz (Slavkov u Brna), Czech Republic",
      accepted_answers: null,
      target_lat: 49.12806,
      target_lng: 16.7625,
    },
    {
      order_index: 4,
      type: "person_photo",
      difficulty: "tougher",
      prompt: "Name this man.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/General_of_the_Army_Dwight_D._Eisenhower_1947.jpg",
      answer_label: "Dwight D. Eisenhower",
      accepted_answers: [
        "Dwight D. Eisenhower",
        "Dwight Eisenhower",
        "Eisenhower",
        "General Eisenhower",
        "Ike",
      ],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 5,
      type: "trivia",
      difficulty: "tougher",
      prompt:
        "In the summer and fall of 1940, an air force fought off a sustained bombing campaign meant to clear the way for an invasion, in what became the first major military campaign fought almost entirely in the air. Winston Churchill said of its pilots that never had so much been owed by so many to so few. Name this campaign.",
      image_url: null,
      answer_label: "Battle of Britain",
      accepted_answers: ["Battle of Britain"],
      target_lat: null,
      target_lng: null,
    },
  ],

  scenario7: [
    {
      order_index: 1,
      type: "map",
      difficulty: "easy",
      prompt:
        "On February 21, 1916, an offensive intended to 'bleed' the enemy white through sheer attrition began the longest single battle of the First World War. Drop your pin on the location of the Battle of Verdun.",
      image_url: null,
      answer_label: "Verdun, France",
      accepted_answers: null,
      target_lat: 49.20806,
      target_lng: 5.42194,
    },
    {
      order_index: 2,
      type: "map",
      difficulty: "easy",
      prompt:
        "In October 1944, history's largest naval battle unfolded as one side committed nearly its entire surviving fleet in a last-ditch effort to destroy an invasion force, including the first organized use of kamikaze attacks. Drop your pin on the location of the Battle of Leyte Gulf.",
      image_url: null,
      answer_label: "Leyte Gulf, Philippines",
      accepted_answers: null,
      target_lat: 10.37,
      target_lng: 125.355,
    },
    {
      order_index: 3,
      type: "map",
      difficulty: "tougher",
      prompt:
        "In 480 BC, a heavily outnumbered fleet lured a much larger armada into a narrow strait, where its size became a fatal disadvantage. Drop your pin on the location of the Battle of Salamis.",
      image_url: null,
      answer_label: "Salamis, Greece",
      accepted_answers: null,
      target_lat: 37.95139,
      target_lng: 23.56667,
    },
    {
      order_index: 4,
      type: "person_photo",
      difficulty: "tougher",
      prompt: "Name this man.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Portrait_of_General_Douglas_MacArthur.jpg",
      answer_label: "Douglas MacArthur",
      accepted_answers: ["Douglas MacArthur", "MacArthur", "General MacArthur"],
      target_lat: null,
      target_lng: null,
    },
    {
      order_index: 5,
      type: "trivia",
      difficulty: "tougher",
      prompt:
        "In 31 BC, a naval battle between the forces of Octavian and the combined fleet of Mark Antony and Cleopatra decided who would rule Rome, ending in Octavian's total victory and, soon after, the birth of the Roman Empire under his new name, Augustus. Name this battle.",
      image_url: null,
      answer_label: "Battle of Actium",
      accepted_answers: ["Battle of Actium", "Actium"],
      target_lat: null,
      target_lng: null,
    },
  ],
};
