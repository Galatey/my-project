<template>
    <div class="heading">
        <div class="heading_block">
            <span class="heading_text">Create, explore, & collect digital art NFTs.</span>
            <span class="heading_text_header">The new creative economy.</span>
            <button class="heading_button">Start your search</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .heading {
        display: flex;
        flex-wrap: wrap;
        width: 1440px;
        height: 268px; 
        justify-content: center;
        align-content: flex-end;
        padding: 128px 352px 0px;
    }

    .heading_block {
        display: flex;
        flex-wrap: wrap;
        width: 736px;
        height: 140px;  
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .heading_text {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
        text-transform: uppercase;
        color: #777E91;
    }

    .heading_text_header {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        text-align: center;
        letter-spacing: -0.01em;
        color: #23262F;
    }

    .heading_button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;
        width: 182px;
        height: 48px;
        border: 2px solid #E6E8EC;
        border-radius: 90px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        color: #23262F;
            }
</style>