export type Poll = {
  id: string;
  caption: string;
  options: Option[];
};

export type Option = {
  id: string;
  like: number;
  name: string;
  createdAt: string;
  userIds: string[];
};
