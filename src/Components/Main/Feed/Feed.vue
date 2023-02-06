<template>
    <div class="feed">
        <div class="feed_conteiner">
            <div class="featured_item">
                <div class="img_conteiner">
                    <img src="@/images/featured_item.png" alt="featured_item">
                </div>
                <div class="img_info_item">
                    <div class="item_user_avatar">
                        <img src="@/images/austin-wade-unsplash_2.png" alt="austin-wade-unsplash_1" width="48px">
                    </div>
                    <div class="item_name">
                        <span class="item_name_text">The future of ETH®</span>
                        <span class="item_name_text1">18 in stock</span>
                    </div>
                    <div class="feed_bid">
                        <span class="feed_bid_text">Highest bid</span>
                        <BidLabel/>
                    </div>
                </div>
            </div>
            <div class="item_list">
                <SmallItem/>
                <SmallItem/>
                <SmallItem/>
            </div>
            <img src="@/images/svg/feeddivider.svg" alt="feeddivider">
            <div class="creatars">
                <span class="creatars_text">Latest upload from creators 🔥</span>
                <Creatars/>
                <Creatars/>
                <Creatars/>
                <Creatars/>
                <button class="creatars_more">Discover more</button>
            </div>
        </div>
    </div>
</template>
<script>
import BidLabel from '@/Components/UI/BidLabel.vue';
import SmallItem from '@/Components/Main/Feed/component/SmallItem.vue';
import Creatars from '@/Components/Main/Feed/component/Creatars.vue';
export default {
    components: {
        BidLabel, SmallItem, Creatars,
    }
}
</script>
<style>
    .feed {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        width: 1440px;
        height: 640px;
        padding: 0px 160px 128px;
    }

    .feed_conteiner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 1120px;
        height: 512px;
        margin-bottom: 128px;
    }

    .img_info_item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 448px;
        height: 56px;
    }

    .item_user_avatar {
        width: 48px;
        height: 48px;
    }

    .item_name {
        display: flex;
        flex-direction: column;
        width: 312px;
        height: 56px;
    }

    .item_name_text {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #23262F;
    }

    .item_name_text1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #353945;
    }

    .feed_bid {
        display: flex;
        flex-direction: column;
        width: 68px;
        height: 48px;   
    }

    .feed_bid_text{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #777E91;
    }

    .item_list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .creatars_more {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 16px;
        gap: 12px;
        width: 158px;
        height: 40px;
        border: 2px solid #E6E8EC;
        border-radius: 90px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #23262F;
        background: url(@/images/svg/arrow_more.svg) no-repeat right ;
    }
</style>