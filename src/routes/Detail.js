import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Nav, Tabs } from 'react-bootstrap';
import { tab } from '@testing-library/user-event/dist/tab';
import { useDispatch } from 'react-redux';
import { addCart } from './../store';
import { useNavigate } from 'react-router-dom';
function Detail(props) {
    const [inputVal, inputValSet] = useState('');
    let [tab, tabSet] = useState(0);

    let dispatch = useDispatch();

    function checkVal(e) {
        if (isNaN(e.target.value) == true) {
            alert('숫자만 입력하세요');
        }
    }

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        let getLsData = localStorage.getItem('watched');
        getLsData = JSON.parse(getLsData);
        getLsData.push(id);
        getLsData = new Set(getLsData);
        getLsData = Array.from(getLsData);

        localStorage.setItem('watched', JSON.stringify(getLsData));
    },[]);

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={'https://codingapple1.github.io/shop/shoes' + (Number(id) + 1) + '.jpg'} width='100%' />
                    </div>
                    <div className='col-md-6'>
                        <h4 className='pt-5'>{props.shoes[id].title}</h4>
                        <p>{props.shoes[id].content}</p>
                        <p>{props.shoes[id].price}</p>
                        <span style={{ marginRight: '10px' }}>수량</span>
                        <input
                            onChange={e => {
                                checkVal(e);
                            }}
                            type={'text'}
                            id={'test'}
                            value={'1'}
                        />
                        <br></br>
                        <br></br>
                        <button
                            className='btn btn-danger'
                            onClick={() => {
                                dispatch(addCart({ id: id, name: props.shoes[id].title, count: 1 }));
                                navigate('/cart')
                            }}>
                            장바구니 추가
                        </button>
                    </div>
                </div>
            </div>

            <Nav variant='tabs' defaultActiveKey='tab-01'>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            tabSet(0);
                        }}
                        eventKey='tab-01'>
                        Option 1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            tabSet(1);
                        }}
                        eventKey='tab-02'>
                        Option 2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            tabSet(2);
                        }}
                        eventKey='tab-03'>
                        Option 3
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} shoes={props.shoes} />
        </div>
    );
}

function TabContent(props) {
    let [animate, setAnimate] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setAnimate('after');
        }, 100);

        return () => {
            setAnimate('');
        };
    }, [props.tab]);

    return <div className={'before ' + animate}>{[<div>{props.shoes[0].title}</div>, <div>2번탭</div>, <div>3번탭</div>][props.tab]}</div>;
}

export default Detail;
