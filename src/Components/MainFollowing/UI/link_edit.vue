<template>
    <a href="#/" class="link_edit">
        <slot></slot>
        <img src="@/images/svg/edit_cover_photo.svg" alt="edit_cover_photo">
    </a>
</template>
<script>
export default {
    
}
</script>
<style>
    .link_edit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 12px;
    height: 40px;
    border: 2px solid #777E91;
    border-radius: 90px;
    text-decoration: none;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #FCFCFD;
}

.link_edit:hover {
    border: 2px solid #4f5258;
}

.link_edit:active {
    font-size: 80%;
}
</style>