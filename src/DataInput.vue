<template>
  <div class="entry-field">
    <input
        v-model="text"
        :id="id"
        class="entry-field__input"
        type="text"
        @focus="focus()"
        @blur="blur()">
    <label
        :for="id"
        :class="{
          'entry-field__label_position_up': notEmpty,
          'entry-field__label_color_blue': focused }"
        class="entry-field__label">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "entry-field",
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

.entry-field {
  margin: 0 0 20px;
  position: relative;

  &__input {
    border-radius: 20px;
    padding: 10px;
    border: 1px #dadce0 solid;
    font-size: 16px;
    width: 250px;
    background: transparent;
  }

  &__input:focus {
    outline-style: none;
    box-shadow: 0 0 0 1px #1a73e8;
    border: 1px #1a73e8 solid;
  }

  &__label {
    position: absolute;
    top: 11px;
    left: 11px;
    font-family: sans-serif;
    color: #7d7d7d;
    pointer-events: none;
    transition: 0.15s;

    &_position_up {
      background: #ffff;
      padding: 0 2px;
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