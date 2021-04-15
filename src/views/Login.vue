<template>
  <main>
  <div class="container col-12 col-md-6 col-xl-4 mt-5 text-center" id="loginForm">
    <form @submit.prevent="loginRequest">
      <h1 class="card-title mb-5 pt-4">Se connecter</h1>
      <div class="alert alert-danger" v-if="error">
      {{ error }}
      </div>
      <div class="mb-3 col-xs d-block mx-auto">
        <label for="inputtext1" class="form-label">Utilisateur</label>
        <input type="text" class="form-control" id="inputtext1" placeholder="Nom d'utilisateur" aria-describedby="textHelp" v-model="login">
        </div>
      <div class="mb-3 col-xs d-block mx-auto">
        <label for="inputPassword" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary btn-lg mb-5 px-5">Submit</button>
    </form>
  </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      role: "",
      login: "",
      password: "",
      error: null,
    };
  },
  methods: {
    loginRequest: async function () {
      const credential = window.btoa(this.login + ":" + this.password);

      await axios
        .get("http://localhost:3002/gsb/login", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + credential,
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          this.role = response.data.role;
          console.log(this.role);
          this.$router.push("/rapportsVisiteur");
          localStorage.setItem("username", this.login);
          console.log("user connecté");
          return response;
        })
        .catch((e) => {
          if (e.response.status === 401) {
            this.error = "Bad login or password";
            console.log("Unauthorized");
          } else {
            console.log(e);
          }
        });
    },
  },
};
</script>

<style scoped>
#loginForm {
    margin-top: 20vh !important;
    background-color: white;
    font-weight: bold;
    border-radius: 30px;
    opacity: 0.6;
}
</style>