export interface authTypes {
  access: string;
  refresh: string;
  phoneNumber: string;
}

export interface overviewTypes {
  no_answers: number;
  pending: number;
  finished: number
}

export interface PaginatedFormResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FormResult[];
}

export interface FormResult {
  id: number;
  name: string;
  status: "PENDING" | "FINISHED" | "NO_ANSWER";
  questions: FormQuestion[];
  answers: FormAnswer[];
  image_result: string;
  description_result: string;
  previous_form_template_result: number;
  created_time: string;
}

export interface FormQuestion {
  id: number;
  title: string;
  placeholder: string;
  is_required: boolean;
  type: "TEXT_INPUT";
}

export interface FormAnswer {
  id: number;
  user_form_id: number;
  form_question_id: number;
  form_question_data: FormQuestion;
  answer: string;
}
