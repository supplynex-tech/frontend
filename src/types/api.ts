export interface authTypes {
  access: string;
  refresh: string;
  phoneNumber: string;
}

export interface overviewTypes {
  no_answer: number;
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
  next_form_template_result: number;
  created_time: string;
}

export interface FormQuestionOptions {
  multi?: boolean;
  items?: string[];
  max?: number;
}

export interface FormQuestion {
  id: number;
  title: string;
  placeholder: string;
  is_required: boolean;
  type: "TEXT_INPUT" | "UPLOAD_FILE" | "SELECT" | "DATE_PICKER" | "RADIO" | "IMAGE_RADIO" | "COUNTER" | "TEXTAREA";
  options: FormQuestionOptions | string[]
}

export interface FormAnswer {
  id: number;
  user_form_id: number;
  form_question_id: number;
  form_question_data: FormQuestion;
  answer: string;
}
