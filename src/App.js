import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav  } from 'react-bootstrap';

function App() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <div className={"main-bg"}></div>

        <div className="container">
            <div className="row">
                <div className={"col-lg-4"}>
                    <img src="" alt=""/>
                    <h4></h4>
                    <p></p>
                </div>
                <div className={"col-lg-4"}></div>
                <div className={"col-lg-4"}></div>
            </div>
        </div>
    </>
  );
}

export default App;
