<template>
    <div class="main_profile">

        <div class="main_profile_name">
            <img src="@/images/austin-wade-unsplash_1.png" alt="austin-wade-unsplash_1">
            <span class="nick_name">Enrico Cole</span>
            <a href="#/" class="link">
                0xc4c16a645...b21a
                <img src="@/images/svg/filled.svg" alt="filled">
            </a>
            <span class="text">A wholesome farm owner in Montana. Upcoming gallery solo show in Germany</span>
            <a href="#/" class="link_ui8">
                <img src="@/images/svg/profile_line.svg" alt="profile_line">
                https://ui8.net
            </a>
        </div>

        <div class="main_profile_button">
            <button class="my_button">Follow</button>
            <img src="@/images/svg/share_icon.svg" alt="share_icon">
            <img src="@/images/svg/more_fill.svg" alt="more_fill">
        </div>

        <div class="main_profile_social_link">
            <img src="@/images/svg/twitter_icon.svg" alt="twitter_icon">
            <img src="@/images/svg/instagram_icon.svg" alt="instagram_icon">
            <img src="@/images/svg/facebook_icon.svg" alt="facebook_icon">
        </div>

        <img src="@/images/svg/profile_divider.svg" alt="">

        <span class="text">Member since Mar 15, 2021</span>

    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .main_profile {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 48px;
    width: 256px;
    height: 689px;
    background: #FCFCFD;
    border: 1px solid #E6E8EC;
    box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
    border-radius: 16px;
}

.main_profile_name {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nick_name {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #23262F;
    margin-top: 24px;
    margin-bottom: 4px;
}

.link {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #23262F;
    text-decoration: none;
    margin-bottom: 20px;
}

.text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
}

.link_ui8 {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #23262F;
    text-decoration: none;
}

.main_profile_button {
    display: flex;
    width: 171px;
    height: 40px;
    justify-content: space-between;
}

.main_profile_social_link {
    display: flex;
    justify-content: space-between;
    width: 108px;
    height: 20px;
}
</style>