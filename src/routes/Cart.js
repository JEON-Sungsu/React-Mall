import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount } from '../store';

function Cart() {
    let stateStore = useSelector(state => {
        return state;
    });

    let dispatch = useDispatch();

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>상품명</th>
                                    <th>수량</th>
                                    <th>변경하기</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stateStore.cartData.map(function (el, i) {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{el.name}</td>
                                            <td>{el.count}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        dispatch(changeCount(i));
                                                    }}>
                                                    +
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
