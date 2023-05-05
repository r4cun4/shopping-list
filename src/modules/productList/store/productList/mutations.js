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

// export const addEntry = ( state, newEntry ) => {

//     console.log(state)
//     console.log(newEntry)

//     state.entries = [ newEntry, ...state.entries ]
//     console.log(state.entries)

// }