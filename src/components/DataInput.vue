<template>
  <InputWrapper
      :id="id"
      :label="label"
      :notEmpty="notEmpty"
      :focused="focused"
      :error="error">

    <input
        v-model.trim="$v.text.$model"
        class="data-input"
        type="text"
        @focus="focus()"
        @blur="blur()">
  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import { required, minLength} from 'vuelidate/lib/validators'

export default {
  name: "DataInput",
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

  validations: {
    text: {
      required,
      minLength: minLength(2)
    }
  },

  computed: {
    notEmpty() {
      return this.text !== '' || this.focused
    },

    error() {
      return this.$v.text.$dirty && !this.$v.text.required
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

.data-input {
  border-radius: inherit;
  height: 100%;
  padding: 0 13px;
  border-style: none;
  width: 100%;
  background: transparent;
}
</style>