import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import CreateNotes from "./component/CreateNotes";
import Header from "./component/Header";
import NotesList from "./component/NotesList";
import { Note, uniqueId } from "./models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: uniqueId(),
      title: "Meetings",
      text: "Zoom Dev Hour with the Team lead",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      {" "}
      <Header />{" "}
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
}

export default App;
