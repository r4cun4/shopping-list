export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false

    // console.log('state.entries', state.entries)

}

export const updateEntry = ( state, entry ) => {

    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    console.log(idx)

}

export const addEntry = ( state, newEntry ) => {

    console.log(state)
    console.log(newEntry)

    state.entries = [ newEntry, ...state.entries ]
    console.log(state.entries)

}