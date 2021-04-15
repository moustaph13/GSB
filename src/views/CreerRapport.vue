<template>
  <main class="mx-auto d-flex align-items-center">
        <div class="container login-container ">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4 login-form-1 center px-5 py-4">
                    <h3 class="text-center text-white mb-5">Créer un Rapport</h3>
                    <form @submit.prevent="creerRapportRequest">
                        <div class="form-group">
                            <div class="input-group mb-2 d-flex flex-column">
                                <label class="text-white">Bilan:</label>
                                <textarea v-model="bilan" name="bilan" id="bilan" rows="5" placeholder="Bilan"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-2 d-flex flex-column">
                                <label class="text-white">Motif:</label>
                                <textarea v-model="motif" name="motif" id="motif" rows="5" placeholder="Motif"></textarea>
                            </div>
                        </div>
                        <div class="form-group d-flex mt-4">
                            <button type="submit"
                                class="btnSubmit d-block m-auto rounded-pill bg-transparent text-primary px-3 py-2 border-primary fs-5 ">Créer</button>
                            <router-link id="routeur" type="submit" class="btn btnSubmit d-block m-auto rounded-pill bg-transparent text-danger px-3 py-2 border-danger fs-5 border-2" to="/rapportsVisiteur">Annuler</router-link>

                        </div>
                    </form>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";
export default {
    props: ["user"],
    data(){
        return{
            bilan:"",
            motif:""
        }
    },
    methods:{
        creerRapportRequest: async function(){
            let res = await axios("http://localhost:3002/gsb/visiteur/"+this.user+"/rapport", {
                method:"POST",
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
                data:{
                    "bilan": this.bilan,
                    "motif": this.motif
                },
            })
            let data = res.data;
            console.log(data);
        }
    },
    
}
</script>

<style scoped>
    main {
    width: 80%;
    height: 90vh;
}
.login-form-1 {
    background-color: rgba(0, 0, 0, 0.37);
}
button, #routeur {
    width: 40%;
}
</style> 