<template >
    <button class="my_button">
        <slot></slot>
    </button>
</template>
<script>
export default {
    
}
</script>
<style>

  .my_button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 12px;
    width: 80px;
    height: 40px;
    background: #3772FF;
    border-radius: 90px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FCFCFD;
}

.my_button:hover {
    background: #1845ad;
}

.my_button:active {
    font-size: 70%;
}
</style>