<template>

  <div
      class="client-created"
      v-on:keyup.enter="$router.push('/')">

    <div class="client-created__container">

      <h3
          class="client-created__title">
        Новый клиент успешно создан
      </h3>

      <button
          type="button"
          class="client-created__btn"
          @click="$router.push('/')">
        ОК
      </button>

    </div>

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
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;

  &__container {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  &__title {
    text-align: center;
    font-size: 20px;
    margin: 0;
  }

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
@media (max-width: 768px) {

  .client-created {
    height: 100%;

    &__btn {
      height: 40px;
      width: 95px;
    }
  }
}
</style>