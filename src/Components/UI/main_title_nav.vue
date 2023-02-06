<template>
    <div class="main_title_nav">
        <a href="#/" class="main_title_nav_link">On Sales</a>
        <a href="#/" class="main_title_nav_link">Collectibles</a>
        <a href="#/" class="main_title_nav_link">Created</a>
        <a href="#/" class="main_title_nav_link">Likes</a>
        <a href="#/" class="main_title_nav_link">Following</a>
        <a href="#/" class="main_title_nav_link">Followers</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .main_title_nav {
    display: flex;
    margin-left: 12px;
    margin-bottom: 54px;
}

.main_title_nav_link {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #777E91;
    margin-right: 36px;
    text-decoration: none;
}

.main_title_nav_link:hover {
    background: #353945;
    border-radius: 100px;
}

.main_title_nav_link:focus {
    background: #353945;
    border-radius: 100px;
}
</style>