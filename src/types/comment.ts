export interface Comment {
  id: string;
  author: string;
  comment: string;
  date: string;
  emotion: Emotion;
}

export type Emotion = 'smile' | 'sleeping' | 'puke' | 'angry';

export interface LocalComment {
  comment: string;
  emotion: Emotion;
}
