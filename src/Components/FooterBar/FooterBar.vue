<template>
    <footer class="footer">
        <div class="footer_item">
            <div class="footer_logo">
                <logo/>
                <span class="text_footer">The New Creative Economy.</span>
            </div>
            <div class="crypto">
                <span class="text_bar">Crypter.</span>
                <a href="#/" class="footer_link">Discover</a>
                <a href="#/" class="footer_link">Connect wallet</a>
                <a href="#/" class="footer_link">Create item</a>
            </div>
            <div class="info">
                <span class="text_bar">Info</span>
                <a href="#/" class="footer_link">Download</a>
                <a href="#/" class="footer_link">Demos</a>
                <a href="#/" class="footer_link">Support</a>
            </div>
            <div class="join">
                <span class="text_bar">Join Newsletter</span>
                <div class="form_subscribe">
                    <span class="tet_subscribe">Subscribe our newsletter to get more free design course and resource</span>
                </div>
                <input type="form" class="form_sub" placeholder="   Enter your email">
            </div>
        </div>
        <img src="@/images/svg/divider_footer.svg" alt="divider_footer">
        <div class="footer_ds">
            <span class="ds">Copyright © 2021 UI8 LLC. All rights reserved</span>
            <div class="right_ds">
                <span class="ds">We use cookies for better service.</span>
                <a href="#/" style="
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 20px;
                color: #3772FF;"
                >Accept</a>
            </div>
        </div>
    </footer>
</template>
<script>
import logo from '@/Components/UI/logo.vue'
export default {
    components: {
        logo,
    }
}
</script>
<style>
.footer {
    display: flex;
    max-width: 1440px;
    height: 397px;
    flex-direction: column;
}

.footer_item {
    display: flex;
    flex-wrap: wrap;
    width: 1120px;
    height: 184px;
    justify-content: space-between;
    margin-bottom: 48px;
}

.footer_logo {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
}

.text_footer {
    width: 256px;
    height: 64px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #23262F;
    margin-top: 40px;
}

.crypto {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.join {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.form_sub {
    width: 352px;
    height: 48px;
    border: 2px solid #E6E8EC;
    border-radius: 90px;
}

.footer_link {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #777E91;
    text-decoration: none;
    margin-bottom: 24px;
}

.text_bar {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #23262F;
    margin-bottom: 40px;
}

.tet_subscribe {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #23262F;
}

.form_subscribe {
    width: 352px;
    height: 48px;
    margin-bottom: 24px;
}

.footer_ds {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
}

.right_ds {
    display: flex;
    width: 260px;
    height: 20px;
    gap: 16px
}

.ds {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #23262F;
}

</style>