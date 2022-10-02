import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./component/Header";
import NotesList from "./component/NotesList";
import { Note } from "./models/note.model";

function App() {
  const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };
  const [notes, setNotes] = useState<Note[]>([
    {
      id: uniqueId(),
      title: "Meetings",
      text: "Zoom Dev Hour with the Team lead",
      color: "#037fff",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      {" "}
      <Header />{" "}
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes}setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
}

export default App;
