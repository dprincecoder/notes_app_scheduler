import * as React from "react";
import { Container, Navbar } from "react-bootstrap";

interface ICreateNotesProps {}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>TODO NOTES SCHEDULER</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CreateNotes;
