

export interface NotesState {
  notes: string[],  // if notes is array object, how to define the notes like id:number name:string
  // search: string
  test: string
}

// type Notes{
//
// }

const initialState = {
  notes: [],
  // search: null,
  test: 'test'
}


export type Action = { type: "ADD_NOTE" | "SEARCH" ; payload: string };

export const notesReducer = (state:NotesState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_NOTE": {
      return {...state, notes: [...state.notes, action.payload]}  //if post
      console.log(initialState.notes);
    }
    // case "SEARCH":{
    //   return {state.search: action.payload}
    // }
    default:
      return state
  }
}

// notes.find(element => element === search )

// [{id:1, name"ivan"}]
