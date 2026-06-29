export type QuestionType = "map" | "weapon_photo" | "person_photo" | "trivia";
export type Difficulty = "easy" | "tougher" | "very_tough";

export interface Question {
  id: string;
  round_id: string;
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

export interface Round {
  id: string;
  round_date: string;
  mode: "five_questions" | "five_clues";
  answer_label: string | null;
}

export interface QuestionResult {
  questionId: string;
  type: QuestionType;
  correct: boolean;
  correctAnswer: string;
  userAnswer: string;
}
