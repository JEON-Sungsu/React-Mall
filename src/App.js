import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import data from './data';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import Event from './routes/Event';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from "react-query"

let clickCount = 0;

function App() {
    useEffect(() => {
        if (localStorage.getItem('watched') !== null) {
            return
        } else {
            localStorage.setItem('watched', JSON.stringify([]));
        }
    }, []);

    let [shoes, shoesSet] = useState(data);
    let navigate = useNavigate();
    let [loading, loadingSet] = useState(false);

    function aTozFilter() {
        let newShoes = [...shoes];
        shoesSet(
            newShoes.sort(function (a, b) {
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            })
        );
    }

    let result = useQuery('userName', () => {
                    return axios.get('https://codingapple1.github.io/userdata.json')
                    .then((a) => {
                        return a.data
                    })
                })

    console.log(result.data)
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='#home'>리액트 샵</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link
                            onClick={() => {
                                navigate('/');
                            }}>
                            메인
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/cart');
                            }}>
                            장바구니
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/event');
                            }}>
                            이벤트
                        </Nav.Link>
                    </Nav>
                    <Nav className='ms-auto' style={{color:'white'}} >{ result.isLoading ? '로딩중입니다.' : result.data.name }</Nav>
                </Container>
            </Navbar>
            <div className={'main-bg'}></div>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <div className={'filterWrap'}>
                                <button
                                    type={'button'}
                                    className={'btn btn-dark'}
                                    onClick={() => {
                                        aTozFilter();
                                    }}>
                                    이름순 정렬
                                </button>
                            </div>
                            {}
                            <div className='container'>
                                <div className='row'>
                                    {shoes.map(function (item, index) {
                                        return <ItemList item={item} data={shoes} index={index} key={index} navigate={navigate} />;
                                    })}
                                </div>
                            </div>
                            <button
                                className='btn moreBtn'
                                onClick={() => {
                                    loadingSet(true);
                                    let getUrl = null;

                                    if (clickCount == 0) {
                                        getUrl = 'https://codingapple1.github.io/shop/data2.json';
                                        clickCount++;
                                    } else if (clickCount == 1) {
                                        getUrl = 'https://codingapple1.github.io/shop/data3.json';
                                        clickCount++;
                                    } else {
                                        alert('더이상 상품목록이 없습니다.');
                                    }

                                    axios
                                        .get(getUrl)
                                        .then(result => {
                                            const addList = [...shoes, ...result.data];
                                            const moreList = addList.filter((item, i) => {
                                                return (
                                                    addList.findIndex((item2, j) => {
                                                        return item.id === item2.id;
                                                    }) === i
                                                );
                                            });

                                            shoesSet(moreList);
                                            console.log(shoes)
                                            loadingSet(false);
                                        })
                                        .catch(() => {
                                            console.log('통신실패');
                                            loadingSet(false);
                                        });

                                    console.log(shoes);
                                }}>
                                더보기
                            </button>
                            {loading ? <Loading></Loading> : null};
                        </>
                    }
                />
                <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>} />
                <Route path='/cart' element={<Cart></Cart>} />
                <Route path='/event' element={<Event></Event>}>
                    <Route path={'one'} element={<p>첫 주문시 양배추즙 서비스</p>} />
                    <Route path={'two'} element={<p>생일기념 쿠폰받기</p>} />
                </Route>
                <Route path='*' element={<div>404페이지 입니다.</div>} />
            </Routes>
        </>
    );
}

function ItemList(props) {
    return (
        <div className={'col-lg-4 cursor'} onClick={()=> {props.navigate('/detail/'+ props.item.id +'')}} style={{ marginBottom: '32px' }}>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.item.id + 1) + '.jpg'} style={{ width: '80%', height: '80%' }} alt="상품 이미지" />
            <h4 >{props.data[props.index].title}</h4>
            <p>{props.data[props.index].price}</p>
        </div>
    );
}

function Loading() {
    return (
        <div className='loadingWrap'>
            <div>로딩중입니다.</div>
        </div>
    );
}

export default App;
