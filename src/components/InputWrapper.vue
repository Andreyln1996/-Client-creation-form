<template>
  <div
      :class="{
        'input-wrapper_focused': focused && !error,
        'input-wrapper_error': error}"
      :id="id"
      class="input-wrapper">

    <slot></slot>

    <label
        :for="id"
        :class="{
          'input-wrapper__label_position_up'
          : notEmpty,
          'input-wrapper__label_color-blue'
          : focused && !error,
          'input-wrapper__label_color-red'
          : error}"
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
    focused: Boolean,
    error: Boolean,
  }
}
</script>

<style lang="scss">

.input-wrapper {
  //min-width: 250px;
  height: var(--height-input);
  border-radius: calc(var(--height-input) / 2);
  border: 1px #dadce0 solid;
  position: relative;
  transition: 0.2s;

  &_focused {
    box-shadow: 0 0 1px 0 #1a73e8;
    border-color: #1a73e8;
  }

  &_error {
    border-color: red;
    box-shadow: 0 0 1px 0 red;
  }

  &__label {
    position: absolute;
    display: flex;
    align-items: center;
    top: calc((var(--height-input) - 18px) / 2);
    bottom: calc((var(--height-input) - 18px) / 2);
    left: 14px;
    padding: 0 3px 0 4px;
    color: #7d7d7d;
    background: #ffffff;
    user-select: none;
    pointer-events: none;
    transition: 0.2s;

    &_position_up {
      border-radius: 2px;
      bottom: calc(var(--height-input) - 4px);
      left: 11px;
      top: -10px;
      font-size: 10px;
    }

    &_color-blue {
      color: #1a73e8;
    }

    &_color-red {
      color: red;
    }
  }
}
</style>