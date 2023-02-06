<template>
    <div class="creatars_frame">
        <img src="@/images/austin-wade-unsplash_1.png" alt="austin-wade-unsplash_2" width="56px">
        <div class="creatar_info">
            <span class="creatar_name">Payton Harris</span>
            <div class="creater_ds">
                <span class="price_creatar">2.456</span>
                <span class="price_currency">ETH</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .creatars {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 224px;
        height: 487px;
    }

    .creatars_frame {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 224px;
        height: 105px;

    }

    .creatar_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 152px;
        height: 46px;

    }
</style>