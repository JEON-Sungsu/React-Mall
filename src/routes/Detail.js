import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Detail(props) {
    useEffect(() => {
        console.log('hi');
    });

    let { id } = useParams();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={'https://codingapple1.github.io/shop/shoes' + (Number(id) + 1) + '.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.data[id].title}</h4>
                        <p>{props.data[id].content}</p>
                        <p>{props.data[id].price}</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
