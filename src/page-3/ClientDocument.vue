<template>

  <form
      class="client-document"
      v-on:keyup.enter="touch()">

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
        id="series" label="Серия"/>

    <index-input
        id="number"
        label="Номер"/>

    <data-input
        id="issuedBy"
        label="Кем выдан"/>

    <date-input
        ref="data-input"
        id="dataIssued"
        label="Дата выдачи*"/>

    <div class="client-document__footer">

      <button
          class="client-document__btn
                client-document__btn_back"
          @click="$router.push('/address')">
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
  components: {
    DateInput,
    IndexInput,
    CustomSelect,
    DataInput
  },
  methods: {

    touch() {
      this.$refs["data-input"].$v.$touch()
      if (this.$refs["data-input"].$v.$error === false)
        this.$router.push('message')
    }
  }
}
</script>

<style lang="scss">

.client-document {
 min-width: 250px;

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