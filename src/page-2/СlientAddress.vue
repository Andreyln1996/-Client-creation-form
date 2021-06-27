<template>
    <form class="client-address">
      <h3 class="client-address__title">Адрес Клиента</h3>
      <data-input id="index" label="Индекс"></data-input>
      <data-input id="country" label="Страна"></data-input>
      <data-input id="region" label="Область"></data-input>
      <data-input id="city" label="Город"></data-input>
      <data-input id="street" label="Улица"></data-input>
      <data-input id="home" label="Дом"></data-input>

      <div class="client-address__footer">

        <button
            class="client-address__btn
                client-address__btn_back"
            @click="$router.push('/')">
          Назад
        </button>

        <button
            class="client-address__btn
              client-address__btn_next"
            @click="$router.push('document')">
          Далее
        </button>
      </div>
    </form>
</template>

<script>
import DataInput from "@/components/DataInput";

export default {
  name: "ClientAddress",
  components: {DataInput}
}
</script>

<style lang="scss">

.client-address {
  width: 250px;

  &__title {
    text-align: center;
  }

  &__footer {
    margin-bottom: 20px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1px;
  }

  &__btn {
    cursor: pointer;
    border-radius: 20px;
    border-style: none;
    height: 30px;
    width: 75px;

    &_back {
      color: #1a73e8;
      background-color: #ffffff;
    }

    &_back:hover {
      color: #1667d2;
      background-color: rgba(26, 115, 232, 0.05);
    }

    &_next {
      color: white;
      background-color: #1a73e8;
    }

    &_next:hover {
      background-color: #1667d2;
    }
  }
}
</style>