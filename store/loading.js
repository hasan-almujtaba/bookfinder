export const state = () => ({
  loading: false
})

export const actions = {
  setLoading: ({ commit }) => {
    commit('SET_LOADING')
  }
}

export const mutations = {
  SET_LOADING: (state) => {
    state.loading = !state.loading
  }
}