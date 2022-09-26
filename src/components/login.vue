<!-- @format -->

<template>
    <div class="login">
        <img alt="Vue logo" src="../assets/logo.png">
        <h2>Selamat Datang</h2>
        <br>
        <b-container fluid>
            <b-input-group>
                <b-input-group-prepend>
                    <svg class="prepend" width="40" height="40" viewBox="0 0 40 40" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M26.6666 14.9999C26.6666 16.768 25.9642 18.4637 24.714 19.714C23.4637 20.9642 21.768 21.6666 19.9999 21.6666C18.2318 21.6666 16.5361 20.9642 15.2859 19.714C14.0356 18.4637 13.3333 16.768 13.3333 14.9999C13.3333 13.2318 14.0356 11.5361 15.2859 10.2859C16.5361 9.03563 18.2318 8.33325 19.9999 8.33325C21.768 8.33325 23.4637 9.03563 24.714 10.2859C25.9642 11.5361 26.6666 13.2318 26.6666 14.9999ZM23.3333 14.9999C23.3333 15.884 22.9821 16.7318 22.3569 17.3569C21.7318 17.9821 20.884 18.3333 19.9999 18.3333C19.1159 18.3333 18.268 17.9821 17.6429 17.3569C17.0178 16.7318 16.6666 15.884 16.6666 14.9999C16.6666 14.1159 17.0178 13.268 17.6429 12.6429C18.268 12.0178 19.1159 11.6666 19.9999 11.6666C20.884 11.6666 21.7318 12.0178 22.3569 12.6429C22.9821 13.268 23.3333 14.1159 23.3333 14.9999Z"
                            fill="#A8A8A8" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20 1.66663C9.87496 1.66663 1.66663 9.87496 1.66663 20C1.66663 30.125 9.87496 38.3333 20 38.3333C30.125 38.3333 38.3333 30.125 38.3333 20C38.3333 9.87496 30.125 1.66663 20 1.66663ZM4.99996 20C4.99996 23.4833 6.18829 26.69 8.17996 29.2366C9.57868 27.3998 11.3831 25.9112 13.4523 24.8871C15.5216 23.8631 17.7995 23.3313 20.1083 23.3333C22.3872 23.3311 24.6365 23.8492 26.6848 24.8479C28.7332 25.8467 30.5266 27.2998 31.9283 29.0966C33.3724 27.2026 34.3447 24.992 34.7648 22.6476C35.1849 20.3032 35.0407 17.8925 34.3441 15.6149C33.6476 13.3373 32.4187 11.2584 30.7591 9.55002C29.0995 7.84167 27.057 6.55306 24.8006 5.79081C22.5441 5.02856 20.1386 4.81458 17.7831 5.16658C15.4275 5.51858 13.1896 6.42644 11.2546 7.81505C9.31954 9.20365 7.74298 11.0331 6.65534 13.152C5.5677 15.2708 5.00026 17.6182 4.99996 20ZM20 35C16.5565 35.0051 13.2171 33.8205 10.5466 31.6466C11.6215 30.1078 13.0522 28.8515 14.7169 27.9844C16.3817 27.1174 18.2313 26.6653 20.1083 26.6666C21.9619 26.6651 23.7891 27.1059 25.4382 27.9523C27.0872 28.7987 28.5106 30.0264 29.59 31.5333C26.8988 33.7778 23.5043 35.0049 20 35Z"
                            fill="#A8A8A8" />
                    </svg>
                </b-input-group-prepend>
                <b-form-input id="input-small" size="sm" placeholder="email" v-model="email"></b-form-input>
            </b-input-group>
            <b-input-group>
                <b-input-group-prepend>
                    <svg class="prepend" width="40" height="40" viewBox="0 0 35 36" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 3C12.8306 3 8.625 6.3645 8.625 10.5V15H6.75C5.75544 15 4.80161 15.3161 4.09835 15.8787C3.39509 16.4413 3 17.2044 3 18V30C3 30.7956 3.39509 31.5587 4.09835 32.1213C4.80161 32.6839 5.75544 33 6.75 33H29.25C30.2446 33 31.1984 32.6839 31.9016 32.1213C32.6049 31.5587 33 30.7956 33 30V18C33 17.2044 32.6049 16.4413 31.9016 15.8787C31.1984 15.3161 30.2446 15 29.25 15H27.375V10.5C27.375 6.3645 23.1694 3 18 3ZM12.375 10.5C12.375 8.019 14.8988 6 18 6C21.1012 6 23.625 8.019 23.625 10.5V15H12.375V10.5ZM19.875 26.5845V30H16.125V26.5845C15.4695 26.2842 14.9431 25.832 14.6153 25.2875C14.2875 24.7431 14.1737 24.1319 14.2888 23.5347C14.4039 22.9374 14.7426 22.3821 15.2602 21.9419C15.7778 21.5017 16.45 21.1974 17.1881 21.069C17.7364 20.972 18.3049 20.9747 18.8517 21.0769C19.3985 21.1791 19.9097 21.3782 20.3475 21.6595C20.7853 21.9408 21.1386 22.2971 21.3813 22.7022C21.6241 23.1073 21.7501 23.5508 21.75 24C21.7489 24.5246 21.575 25.0397 21.2459 25.4935C20.9167 25.9472 20.4439 26.3235 19.875 26.5845Z"
                            fill="#A8A8A8" />
                    </svg>
                </b-input-group-prepend>
                <b-form-input id="input-small" size="xs" :type="passwordTipe" placeholder="Password"
                    v-model="password">
                </b-form-input>
                <b-input-group-apend v-if="password">
                    <b-button class="showPasswordBtn" variant="outline" @click="openPassword">
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M23.9552 1.12784C24.3336 1.5063 24.3336 2.11984 23.9552 2.4983L3.58041 22.8718C3.39182 23.0616 3.14382 23.1559 2.89582 23.1559C2.64782 23.1559 2.39982 23.0616 2.21124 22.8718C1.83278 22.4933 1.83278 21.881 2.21124 21.5026L4.75834 18.957C2.93216 17.2867 1.38305 15.0351 0.245453 12.3837C0.139536 12.1383 0.139536 11.8618 0.245453 11.6177C1.56424 8.56422 3.42166 6.03643 5.6175 4.30947C9.87073 0.943451 15.4623 0.764782 19.8881 3.82552L22.586 1.12784C22.9645 0.74938 23.5767 0.74938 23.9552 1.12784ZM23.477 7.35496C24.4121 8.59625 25.2337 10.0313 25.9195 11.6149C26.0267 11.8603 26.0267 12.1393 25.9195 12.3834C23.2122 18.657 18.4137 22.4016 13.0829 22.4016C11.8727 22.4016 10.6688 22.2053 9.50632 21.819C8.99869 21.6498 8.72357 21.1009 8.89277 20.5933C9.06198 20.0843 9.60836 19.8144 10.1186 19.9797C11.0834 20.3013 12.0806 20.4641 13.0829 20.4641C17.5108 20.4641 21.5576 17.3098 23.9717 11.9998C23.3827 10.7094 22.6968 9.54046 21.9296 8.52005C21.6079 8.0925 21.6932 7.48413 22.1207 7.1625C22.547 6.84088 23.1554 6.92871 23.477 7.35496ZM6.81745 5.83105C4.96262 7.29064 3.37 9.41672 2.19458 12.0026C3.21944 14.2662 4.56585 16.1752 6.12971 17.5849L8.89104 14.8238C8.32926 13.9973 8.02697 13.0227 8.02697 12.0021C8.02697 9.21212 10.2951 6.94266 13.0826 6.94266C14.0939 6.94266 15.0832 7.25061 15.9069 7.80718L18.4922 5.22203C14.8073 2.83991 10.3224 3.05722 6.81745 5.83105ZM17.2645 11.7735C17.7915 11.8678 18.1415 12.3715 18.0472 12.8985C17.6765 14.9562 16.0464 16.5888 13.9901 16.9634C13.932 16.9737 13.8725 16.9789 13.8157 16.9789C13.3572 16.9789 12.949 16.6508 12.8637 16.1832C12.7682 15.6575 13.1169 15.1525 13.6439 15.0569C14.9097 14.827 15.9121 13.8221 16.1394 12.555C16.235 12.0292 16.7387 11.6831 17.2645 11.7735ZM13.0826 8.88016C11.3633 8.88016 9.96447 10.2803 9.96447 12.0021C9.96447 12.4999 10.0817 12.9804 10.3026 13.4119L14.4949 9.21915C14.0632 8.9992 13.5778 8.88016 13.0826 8.88016Z"
                                fill="#635C5C" />
                        </svg>
                    </b-button>
                </b-input-group-apend>
            </b-input-group> <br>
        </b-container>
        <b-button class="loginBtn" @click.prevent="loginAdmin()">login</b-button>

    </div>
