import {Outlet} from "react-router-dom";

function Event(){
    return(
        <>
            <h5>이벤트 페이지입니다.</h5>
            <Outlet></Outlet>
        </>
    )
}

export default Event