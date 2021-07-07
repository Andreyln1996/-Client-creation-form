<template>

    <form
        class="client-address"
        v-on:keyup.enter="touch()">

      <h3 class="client-address__title">
        Адрес Клиента
      </h3>

      <index-input
          id="index"
          label="Индекс"/>

      <address-input
          id="country"
          label="Страна"/>

      <address-input
          id="region"
          label="Область"/>

      <city-input
          ref="city-input"
          id="city"
          label="Город*"/>

      <address-input
          id="street"
          label="Улица"/>

      <data-input
          id="home"
          label="Дом"/>

      <div class="client-address__footer">

        <button
            type="button"
            class="client-address__btn
                client-address__btn_back"
            @click="$router.push('/')">
          Назад
        </button>

        <button
            type="button"
            class="client-address__btn
              client-address__btn_next"
            @click="touch()">
          Далее
        </button>
      </div>
    </form>
</template>

<script>
import DataInput from "@/components/DataInput";
import IndexInput from "@/page-2/components/IndexInput";
import AddressInput from "@/page-2/components/AddressInput";
import CityInput from "@/page-2/components/CityInput";

export default {
  name: "ClientAddress",
  components: {
    CityInput,
    AddressInput,
    IndexInput,
    DataInput
  },

  methods: {

    touch() {
      this.$refs["city-input"].$v.$touch()
      if (this.$refs["city-input"].$v.$error === false)
        this.$router.push('document')
    }
  }
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
    outline-style: none;


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