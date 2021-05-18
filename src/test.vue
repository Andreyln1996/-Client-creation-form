<template>
  <div class="test">
    <div class="test__title" :class="{'test__title_accent': isSelected}"></div>
    <div class="test__description">
      <div class="test__description-block"></div>
      <div class="test__description-block-2"></div>
    </div>
    <div class="test__description-block"></div>
  </div>
</template>

<script>
export default {
  name: "test"
}
</script>

<style lang="scss">

.test {

  &__title {
    color: red;

    &_accent {
      color: blue;
    }

  }

  &__description {

  }

  &__description-block {

  }
}

</style>