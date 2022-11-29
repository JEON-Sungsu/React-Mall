import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import products from './images/mainBg.png';
import {useState} from "react";
import data from './data'

function App() {
    let [shoes, shoesSet] = useState(data);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">리액트 샵</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">메인</Nav.Link>
                        <Nav.Link href="#features">장바구니</Nav.Link>
                        <Nav.Link href="#pricing">정보</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className={"main-bg"}></div>

            <div className="container">
                <div className="row">
                    {
                        shoes.map(function(item,index){
                            return(
                                <ItemList data = {shoes} index = {index} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

function ItemList(props) {
    return (

        <div className={"col-lg-4"}>
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.index+1) +'.jpg'} style={{width: '80%', height: '80%'}}/>
            <h4>{props.data[props.index].title}</h4>
            <p>{props.data[props.index].price}</p>
        </div>
    )
}

export default App;
