<template>

  <InputWrapper
      :id="id"
      :label="label"
      :notEmpty="notEmpty"
      :focused="focused">

    <input
        v-model.trim="text"
        class="data-input"
        type="number"
        maxlength="6"
        oninput="if (this.value.length > this.maxLength)
          this.value = this.value.slice(0, this.maxLength);"
        @focus="focus()"
        @blur="blur()">
  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";

export default {
  name: "IndexInput",
  components: {InputWrapper},

  props: {
    label: String,
    id: String
  },

  data() {
    return {
      focused: false,
      text: '',
    }
  },

  computed: {

    notEmpty() {
      return this.text !== '' || this.focused
    },


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
