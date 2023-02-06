<template>
    <div class="auction">
    <div class="video">
        <img src="@/images/Video.png" alt="Video">
    </div>
    <div class="auction_ds">
        <div class="auction_heading">
                <span class="">the creator network®</span>
        </div>
        <div class="creater_price">
                <div class="creater">
                    <div class="user_avatar">
                        <img src="@/images/austin-wade-unsplash_1.png" alt="austin-wade-unsplash_1" width="40px">
                    </div>
                    <div class="user_ds">
                        <span>Creator</span>
                        <span>Enrico Cole</span>
                    </div>
                </div>
                <div class="price">
                    <div class="user_avatar">
                        <img src="@/images/user.png" alt="user" width="40px">
                    </div>
                    <div class="user_ds">
                        <span>Creator</span>
                        <span>Enrico Cole</span>
                    </div>
                </div>
        </div>
        <div class="current_bid">
                <div class="bid">
                    <span class="">Current Bid</span>
                    <span>1.00 ETH</span>
                    <span>$3,618.36</span>
                </div>
                <div class="auction_time">
                    <span>Auction ending in</span>
                    <div class="time">
                        <div class="time_item">
                            <span>19</span>
                            <span>Hrs</span>
                        </div>
                        <div class="time_item">
                            <span>24</span>
                            <span>mins</span>
                        </div>
                        <div class="time_item">
                            <span>19</span>
                            <span>secs</span>
                        </div>
                    </div>
                </div>
        </div>
        <div class="auctio_button">
            <button class="button_place_bid">Place a bid</button>
            <button class="button_view_item">View item</button>
        </div>
        <div class="auction_arrows">
            <button class="button_arrow_left"></button>
            <button class="button_arrow_rigth"></button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
    .auction {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        width: 1440px;
        height: 1064px;
        padding: 128px 160px;
    }

    .video {
        display: flex;
        width: 640px;
        height: 800px;
    }

    .auction_ds {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 40px;
        width: 352px;
        height: 752px;
    }

    .auction_heading {
        width: 352px;
        height: 128px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 64px;
        letter-spacing: -0.02em;
        color: #23262F;
    }

    .creater {
        display: flex;
        width: 159.5px;
        height: 44px;

    }

    .creater_price {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 33px;
        width: 352px;
        height: 44px;
    }

    .user_avatar {
        width: 40px;
        height: 40px;
    }

    .user_ds {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-left: 8px;
    }

    .price {
        display: flex;
        width: 159.5px;
        height: 44px;
    }

    .current_bid {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 24px;
        width: 352px;
        height: 296px;
        background: #FCFCFD;
        border: 2px solid #E6E8EC;
        box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
        border-radius: 24px;
    }

    .bid {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 198px;
        height: 112px;
    }

    .auction_time {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 231px;
        height: 96px;
    }

    .time {
        width: 231px;
        height: 64px;
        display: flex;
        justify-content: space-evenly;
    }

    .time_item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }

    .auctio_button {
        display: flex;
        flex-direction: column;
        width: 352px;
        height: 104px;
        gap: 8px;
    }

    .button_place_bid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        gap: 12px;
        width: 352px;
        height: 48px;
        background: #3772FF;
        border-radius: 90px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        color: #FCFCFD;
    }

    .button_view_item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        gap: 12px;
        width: 352px;
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

    .auction_arrows {
        display: flex;
        flex-direction: row;
        padding: 0px;
        gap: 8px;
        width: 88px;
        height: 40px;

    }

    .button_arrow_left {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
        gap: 10px;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: url(@/images/svg/arrow_left.svg) no-repeat center;
    }

    .button_arrow_rigth {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
        gap: 10px;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: url(@/images/svg/arrow_rigth.svg) no-repeat center;
    }
</style>