import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import loader from "./modules/loader";
import about from "./modules/about";
import notification from "./modules/notification";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    about,
    notification
  }
});

store.dispatch("initMoviesStore");

export default store;
