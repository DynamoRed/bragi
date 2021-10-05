export let state = () => ({
    list: [],
})

export const getters = {

}

export const mutations = {
    add(state, notification){
        let id = Math.random().toString().substr(2, 8)
        notification.id = id
        state.list.push(notification)        
    },
    remove(state, {notification}){
        state.list.splice(state.list.indexOf(notification), 1)
    },
    hide(state, notification) {
        notification.hide = true
    }
}

export const actions = {

}

export const modules = {

}