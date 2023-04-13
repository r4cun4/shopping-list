import shoppingListApi from "@/api/shoppingListApi"

export const loadEntries = async ({ commit }) => {

    const { data } = await shoppingListApi.get('/entries.json')
    const entries = []
    for( let id of Object.keys( data )) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit( 'setEntries', entries )

}

export const add = async ({ commit }) => {

    console.log(this.$store.state.count)

    commit( 'increment' )

}

export const sub = async ({ commit }) => {

    console.log(this.$store.state.count)

    commit( 'decrement' )

}

export const createEntry = async ({ commit }, entry) => {

    console.log(entry)

    // const { name, price, quantity } = entry
    // const dataToSave = { name, price, quantity }

    // const { data } = await shoppingListApi.post(`/entries.json`, dataToSave)

    // dataToSave.id = data.name

    commit('addEntry')

    // return data.name

}