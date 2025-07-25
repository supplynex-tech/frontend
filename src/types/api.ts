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
  main_key?: MainKey
  questions: FormQuestion[];
  answers: FormAnswer[];
  image_result: string;
  description_result: string;
  created_time: string;
  next_form_template_result?: FormResult
  multi_select_images: MultiSelectImage[]
}

export interface MultiSelectImage {
  image: string;
}

export interface MainKey {
  title: string;
  value: string;
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
  type: "TEXT_INPUT" | "UPLOAD_FILE" | "SELECT" | "DATE_PICKER" | "RADIO" | "MULTI_SELECT_IMAGE" | "COUNTER" | "TEXTAREA";
  options: FormQuestionOptions | string[]
}

export interface FormAnswer {
  id: number;
  user_form_id: number;
  form_question_id: number;
  form_question_title: string;
  answer: string;
  image?: string;
}
