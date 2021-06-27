<template>
  <form class="client-creation">
    <h3 class="client-address__title">Создание Клиента</h3>

    <name-input id="lastname" label="Фамилия*"/>
    <name-input id="firstname" label="Имя*"/>
    <data-input id="patronymic" label="Отчество"/>

    <v-date id="birthday" label="Дата рождения"/>
    <phone-input id="phone" label="Номер телефона"/>

    <gender-selection/>

    <client-group id="client" label="Группа клиентов"/>

    <custom-select
        id="doctor"
        label="Лечащий врач"
        :option="['Иванов', 'Захаров', 'Чернышева']"/>

    <div class="client-creation__footer">

      <label class="client-creation__checkbox">
        <input
            type="checkbox" id="sms"
            style="cursor: pointer">
        Не отправлять СМС
      </label>

      <button
          class="client-creation__button"
          @click="$router.push('address')">
        Далее
      </button>
    </div>
  </form>
</template>

<script>
import DataInput from "@/components/DataInput";
import VDate from "@/components/VDate";
import PhoneInput from "@/page-1/PhoneInput";
import GenderSelection from "@/page-1/GenderSelection";
import CustomSelect from "@/components/CustomSelect";
import ClientGroup from "@/page-1/ClientGroup";
import NameInput from "@/page-1/NameInput";

export default {
  name: "ClientCreation",
  components: {
    NameInput,
    ClientGroup,
    CustomSelect,
    DataInput,
    VDate,
    PhoneInput,
    GenderSelection
  }
}
</script>

<style lang="scss">

.client-creation {

  &__footer {
    margin-bottom: 20px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1px;
  }

  &__checkbox {
    color: #7d7d7d;
    user-select: none;
    cursor: pointer;
  }

  &__button {
    border-radius: 20px;
    border-style: none;
    color: white;
    background-color: #1a73e8;
    cursor: pointer;
    height: 30px;
    width: 75px;
  }

  &__button:hover {
    background-color: #1667d2;
  }
}

</style>