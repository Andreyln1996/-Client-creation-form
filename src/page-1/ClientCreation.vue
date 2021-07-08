<template>

  <form
      v-on:keyup.enter="touch()"
      class="client-creation">

    <h3 class="client-creation__title">Создание Клиента</h3>

    <lastname-input
        ref="lastname-input"
        id="lastname"
        label="Фамилия*"/>

    <firstname-input
        ref="firstname-input"
        id="firstname"
        label="Имя*"/>

    <patronymic-input
        ref="patronymic-input"
        id="patronymic"
        label="Отчество"/>

    <date-input
        ref="date-input"
        id="birthday"
        label="Дата рождения*"/>

    <phone-input
        ref="phone-input"
        id="phone"
        label="Номер телефона*"/>

    <gender-selection/>

    <client-group
        ref="client-group"
        id="client"
        label="Группа клиентов*"/>

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
          type="button"
          class="client-creation__button"
          @click="touch()">
        Далее
      </button>
    </div>
  </form>
</template>

<script>
import PhoneInput from "@/page-1/components/PhoneInput";
import GenderSelection from "@/page-1/components/GenderSelection";
import CustomSelect from "@/components/CustomSelect";
import ClientGroup from "@/page-1/components/ClientGroup";
import FirstnameInput from "@/page-1/components/FirstnameInput";
import LastnameInput from "@/page-1/components/LastnameInput";
import PatronymicInput from "@/page-1/components/PatronymicInput";
import DateInput from "@/components/DateInput";

export default {
  name: "ClientCreation",

  data() {
    return{
      a: true,
      b: true,
      c: true,
      d: true,
      e: true,
      f: true,
    }
  },

  components: {
    DateInput,
    PatronymicInput,
    LastnameInput,
    FirstnameInput,
    ClientGroup,
    CustomSelect,
    PhoneInput,
    GenderSelection
  },

  methods: {

    touch() {

      this.$refs["lastname-input"].$v.$touch()
      this.$refs["patronymic-input"].$v.$touch()
      this.$refs["phone-input"].$v.$touch()
      this.$refs["date-input"].$v.$touch()
      this.$refs["client-group"].$v.$touch()
      this.$refs["firstname-input"].$v.$touch()

      this.a =  this.$refs["lastname-input"].$v.$error
      this.e =  this.$refs["client-group"].$v.$error
      this.d =  this.$refs["date-input"].$v.$error
      this.c =  this.$refs["phone-input"].$v.$error
      this.b =  this.$refs["patronymic-input"].$v.$error
      this.f =  this.$refs["firstname-input"].$v.$error

      if (this.error === false) this.$router.push('address')
    }
  },

  computed: {

    error () {
      return this.a || this.b || this.c || this.d || this.e
          ||this.f
    }

  }
}
</script>

<style lang="scss">

.client-creation {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100%;

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
    outline-style: none;
  }

  &__button:hover {
    background-color: #1667d2;
  }
}

@media (max-width: 768px) {

  .client-creation {
    justify-content: space-around;

    &__button {
      height: 40px;
      width: 95px;
    }
  }
}
</style>