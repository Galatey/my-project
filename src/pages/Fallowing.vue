<template> 
    <div class="conteiner" >
      <header-form/>
        <main class="main">
            <figure class="main_figure">
                <img src="@//images/image-from.jpg" alt="image-from">
            </figure>
            <div class="main_conteiner">
                <main_profile/>
                <main_following/>
            </div>
        </main>
        <footer-bar/>
    </div>
</template>

<script>
import HeaderForm from '@/Components/HeaderForm/HeaderForm';
import main_following from '@/Components/MainFollowing/main_following.vue';
import main_profile from '@/Components/MainFollowing/main_profile.vue';
import FooterBar from '@/Components/FooterBar/FooterBar.vue';
export default {
    
  components: {
            HeaderForm, main_following, main_profile, FooterBar
          }, 

    data() {
        return {
          
        }
    },

    methods: {

    }    
}
</script>

<style>



.main_figure {
    display: flex;
    margin: 0 auto;
    max-width: 1445px;
    height: 326px;
}

.main {
    display: flex;
    width: 100%;
    max-width: 1440px;
    height: 1526px;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.main_conteiner {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1120px;
    height: 1125px;
    justify-content: space-between;
    position: absolute;
    top: 213px;
}
</style>