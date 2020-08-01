import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import loader from "./modules/loader";
import notification from "./modules/notification";
import about from "./modules/about";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    notification,
    about
  }
});

store.dispatch("initMoviesStore");

export default store;
