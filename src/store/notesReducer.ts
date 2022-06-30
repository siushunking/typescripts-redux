export interface Note {
  id: number
  name: string
}

export interface NotesState {
  notes: Note[]  // if notes is array object, how to define the notes like id:number name:string
  search: string
  test: string
}

// interface SearchState {
//   search: string
// }

const initialState = {
  notes: [],
  search: '',
  test: 'test'
}



export type Action = { type: "ADD_NOTE" | "SEARCH" ; payload: any };

export const notesReducer = (state:NotesState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_NOTE": 
      return {...state, notes: [...state.notes, action.payload]}  //if post
      console.log(initialState.notes);
    default:
      return state
  }
}

// notes.find(element => element === search )

// [{id:1, name"ivan"}]
