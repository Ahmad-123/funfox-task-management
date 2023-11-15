export enum statusTypes {
  OK = "ok",
  ERROR = "error",
}
export const enum ButtonTypes {
  SUBMIT = "submit",
  BUTTON = "button",
}

export enum TaskTypes {
  PENDING = "Pending",
  COMPLETED = "Completed",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  group: string;
  status: string;
  createdBy: string;
};
