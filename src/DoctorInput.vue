<template>
  <input-wrapper>
    <select name="" id="" class="doctor-input">
      <option class="doctor-input__option" value="Chernysheva">Чернышева</option>
      <option class="doctor-input__option" value="Zakharov">Захаров</option>
      <option value="Ivanov">Иванов</option>
    </select>
  </input-wrapper>
</template>

<script>
import InputWrapper from "@/InputWrapper";
export default {
  name: "DoctorInput",
  components: {InputWrapper}
}
</script>

<style lang="scss">
.doctor-input {
  width: inherit;
  height: inherit;
  border-radius: 20px;
  padding: 0 13px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &__option {
    color: red;
    border-radius: 20px;
    margin: 0 0 20px;

    text-align: center;
  }
}

</style>