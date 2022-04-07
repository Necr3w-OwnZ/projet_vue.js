<template>
  <div v-if="isConnected && isLoading" class="main">
    <div class="nav">
      <div class="logo"></div>
      <router-link to="/"><div class="block">Accueil</div></router-link>
      <router-link to="/visites"
        ><div class="block">Mes visites</div></router-link
      >
      <router-link to="/medecin"><div class="block">Médecin</div></router-link>
      <router-link to="/medicament"
        ><div class="block">Médicament</div></router-link
      >
      <button v-if="isLight" class="light" v-on:click="light">
        <img :src="lune" />
      </button>
      <button v-else class="light" v-on:click="light">
        <img :src="soleil" />
      </button>
      <button class="deco" v-on:click="deco">Déconnexion</button>
    </div>
    <router-view class="vue"></router-view>
  </div>

  <Connexion v-if="!isConnected" @connect="connect" />

  <div v-if="!isLoading" class="loading">Chargement ...</div>
</template>

<script>
import Connexion from "@/views/Connexion.vue";
import axios from "axios";
import lunes from "@/assets/lunes.png";
import soleils from "@/assets/soleil.png";

export default {
  components: {
    Connexion,
  },
  data() {
    let isConnected = false;
    let isLoading = true;
    let isLight = false;
    let lune = lunes;
    let soleil = soleils;

    return {
      isConnected,
      isLoading,
      isLight,
      lune, soleil
    };
  },
  methods: {
    light() {
      if (this.isLight) {
        this.isLight = false;
      } else {
        this.isLight = true;
      }
    },
    // Button déconnexion
    deco() {
      this.isConnected = false;
    },
    // Button connexion
    connect() {
      this.isConnected = true;
      this.loading();
    },
    // Requette a l'api et page de chargement
    async loading() {
      this.isLoading = false;
      let delay = null;
      this.$store.dispatch(
        "set_donnees",
        await axios
          .get("http://172.29.1.39:5400/search")
          .then((reponse) => reponse.data)
          .then(
            (delay = setInterval(() => {
              this.isLoading = true;
              clearInterval(delay);
            }, 500))
          )
          .catch(function (error) {
            console.log(" error : ", error);
          })
      );
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  color: var(--main-color);
  font-family: "Poppins", sans-serif;
}
:root {
  --main-bg-color: #1b1c1d;
  --second-bg-color: #26c4ec;
  --main-color: #edf4fe;
  --second-color: #1a2b3c;
  --second-color-nav: #1a2b3c2c;
}
.main {
  width: 100%;
  min-height: 100%;
}
.nav {
  width: 100%;
  height: 40px;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  background: var(--second-color);
  padding: 20px;
}
.block {
  padding: 5px 20px;
  margin: 20px 2px;
  border: 1px solid var(--main-color);
  border-radius: 5px;
  cursor: pointer;
}
.vue {
  width: 100%;
  height: 100%;
}
.connexion {
  width: 100%;
  height: 100%;
}
button {
  background: var(--second-bg-color);
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
textarea {
  background: var(--main-bg-color);
  border: 2px solid var(--main-color);
  resize: none;
}
.light img {
  width: 18px;
}
</style>
