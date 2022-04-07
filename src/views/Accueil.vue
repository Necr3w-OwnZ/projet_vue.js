<template>
  <div class="accueil">
    Bienvenue sur GSB !!
    <SearchBar @submit="submit" />
    <Afficheur :tab="tab" />
  </div>
</template>

<script>
import Afficheur from "@/components/Afficheur.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    SearchBar,
    Afficheur,
  },
  data() {
    const donnees = this.$store.getters.get_donnees;
    const table = this.$store.getters.get_table;
    let tab = donnees[table[3]]

    return {
      tab,
    };
  },
  methods: {
    submit(text) {
      // this.tab[this.tab.length] = text.length;
    },
  },
};
</script>

<style>
.accueil {
  width: 100%;
  height: 100%;
}
</style>
