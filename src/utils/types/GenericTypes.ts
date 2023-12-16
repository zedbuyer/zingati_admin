export type Action = {
  type: string;
  payload?: any;
};

export type TableField = {
  name: string;
  label: string;
  parent?: string;
};
