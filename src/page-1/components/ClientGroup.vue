<template>
  <div
      :id="id"
      :label="label"
      class="client-group">

    <div
        :class="{
          'input-wrapper_focused': hovered && !error,
          'input-wrapper_error': error}"
        class="input-wrapper client-group__wrapper"
        tabindex="0"
        @mouseenter="hovered = true"
        @blur="focused = false">

      <div
          class="client-group__selected"
          @click="focused = !focused; $v.selectedGroup.$model">

        <div
            class="client-group__tag"
            v-for="(group,i) in selectedGroup" :key="i"
            @click.stop="group.selected = !group.selected">
          {{ group.text }}
        </div>
      </div>

      <div
          v-if="!allSelectedGroup"
          class="client-group__arrow"
          :class="{
              'client-group__arrow_rotate'
              : focused,
              'client-group__arrow_error'
              : error,
              'client-group__arrow_color-blue'
              : hovered && !error}"
          @click="focused = !focused">
      </div>

      <div
          v-for="(group,i) in clientGroup" :key="i"
          :class="{
            'client-group__label_selected'
            :group.selected === true || !focused}"
          class="client-group__label"
          @click="group.selected = !group.selected">
        {{ group.text }}
      </div>
    </div>

    <span
        v-if="
          !$v.selectedGroup.required &&
          $v.selectedGroup.$dirty"
        class="client-group__error-msg">
      Поле обязательно для заполнения
    </span>

    <label
        :for="id"
        :class="{
          'input-wrapper__label_position_up'
          : notEmpty,
          'input-wrapper__label_color-blue'
          : hovered,
          'input-wrapper__label_color-red'
          : error}"
        class="
          input-wrapper__label">
      {{ label }}
    </label>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators';

export default {
  name: "ClientGroup",
  props: {
    label: String,
    id: String
  },

  data() {
    return {
      focused: false,
      hovered: false,
      clientGroup: [
        {selected: true, text: 'VIP'},
        {selected: false, text: 'Проблемные'},
        {selected: false, text: 'ОМС'}
      ]
    }
  },

  validations: {
    selectedGroup: {
      required
    }
  },

  watch: {
    selectedGroup() {
      this.$v.selectedGroup.$touch()
    }
  },

  computed: {

    selectedGroup() {
      return this.clientGroup.filter(function (group) {
        return group.selected === true
      })
    },

    allSelectedGroup() {
      return (this.selectedGroup.length ===
              this.clientGroup.length)
    },

    error() {
      return this.$v.selectedGroup.$error
    },

    notEmpty() {
      return this.selectedGroup.length !== 0 || this.focused
    },
  }
}
</script>

<style lang="scss">

.client-group {
  height: var(--height-input);
  position: relative;
  background-color: #ffffff;
  border-radius: calc(var(--height-input) / 2);
  z-index: 2;

  &__wrapper {
    height: auto;
    overflow: hidden;
    background-color: #dadce0;
    outline-style: none;
  }

  &__selected {
    height: var(--height-input);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }

  &__label {
    height: var(--height-input);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;
    overflow: hidden;
    color: #7d7d7d;

    &_selected {
      height: 0;
      opacity: 0;
    }
  }

  &__label:hover {
    color: black;
  }

  &__tag {
    user-select: none;
    margin: 0 4px;
    padding: 0 4px;
  }

  &__tag:hover {
    color: #7d7d7d;
  }

  &__arrow {
    position: absolute;
    top: calc((var(--height-input) - 2px) / 2 - 2px);
    width: 6px;
    height: 6px;
    right: 15px;
    border: solid 1px black;
    border-top: transparent;
    border-right: transparent;
    transform: rotate(315deg);
    transition: inherit;
    cursor: pointer;

    &_rotate {
      transform: rotate(135deg);
    }

    &_color-blue {
      border-color: #1a73e8;
    }

    &_error {
      border-color: red;
    }
  }

  &__error-msg {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: -13px;
    font-size: 9px;
    color: red;
  }
}

</style>