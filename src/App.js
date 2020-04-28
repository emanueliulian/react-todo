import React, { Component } from "react";
import Aux from "./hoc/auxiliary";
import ToolbarWrapper from "./components/Navigation/ToolbarWrapper";
import AddToList from "./components/AddToList/AddToList";
import TableConstructor from './components/TableConstructor/TableConstructor'

// Material UI
import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (
      <Aux>
        <ToolbarWrapper />
        <Container maxWidth="md">
            <TableConstructor />
        </Container>
      </Aux>
    );
  }
}

export default App;
