<template>
  <div class="index">
    <div class="index__login-form">
      <h3 class="index__title">Cоздание клиента</h3>
      <form class="index__form">
        <DataInput id="lastname" label="Фамилия"></DataInput>
        <DataInput id="firstname" label="Имя"></DataInput>
        <DataInput id="patronymic" label="Отчество"></DataInput>
        <VDate id="birthday" label="Дата рождения"></VDate>
        <input type="submit">

      </form>
    </div>
  </div>
</template>

<script>
import DataInput from "@/DataInput";
import VDate from "@/VDate";

export default {
  name: "Index",
  components: {DataInput, VDate}
}
</script>

<style lang="scss">

.index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__login-form {
    border-radius: 8px;
    border: 1px #dadce0 solid;
  }

  &__title {
    text-align: center;
  }

  &__form {
    padding: 0 50px;
  }
}
</style>