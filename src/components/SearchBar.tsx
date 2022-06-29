import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "../store/notesReducer";
import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Input, Button, Space, Divider, List, Typography, Avatar } from 'antd';

function SearchBar(): void {
 const dispitch = useDispatch()
  const [note, setNote] = useState<String>()

  const onAddNote = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispitch({type: "ADD_NOTE", payload: note})
  }

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>)=>{
    const values = (e.target as HTMLInputElement).value;
    setNote(values) // why still undefine
  }
    <>
    <Input width={20} maxLength={20} placeholder="input your aim" allowClear onChange={onChangeHandler} />
      {/* value is error */}
      <Button style={{margin: '8px'}} type="primary" onClick={onAddNote} >
          Click me!
      </Button>
    </>
    
}


export default SearchBar;