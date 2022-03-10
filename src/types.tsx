export interface OpenIndexAction {
  type: "OPEN_INDEX";
  payload: number;
}

export interface BasicAction {
  type: "RESET" | "SIDEBAR_OPEN" | "SIDEBAR_CLOSE" | "MOVE_UP" | "MOVE_DOWN";
}

export type ActionTypes = OpenIndexAction | BasicAction;

export interface IProps {
  next: number;
}

export interface PageProps {
  text: string;
}
