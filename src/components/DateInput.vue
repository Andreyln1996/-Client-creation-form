<template>

  <InputWrapper
      :id="id"
      :label="label"
      :notEmpty="notEmpty"
      :focused="focused"
      :error="$v.recodingDate.$error">

    <input
        v-model.trim="date"
        :class="{'date-input_focused': notEmpty}"
        class="date-input"
        type="date"
        @focus="focus(); $v.recodingDate.$reset()"
        @blur="blur(); $v.recodingDate.$touch()">

    <span
        class="error"
        v-if="
          !$v.recodingDate.required &&
          $v.recodingDate.$dirty">
      Поле обязательно для заполнения
    </span>

    <span
        class="error"
        v-if="
          (!$v.recodingDate.minValue ||
          !$v.recodingDate.maxValue) &&
          $v.recodingDate.$dirty">
      Некорректная дата
    </span>
  </InputWrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";
import {maxValue, required, minValue} from 'vuelidate/lib/validators';

export default {
  name: "DateInput",
  components: {InputWrapper},

  props: {
    label: String,
    id: String
  },

  data() {
    return {
      focused: false,
      date: '',
    }
  },

  validations: {
    recodingDate: {
      required,
      maxValue: maxValue(new Date()),
      minValue: minValue(new Date('1900-01-01'))
    }
  },

  computed: {

    notEmpty() {
      return this.date !== '' || this.focused
    },

    recodingDate() {
      return this.date ? new Date(this.date) : null
    }
  },

  methods: {

    touch() {
      this.$v.$touch()
      return this.$v.$error
    },

    focus() {
       this.focused = true
    },

    blur() {
       this.focused = false
    }
  }
}

</script>

<style lang="scss">

.date-input {
  border-radius: inherit;
  height: 100%;
  padding: 0 13px;
  width: 100%;
  border-style: none;
  color: #ffffff;
  cursor: text;
  background-color: #ffffff;
  transition: 0.2s;

  &_focused {
    color: black;
  }
}

.date-input::-webkit-calendar-picker-indicator {
  opacity: 25%;
  cursor: pointer;
}
</style>