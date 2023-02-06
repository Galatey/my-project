<template >
    <button v-if="$store.state.user.login" class="my_button_avatar">
        <a href="/" class="header_avatar">
            <img src="@/images/austin-wade-unsplash_2.png" alt="austin-wade-unsplash_2">
        </a>
        <span>7.00698 ETH</span>
    </button>
    <button v-else="!$store.state.user.login" @click="$store.commit('SET_ShowLogin')" class="my_button_no_avatar">Connect Wallet</button>
</template>
<script>
export default {
    methods: {
        
    }
}
</script>
<style >
    .my_button_avatar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 12px 4px 4px;
    gap: 12px;
    width: 147px;
    height: 40px;
    border: 2px solid #E6E8EC;
    border-radius: 90px;
    margin-left: 12px;
}

.my_button_no_avatar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 137px;
    height: 40px;
    border: 2px solid #E6E8EC;
    border-radius: 90px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #23262F;
    margin-left: 12px;
}

.my_button_no_avatar:hover {
    background: #9fa2a7;
}

.my_button_no_avatar:active {
    font-size: 70%;
}
</style>