<template>

    <form
        v-on:keyup.enter="touch()"
        class="client-address">

      <h3 class="client-address__title">
        Адрес Клиента
      </h3>

      <index-input
          ref="index-input"
          id="index"
          label="Индекс"/>

      <address-input
          ref="country-input"
          id="country"
          label="Страна"/>

      <address-input
          ref="region-input"
          id="region"
          label="Область"/>

      <city-input
          ref="city-input"
          id="city"
          label="Город*"/>

      <address-input
          ref="street-input"
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
  data() {
    return{
      a: Boolean,
      b: Boolean,
      c: Boolean,
      d: Boolean,
      e: Boolean,
    }
  },

  components: {
    CityInput,
    AddressInput,
    IndexInput,
    DataInput
  },

  methods: {

    touch() {

      this.$refs["city-input"].$v.$touch()

      this.a =  this.$refs["index-input"].$v.$error
      this.e =  this.$refs["country-input"].$v.$error
      this.d =  this.$refs["region-input"].$v.$error
      this.c =  this.$refs["city-input"].$v.$error
      this.b =  this.$refs["street-input"].$v.$error

      if (this.error === false) this.$router.push('document')
    }
  },

  computed: {

    error () {
      return this.a || this.b || this.c || this.d || this.e
    }

  }
}
</script>

<style lang="scss">

.client-address {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 605px;

  &__title {
    text-align: center;
    font-size: 20px;
    margin: 0;
  }

  &__footer {
    height: var(--height-input);
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

@media (max-width: 768px) {

  .client-address {
    justify-content: space-around;
    height: 800px;

    &__btn {
      height: 40px;
      width: 95px;
    }
  }
}
</style>