import { useSelector, useDispatch } from "react-redux";
import { notesReducer, NotesState } from "../store/notesReducer";
import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Input, Button, Space, Divider, List, Typography, Avatar } from 'antd';
import {Note} from '../store/notesReducer'

function FindBar() {
 const dispitch = useDispatch()
  const [keyword, setKeyword] = useState<string>()

  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const onSearchNote = () => {
    const found = notes.find((obj) => {
      return obj.name === 'abc';
    });
    console.log(notes);
  }

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>)=>{
    const values = (e.target as HTMLInputElement).value;
    setKeyword(values) 
  }

  return (
  <>
    <Input  width={20} maxLength={20} placeholder="input your aim" allowClear onChange={onChangeHandler} />
      <Button style={{margin: '8px'}} type="primary" onClick={onSearchNote} > 
      {/* onAddNote */}
          Click me!
      </Button>

      {/* {notes} */}
  </>
)
    
}


export default FindBar;


// store  id: undefine 
// find = undefine