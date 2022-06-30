import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./store/notesReducer";
import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Input, Button, Space, Divider, List, Typography, Avatar } from 'antd';
import SearchBar from "./components/AddBar";
import {Note} from './store/notesReducer'
import FindBar from "./components/FindBar";


// post get

function App() {
  const tests = useSelector<NotesState>(   // need to explain
    (state) => state.test
  );

  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const renderFunction = (note: Note) => {
    return (
      <List.Item key={note.id}>
        <List.Item.Meta 
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{note.name}</a>}
          description={`USER NO: ${note}`}
          />
      </List.Item>

    )
  }

  return (
    <>
    <FindBar />
    <SearchBar />
      {/* <SearchBar /> */}
      <Space
        style={{
          width: '100%',
        }}
      >
   
      </Space>
      <br></br>
      <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={notes}
      renderItem={renderFunction}
    />
    {tests}
    </>
  );
}

export default App;
