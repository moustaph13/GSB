<template>

 <div class="container text-center" id="rapportsList">
        <h3 class="m-5">Liste des rapports</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Motif</th>
                    <th scope="col">Bilan</th>
                </tr>
            </thead>
            <tbody>
              <div>
              <ul id="rapports" class="p-0 m-0">
                <tr>
                
                    <td>13/05/2021</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </td>
                </tr>
                <tr>
                    <td>13/05/2021</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                </tr>   
                <tr>
                    <td>13/05/2021</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                </tr>
                <tr>
                    <td>13/05/2021</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                </tr>
              </ul>
              </div>
            </tbody>
        </table>
    </div>

    <div class="container text-center" id="content">
        <h3 class="m-5">Liste des rapports</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Motif</th>
                    <th scope="col">Bilan</th>
                </tr>
            </thead>
            <tbody>
            <div>
              <ul id="rapports" class="p-0 m-0">
                <li v-for="item in info" :key="item.id">
                  <div class="card rapports${rapport.id} mb-1">
                    <div
                      class="card-body d-flex justify-content-between py-0 px-1"
                    >
                      <div class="conteneurInfos py-1 px-0">
                        <div
                          class="infos infos${rapport.id} d-flex justify-content-between"
                        >
                        <tr>
                          <td scope="col">{{ item.date }}</td>
                          <td scope="col">{{ item.motif }}...</td>
                          <td scope="col">{{ item.bilan }}...</td>
                        </tr>
<!--                           <span>{{ item.date }}</span>
                          <span>{{ item.motif }}...</span>
                          <span>{{ item.bilan }}...</span> -->
                        </div>
                      </div>
                      <div class="boutons d_flex justify-content-end py-1 px-0">
                        <button
                          class="modifier modifierRapport${rapport.id} mr-2 text-primary border-0"
                        >
                          <i class="fas fa-pen"></i>
                        </button>
                        <button
                          class="supprimer supprimerRapport${rapport.id} text-danger border-0"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="form-group d-flex justify-content-evenly mt-4">
              <button
                id="creer"
                class="d-block rounded-pill bg-transparent text-primary px-3 py-2 border-primary fs-5"
              >
                Créer un rapport
              </button>
              <select name="idRapport" id="idRapport" class="border-black rounded-pill bg-transparent text-black fs-6">
                <option value="">--Sélectionnez un rapport--</option>
              </select>
            </div>
            </tbody>
        </table>
    </div>

</template>

<script>
import axios from "axios";

export default {
  name: "ListeRapport",
  props: ["user"],
  data() {
    return {
      info: null,
    };
  },
  methods: {
    listeRapport: async function () {
      const dataJson = await axios
        .get("http://localhost:3002/gsb/visiteur/"+this.user+"/rapport", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .catch((e) => {
          console.log(e);
        })
        .then((response) => (this.info = response));
      this.info = dataJson.data;
      console.log(this.info);
    },
     // rapportFicheSelectionnee: async function(){
    //   const dataJson = await axios
    //     .get("http://localhost:3002/gsb/visiteur/"+user+"/rapport", {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       withCredentials: true,
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     })
    //     .then((response) => (this.info = response));
    //   this.info = dataJson.data;
    //   console.log(this.info);
    // }
  },
  mounted() {
    this.listeRapport();
  },
};
</script>

<style scoped>
main {
  width: 100%;
  height: 90vh;
}

#rapportsList {
  color: black;
  background-color: rgba(0, 0, 0, 0.37);
  height: 70vh;
  margin-top: 20vh !important;
  font-weight: bold;
  border-radius: 30px;
  background-color: white;
  opacity: 0.6;
}

</style>
