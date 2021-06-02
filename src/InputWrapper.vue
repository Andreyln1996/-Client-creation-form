<template>
  <div
      :class="{'input-wrapper_focused': focused}"
      :id="id"
      class="input-wrapper">

    <slot></slot>

    <label
        :for="id"
        :class="{
          'input-wrapper__label_position_up': notEmpty,
          'input-wrapper__label_color_blue': focused }"
        class="input-wrapper__label">
      {{ label }}
    </label>
  </div>
</template>

<script>

export default {
  name: "InputWrapper",
  props: {

    label: String,
    id: String,
    notEmpty: Boolean,
    focused: Boolean
  }
}
</script>

<style lang="scss">

.input-wrapper {
  height: 40px;
  margin: 0 0 20px;
  border-radius: 20px;
  border: 1px #dadce0 solid;
  position: relative;
  transition: 0.2s;

  &_focused {
    box-shadow: 0 0 1px 0 #1a73e8;
    border: 1px #1a73e8 solid;
  }

  &__label {
    position: absolute;
    top: 12px;
    left: 14px;
    color: #7d7d7d;
    pointer-events: none;
    transition: inherit;

    &_position_up {
      background: #fff;
      border-radius: 2px;
      padding: 0 3px;
      top: -9px;
      left: 10px;
      font-size: 10px;
    }

    &_color_blue {
      color: #1a73e8;
    }
  }
}
</style>