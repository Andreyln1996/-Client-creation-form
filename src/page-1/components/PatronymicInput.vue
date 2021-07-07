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
        v-if="!$v.text.alpha && $v.text.$dirty">
      Поле должно содержать только буквы
    </span>

    <span
        class="error"
        v-else-if="!$v.text.minLength && $v.text.$dirty">
       Отчество должно содержать не менее
      {{$v.text.$params.minLength.min}} букв
    </span>

  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import {minLength} from 'vuelidate/lib/validators'

export default {
  name: "PatronymicInput",
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
      minLength: minLength(5),
      alpha: val => /^[а-яёa-zA-Z]*$/i.test(val)
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
