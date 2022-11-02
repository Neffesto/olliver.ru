<template>
  <section class="container">
    <ButtonComponent class="container__left"/>
    <SliderComponent class="container__right"/>
  </section>
</template>

<script>
import ButtonComponent from "@/views/home/components/ButtonComponent";
import SliderComponent from "@/views/home/components/SliderComponent";
export default {
  name: 'HomeView',
  components: {
    SliderComponent,
    ButtonComponent
  },
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  &__left {
    width: 50%;
  }
  &__right {
    width: 50%;
  }
}
</style>
