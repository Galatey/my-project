<template>
    <div class="main_following">

        <div class="button_edit_conteiner">
            <link_edit>Edit cover photo</link_edit>
            <link_edit>Edit profile</link_edit>
        </div>
        <main_title_nav/>

        <div class="main_title_item">
            <div class="title_member">
                <div class="title_member_info">
                    <div class="title_member_avatar">
                        <img src="@/images/sally_fadel.png" alt="sally_fadel">
                    </div>
                    <div class="title_member_ds">
                        <span class="title_nick_name">Sally Fadel</span>
                        <span class="memdeb_followers">161 followers</span>
                        <button_unfollow>Unfollow</button_unfollow>
                    </div>
                </div>
                <div class="member_pic">
                    <img src="@/images/sally_fadel_1.png" alt="sally_fadel_1">
                    <img src="@/images/sally_fadel_2.png" alt="sally_fadel_2">
                    <img src="@/images/sally_fadel_3.png" alt="sally_fadel_3">
                    <img src="@/images/sally_fadel_4.png" alt="sally_fadel_4">
                </div>
            </div>
            <div class="divider_followers">
                <img src="@/images/svg/divider_followers.svg" alt="divider_followers">
            </div>
        </div>

        <div class="main_title_item">
            <div class="title_member">
                <div class="title_member_info">
                    <div class="title_member_avatar">
                        <img src="@/images/aniya_harber.png" alt="aniya_harber">
                    </div>
                    <div class="title_member_ds">
                        <span class="title_nick_name">Sally Fadel</span>
                        <span class="memdeb_followers">161 followers</span>
                        <button_unfollow>Unfollow</button_unfollow>
                    </div>
                </div>
                <div class="member_pic">
                    <img src="@/images/aniya_harber1.png" alt="aniya_harber1">
                    <img src="@/images/aniya_harber2.png" alt="aniya_harber2">
                    <img src="@/images/aniya_harber3.png" alt="aniya_harber3">
                    <img src="@/images/aniya_harber4.png" alt="aniya_harber4">
                </div>
            </div>
            <div class="divider_followers">
                <img src="@/images/svg/divider_followers.svg" alt="divider_followers">
            </div>
        </div>

        <div class="main_title_item">
            <div class="title_member">
                <div class="title_member_info">
                    <div class="title_member_avatar">
                        <img src="@/images/sally_fadel.png" alt="sally_fadel">
                    </div>
                    <div class="title_member_ds">
                        <span class="title_nick_name">Sally Fadel</span>
                        <span class="memdeb_followers">161 followers</span>
                        <button_unfollow>Unfollow</button_unfollow>
                    </div>
                </div>
                <div class="member_pic">
                    <img src="@/images/sally_fadel_1.png" alt="sally_fadel_1">
                    <img src="@/images/sally_fadel_2.png" alt="sally_fadel_2">
                    <img src="@/images/sally_fadel_3.png" alt="sally_fadel_3">
                    <img src="@/images/sally_fadel_4.png" alt="sally_fadel_4">
                </div>
            </div>
            <div class="divider_followers">
                <img src="@/images/svg/divider_followers.svg" alt="divider_followers">
            </div>
        </div>

        <div class="main_title_item">
            <div class="title_member">
                <div class="title_member_info">
                    <div class="title_member_avatar">
                        <img src="@/images/sally_fadel.png" alt="sally_fadel">
                    </div>
                    <div class="title_member_ds">
                        <span class="title_nick_name">Sally Fadel</span>
                        <span class="memdeb_followers">161 followers</span>
                        <button_unfollow>Unfollow</button_unfollow>
                    </div>
                </div>
                <div class="member_pic">
                    <img src="@/images/sally_fadel_1.png" alt="sally_fadel_1">
                    <img src="@/images/sally_fadel_2.png" alt="sally_fadel_2">
                    <img src="@/images/sally_fadel_3.png" alt="sally_fadel_3">
                    <img src="@/images/sally_fadel_4.png" alt="sally_fadel_4">
                </div>
            </div>
            <div class="divider_followers">
                <img src="@/images/svg/divider_followers.svg" alt="divider_followers">
            </div>
        </div>

        <div class="main_title_item">
            <div class="title_member">
                <div class="title_member_info">
                    <div class="title_member_avatar">
                        <img src="@/images/sally_fadel.png" alt="sally_fadel">
                    </div>
                    <div class="title_member_ds">
                        <span class="title_nick_name">Sally Fadel</span>
                        <span class="memdeb_followers">161 followers</span>
                        <button_unfollow>Unfollow</button_unfollow>
                    </div>
                </div>
                <div class="member_pic">
                    <img src="@/images/sally_fadel_1.png" alt="sally_fadel_1">
                    <img src="@/images/sally_fadel_2.png" alt="sally_fadel_2">
                    <img src="@/images/sally_fadel_3.png" alt="sally_fadel_3">
                    <img src="@/images/sally_fadel_4.png" alt="sally_fadel_4">
                </div>
            </div>
            <div class="divider_followers">
                <img src="@/images/svg/divider_followers.svg" alt="divider_followers">
            </div>
        </div>
        <load/>
    </div>
</template>
<script>
import main_title_nav from '@/Components/UI/main_title_nav';
import link_edit from '@/Components/MainFollowing/UI/link_edit.vue';
import button_unfollow from '@/Components/MainFollowing/UI/button_unfollow.vue';
import load from '@/Components/UI/load.vue';
export default {
    components: {
        main_title_nav, link_edit, button_unfollow, load,
    }
    
}
</script>
<style>
.main_following {
    display: flex;
    width: 100%;
    max-width: 800px;
    height: 1125px;
    flex-direction: column;
}

.button_edit_conteiner {
    display: flex;
    width: 800px;
    height: 40px;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 41px;
    margin-bottom: 105px;
}



    .title_member {
    display: flex;
    margin-bottom: 32px;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.title_member_info {
    display: flex;
    
}

.title_member_avatar {
    width: 88px;
    height: 88px;
    margin-right: 20px;
}

.title_member_ds {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.member_pic {
    display: flex;
    gap: 8px;
}

.title_nick_name {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #23262F;
}

.memdeb_followers {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #777E91;
}



.divider_followers {
    display: flex;
    width: 800px;
    height: 1px;
    margin-bottom: 46px;
}
</style>