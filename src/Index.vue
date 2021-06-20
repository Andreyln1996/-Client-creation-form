<template>
  <div class="index">
    <div class="index__login-form">
      <h3 class="index__title">Cоздание клиента</h3>
      <form class="index__form" autocomplete="off">
        <DataInput id="lastname"
                   label="Фамилия"></DataInput>
        <DataInput id="firstname" label="Имя"></DataInput>
        <DataInput id="patronymic"
                   label="Отчество"></DataInput>
        <VDate id="birthday" label="Дата рождения"></VDate>
        <PhoneInput id="phone"
                    label="Номер телефона"></PhoneInput>
        <GenderSelection></GenderSelection>
        <CustomSelect id="doctor"
                      label="Лечащий врач"></CustomSelect>
        <doctor-input></doctor-input>
        <input type="radio" checked>

      </form>
    </div>
  </div>

</template>

<script>
import DataInput from "@/DataInput";
import VDate from "@/VDate";
import PhoneInput from "@/PhoneInput";
import GenderSelection from "@/GenderSelection";
import CustomSelect from "@/CustomSelect";
import DoctorInput from "@/DoctorInput";

export default {
  name: "Index",
  components: {
    DoctorInput,
    CustomSelect,
    DataInput,
    VDate,
    PhoneInput,
    GenderSelection
  }
}
</script>

<style lang="scss">

.index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__login-form {
    border-radius: 20px;
    border: 1px #dadce0 solid;
    padding: 0 25px;
    font-size: 14px;
  }

  &__title {
    text-align: center;
  }

  &__form {
    width: 250px;
  }
}

</style>