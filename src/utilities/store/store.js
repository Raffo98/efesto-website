import { defineStore } from "pinia";

export const useStateStore = defineStore("state", {
  state: () => {
    return { activeSectionId: "" };
  },
  actions: {
    changeSectionId(id) { /*Change header section ID */
      this.activeSectionId = id;
    },
    // changeActiveId(num) {
    //   this.activeId = num;
    // },
    // changeState(bool) {
    //   this.isOpen = bool;
    // },
    // changeStateHover(bool) {
    //   this.onHover = bool;
    // },
  },
});
