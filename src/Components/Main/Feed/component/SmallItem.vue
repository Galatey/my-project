<template>
   <div class="small_item">
        <div class="small_featured">
            <img src="@/images/small_item_featured1.png" alt="small_item_featured1">
        </div>
        <div class="small_item_content">
            <span class="item_featured_comment">ETH never die</span>
            <div class="small_item_content_info">
                <img src="@/images/austin-wade-unsplash_2.png" alt="austin-wade-unsplash_1">
                <BidLabel/>
                <span class="small_item_text">1 of 12</span>
            </div>
            <button class="small_item_bid">Place a bid</button>
        </div>
    </div>
</template>
<script>
import BidLabel from '@/Components/UI/BidLabel.vue'
export default {
    components: {
        BidLabel,
    }
    
}
</script>
<style>
    .small_item {
        display: flex;
        align-items: center;
        gap: 24px;
        width: 351px;
        height: 148px;
    }

    .small_featured {
        width: 160px;
        height: 148px;
    }

    .small_item_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 167px;
        height: 106px;

    }

    .item_content_frame {
        display: flex;
        flex-direction: column;
        width: 155px;
        height: 26px;

    }

    .item_featured_comment {
        width: 167px;
        height: 24px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #23262F;
    }

    .small_item_content_info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 167px;
        height: 26px;
    }

    .small_item_text {
        width: 39px;
        height: 24px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #777E91;
    }

    .small_item_bid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 12px;
        gap: 12px;
        width: 98px;
        height: 32px;
        border: 2px solid #E6E8EC;
        border-radius: 90px;
    }
</style>