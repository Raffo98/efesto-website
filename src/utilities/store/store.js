import { defineStore } from "pinia";

export const useStateStore = defineStore("state", {
  state: () => {
    return { activeSectionId: "", scrollState: 0 };
  },
  actions: {
    changeSectionId(id) { /*Change header section ID */
      this.activeSectionId = id;
    },
    updateScroll(scrollIncrement) {
      this.scrollState = scrollIncrement;
    }
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
