import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "../store/notesReducer";
import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Input, Button, Space, Divider, List, Typography, Avatar } from 'antd';

function SearchBar() {
 const dispitch = useDispatch()
 
  const [note, setNote] = useState<string>()

  const onAddNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispitch({type: "ADD_NOTE", payload: {id: '1' ,name: note}})
    setNote('')
  }

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>)=>{
    const values = (e.target as HTMLInputElement).value;
    setNote(values) 
  }


  return (
  <>
    <Input type="text" value={note}  maxLength={20} placeholder="input your aim" allowClear onChange={onChangeHandler} />
      <Button style={{margin: '8px'}} type="primary" onClick={onAddNote} >
          Click me!
      </Button>
  </>
)
    
}


export default SearchBar;