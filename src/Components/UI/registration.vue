<template>
    <modalwindow  v-if="$store.state.ShowRegistration">
        <div class="form_registration">
            <label for="name">Name</label>
            <input type="text" class="form_registration_input">
            <label for="last_name">Last Name</label>
            <input type="text" class="form_registration_input">
            <label for="email">Email</label>
            <input type="email" name=".com" id="" class="form_registration_input">
            <label for="password">Password</label>
            <input type="password" class="form_registration_input">
            <label for="confirm_your_password">Сonfirm your password</label>
            <input type="password" class="form_registration_input">
        </div>
        <div class="form_registration_button">
            <button type="submit">Зарегистрироваться</button>
        </div>
    </modalwindow>
</template>
<script>
import modalwindow from '@/Components/UI/modalwindow.vue'
export default {
    
    components: {
        modalwindow,
    }
}
</script>
<style>
   .form_registration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   } 

   .form_registration_input {
    width: 256px;
    height: 40px;
    border: 2px solid #E6E8EC;
    border-radius: 8px;
    margin-bottom: 12px;
   }
   .form_registration_button {
    display: flex;
    justify-content: center;
   }
</style>