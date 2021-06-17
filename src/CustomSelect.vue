<template>
  <div
      :id="id"
      :label="label"
      class="custom-select">
    <div
        :class="{
          'input-wrapper_focused': focused,
          'custom-select__select_height': focused}"
        class="custom-select__select input-wrapper"
        tabindex="0"
        @blur="blur"
        @focus="focus">

<!--      <label-->
<!--          :class="{-->
<!--              'custom-select__option_focused'-->
<!--               :focused,-->
<!--              'custom-select__option_position-up'-->
<!--              : selectIvanov}"-->
<!--          class="custom-select__option">-->

<!--        <input-->
<!--            type="radio"-->
<!--            name="doctor"-->
<!--            value="Ivanov"-->
<!--            v-model="doctor"-->
<!--            class="custom-select__input"-->
<!--        >-->
<!--        Иванов-->
<!--      </label>-->

<!--      <label-->
<!--          :class="{-->
<!--              'custom-select__option_focused'-->
<!--               :focused,-->
<!--              'custom-select__option_position-up'-->
<!--              : selectZakharov}"-->
<!--          class="custom-select__option">-->

<!--        <input-->
<!--            type="radio"-->
<!--            name="doctor"-->
<!--            value="Zakharov"-->
<!--            v-model="doctor"-->
<!--            class="custom-select__input">-->
<!--        Захаров-->
<!--      </label>-->
<!--      <label-->
<!--          :class="{-->
<!--              'custom-select__option_focused'-->
<!--               :focused,-->
<!--              'custom-select__option_position-up'-->
<!--              : selectChernysheva}"-->
<!--          class="custom-select__option">-->

<!--        <input-->
<!--            type="radio"-->
<!--            name="doctor"-->
<!--            value="Chernysheva"-->
<!--            v-model="doctor"-->
<!--            class="custom-select__input">-->
<!--        Чернышева-->
<!--      </label>-->
      <!--      <div-->
      <!--          v-for="doctor in doctors"-->
      <!--          :key="doctor.value"-->
      <!--          @click="select(doctor)"-->
      <!--          class="custom-select__option"-->
      <!--      :class="{'custom-select__option_focused': focused}">-->
      <!--        {{ doctor.lastname }}-->
      <!--      </div>-->
      <!--      <span>{{ text }}</span>-->
      <select name="" id="" class="custom-select__option">
        <option value="Chernysheva">Чернышева</option>
        <option value="Zakharov">Захаров</option>
        <option value="Ivanov">Иванов</option>
      </select>
    </div>
    <label
        :for="id"
        :class="{
          'input-wrapper__label_position_up': notEmpty,
          'input-wrapper__label_color_blue': focused }"
        class="input-wrapper__label">
      {{ label }}
    </label>

  </div>

</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    label: String,
    id: String
  },

  data() {
    return {
      focused: false,
      doctor: '',
      // doctors: [
      //   {lastname: 'Иванов', value: 1},
      //   {lastname: 'Захаров', value: 2},
      //   {lastname: 'Чернышева', value: 3},
      // ]
    }
  },
  computed: {
    notEmpty() {
      return this.doctor !== '' || this.focused
    },
    selectIvanov() {
      return this.doctor === 'Ivanov'
    },
    selectZakharov() {
      return this.doctor === 'Zakharov'
    },
    selectChernysheva() {
      return this.doctor === 'Chernysheva'
    }
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

<style lang="scss">

.custom-select {
  height: 40px;
  margin: 0 0 20px;
  position: relative;
  transition: 0.2s;


  &__select {
    overflow: hidden;
    background: #ffffff;
    outline-style: none;
    height: 40px;
    //display: flex;
    //justify-content: center;
    //flex-direction: column;
    //align-items: center;

    &_height {
      height: 120px;
      transition: 0.2s;
    }
  }

  &__value {
    height: 40px;
  }

  &__option {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    height: 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #7d7d7d;
    user-select: none;
    display: flex;
    transition: inherit;

    //&_focused {
    //  display: flex;
    //}

    &_position-up {

    }
  }


  &__input {
    display: none;
    position: absolute;
  }

  &__option:hover {
    background: #dadce0;
    color: black;
  }
}
</style>