export const showListEntry = ( state ) =>  {
    const entry = state.entries

    return { ...entry }
}

export const getEntriesById = ( state ) => ( id = '') => {

    console.log('soy state', state)
    console.log('soy state.entries', state.entries)

    const entry = state.entries.find( entry => entry.id === id )

    console.log({entry})

    if ( !entry ) return

    return { ...entry } 

}