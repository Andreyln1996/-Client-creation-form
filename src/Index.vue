<template>
  <div class="index">
    <div class="index__container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
}
</script>

<style lang="scss">

.index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;


  &__container {
    border-radius: 20px;
    border: 1px #dadce0 solid;
    padding: 0 25px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    &__container {
      padding: 0;
      border-color: transparent;
    }
  }
}
//
////@media (max-width: 768px) {
////  .index {
////    width: 100%;
////
////}
//}
</style>