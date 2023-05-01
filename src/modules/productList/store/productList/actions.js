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

    // console.log(entries)

    commit( 'setEntries', entries )

}

export const updateEntry = async ({ commit }, product) => {

    console.log(product, 'actions')

    const { name, price, quantity } = product

    const dataToSave = { name, price, quantity }

    await shoppingListApi.put( `/entries.json/${ product.id }.json`, dataToSave )

    commit( 'updateEntry', { ...product } )
}

export const createEntry = async ({ commit }, product) => {

    const { name, price, quantity } = product

    const dataToSave = { name, price, quantity }

    const { data } = await shoppingListApi.post( `entries.json`, dataToSave )

    dataToSave.id = data.name

    commit( 'addEntry', dataToSave )

    return dataToSave.id
    
}