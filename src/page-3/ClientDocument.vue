<template>
  <form class="client-document">
    <h3 class="client-document__title">Документ Клиента</h3>

    <custom-select
        id="documentType"
        label="Тип документа"
        :option="[
          'Паспорт',
          'Свидетельство о рождении',
          'Вод. удостоверение']"/>

    <data-input id="series" label="Серия"/>
    <data-input id="number" label="Номер"/>
    <data-input id="issuedBy" label="Кем выдан"/>
    <v-date id="dataIssued" label="Дата выдачи"/>

    <div class="client-document__footer">

      <button
          class="client-document__btn
                client-document__btn_back"
          @click="$router.push('/address')">
        Назад
      </button>

      <button
          class="client-document__btn
              client-document__btn_next">
        Готово
      </button>
    </div>
  </form>
</template>

<script>
import DataInput from "@/components/DataInput";
import VDate from "@/components/VDate";
import CustomSelect from "@/components/CustomSelect";
export default {
  name: "ClientDocument",
  components: {CustomSelect, VDate, DataInput}
}
</script>

<style lang="scss">

.client-document {
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