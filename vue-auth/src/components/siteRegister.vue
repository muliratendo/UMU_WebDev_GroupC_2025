<template>
    <div class="container h-100 my-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black bg-dark" style="border-radius: 25px;">
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <form class="mx-1 mx-md-4" @submit.prevent="handleSubmit" autocomplete="on">

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="material-icons-outlined pe-2">person</i>
                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                            <input type="text" id="regForm" class="form-control" v-model="name"
                                                placeholder="Your Name" />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="material-icons-outlined pe-2">mail</i>
                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                            <input type="email" id="regForm" class="form-control" v-model="email"
                                                placeholder="Your Email" />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="material-icons-outlined pe-2">lock</i>
                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                            <input type="password" id="regForm" class="form-control" v-model="password"
                                                placeholder="Password" />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="material-icons-outlined pe-2">key</i>
                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                            <input type="password" id="regForm" class="form-control"
                                                v-model="password_confirm" placeholder="Confirm Password" />
                                        </div>
                                    </div>

                                    <!-- <div class="form-check d-flex justify-content-center mb-5">
                                        <input class="form-check-input me-2" type="checkbox" value=""
                                            id="regForm" />
                                        <label class="form-check-label" for="regForm">
                                            I agree all statements in <a href="#!">Terms of service</a>
                                        </label>
                                    </div> -->

                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                            class="btn btn-primary btn-lg">Register</button>
                                    </div>

                                </form>

                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://muliratendo.github.io/UMU_WebDev_GroupC_2025/assets/images/global/logo.png"
                                    class="img-fluid w-75 mx-auto" alt="Sample image">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'siteRegiter',

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    },

    methods: {
        async handleSubmit() {
            const response = await axios.post('http://localhost:8000/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
            });
        }
    }
}
</script>