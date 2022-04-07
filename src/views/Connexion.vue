<template>
  <div class="connexion">
    <textarea class="id element" name="id" cols="30" rows="1"></textarea>
    <textarea class="pw element" name="password" cols="30" rows="1"></textarea>
    <button class="connect element" v-on:click="$emit('connect')">Connexion</button>
  </div>
</template>

<script>
export default {
  name: "Connexion",
};
</script>

<style scoped>
.connexion {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.element{
  margin: 8px;
}
</style>
