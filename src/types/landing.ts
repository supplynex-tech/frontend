export interface HeaderContent {
  title1: string;
  title2: string;
  subtitle: string;
  animationUrl: string;
  button: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  image: string;
}

export interface QuestionItem {
  title: string;
  content: string;
}

export interface AboutSection {
  title: string;
  description?: string;
  list?: { title: string; text: string }[] | string[];
}