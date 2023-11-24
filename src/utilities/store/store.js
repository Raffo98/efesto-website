import { defineStore } from "pinia";

export const useStateStore = defineStore("state", {
  state: () => {
    return { hoverId: "welfare", activeId: 0, isOpen: false, onHover: false };
  },
  actions: {
    changeId(id) {
      this.hoverId = id;
    },
    changeActiveId(num) {
      this.activeId = num;
    },
    changeState(bool) {
      this.isOpen = bool;
    },
    changeStateHover(bool) {
      this.onHover = bool;
    },
  },
});
