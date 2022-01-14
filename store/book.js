export const state = () => ({
  saved: []
})

export const actions = {
  saveItem: ({ commit }, payload) => {
    commit('SAVE', payload)
  },
  removeItem: ({ commit }, payload) => {
    commit('REMOVE', payload)
  }
}

export const mutations = {
  SAVE: (state, payload) => {
    state.saved.push(payload)
  },
  REMOVE: (state, payload) => {
    state.saved = state.saved.filter(item => item.id !== payload.id)
  }
}