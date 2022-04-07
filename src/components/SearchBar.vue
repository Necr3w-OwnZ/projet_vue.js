<template>
  <div>
    <textarea
      v-on:keyup.enter="submit"
      v-model="text"
      class="search"
      rows="1"
      cols="50"
    ></textarea>
    <button v-on:click="submit()">Chercher</button>
  </div>
</template>

<script>

export default {
  name: "SearchBar",
  data() {
    let text = "";
    let table = "medicament";

    return {
      text,
      table,
    };
  },
  methods: {
    // Envoyer le text entrer dans la barre de recherche dans la variable text
    submit: async function() {
      this.$emit("submit", this.text);
      this.text = "";
    },
  },
};
</script>

<style scoped></style>
