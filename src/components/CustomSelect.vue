<template>
  <div
      :id="id"
      :label="label"
      class="custom-select">

    <div
        :class="{
          'input-wrapper_focused': hovered}"
        class="input-wrapper custom-select__select "
        tabindex="0"
        @mouseenter="hover"
        @mouseleave="hovered = !hovered"
        @blur="blur">

      <div
          class="custom-select__arrow"
          :class="{
            'custom-select__arrow_rotate': focused,
            'custom-select__arrow_color-blue': hovered}"
          @click="focused = !focused">
      </div>

      <label
          :class="{
            'custom-select__option_focused'
            : selectedOptionsOne || focused,
            'custom-select__option_select'
            : selectedOptionsOne}"
          class="custom-select__option">

        <input
            type="radio"
            name="doctor"
            value="one"
            v-model="value"
            class="custom-select__radio"
            @click="focused = !focused">
        {{option[0]}}
      </label>

      <label
          :class="{
            'custom-select__option_focused'
            :selectedOptionsTwo || focused,
            'custom-select__option_select'
            : selectedOptionsTwo}"
          class="custom-select__option">

        <input
            type="radio"
            name="doctor"
            value="two"
            v-model="value"
            class="custom-select__radio"
            @click="focused = !focused">
        {{option[1]}}
      </label>

      <label
          :class="{
            'custom-select__option_focused'
            :selectedOptionsThree || focused,
            'custom-select__option_select'
            : selectedOptionsThree}"
          class="custom-select__option">

        <input
            type="radio"
            name="doctor"
            value="three"
            v-model="value"
            class="custom-select__radio"
            @click="focused = !focused">
        {{option[2]}}
      </label>
    </div>

    <label
        :for="id"
        :class="{'input-wrapper__label_color-blue': hovered }"
        class="
          input-wrapper__label
          input-wrapper__label_position_up">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    label: String,
    id: String,
    option: Array
  },

  data() {
    return {
      focused: false,
      hovered: false,
      value: 'one',
    }
  },

  computed: {
    selectedOptionsOne() {
      return this.value === 'one'
    },
    selectedOptionsTwo() {
      return this.value === 'two'
    },
    selectedOptionsThree() {
      return this.value === 'three'
    }
  },

  methods: {
    focus() {
      return this.focused = true
    },

    blur() {
      return this.focused = false
    },

    hover() {
      return this.hovered = !this.hovered
    }
  }
}

</script>

<style lang="scss">

.custom-select {
  height: var(--height-input);
  position: relative;
  z-index: 1;


  &__select {
    overflow: hidden;
    background: #dadce0;
    outline-style: none;
    height: auto;
    max-height: calc(var(--height-input) * 3);
  }

  &__arrow {
    position: absolute;
    top: calc((var(--height-input) - 2px) / 2 - 2px);
    width: 6px;
    height: 6px;
    right: 15px;
    border: solid 1px black;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(315deg);
    transition: inherit;
    cursor: pointer;

    &_rotate {
      transform: rotate(135deg);
    }

    &_color-blue {
      border-color: #1a73e8;
    }
  }

  &__option {
    height: 0;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #7d7d7d;
    user-select: none;
    overflow: hidden;
    transition: inherit;

    &_focused {
      height: var(--height-input);
      opacity: 1;
    }

    &_select {
      background: #ffffff;
      color: black;
    }
  }

  &__option:hover {
    color: black;
  }

  &__radio {
    display: none;
  }
}
</style>