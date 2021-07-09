<template>

  <form
      v-on:keyup.enter="touch()"
      class="client-document">

    <h3 class="client-document__title">
      Документ Клиента
    </h3>

    <custom-select
        id="documentType"
        label="Тип документа"
        :option="[
          'Паспорт',
          'Свидетельство о рождении',
          'Вод. удостоверение']"/>

    <data-input
        id="series"
        label="Серия"/>

    <index-input
        ref="number-input"
        id="number"
        label="Номер"/>

    <data-input
        id="issuedBy"
        label="Кем выдан"/>

    <date-input
        ref="dateIssued-input"
        id="dateIssued"
        label="Дата выдачи*"/>

    <div class="client-document__footer">

      <button
          type="button"
          class="client-document__btn
                client-document__btn_back"
          @click="$router.push('address')">
        Назад
      </button>

      <button
          type="button"
          class="client-document__btn
              client-document__btn_next"
          @click="touch()">
        Готово
      </button>

    </div>
  </form>
</template>

<script>
import DataInput from "@/components/DataInput";
import CustomSelect from "@/components/CustomSelect";
import IndexInput from "@/page-2/components/IndexInput";
import DateInput from "@/components/DateInput";

export default {
  name: "ClientDocument",
  data() {
    return {
      a: true,
      b: true,
    }
  },

  components: {
    DateInput,
    IndexInput,
    CustomSelect,
    DataInput
  },

  methods: {

    touch() {
      this.$refs["dateIssued-input"].$v.$touch()

      this.a = this.$refs["dateIssued-input"].$v.$error
      this.b = this.$refs["number-input"].$v.$error

      if (this.error === false) this.$router.push('message')
    }
  },
  computed: {

    error() {
      return this.a || this.b
    }
  }
}
</script>

<style lang="scss">

.client-document {
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

  .client-document {
    justify-content: space-around;
    height: 800px;

    &__btn {
      height: 40px;
      width: 95px;
    }
  }
}
</style>