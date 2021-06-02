<template>
  <InputWrapper
      :id="id"
      :label="label"
      :notEmpty="notEmpty"
      :focused="focused">

    <input
        v-mask="'##.##.####'"
        v-model="text"
        class="date-input"
        type="text"
        :placeholder="focused ? 'дд.мм.гггг' : '' "
        @focus="focus()"
        @blur="blur()">
  </InputWrapper>
</template>

<script>
import InputWrapper from "@/InputWrapper";

export default {
  name: "VDate",
  components: {InputWrapper},

  props: {
    label: String,
    id: String
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

.date-input {
  border-radius: inherit;
  height: 100%;
  padding: 0 13px;
  background: transparent;
  width: 100%;
  border-style: none;
}
</style>