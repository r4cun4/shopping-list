export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false

    // console.log('state.entries', state.entries)

}

export const updateEntry = ( state, entry ) => {

    console.log('soy entry en mutations:', entry)
    console.log('soy state en mutations:', state)
    console.log('soy state.entries en mutations:', state.entries)

    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    console.log('soy idx:', {idx})
    state.entries[idx] = entry

}

export const addEntry = ( state, entry ) => {

    // state -> entries -> la nueva entrada debe ser la primera
    
    state.entries = [ entry, ...state.entries ]
    console.log(state.entries)

}

export const deleteEntry = (state, id) => {

    // remover del state.entries el que conicida con el id
    
    state.entries = state.entries.filter( entry => entry.id !== id )
    
}