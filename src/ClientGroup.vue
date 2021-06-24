<template>
  <div
      :id="id"
      :label="label"
      class="client-group">

    <div
        :class="{
          'input-wrapper_focused': hovered}"
        class="input-wrapper client-group__wrapper"
        tabindex="0"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
        @blur="focused = false">

      <div
          :class="{'client-group__selected_focused': focused}"
          class="client-group__selected"
          @click="focused = !focused">

        <div
            class="client-group__tag"
            v-for="(group,i) in selectedGroup" :key="i"
            @click.stop="group.selected = !group.selected">

          {{ group.text }}
        </div>
      </div>

      <div
          class="custom-select__arrow"
          :class="{
            'custom-select__arrow_rotate': focused,
            'custom-select__arrow_color-blue': hovered}"
          @click="focused = !focused">
      </div>

      <div
          v-for="(group,i) in clientGroup" :key="i"
          :class="{
            'client-group__label_selected'
            :group.selected === true,
            'client-group__label_focused': focused}"
          class="client-group__label"
          @click="group.selected = !group.selected">

        {{ group.text }}
      </div>
    </div>

    <label
        :for="id"
        :class="{'input-wrapper__label_color_blue': hovered }"
        class="
          input-wrapper__label
          input-wrapper__label_position_up">

      {{ label }}
    </label>
  </div>
</template>

<script>
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

  computed: {
    selectedGroup() {
      return this.clientGroup.filter(function (group) {
        return group.selected === true
      })
    }
  }
}
</script>

<style lang="scss">

.client-group {
  margin: 0 0 20px;
  height: 40px;
  position: relative;
  z-index: 2;

  &__wrapper {
    height: auto;
    overflow: hidden;
    background-color: #ffffff;
    outline-style: none;
  }

  &__selected {
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px transparent;

    &_focused {
      border-bottom-color: #dadce0;
    }
  }

  &__label {
    height: 0;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: inherit;
    background-color: #ffffff;
    overflow: hidden;

    &_focused {
      height: 30px;
      opacity: 1;
    }

    &_selected {
      background-color: #dadce0;
    }
  }

  &__tag {
    display: flex;
    align-items: center;
    padding: 1px 4px;
    margin-right: 4px;
    user-select: none;
    background-color: #dadce0;
    border-radius: 8px;
  }

  &__tag::after {
    content: "\D7";
    color: #7d7d7d;
    padding-left: 2px;
  }

  &__tag:hover::after {
    color: black;
  }
}
</style>