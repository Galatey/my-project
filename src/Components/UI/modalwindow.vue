<template>
    <div class="modalwindow" @click="$store.commit('SET_Invize')">
        <div class="modalwindow_content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .modalwindow {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }

    .modalwindow_content {
        margin: auto;
        background: white;
        border-radius: 12px;
        min-width: 300px;
        min-height: 50px;
        padding: 10px;
    }
</style>