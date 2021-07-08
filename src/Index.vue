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
  //min-width: 250px;

  &__container {
    border-radius: 20px;
    border: 1px #dadce0 solid;
    padding: 0 25px;
    font-size: 14px;
    height: 605px;
  }

  @media (max-width: 768px) {
    &__container {
      border-style: none;
      width: 100%;
      height: 800px;
      padding: 0;
      margin: 0 10px;
    }
  }
}

@media (max-width: 768px), (max-height: 605px) {
  .index {
    align-items: flex-start;
  }
}
</style>