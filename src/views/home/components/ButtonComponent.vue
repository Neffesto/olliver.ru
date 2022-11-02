<template>
  <section class="button">
    <button type="button" @click="requestPhotos">Загрузить фотографии</button>
    <p> {{message}} </p>
  </section>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex';
export default {
  name: "ButtonComponent",
  computed:mapGetters(['message']),
  methods: {
    ...mapActions(["getPhotos"]),
    ...mapMutations(["getParsePhoto"]),
    requestPhotos() {
      this.getPhotos()
    }
  },
  mounted() {
    if (localStorage.key('receivedPhotos')) {
      this.getParsePhoto()
    }
  }
}
</script>

<style scoped lang="scss">
button {
  width: 208px;
  height: 64px;
  border: 1px solid #66ccff;
  border-radius: 12px;
  background: #66ccff;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
}
button:hover {
  transform: scale(1.1);
}
p {
  font-weight: 600;
  font-size: 18px;
}
</style>