export interface OpenIndexAction {
  type: "OPEN_INDEX";
  payload: number;
}

export interface TransAction {
  type: "TRANS";
  payload: { direction: "up" | "down" };
}

export interface BasicAction {
  type: "RESET" | "SIDEBAR_OPEN" | "SIDEBAR_CLOSE";
}

export type ActionTypes = OpenIndexAction | TransAction | BasicAction;

export interface PageProps {
  text: string;
  next: number;
}

export interface StyledProps {
  next: number;
}

export interface IProps {
  next: number;
}
