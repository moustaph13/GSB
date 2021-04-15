import Login from "@/views/Login.vue";
import RapportsVisiteur from "@/views/RapportVisiteurListe.vue";
import creerRapport from "@/views/CreerRapport.vue"
import rapportVuParVisiteur from "@/views/RapportVuParVisiteur.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
  },
  {
    path: "/rapportsVisiteur",
    name: "RapportsVisiteur",
    component: RapportsVisiteur,
  },
  {
    path: "/creerRapport",
    name: "creerRapport",
    component: creerRapport,
  },
  {
    path: "/rapportVuParVisiteur",
    name: "rapportVuParVisiteur",
    component: rapportVuParVisiteur,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;