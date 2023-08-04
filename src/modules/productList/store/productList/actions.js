import shoppingListApi from "@/api/shoppingListApi"

export const loadEntries = async ({ commit }) => {

    const { data } = await shoppingListApi.get('/entries.json')

    if ( !data ) {
        commit( 'setEntries', [] )
        return
    }
    
    const entries = []
    for( let id of Object.keys( data )) {
        entries.push({
            id,
            ...data[id]
        })
    }

    // console.log(entries)

    commit( 'setEntries', entries )

}

export const updateEntry = async ({ commit }, entry) => {

    console.log('soy entry en actions:', entry)

    const { name, price, quantity } = entry

    const dataToSave = { name, price, quantity }

    const resp = await shoppingListApi.put( `/entries/${ entry.id }.json`, dataToSave )

    console.log('soy resp en actions:', resp)

    commit( 'updateEntry', { ...entry } )
}

export const createEntry = async ({ commit }, entry) => {

    const { name, price, quantity } = entry

    const dataToSave = { name, price, quantity }

    const { data } = await shoppingListApi.post( `entries.json`, dataToSave )

    dataToSave.id = data.name

    commit( 'addEntry', dataToSave )

    return dataToSave.id
    
}

export const deleteEntry = async ({ commit }, id) => {

    await shoppingListApi.delete( `/entries/${ id }.json`)

    commit ('deleteEntry', id)

    return id

}