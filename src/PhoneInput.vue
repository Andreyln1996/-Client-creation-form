<template>
  <div class="phone-input">
    <input
        v-mask="'+7 (###) ###-##-##'"
        v-model="text"
        :id="id"
        class="phone-input__input"
        type="tel"
        :placeholder="focused ? '+7 (999) 999-99-99' : ''"
        @focus="focus()"
        @blur="blur()">
    <label
        :for="id"
        :class="{
          'phone-input__label_position_up': notEmpty,
          'phone-input__label_color_blue': focused }"
        class="entry-field__label">
      {{ label }}
    </label>
  </div>
</template>

<script>

export default {
  name: "PhoneInput",
  props: {
    label: {
      type: String
    },
    id: {
      type: String
    },
  },
  data() {
    return {
      focused: false,
      text: ''
    }
  },
  computed: {
    notEmpty() {
      return this.text !== '' || this.focused
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

.phone-input {
  margin: 0 0 20px;
  position: relative;
  height: 40px;
  font-size: 14px;
  transition: 0.2s;

  &__input {
    border-radius: 20px;
    height: 100%;
    padding: 0 13px;
    border: 1px #dadce0 solid;
    width: 100%;
  }

  &__input:focus {
    box-shadow: 0 0 1px 0 #1a73e8;
    border: 1px #1a73e8 solid;
    transition: inherit;
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
      padding: 0 4px 0 3px;
      top: -8px;
      left: 10px;
      font-size: 10px;
    }

    &_color_blue {
      color: #1a73e8;
    }
  }
}
</style>