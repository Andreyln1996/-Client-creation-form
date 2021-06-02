<template>
  <InputWrapper
      :id="gender"
      :focused="focused"
      :notEmpty=true
      :class="{
        'gender-selection_background_grey': selectGender}"
      class="gender-selection"
      label="Пол">

    <div
        :class="{
          'gender-selection__slider_position-male'
            : selectMale,
          'gender-selection__slider_position-female'
            : selectFemale}"
        class="gender-selection__slider">
    </div>

    <label
        class="
          gender-selection__block
          gender-selection__block_border-male"
        :class="{
          'gender-selection__block_color-text_black': selectMale}"
        tabindex="0"
        @focus="focus"
        @blur="blur"
        @mouseover="focus"
        @mouseleave="blur">

      <input
          id="male"
          name="gender"
          type="radio"
          value="male"
          v-model="gender"
          class="gender-selection__input">
      Мужской
    </label>

    <label
        class="
          gender-selection__block
          gender-selection__block_border-female"
        :class="{
          'gender-selection__block_color-text_black'
            : selectFemale}"
        @mouseover="focus"
        @mouseleave="blur">

      <input
          id="female"
          name="gender"
          type="radio"
          value="female"
          v-model="gender"
          class="gender-selection__input">
      Женский
    </label>
  </InputWrapper>
</template>

<script>
import InputWrapper from "@/InputWrapper";

export default {
  name: "GenderSelection",
  components: {InputWrapper},

  data() {
    return {
      focused: false,
      gender: ''
    }
  },

  computed: {
    selectFemale() {
      return this.gender === 'female'
    },
    selectMale() {
      return this.gender === 'male'
    },
    selectGender() {
      return this.selectFemale || this.selectMale
    }
  },

  methods: {
    focus() {
      return this.focused = true
    },

    blur() {
      return this.focused = false
    }
  }
}
</script>

<style lang="scss">

.gender-selection {
  display: flex;

  &_background_grey {
    background: #dadce0;
  }

  &__slider {
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    border-radius: inherit;
    transition: inherit;
    background: #ffffff;

    &_position-male {
      right: 50%;
      left: 3px;
      top: 3px;
      bottom: 3px;
    }

    &_position-female {
      left: 50%;
      right: 3px;
      top: 3px;
      bottom: 3px;
    }
  }

  &__block {
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7d7d7d;
    cursor: pointer;
    user-select: none;
    outline-style: none;
    transition: inherit;

    &_border-male {
      border-radius: 20px 0 0 20px;
    }

    &_border-female {
      border-radius: 0 20px 20px 0;
    }

    &_color-text_black {
      color: black;
      cursor: default;
    }
  }

  &__block:hover {
    color: black;
  }

  &__input {
    display: none;
    position: absolute;
  }
}

</style>