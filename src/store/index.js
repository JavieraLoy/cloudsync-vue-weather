import {createStore} from 'vuex';

export default createStore({
  state: {
    user: null,
    isAuthenticated: false
  },
  getters: {
    getUser: (state) => state.user,
    isAuth: (state) => state.isAuthenticated
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
    }
  },

  actions: {
    login({ commit }, credentials) {
      const usuarios = [
        {
          email: "test@mail.com",
          password: "123456",
          nombre: "Javiera"
        }
      ];

      const user = usuarios.find(u => u.email === credentials.email && u.password === credentials.password);

      if (user) {
        commit("SET_USER", user);
        return true;
      } else {
        return false;
      }
    },

    logout({ commit }) {
      commit("LOGOUT");
    }
  }

});