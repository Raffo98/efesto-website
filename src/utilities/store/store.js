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
  },
});
