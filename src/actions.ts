const openIndex = (index: number) => ({ type: "OPEN_INDEX", payload: index });

const moveUp = () => ({ type: "MOVE_UP" });

const moveDown = () => ({ type: "MOVE_DOWN" });

const openSidebar = () => ({ type: "SIDEBAR_OPEN" });

const closeSidebar = () => ({ type: "SIDEBAR_CLOSE" });

const reset = () => ({ type: "RESET" });

export { openIndex, moveUp, moveDown, openSidebar, closeSidebar, reset };
