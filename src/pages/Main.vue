<template>
    <div class="conteiner">
        <header-form/>
        <router-link to="/Fallowing">Fallowing</router-link>
        <heading/>
        <auction/>
        <feed/>
        <top-creators/>
        <footer-bar/>
    </div>
</template>
<script>
import HeaderForm from '@/Components/HeaderForm/HeaderForm';
import FooterBar from '@/Components/FooterBar/FooterBar.vue';
import Heading from '@/Components/Main/Heading/Heading.vue';
import my_button from '@/Components/UI/my_button.vue';
import Auction from '@/Components/Main/Auction/Auction.vue';
import Feed from '@/Components/Main/Feed/Feed.vue';
import TopCreators from '@/Components/Main/TopCreators/TopCreators.vue';
export default {
    
    components: {
        HeaderForm, FooterBar, Heading, my_button, Auction, Feed, TopCreators, 
    }

}
</script>
<style>
    
    
</style>