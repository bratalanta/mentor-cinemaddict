export type Comment = {
  id: string;
  author: string;
  comment: string;
  date: Date;
  emotion: Emotion;
};

export type Emotion = ['smile', 'sleeping', 'puke', 'angry'];

export type LocalComment = {
  comment: string;
  emotion: Emotion;
};
