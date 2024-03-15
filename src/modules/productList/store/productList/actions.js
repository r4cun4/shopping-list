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

    commit( 'setEntries', entries )

}

export const updateEntry = async ({ commit }, entry) => {

    const { name, price, quantity } = entry

    const dataToSave = { name, price, quantity }

    await shoppingListApi.put( `/entries/${ entry.id }.json`, dataToSave )

    commit( 'updateEntry', { ...entry } )
}

export const createEntry = async ({ commit, state }, newEntry) => {
    const { name, price, quantity } = newEntry;

    if (!name || !price || !quantity) {
        throw new Error('Todos los campos son obligatorios');
    }

    const existingEntry = state.entries.find(entry => entry.name === name);

    if (existingEntry) {

        const updatedQuantity = existingEntry.quantity + quantity;
        const updatedEntry = { ...existingEntry, quantity: updatedQuantity };

        try {

            await shoppingListApi.put(`/entries/${existingEntry.id}.json`, updatedEntry);

            commit('updateEntry', updatedEntry);
        } catch (error) {
            console.error('Error al actualizar la entrada:', error);
            throw error;
        }
    } else {
 
        const dataToSave = { name, price, quantity };

        try {

            const { data } = await shoppingListApi.post(`entries.json`, dataToSave);


            if (!data || !data.name) {
                throw new Error('Error al crear la entrada');
            }

            dataToSave.id = data.name;

  
            commit('addEntry', dataToSave);

            return dataToSave.id;
        } catch (error) {
            console.error('Error al crear la entrada:', error);
            throw error;
        }
    }
};

export const deleteEntry = async ({ commit }, id) => {

    await shoppingListApi.delete( `/entries/${ id }.json`)

    commit ('deleteEntry', id)

    return id

}

export const deleteAllEntries = async ({ commit }) => {

    await shoppingListApi.delete( `/entries.json`)

    commit ('deleteAllEntries')

}