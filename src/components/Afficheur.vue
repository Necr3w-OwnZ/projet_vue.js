<template>
  <div>
    <h1>Donnée à afficher :</h1>
    <div v-for="(element, index) in tab" :key="index">{{ element }}</div>
  </div>
</template>

<script>
export default {
  name: "Afficheur",
  props: {
    tab: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped></style>
