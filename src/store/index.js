import { createStore } from "vuex";

export default createStore ({
    state: {
        user: [
            {name: "Tom", lastname: "Raider", email: 'Raider@mail.ru', password: 111111, login: false}
        ],
        ShowLogin: false,
        ShowRegistration: false
    },

    getters: {
        USER: state => {
            return state.user
        }
    },

    mutations: {
        SET_user (state, ) {
            state.user.login = true;
            state.ShowLogin = false;
        },
        SET_ShowLogin (state) {
            state.ShowLogin = true;
        },
        SET_ShowRegistration(state) {
            state.ShowLogin = false;
            state.ShowRegistration = true;
        },
        SET_Invize(state) {
            state.ShowLogin = false;
            state.ShowRegistration = false;
        }
    }
})