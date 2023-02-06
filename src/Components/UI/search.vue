<template >
   <input class="header_search" type="search" placeholder="Search">
</template>
<script>
export default {
    
}
</script>
<style>
    .header_search {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px 10px 16px;
    gap: 18px;
    width: 256px;
    height: 40px;
    border: 2px solid #E6E8EC;
    border-radius: 8px;
    background: url(@/images/svg/shape.svg) no-repeat right;
}
</style>