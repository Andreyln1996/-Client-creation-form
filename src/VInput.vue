<template>
  <div class="input">
    <input @focus="focus()" @blur="blur()" v-model="mess" :id="id" type="text" required>
    <label :for="id" :class="{'focus':focused, 'vlabel': labelUp }">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    label: {
      type: String
    },
    id: {
      type: String
    },
  },
  data() {
    return {
      focused: false,
      mess: ''
    }
  },
  computed: {
    labelUp() {
      return this.focused || this.mess !== '';
    }
  },
  methods: {
    focus() {
      this.focused = true
    },
    blur() {
      this.focused = false
    }
  }
}
</script>

<style scoped>

label, .vlabel {
  color: #7d7d7d;
}

.focus, .vlabel {
  z-index: 0;
  background: #ffff;
  padding: 0 4px 1px;
}

div {
  margin: 0 0 20px;
  position: relative;
}

label {
  position: absolute;
  top: 11px;
  left: 11px;
  font-family: sans-serif;
  z-index: -1;
  transition: 0.15s;
}

.vlabel {
  top: -8px;
  left: 10px;
  font-size: 10px;
}

.focus {
  top: -8px;
  left: 10px;
  font-size: 10px;
  color: #1a73e8;
}

input {
  border-radius: 20px;
  padding: 10px;
  border: 1px #dadce0 solid;
  font-size: 16px;
  width: 250px;
  background: transparent;
}

input:focus {
  outline-style: none;
  box-shadow: 0 0 0 1px #1a73e8;
  border: 1px #1a73e8 solid;
}
</style>