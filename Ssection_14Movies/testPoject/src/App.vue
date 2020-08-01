<template>
  <div id="app">
    <Notification />
    <About />
    <PosterBg :poster="posterBg" />
    <Header />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />.
    <Loader />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import MoviesPagination from "@/components/MoviesPagination";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Notification from "@/components/Notification";
import About from "@/components/About";

export default {
  name: "app",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    Loader,
    Header,
    Notification,
    About
  },
  data: () => ({
    posterBg: ""
  }),
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength"
    ])
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true
    }
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onPageQueryChange({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
