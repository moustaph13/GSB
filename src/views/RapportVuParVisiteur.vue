<template>
  <main class="mx-auto d-flex align-items-center">
        <div class="container login-container ">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4 login-form-1 center px-5 py-4">
                    <h3 class="text-center text-white mb-5">Rapport</h3>
                    <div>
                        <p class="text-white">Date: <span id="date"></span></p>
                        <p class="text-white">Motif: <span id="motif"></span></p>
                        <p class="text-white">Bilan: <span id="bilan"></span></p>
                    </div>
                    <div class="form-group d-flex mt-4">
                        <button id="modifier"
                            class="d-block m-auto rounded-pill bg-transparent text-primary px-3 py-2 border-primary fs-5 ">Modifier</button>
                        <button id="supprimer"
                            class="d-block m-auto rounded-pill bg-transparent text-danger px-3 py-2 border-danger fs-5 ">Supprimer</button>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
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
p {
    font-weight: bold;
}
span {
    font-weight: normal;
}
</style> 