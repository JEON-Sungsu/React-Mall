import data from './data'
import {useState} from "react";

function Main(){
    let [shoes, shoesSet] = useState(data);

    return (
        <>
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