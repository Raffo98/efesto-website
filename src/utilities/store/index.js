import { createStore } from "vuex";
import sampleStore from "./modules/sampleStore";

export default createStore({
  modules: {
    sampleStore,
  },
});
