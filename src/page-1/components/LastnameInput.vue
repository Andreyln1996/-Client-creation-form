<template>

  <InputWrapper
      :id="id"
      :label="label"
      :notEmpty="notEmpty"
      :focused="focused"
      :error="$v.text.$error">

    <input
        v-model.trim="text"
        class="data-input"
        type="text"
        @focus="focus(); $v.text.$reset()"
        @blur="blur(); $v.text.$touch()">

    <span
        class="error"
        v-if="!$v.text.required && $v.text.$dirty">
      Поле обязательно для заполнения
    </span>

    <span
        class="error"
        v-if="!$v.text.alpha && $v.text.$dirty">
      Поле должно содержать только буквы
    </span>

  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import { required } from 'vuelidate/lib/validators'

export default {
  name: "LastnameInput",
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

  validations: {
    text: {
      required,
      alpha: val => /^[а-яёa-zA-Z]*$/i.test(val)
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