</template>

<script>
// import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    name: 'loginComponent',
    data() {
        return {
            
            passwordTipe: 'password',
        }
    },
    computed:{
        email:{
            get(){
                return this.$store.state.email;
            },
            set(value){
                 this.$store.commit('updateEmail', value)
            }
        },
        password:{
            get(){
                return this.$store.state.password;
            },
            set(value){
                 this.$store.commit('updatePassword', value)
            }
        }
    },
    mounted() {
        
        // this.$store.dispatch('loginAdmin') 
    },

    methods: {
        openPassword() {
            this.passwordTipe = this.passwordTipe === 'password' ? 'text' : 'password'
        },
        ...mapActions(['loginAdmin']),
        // login() {
        //     if (this.$store.state.status===true) {
        //         this.$router.push('/beranda')
        //     } else {
        //         alert('Username atau Password salah')
        //     }
        // }

        // login() {
        //     axios
        //         .post("http://server.greskit.com:8080login", this.input.email, this.input.password)
        //         .then(response => this.statusQuery = response.status)
        //         .catch(error => {
        //             console.log(error)
        //             this.errored = true
        //         })
        //     if (this.statusQuery === true) {
        //         this.$router.push('/beranda')
        //     } else {
        //         alert('Username atau Password salah')
        //     }
        // }
    }
}
</script>

<style scoped>
body {
    background-color: #f5f5f5 !important;
    height: 10rem;
    z-index: 1;
}

img {
    margin-bottom: 5%;
}

	img {
		margin-bottom: 5%;
	}

	.loginBtn {
		padding-right: 40px !important;
		padding-left: 40px !important;
		background-color: #1cab59 !important;
		border-radius: 10px !important;
	}

	.form-control {
		display: inline-block !important;
		margin-bottom: 30px;
		border: 1px solid #1cab59 !important;
		border-left: 0 !important;
		border-radius: 5px;
		width: 40% !important;
		height: 40px;
	}

	.container-fluid {
		padding-left: 10%;
		padding-right: 10%;
		display: flex !important;
		flex-direction: column;
		width: 65% !important;
	}

	.prepend {
		border: 1px solid #1cab59 !important;
		border-right: 0 !important;
		border-radius: 5px 0px 0px 5px;
	}

	.input-group {
		width: 100% !important;
	}

	.showPasswordBtn {
		display: inline-block;
		background-color: white;
		border-radius: 0px 5px 5px 0px;
		height: 40px;
		border: 1px solid #1cab59 !important;
		border-left: 0 !important;
	}

	.btn:active {
		outline: none !important;
		box-shadow: none;
	}
</style>