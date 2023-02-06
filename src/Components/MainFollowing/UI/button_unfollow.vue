<template>
    <div>
        <button class="button_unfollow">
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .button_unfollow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    gap: 12px;
    width: 83px;
    height: 32px;
    border: 2px solid #E6E8EC;
    border-radius: 90px; 
}
</style>