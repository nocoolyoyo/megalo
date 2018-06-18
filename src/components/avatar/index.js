import MAvatar from './avatar.vue'

/* istanbul ignore next */
MAvatar.install = function install (Vue) {
    Vue.component(MAvatar.name, MAvatar)
}

export default MAvatar
