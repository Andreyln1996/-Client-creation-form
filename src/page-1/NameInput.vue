<template>
  <InputWrapper
      :id="id"
      :label="label"
      :notEmpty="notEmpty"
      :focused="focused"
      :error="$v.text.$error">

    <input
        v-model.trim="$v.text.$model"
        class="name-input"
        type="text"
        @focus="focus()"
        @blur="blur()">

    <span
        class="error"
        v-if="!$v.text.required && $v.text.$dirty">
      Обязательно для заполнения
    </span>

    <span
        class="error"
        v-if="!$v.text.minLength && $v.text.$dirty">
      Фамилия должна состоять не менее {{$v.text.$params.minLength.min}} символов
    </span>
  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "NameInput",
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
      minLength: minLength(2),
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
    }
  }
}
</script>

<style lang="scss">

.name-input {
  border-radius: inherit;
  height: 100%;
  padding: 0 13px;
  border-style: none;
  width: 100%;
  background: transparent;
}

.error {
  position: relative;
  bottom: 2px;
  font-size: 8.5px;
  color: red;

}
</style>