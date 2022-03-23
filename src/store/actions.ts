import { BasicAction, OpenIndexAction } from "../types";

const openIndex = (index: number): OpenIndexAction => ({
  type: "OPEN_INDEX",
  payload: index,
});

const moveUp = (): BasicAction => ({ type: "MOVE_UP" });

const moveDown = (): BasicAction => ({ type: "MOVE_DOWN" });

const openSidebar = (): BasicAction => ({ type: "SIDEBAR_OPEN" });

const closeSidebar = (): BasicAction => ({ type: "SIDEBAR_CLOSE" });

const reset = (): BasicAction => ({ type: "RESET" });

export { openIndex, moveUp, moveDown, openSidebar, closeSidebar, reset };
