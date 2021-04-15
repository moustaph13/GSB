<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
          <img src="../assets/img/logo-gsb.png" id="logo" alt="logo" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
              <div
              class="d-flex justify-content-end align-items-center"
              id="connexion"
              v-if="user"
            >
              <div class="fs-5 mr-5 text-primary" id="pseudo">Bonjour, {{ user }}</div>
          <i id="deconnexion" class="fas fa-power-off fs-5 text-primary" @click="logout"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  props: ["user"],
  methods: {
    logout: async function () {
      await axios
        .get("http://localhost:3002/gsb/logout", {
          withCredentials: true,
        })
        .catch((e) => {
          console.log(e);
        })
        .then(() => {
          localStorage.clear();
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
img {
  width: 3%;
}
#deconnexion:hover {
  color: #dc3545 !important;
}
#connexion div {
  padding-right: 10px;
  font-weight: bold;
}
#deconnexion,
#logo {
  cursor: pointer;
}
input:focus,
textarea:focus,
button:focus,
select:focus {
  outline: 0;
}
</style>