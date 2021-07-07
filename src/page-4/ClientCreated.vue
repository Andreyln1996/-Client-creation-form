<template

    v-on:keyup.enter="$router.push('/')">

  <div
      class="client-created"
      v-on:keyup.enter="$router.push('/')">

    <h3> Новый клиент успешно создан </h3>

    <button
        type="button"
        class="client-created__btn"
        @click="$router.push('/')"
        >
      ОК
    </button>

  </div>
</template>

<script>
export default {
  name: "ClientCreated",

  created() {
    document.addEventListener('keydown', this.onKeyDown);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeyDown)
  },

  methods: {
    onKeyDown(e) {
      if (e.key === 'Enter') {this.$router.push('/')}
    },
  },
}
</script>

<style lang="scss">

.client-created {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  height: 150px;

  &__btn {
    cursor: pointer;
    border-radius: 20px;
    border-style: none;
    height: 30px;
    width: 75px;
    outline-style: none;
    color: white;
    background-color: #1a73e8;
  }

  &__btn:hover {
    background-color: #1667d2;
  }

}

</style>