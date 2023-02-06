<template >
    <header class="header">
        <nav class="header_nav">
            <logo/>
            <div class="header_menu">
                <search/>
                <a href="/" class="">
                    <img src="@/images/svg/notification.svg" alt="notification">
                </a>
                <div class="button_conteiner">
                    <my_button>Upload</my_button>
                    <my_button_avatar></my_button_avatar>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import my_button from "@/Components/UI/my_button.vue";
import search from "@/Components/UI/search.vue";
import my_button_avatar from "@/Components/UI/my_button_avatar.vue";
import logo from "@/Components/UI/logo.vue";
export default {
    
    components: {
        my_button, search, my_button_avatar, logo,
    },
}
</script>

<style>
    html {
    box-sizing: border-box;
  }


  *,*::before, *::after {
    box-sizing: inherit;
  }

  .header {
    display: flex;
    width: 100%;
    max-width: 1440px;
    height: 81px;
}

.header_nav {
    display: flex;
    width: 100%;
    max-width: 1440px;
    align-items: center;
    justify-content: space-evenly;
}

.header_menu {
    display: flex;
    width: 583px;
    height: 40px;
    justify-content: space-around;    
}

.button_conteiner {
    display: flex;
}

</style>