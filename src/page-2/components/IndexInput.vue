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
        type="number"
        maxlength="6"
        oninput="if (this.value.length > this.maxLength)
          this.value = this.value.slice(0, this.maxLength);"
        @focus="focus()"
        @blur="blur()">

    <span
        class="error"
        v-if="!$v.text.minLength && $v.text.$dirty">
       Поле должено содержать не менее
      {{$v.text.$params.minLength.min}} цифр
    </span>

  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import {minLength} from "vuelidate/lib/validators";

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

  validations: {
    text: {
      minLength: minLength(6),
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
