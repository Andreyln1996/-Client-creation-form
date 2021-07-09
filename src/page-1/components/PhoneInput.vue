<template>
  <InputWrapper
      :id="id"
      :label="label"
      :notEmpty="notEmpty"
      :focused="focused"
      :error="$v.text.$error">

    <input
        v-mask="'+7 (999) 999-99-99'"
        v-model="$v.text.$model"
        :class="{'phone-input_focused': notEmpty}"
        class="phone-input"
        type="tel"
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
      Укажите телефон полностью
    </span>

  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import { required } from 'vuelidate/lib/validators'

export default {
  name: "PhoneInput",
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
      alpha: val => /^[\s0-9(+)-]*$/i.test(val)
    },
  },

  computed: {
    notEmpty() {
      return this.text !== '' || this.focused
    }
  },

  methods: {

    focus() {
      this.focused = true;
    },

    blur() {
       this.focused = false
    }
  }
}

</script>

<style lang="scss">

.phone-input {
  border-radius: inherit;
  height: 100%;
  padding: 0 13px;
  border-style: none;
  width: 100%;
  background: transparent;
  color: #ffffff;
  transition: 0.2s;

  &_focused {
    color: black;
  }
}
</style>