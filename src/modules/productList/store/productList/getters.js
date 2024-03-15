export const showListEntry = ( state ) =>  {
    // const entry = state.entries

    // return { ...entry }

    return state.entries;
}

export const getEntriesById = ( state ) => ( id = '') => {

    console.log('soy state en getters:', state)
    console.log('soy state.entries en getters:', state.entries)

    const entry = state.entries.find( entry => entry.id === id )

    if ( !entry ) return

    return { ...entry } 

}

export const showPriceByEntry = ( state ) => {

    let result = 0;

    state.entries.forEach(element => {

       result += element.quantity * element.price

    });

    return result

}
