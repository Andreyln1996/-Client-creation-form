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
        @mouseenter="hovered = !hovered"
        @mouseleave="hovered = !hovered"
        @blur="blur">

      <div
          class="custom-select__arrow"
          :class="{
            'custom-select__arrow_rotate': !focused,
            'custom-select__arrow_color-blue': hovered}"
          @click="focused = !focused">
      </div>

      <label
          :class="{
            'custom-select__option_focused'
            : selectIvanov || focused,
            'custom-select__option_select': selectIvanov}"
          class="custom-select__option">

        <input
            type="radio"
            name="doctor"
            value="Ivanov"
            v-model="doctor"
            class="custom-select__radio"
            @click="focused = !focused"
            @blur="blur">
        Иванов
      </label>

      <label
          :class="{
            'custom-select__option_focused'
            :selectZakharov || focused,
            'custom-select__option_select'
            : selectZakharov}"
          class="custom-select__option">

        <input
            type="radio"
            name="doctor"
            value="Zakharov"
            v-model="doctor"
            class="custom-select__radio"
            @click="focused = !focused">
        Захаров
      </label>

      <label
          :class="{
            'custom-select__option_focused'
            :selectChernysheva || focused,
            'custom-select__option_select'
            : selectChernysheva}"
          class="custom-select__option">

        <input
            type="radio"
            name="doctor"
            value="Chernysheva"
            v-model="doctor"
            class="custom-select__radio"
            @click="focused = !focused">
        Чернышева
      </label>
    </div>

    <label
        :for="id"
        :class="{'input-wrapper__label_color_blue': hovered }"
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
    id: String
  },

  data() {
    return {
      focused: false,
      hovered: false,
      doctor: 'Ivanov',
    }
  },

  computed: {
    selectChernysheva() {
      return this.doctor === 'Chernysheva'
    },
    selectZakharov() {
      return this.doctor === 'Zakharov'
    },
    selectIvanov() {
      return this.doctor === 'Ivanov'
    }
  },

  methods: {
    focus() {
      return this.focused = true
    },

    blur() {
      return this.focused = false
    },
  }
}

</script>

<style lang="scss">

.custom-select {
  margin: 0 0 20px;
  position: relative;
  height: 40px;
  z-index: 1;

  &__select {
    overflow: hidden;
    background: #dadce0;
    outline-style: none;
    cursor: pointer;
    height: auto;
  }

  &__arrow {
    position: absolute;
    top: 17px;
    width: 6px;
    height: 6px;
    right: 15px;
    border: solid 1px black;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(135deg);
    transition: inherit;

    &_rotate {
      transform: rotate(315deg);
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
      height: 40px;
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
    position: absolute;
  }
}
</style>