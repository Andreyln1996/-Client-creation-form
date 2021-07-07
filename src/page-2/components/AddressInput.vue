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
      Некорректное название
    </span>

    <span
        class="error"
        v-else-if="!$v.text.minLength && $v.text.$dirty">
       Название должно содержать не менее
      {{$v.text.$params.minLength.min}} букв
    </span>

  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import {minLength} from 'vuelidate/lib/validators'

export default {
  name: "AddressInput",
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
      minLength: minLength(2),
      alpha: val => /^[а-яёa-zA-Z-]*$/i.test(val)
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
