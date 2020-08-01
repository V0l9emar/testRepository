<template>
  <div class="card-header">
    <div class="about-wrap">
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        class="mb-3"
        cols="9"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "About",
  computed: {
    ...mapGetters(["isShowAbout"])
  }
}
</script>

<style scoped>
.about-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
.card-header {

}
</style>