import mutations from "@/store/mutations";

const { SHOW_ABOUT } = mutations;

const aboutStore = {
  state: {
    isShowAbout: false
  },
  getters: {
    isShowAbout: ({ isShowAbout }) => isShowAbout
  },
  mutations: {
    [SHOW_ABOUT](state, bool) {
      state.isShowAbout = bool;
    }
  },
  actions: {
    toggleAbout({ commit }, bool) {
      commit(SHOW_ABOUT, bool);
    }
  }
};

export default aboutStore;