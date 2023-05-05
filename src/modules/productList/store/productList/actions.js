import shoppingListApi from "@/api/shoppingListApi"

export const loadEntries = async ({ commit }) => {

    console.log('loadEntries ejecutada');

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

    const { name, price } = entry

    const dataToSave = { name, price }

    const resp = await shoppingListApi.put( `/entries/${ entry.id }.json`, dataToSave )

    console.log('soy resp en actions:', resp)

    commit( 'updateEntry', { ...entry } )
}

// export const createEntry = async ({ commit }, product) => {

//     const { name, price, quantity } = product

//     const dataToSave = { name, price, quantity }

//     const { data } = await shoppingListApi.post( `entries.json`, dataToSave )

//     dataToSave.id = data.name

//     commit( 'addEntry', dataToSave )

//     return dataToSave.id
    
// }