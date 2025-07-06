export interface BaseFormField {
  label: string;
  name: string;
  placeholder?: string;
}

export interface OtpInputProps {
  length?: number;
  label: string;
  name: string;
}

export interface PhoneStepProps {
  onSubmit: (phone: string) => void;
}

export interface FormConfig {
  phone: BaseFormField;
  link: BaseFormField;
  title: BaseFormField;
  description: BaseFormField;
  attachment: { label: string };
  select: { label: string; options: string[] };
  date: { label: string };
  radio: { label: string; options: string[] };
  participants: { label: string; max: number };
  otp: { label: string };
}

