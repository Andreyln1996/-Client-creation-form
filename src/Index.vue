<template>
  <div class="block">
    <h3>Cоздание клиента</h3>
    <form>
      <VInput id="lastname" label="Фамилия"></VInput>
      <VInput id="firstname" label="Имя"></VInput>
      <VInput id="secondname" label="Отчество"></VInput>
      <VDate id="birthday" label="Дата рождения"></VDate>
    </form>
  </div>
</template>

<script>
import VInput from "@/VInput";
import VDate from "@/VDate";
export default {
  name: "Index",
  components:{VInput, VDate}
}
</script>

<style scoped>

body {
  margin: 0;
  padding: 0;
}

.block {
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform: translate(-50%, -50%);*/
  /*border-radius: 8px;*/
  /*border: 1px #dadce0 solid;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

}

h3 {
  text-align: center;
}

form {
  padding: 0 50px;
}
</style>