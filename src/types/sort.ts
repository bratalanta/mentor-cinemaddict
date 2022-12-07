import { SortOptions } from '../const';

export type SortOptionValue = typeof SortOptions[keyof typeof SortOptions];
