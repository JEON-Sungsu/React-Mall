import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import products from './images/mainBg.png';
import {useState} from "react";
import data from './data'
import Main from './routes/Main'
import Detail from './routes/Detail'
import Event from './routes/Event'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {
    let [shoes, shoesSet] = useState(data);
    let navigate = useNavigate();

    function aTozFilter(){
        let newShoes = [...shoes];
        shoesSet(newShoes.sort(function(a,b){
             return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
        }));
        console.log(newShoes);
    }

    return (
        <>      
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">리액트 샵</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navigate('/') }}>메인</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/detail') }}>상세정보</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/cart') }}>장바구니</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/event') }}>이벤트</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>   
            <div className={"main-bg"}></div>

            <Routes>
                <Route path="/" element={
                   <Main data={shoes} sorting = { aTozFilter}></Main>
                }/>
                <Route path="/detail/:id" element={
                    <Detail data={shoes}></Detail>
                }/>
                <Route path="/cart" element={<div>장바구니페이지</div>}/>
                <Route path="/event" element={<Event></Event>}>
                    <Route path={"one"} element={<p>첫 주문시 양배추즙 서비스</p>}/>
                    <Route path={"two"} element={<p>생일기념 쿠폰받기</p>}/>
                </Route>
                <Route path="*" element={<div>404페이지 입니다.</div>}/>
            </Routes>


        </>
    );
}



export default App;
