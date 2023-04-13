// export const addProductListItem = ( state, item ) => {

//     state.productList.push(item)
  
// }

export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]

    state.isLoading = false

}

export const increment = ( state ) => {

    if(state.entries[0].quantity >= 1 ) {
        state.entries[0].quantity++
    } 



}

export const decrement = ( state ) => {

    if(state.entries[0].quantity > 1 ) {
        state.entries[0].quantity--
    } 

}

export const addEntry = ( state, entry ) => {

    state.entries = [ entry, ...state.entries ]

}