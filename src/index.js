import React from "react";
import ReactDOM, { render } from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./estilos.css";

class Teste extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="horizontal-scrollable">
        <Row className="text-center">
          <Col xs={4} className="px-2">
            Lost
          </Col>
          <Col xs={4} className="px-2">
            Found
          </Col>
          <Col xs={4} className="px-2">
            Lost
          </Col>
          <Col xs={4} className="px-2">
            Lost
          </Col>
          <Col xs={4} className="px-2">
            Found
          </Col>
          <Col xs={4} className="px-2">
            Lost
          </Col>
          <Col xs={4} className="px-2">
            Lost
          </Col>
          <Col xs={4} className="px-2">
            Found
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<Teste />, document.getElementById("root"));
