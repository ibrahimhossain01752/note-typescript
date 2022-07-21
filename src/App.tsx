import React, { useState } from 'react';
import {Note} from "./models/model"; 
import './App.css';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NoteList from './components/NoteList';
import CreateNotes from './components/CreateNotes';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id:(new Date).toString(),
    title:"Mettings",
    text: "Schedule Metting with UI/UX Team",
    color: "#dfdfdf",
    date:(new Date).toString()
  }]);
  return (
    <>
     <Header/>
     <Container className="mt-5">
      <Row>
        <Col>
          <NoteList notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateNotes notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
     </Container>
    </>
  );
}

export default App;
