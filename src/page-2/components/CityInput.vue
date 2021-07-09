<template>

  <InputWrapper
      :id="id"
      :label="label"
      :notEmpty="notEmpty"
      :focused="focused"
      :error="$v.text.$error">

    <input
        v-model.trim="$v.text.$model"
        class="data-input"
        type="text"
        @focus="focus()"
        @blur="blur()">

    <span
        class="error"
        v-if="!$v.text.required && $v.text.$dirty">
      Поле обязательно для заполнения
    </span>

    <span
        class="error"
        v-if="!$v.text.alpha && $v.text.$dirty">
      Некорректное название
    </span>

    <span
        class="error"
        v-else-if="!$v.text.minLength && $v.text.$dirty">
       Имя должно содержать не менее
      {{$v.text.$params.minLength.min}} букв
    </span>

  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import { required, minLength} from 'vuelidate/lib/validators'

export default {
  name: "CityInput",
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
