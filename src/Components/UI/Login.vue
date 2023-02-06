<template>
    <modalwindow  v-if="$store.state.ShowLogin">
        <div class="form_login">
            <span v-show="error">Не верный логин или пароль</span>
            <label for="email">Email</label>
            <input type="text" v-model="email" class="form_login_input">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form_login_input">
        </div>
        <div class="form_login_button">
            <button @click="login" class="form_login_button_item" type="submit">Войти</button>
            <button @click="$store.commit('SET_ShowRegistration')" class="form_login_button_item">Регистрация</button>
        </div>
    </modalwindow>
</template>
<script>
import modalwindow from '@/Components/UI/modalwindow.vue'
export default {
    data () {
        return {
            error: false,
            email: "",
            password: ""
        }
    },
    components: {
        modalwindow,
    },

    methods: {
        login: function () {
            var inputClass = document.getElementsByClassName("form_login_input").classList;
            let EmailStore = this.$store.getters.USER
            for (let i = 0; i < EmailStore.length; i++) {
                if (EmailStore[i].email == this.email && EmailStore[i].password == this.password) {
                    this.$store.commit('SET_user');
                    this.email = ""
                    this.password = ""
                    
                    this.error = false
                }else{
                    this.error = true
                    console.log(inputClass)
                }
            }
        }
    }
}

</script>
<style>
    .form_login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   } 

   .form_login_input {
    width: 256px;
    height: 40px;
    border: 2px solid #E6E8EC;
    border-radius: 8px;
    margin-bottom: 12px;
   }

   .form_login_button {
    display: flex;
    justify-content: space-evenly;
   }

   .form_login_button_item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;
    border: 2px solid #E6E8EC;
    border-radius: 90px;
   }

   .form_login_button_item:hover {
    background-color: #abaeb3;
   }

   .form_login_button_item:active {
    font-size: 80%;
   }

   .form_login_input_error {
    width: 256px;
    height: 40px;
    border: 2px solid #db3636;
    border-radius: 8px;
    margin-bottom: 12px;
   }
</style>