import {useState} from "react";

function Main(props){

    return (
        <>
            <div className={'filterWrap'}>
                <button type={"button"} onClick={()=>{props.sorting()}} className={"btn btn-dark"}>이름순 정렬</button>
            </div>
            <div className="container">
                <div className="row">
                    {
                        props.data.map(function(item,index){
                            return(
                                <ItemList data = {props.data} index = {index} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

function ItemList(props) {
    return (

        <div className={"col-lg-4"}>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'}
                 style={{width: '80%', height: '80%'}}/>
            <h4>{props.data[props.index].title}</h4>
            <p>{props.data[props.index].price}</p>
        </div>
    )
}

export default Main;