import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: ['book'],
    key: 'bookfinder',
  })(store)
}