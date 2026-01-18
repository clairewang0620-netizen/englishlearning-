
export type CategoryType = 
  | '大学英语四级' 
  | '大学英语六级' 
  | '专四' 
  | '专八' 
  | '雅思' 
  | '商务英语' 
  | '金融' 
  | '科技' 
  | '文化' 
  | '社交' 
  | '教育'
  | '其他';

export interface WordExample {
  en: string;
  cn: string;
}

export interface Word {
  id: string;
  word: string;
  phonetic: string;
  pos: string;
  definition: string;
  translation: string;
  categories: CategoryType[];
  group: number;
  examples: WordExample[];
}

export interface ArticleParagraph {
  en: string;
  cn: string;
  id: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  image?: string;
  paragraphs: ArticleParagraph[];
  keywords: { en: string; cn: string }[];
}

export enum AppRoute {
  HOME = 'home',
  VOCABULARY = 'vocabulary',
  DICTATION = 'dictation',
  READING = 'reading'
}