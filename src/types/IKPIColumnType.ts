export type Column = {
  header?: string;
  topLine?: string[];
}

export interface ITemplateContext {
  columns?: Column[],
  MAX_COLUMNS?: Number
}
