import {createStore} from 'vuex';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated: !!localStorage.getItem("user"),
    favoritos: JSON.parse(localStorage.getItem("favoritos")) || []
  },
  getters: {
    getUser: (state) => state.user,
    isAuth: (state) => !!state.user,
    getFavoritos: (state)=> state.favoritos
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated=true;
      localStorage.setItem("user", JSON.stringify(user)); 
    },
    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      
    },
    AGREGAR_FAVORITO(state, ciudad){
      const existe= state.favoritos.some(c=> c.name.toLowerCase() === ciudad.name.toLowerCase());
      if(!existe){
        state.favoritos.push(ciudad);
        localStorage.setItem("favoritos", JSON.stringify(state.favoritos));
      }
    },
    ELIMINAR_FAVORITO(state, nombreCiudad){
      state.favoritos= state.favoritos.filter(c=> c.name !== nombreCiudad);
      localStorage.setItem("favoritos", JSON.stringify(state.favoritos));
    }
  },

  actions: {
    login({ commit }, credentials) {
      const usuarios = [
        {
          email: "test@mail.com",
          password: "123456",
          name: "Javiera"
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
    },
    agregarFavorito({commit}, ciudad){
      commit("AGREGAR_FAVORITO", ciudad);
    },
    eliminarFavorito({commit}, nombreCiudad){
      commit("ELIMINAR_FAVORITO", nombreCiudad);
    }
  }

});