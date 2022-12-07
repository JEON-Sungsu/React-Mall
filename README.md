## React bootstrap 설치 방법

---

-   구글에 React bootstrap 검색해서 설치하면 된다
-   터미널에 명령어 입력

```
npm install react-bootstrap bootstrap
```

-   부트스트랩 css 파일도 import 해줘야함. App.js 에 해주던지, 아니면 사이트에 있는 link 태그 복사해서 index.html 에 링크 넣어주던지
-   근데 부트스트랩 ui 는 컴포넌트라서 태그 이름이 대문자로 시작함
    -   그리고 컴포넌트라서 상단에 import를 해줘야함.
    -   부트스트랩에서 가져오는 모든 컴포넌트들은 다 기재해주어야함.... 조금 불편
    ```
    import { Button, Nav, Container, Navbar } from 'react-bootstrap';
    ```
-   React bootstrap 이 아닌, 원래 Bootstrap 사이트에 있는 클래스들을 가지고 와서기존에 쓰던 방식으로 사용해도 되지만, React 거를 사용하면 조금더 용량적인 측면에서 절약이 가능하다고 한다.

<br><br>

## 터미널에 npm 실행시키고 나오는것

---

-   ctrl + c

<br><br>

## 이미지 넣기

---

-   img 같은건 src 폴더에 넣어주어야 한다.
-   Css 파일에서 넣기는 그냥 동일함. 경로 입력하면 됨. 일반적인것과 동일함
-   Html 태그에서 style 속성으로 넣기 (이방법은 자 잘안씀)
    1. 이미지의 경로를 상단에 import 해줘야 한다.
    2. 임포트 한것은 변수 취급 받기 때문에, '+ 변수명 +' 형식으로 넣어주어야 한다.

```
  import 작명 from './images/mainBg.png'

  <div style={{ background:'url('+ 작명 +')' }}
```

-   img 태그에서 src 로 넣기

    1. 동일하게 임포트 해둔거 변수명으로 써야된다...
    2. 그래서 다른방법을 쓰는데, 프로젝트 생성시 나오는 public 폴더를 사용함
        - 리액트는 배포 전에 html js css 파일을 압축해서 배포하는데(이걸 번들링 이라고 함 bundling) 퍼블릭 폴더는압축을 진행하지 않음.
    3. public 폴더에 이미지를 넣어서 일반적인 html 에 사용하는 경로 작성방법으로 이미지를 넣을 수 있음.
    4. 단, 일반적인 서버에 배포할때 말고, 개발서버나 뭐 테스트서버나 등등으로 배포해야 할 때 Public 폴더에 들어있는 것들이 잘 안될수도있음이럴때 저거 뭐야 리액트 홈페이지 들어가보면 방법이 있는데, 이미지 경로넣을때 뭔가를 더해줘야함

    ```
    <img src={process.env.PUBLIC_URL + '/public/images/img.png'}

    ```

<br><br>

## import, export

---

-   다른 파일의 변수를 가져오려면, 변수가 있는 파일에 export 하고 쓰려고 하는 파일에 import 를 해주면 된다.

```
-변수가 선언된 파일에 export default 변수명
을 넣어주면 된다.

-변수를 쓰고자 하는 파일에는 import 작명 from 쓰고자하는변수가있는파일경로 (./data.js)를
import 시켜주어야 한다.
```

-   여러개를 export 를 하려고 하면 export 기호를 쓰고 {변수명,변수명 } 처럼 중괄호안에 넣어주면 된다.
-   import 할때도 import {변수명,변수명} from ~~ 이런식으로 중괄호 안에 넣어주어야 한다.
-   중괄호를 사용해서 임포트 할때는, 내맘대로 작명하면 안되고 변수명의 정확히 넣어주어야 한다.

<br><br>

## 컴포넌트 만들때(컴포넌트에 바인딩 할 때 )

---

1. props 를 쓸 때는, 컴포넌트를 호출하는 곳에, props 를 쓸놈을 명시해줘야된다.

```
App() {
  let [data] = useStates(data);

  return (
    <컴포넌트 data = {data} />
  )
}
```

-   App 에 컴포넌트 호출할때, 명시해주는 부분에서 예를들어 data = {data[0]} 이런식으로 명시를 해주면, 배열의 0 번째 데이터만 props 가 가능해진다. 그래서 만약 좀 단순하게 양이 적은 어떤 목록을 데이터 바인딩 하려면

```
<컴포넌트 data = {data[0} />
<컴포넌트 data = {data[1} />
<컴포넌트 data = {data[2} />
```

이런식으로 그냥 컴포넌트를 3번 호출해줘도 무방하긴 하다. 이런방법도 있다는거지 굉장히 몰상식한 방법인듯. <br><br>

2. props 가 편하긴 한데, 그냥 파라미터 문법으로 여러개 사용해도 무방하다.

```
App() {
  let [data] = useStates(data);

  return (
    <컴포넌트 data = {data} order = {order} name = {name} />
  )
}

컴포넌트({data,order,name}) {
  return(
    <>
      <span>이름 : {name}</span>
      <span>순번 : {order}</span>
      <span>지역 : {data}</span>
    </>

  )
}
```

<br><br>

## 이미지나, 뭐 경로에 데이터를 넣으려면?

---

```
<img src={'https://www.howard.com'+ 데이터 +'} />
```

-   경로를 {}중괄호 안에 넣고 작은따옴표''로 감싸준 다음, 데이터를 넣고싶은곳에 '' 분리시켜서 ++ 로 넣어주면 된다. 일반 스크립트 데이터 넣듯이.
-   데이터에 뭔가 산술을 더해주고 싶으면 데이터를 괄호로 감싸면 된다

```
<img src={'https://www.howard.com'+ (데이터 + 1) +'} />
```

<br><br>

## 여러가지 페이지 만들기 (라우터)

---

-   페이지를 구분하는것을 일명 라우팅이라고 그럼

-   일반적인 html 로 만들어진 프로젝트와 다름
-   리액트는 싱글페이지라서 html 파일이 하나밖에 없음.
-   리액트에서 여러 페이지 만드는법

    1. 컴포넌트를 만들어서 상세페이지 내용 채움
    2. 누가 상세페이지로 접속하면 그 컴포넌트를 보여줌.
    3. 해당 내용을 직접 만들어도 되지만, 아주 길어지기 때문에 주로 라이브러리를 사용함 <br><br>

    -   react-router-dom (리액트 프로젝트 여러페이지 쉽게 보여주는 라이브러리)

        -   npm install react-router-dom@6 명령어를 입력
        -   라이브러리를 사용하기 위해 index.js 에 임포트를 하고 추가해야될 내용이 있음
            1. 상단에 BrowserRouter 를 임포트 해준다
            2. 하단에 <App/> 태그를 BrowserRouter 태그로 감싸준다.

        ```
          import React from 'react';
          import ReactDOM from 'react-dom/client';
          import './index.css';
          import App from './App';
          import reportWebVitals from './reportWebVitals';
          import { BrowserRouter } from "react-router-dom"

          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(
            <React.StrictMode>
             <BrowserRouter>
               <App />
             </BrowserRouter>
            </React.StrictMode>
        );
        ```

        -   그리고 App.js 에도 부트스트랩때와 마찬가지로 몇가지 컴포넌트들을 임포트 해워야 된다.

        ```
          import { Routes, Route, Link } from 'react-router-dom'
        ```

-   사용법은 react-router-dom6 홈페이지에서 상세하게 찾아볼것. 우선 뭐 기본 사용법만 기록하겠음. <br><br>

#### react-router-dom6 간단 사용법들

---

-   App.js 에 부트스트래버럼 몇가지 임포트를 해준다.

```
import { Routes, Route, Link } from 'react-router-dom'
```

-   html 작성하는 곳에 Routes,Route 태그를 넣어준다.
-   Route 는 추가할 페이지? 개수만큼 넣어주면 된다.

```
  return(
    <div>
        <Routes>
            <Route path="/detail" element={보여줄 페이지 내용 } />
            <Route />
        </Routes>
    </div>
  )

```

-   path 는 url 뒤에 붙을 경로를 의미함
-   element= {} 는 중괄호 내에, 해당 경로에서 어떤 페이지를 보여줄것인지를 넣어주면 됨.
-   메인 페이지의 경로는 path="/" 슬레시 하나만 넣어주면 된다.
-   아래는 기본 Route 쓰는 방법임

```
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

            <Routes>
                <Route path="/" element={
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
                }/>
                <Route path="/detail" element={<div>상세페이지 내용 넣기</div>}/>
                <Route path="/cart" element={<div>장바구니페이지</div>}/>
            </Routes>


        </>
    );
}
```

-   단 이렇게 만들경우에 단점이 한눈에 구조를 알아보기 어려우니까, 페이지별로 컴포넌트를 만들어버리면 라우터 태그 내에그냥 컴포넌트만 집어넣으면 되서 관리하기가 용이해진다.

-   버튼 클릭시 라우터 변경하는법

    -   Link 태그를 사용해서 a 태그처럼 사용하면 된다
    -   Link 태그는 대문자 시작임
    -   to 안에 붙이고싶은 경로를 넣어주면 된다. Route 태그에 적은 path 경로.

    ```
      <Link to="/">메인</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/cart">장바구니</Link>
    ```

    <br><br>

-   useNavigate, Outlet (라우터 컴포넌트)

-   useNavigate 훅
    -   use 어쩌구 저쩌구 하는것들을 훅이라고 하는데 유용한 함수들이 들어있는 컴포넌트들이다.
    -   변수에 담아서 사용하면 된다.
    ```
      let navigate = useNavigate();
    ```
    -   useNavigate 는 페이지 이동을 도와주는 함수이다.
    -   위에서 Link 태그를 썼는데 저렇게 안해도 됨.
    -   페이지 이동 시킬 요소에다가 onClick 으로 넣어주면 된다.
-   ```
        <Nav.Link onClick{() => { navigate('/detail' } }>상품상세페이지 이동</Nav.Link>
    ```

    -   네비게이트 함수에 히스토리백이랑 앞전페이지 이동기능도 있음
    -   파라미터에 1을 넣으면 앞에페이지, -1을 넣으면 이전페이지 이동함

    ```
      <Nav.Link onClick{() => { navigate(-1) } }>이전페이지</Nav.Link>
    ```

    <br><br>

-   404 페이지 만들기

    -   이건 라우터태그 경로에 \_ 을 넣어주면, 라우터로 지정된 모든 경로외에 다른 경로로 들어오면 띄워주는 페이지를 만들 수 있음
        ```
        <Route path="_" element={<div>404페이지 입니다.</div>}/>
        ```
        <br><br>

-   Nested Routes

    -   여러개 유사한 페이지가 필요할때
    -   특정 페이지에 속한 하위 페이지들을 만드는 문법이다.
    -   예를들어 detail 중에서도 특정한것들을 보여줄 페이지, detail/more 이나 detail/price 등 detail 의 하위 페이지들을 추가할떄 사용함

    ```
      <Route path="/detail" element={<div>상품상세페이지</div>}>
        <Route path="more" element={<div>상세에서 더 상세</div>} />
        <Route path="price" element={<div>상세에서 가격상세페이지</div>} />
      </Route>
    ```

    -   Nested는, 부모 페이지와 자식페이지 둘다 보여줌
    -   Nested 를 사용할때는, 부모되는 Route에 자식되는 Route 들을 어디에서 보여줄지를 작성해주어야 한다.
    -   이때 사용하는게 Outlet 임.

    ```
      <Route path="/detail" element={
        <div>상품상세페이지</div>
        <Outlet></Outlet>
      }>
        <Route path="more" element={<div>상세에서 더 상세</div>} />
        <Route path="price" element={<div>상세에서 가격상세페이지</div>} />
      </Route>
    ```

**_이걸 왜 쓰느냐(Nested Routes)_**

1. 해당 방법을 통해 여러가지 UI 를 제작할 수 있음(탭이나 뭐 기타등등)
2. 전체 큰 틀은 그대로 보여주면서 내부에 작은 부분들만 변경할 수 있음. 마치 탭기능처럼 근데 이걸 뭐 버튼눌리면 이거보여주고 저거눌리면 저거보여주고 이렇게 만드는거지

<br><br>

## src 폴더 내에 폴더 구조

---

-   src 폴더 내에 그냥 폴더를 만들어서 묶어두면 된다.

<br><br>

## Routes 로 수십개 페이지 보여주기

---

-   예를들어 상품목록 > 상품 상세페이지로 들어가야되는데, 이게 수십개다. 그럼 어떤 문법을 써야하는지
-   URL 파라미터문법을 써야한다.
    -   URL 파라미터는 여러개 사용가능함 /detail/:id/text/:id
-   Route 의 패스 경로 뒤에 :작명 을 넣어준다. <br><br>

1. 메인 페이지(App.js), 즉 컴포넌트를 불러와서 보여주는 페이지에서 라우트 url 에 추가 경로를 넣어준다.
2. 컴포넌트 페이지로 가서, useParams() 함수를 사용해준다.
3. useParames 가 뭐냐면, Route 의 경로에 뒤에 :작명 부분의 작명 값을 가져오는거다. 그래서 작명부분이 0 이다 그럼 0을 가져오는거지. 그리고 유저가 뭐 www.홈페이지주소/detail/0 이런 url 로 경로에 진입을 했다면, 작명 부분은 0이 되는거다.
4. 근데 이 url 파라미터는 여러개를 쓸 수 있는데, 내가 가져오고싶은 파라미터가 여러개 있다면 let { param, param2, param3} = useParamse() 와 같이 선언해주어야 한다.

```
 <Route path="/detail/:작명" element={<Detail data={shoes}></Detail>}/>
```

<br><br>

## useState 관련

---

-   메인 페이지에서 사용하는 useState 를 컴포넌트 페이지에서 사용하려면, props 를 통해서 가져오는게 편하다. 물론 컴포넌트 페이지에 따로 메인 페이지에 적용된 데이터를 한번더 변수에 담아서 써도 되지만, 그렇게 되면 데이터 변경을 페이지마다 해줘야 하기 때문에 props로 불러와서 처리하는게 좋다.

<br><br>

## Styled-components 라이브러리

---

-   npm install styled-components 로 설치 가능
-   쓰고자 하는 파일에 import styled from 'styled-components' 넣어준다.
-   변수에다가 저장해서 쓰면됨.
-   백틱을 써야됨
-   하나의 스타일 된 요소 컴포넌트를 만든다고 생각하면 된다.
-   장점
    1. 다른 파일에는 간섭안함. 해당 페이지에서만 쓰는 스타일이 됨
    2. CSS 파일까지 왔다갔다 안해도 된다..
    3. 로딩시간 단축

```
let YellowBtn= styled.button`
      background : yellow;
      color: black;
      padding: 10px;
    `

function Detail() {
  return (
    <YellowBtn></YellowBtn>
  )
 }
```

-   그리고 props 문법으로, 비슷한 컴포넌트들을 조금씨 다르게 쓸 수 있음

```
let YellowBtn= styled.button`
      background : ${ props => props.bg};
      color: ${ props => props.bg == 'blue' ? 'white' : 'black'};
      padding: 10px;
    `

function Detail() {
  return (
    <YellowBtn bg="blue"></YellowBtn>
  )
 }
```

-   위의 방법으로 음음 됨
-   자바스크립트의 문법같은것도 사용할 수 있음. 만약 배경이 파란색이면 컬러는 화이트, 아니면 블랙 이런식으로
-   단점
    1. 스타일 재사용이 어렵다.(import, export 로 쓸수있으나 굳이 그럴거면 css 파일쓰면됨)
    2. 협업시 다른사람이 이해하기 힘들 수 있다.
    3.

<br><br>

-   부가적으로 한 파일에만 종속되는 css 파일을 만들고싶으면 파일명.module.css 로 CSS파일을 만들면 된다. 파일명은 종속시키고 싶은 js 파일의 이름임

<br><br>

## LifeCycle & useEffect

---

-   컴포넌트의 lifeCycle
    -   컴포넌트는 장착되기도 하고(mount), 업데이트도 되고(update), 필요없으면 제거(unmount)가 되기도 하는데, 이거를 라이프사이클이라고 부름 ㅋ
    -   이거를 왜 배우냐면, 내가 이 과정이 일어나는 중간중간에 간섭을 할 수 있기 때문이다.
    -   간섭이라고 하면 그냥 코드 실행임. 이벤트 발생과 비슷한 느낌임 <br><br>
-   컴포넌트 작성 함수 내에 useEffect 함수를 써주면 된다. 1. 먼저 import { useEffect } from "react"; 임포트를 해준다. 그냥 함수를 쓰면 자동으로 해주긴 함

    ````
    function Detail(){

        useEffect(() => {
            mount,update 될 때 실행시킬 함수
        })

        return (

        )
    }
    ```
    ````

-   여기서 말하는 update 는 뭔가 페이지가 다 로드된 상태에서 특정 함수나 UI 변경이나 등등이 일어나는 경우를 말한다.

    <br><br>

    ```

    ```

-   useEffect 실행조건
-   useEffect 의 두번쨰 인자로 대괄호를 넣고, 그안에 어떤 조건들을 넣어준다.
-   하나의 트릭이 있는데, 대괄호 안에 아무것도 안넣으면 페이지가 마운트 될 때 한번만 코드를 실행시켜 준다.(업데이트때는 작동안함)
-   return 을 추가할 수 있다. (clean up function)
    -   useEffect 내의 코드가 실행되기 전에 실행해주는 함수를 넣는 곳이다.
    -   리액트 특성상, 렌더링이 잦은데, 만약에 useEffect에 timer를 넣어두었다가, 제렌더링하면 엄청 많은 타이머가 생길 수 도 있기 때문에 리턴에다가 기존에 타이머는 모두 제거해주세요~ 와 같이 쓴다.
    -   타이머를 제거하는 방법은, 일단 setTimeOut 을 변수에 담아서 사용을 하고, 리턴에다가 clearTimeout(타이머변수) 를 넣어주면 된다.
    -   서버에서 데이터 요청할때도, 요청하는 동안 또 업데이트가 발생한다면, 기존에 요청한 데이터는 취소해주세요~ 하는 코드를 넣는것이다. 방법은... 찾아봐야될듯
    -   클린업 펑션은, 컴포넌트가 마운트 될때는 실행되지 않은데, unmount될때는 또 실행이 됨.

```
let [count,countSet] = useState(0);

function Detail(){

    useEffect(() => {
        //mount,update 될 때 실행시킬 함수
        console.log('hi')
        return () => {
            useEffect 가 실행되기 전에 실행시켜줄 함수. clean up function 이라고도 부른다.
        }

    },[count] )

    return (
        특정 동작, 즉 count 가 변경될때마다 useEffect 내부에 코드를 실행시켜주도록 조건을 넣음
    )
}
```

-   useEffect 를 쓰는 이유
    -   화면이 모두 rendering 이 된 이후에 실행시켜준다.
    -   사실 그냥 리턴 위에다가 함수 작성해도 되는데, 시점이 안맞을 수 있음.
    -   서버에서 데이터를 가져오거나, 연산이 복잡한 함수를 사용할때, 또는 타이머를 쓸 때 useEffect 안에 작성해준다.

<br><br>

## input 값 체크하기

---

1. useState 를 만들어준다.
2. input 에 onChange 메소드를 사용한다.
3. onChange 의 콜백함수로 useState 변경 함수를 쓴다.
4. e.target(인풋이됨.value 를 사용해서 값을 받아 state 의 값을 변경시킨다.
5. 변경된 state 를 가지고 값을 체크한다.
6. useEffect 로 인풋의 값이 변경될때마다 특정 코드를 실행시켜준다.

```
    const [value, valueSet] = useState('');

    useEffect() {
        if(isNaN(value) == true) {
            console.log('숫자만 입력하세요')
        }
        //isNaN 함수는 숫자인지 아닌지 체크하는 메소드인데 숫자가 아니면 true, 맞으면 false를 반환함

    return(
        <input onChange={(e) => {valueSet(e.target.value)}}>
    )
}

```

7. 하나의 팁은 일반 펑션으로도 e.target 을 받을 수 있음. 파라미터 하나 만들고, 콜백함수로 호출할때 파라미터에 e 넣어주면 된다.

<br><br>

## 서버 통신하기(Ajax, fetch)

---

-   기본적으로 get 은 데이터 받을떄, post 는 데이터를 서버로 보낼때 사용함
-   https://codingapple1.github.io/shop/data2.json (코딩애플 데이터 서버 URL)
-   ajax 편하게 받는 라이브러리 axios
    -   npm install axios
    -   상단에 import axios from 'axios';

<br><br>

-   ajax 요청할때, 로딩 그리기
    -   ajax 호출 직전에 로딩중 띄운다.
    -   호출 성공후, 다 그려지면 로딩 ui 지우기 코드 넣기
    -   만일의 경우를 생각해서 통신 실패시에도 로딩 ui 지우기 코드를 넣어준다. 아주 간단.

```
<button onClcick{(=>{
    로딩중 UI 그리기

    axios
    .get('https://codingapple1.github.io/shop/data2.json')
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

        로딩중 UI 지우기
    })
    .catch(() => {
        로딩중 UI 지우기
        console.log('통신실패');
    });
})}>

```

<br><br>

-   ajax 요청 추가 개념

    -   서버로 데이터를 전송하는 post 요청

    ```
    axios.post('/서버URL/, {보낼 데이터})
    ```

    <br><br>

    -   동시에 ajax 여러개 요청하기

    ```
    Promise.all([ axios.get('/url1'), axios.get('/url2) ])
    .then(()=> {
        then 은 위의 두개 ajax요청이 둘다 성공했을 떄 실행시킬것들.
    })
    ```

    -   그냥 따로따로 axios.get~~ 두개 적어도 되지만, 이럴경우에 나는 복수의 요청이 모두 성공했을때만 무언가 실행시키고 싶은데, 그렇게 못함. 그래서 Promise 를 쓰면 두개다 성공해야 다음 동작을 실행시킬 수 있어서 그럴 경우에만 사용.

<br><br>

    -   서버랑 데이터를 주고받을때는 string 으로밖에 못주고 받음. 즉 JSON 파일로 주고받음.
    -   그래서 fetch를 통해서 데이터를 get 할때는 제이슨파일로 단순히 받아오기 때문에, object 로 변환해서 써야 한다. jquery나 axios 는 자동으로 변환시켜줘서 굳이 안해도 됨.

<br><br>

## Class 탈부착 하는것

---

-   일반적으로 리액트에선, 클래스 탈부착을 쓰지 않는다....
-   그래서 클래스 탈부착으로 show & hide 를 구현하려면 useState 를 써서 만든다.
-   이런식으로 변수가 true 면 해당요소 보여주고, 아니면 null 로 사라지게 해주는 껏다켰다 스위치 방식으로 UI 를 조절해야 한다.

```
[loading,loadingSet] = useState(true)

return (
    <div>
        <button onCLick={() => {
            loadingSet(false)
        }}>

        {loaindg ? <내가만든컴포넌트> : null}
    </div>

)
```

<br><br>

## 탭 UI 만들기

---

-   react bootstrap 으로 컴포넌트 가져와서 쓰면 된다.
-   네비게이션 바 최상단에는 defaultActiveKey 라는 속성이 있는데, 이건 기본으로 보여줄 탭을 의미한다.
-   탭의 상태를 저장해둘 state 를 만들어준다.
-   state 의 상태에 따라서 삼항연산자든, if 문이든 사용해서 화면을 보여준다.
-   근데, html 내부에서는 if 문을 사용할 수 없어서 밖에다가 작성해줘야한다.
-   그래서 그냥 컴포넌트를 만들어서, if 문으로 작성해서 사용하면 된다. 이때 if 문에 무적권 return 으로 값 넣어줘 야함...
-   탭컨텐츠 만들때, if 문을 쓰기 귀찮으면, 보여줄 컨텐츠의 내용들을 배열로 다 만든다음에 호출하는방법도 있음

```
let [tab, tabSet] = useState(0);

<button onClick=(() => { tabSet(0) })>1번</button>
<button onClick=(() => { tabSet(1) })>2번</button>
<button onClick=(() => { tabSet(2) })>3번</button>


<TabContent tab={ tab }>

function TabContent({tab}){
    return (
        [<div>첫번째 탭 내용</div>,<div>두번째 탭 내용</div>,<div>세번째 탭 내용</div>][index]
    )
}

```

<br><br>

## 전환 애니메이션 주는법 (className 탈부착)

-   일단 애니메이션 전후 클래스를 만든다.
-   그래서 탭버튼을 눌릴때마다 적용될 수 있도록, 탭 컨텐츠 또는 탭컨텐츠를 감싸는 부모 wrap 에다가 클래스를 탈부착 시켜준다.
-   탭버튼을 눌린다 == tab 이라는 state 의 변경이 일어난다.
-   state 가 변경될때마다 클래스를 탈부착 시켜주는 코드를 짜면 된다.
-   state 가 변경될때마다 사용하는 함수는 useEffect 임
-   그리고 clean up 펑션을 사용할때 주의점이 있음
    -   리액트에서 제공하는 automatic batching 이라는 기능이 있는데 이게 뭐냐면, 동일한 state 변경 함수들이 바로 직전에나 근처에 붙어있게 되면, 여러개를 합쳐서 그중에 하나만 실행시켜버리는 기능인데, 이것 때문에 텀을 두고 싶을때는 setTimeout 같은걸로 약간의 시차를 줘야 한다.

<br><br>

## Props 관련 팁

-   컴포넌트에서 props 쓰기 귀찮으면 컴포넌트 파라미터에 중괄호를 하나 더 넣어서 컴포넌트의 속성 이름을 그대로 가져와서 넣어주면 된다.

```
<TabContent tab={ tab }>

)
}

function TabContent({tab}){
    return (
        <div>{tab}</div>
    )
}
```

<br><br>

## Context API

-   메인에 불러온 데이터를, 컴포넌트에서 사용하기가 굉장히 까다로움. props를 쓰면 되긴 하나, 만약에 이게 10번이상을 걸러서 써야되는거라고 가정한다면?
-   이때 props 없이 그냥 사용할 수 있는 방법이 2가지 있는데

    1.  Context API (리액트 기본제공 문법)
    2.  Redux (상태관리 뭐.. 라이브러리? 그런거)

-   실무에서는 Context API 를 잘 안씀. 성능저하, 컴포넌트 재활용이 어려운 점이 있어서 그러함.
-   그냥 그래도 이런게 있구나는 알고 지나가야함 <br><br>

-   context API 쓰는법
    1.  createContext 를 import 해준다.
    2.  createContext()를 담은 변수를 하나 선언해준다(전역변수)
    3.  불러올 컴포넌트를 <Context1.Provider> 로 감싸준다. 이름은 2번의 전역변수 명으로 하면 됨
    4.  <Context1.Provider> 안에 value 속성을 넣고, 내가 사용하고자 하는 state 또는 변수들을 집어 넣어 준다.
    5.  컴포넌트 파일에서 위에 선언한 보관함을 import 해준다. (그전에 export도 당연히 해줌)
    6.  컴포넌트가 있는 곳에, useContext(Context1) 함수를 선언해준다. 이거는 불러올 state 보관함을 해체하겠다는 뜻임.
    7.  이렇게 하면 props 없이 컴포넌트의 자식들도 그냥 가져다가 쓸 수 있다.

```
//메인 페이지 (App.js)

import { createContext } from 'react'

export let Context1 = createContext(); //state 보관함이라고 보면 된다.



function App(){

    let [재고,재고변경] = useState([10,11,12])

    return (

        <Routes>
            <Route element={
                <Context1.Provider value={{ 재고,shoes }}>
                    <Components />

                </Context1.Provider>
            }>
        </Routes>

    )
}



//컴포넌트 페이지 (Components.js)

import {Context1} from 'app.js'

function Components(){
    let states = useContext(Context1)

    return (
        <>
            <div>
                {states}
            </div>
        </>
    )
}


```

-   Context API 가 성능이슈가 되는 이유는, Context로 가져오는 state 외에, 모든 state 가 제랜더링이 되기 때문에, 성능저하가 발생할 수 있다.

<br><br>

## Redux 라이브러리

-   다양한 곳에서 state를 사용하려면, 아무래도 최상위 페이지에 state를 선언해줘야 하는데, 컴포넌트에서 쓰려면 props 를 다 써야되니깐 귀찮아짐.
-   그래서 이거때문에 Redux라는 라이브러리를 통해서, 그곳에 선언해주면 모든 페이지에서 state를 사용 및 관리할 수 있다.
-   Redux 설치방법

    1.  package.json dㅔ서 react 와 ㄱeact-dom 버전이 18.1.0 이상이어야 잘 됨
    2.  터미널에서 npm install @reduxjs/toolkit react-redux 명령어로 리덕스 설치
    3.  src 폴더 내에 store.js 파일을 만들어줌
    4.  store.js 에 세팅해줌

    ```
    import { configureStore } from '@reduxjs/toolkit'

    export default configureStore({
         reducer: { }
    })
    ```

    5.  index.js에 가서 <Provider store={store}> 로 App을 감싸준다. 그리고 provider 와 store.js 를 임포트 해준다.

    ```
    import { Provider } from 'react-redux';
    import store from './store'

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
    ```

    6. store.js 에 createSlice 를 임포트 해주고, 함수도 호출한다.
    7. createSlice 메소드 안에다가 사용할 state 를 object 처럼 만들어주는데, name 은 state 이름, initialState 는 스테이트 값이다. state 하나를 slice 라고 부른다.
    8. createSlice 안에 만든 state 를 reducer 안에다가 등록을 해줘야 사용가능하다.
    9. reducer 에 state 를 등록하는 규칙은 작명 : stateName.reducer 와 같이 써줘야 한다. reducer 는 꼭 붙여줘야함.

    ```
    //store.js

    import { configureStore, createSlice } from '@reduxjs/toolkit';

    let user = createSlice({
        name : 'state 이름 작명',
        initialState : '스테이트의 값'
    })

    export default configureStore({ reducer: {
        user = user.reducer,
    }, });

    ```

    10. 이렇게 store.js 에 만들어진 state 는 사용하고싶은 페이지로 가서 useSelector()를 사용해 불러오면 된다.

    ```
    //component.js

    import { .useSelector } from "react-redux"

    function Component(){

        let a = useSelector((state) => {return state});

        return (

        )
    }

    ```

    11. useSelector 를 편하게 쓰려면

    ```
    let a = useSelector((state) => {return state}); //store.js 에 있는 모든 state를 불러옴
    let a = useSelector((state) => {return state.state이름}); //store.js의 특정 state 만 가져올수있음.

    ```

-   Redux를 쓴다고 모든 state 를 다 store.js 에 보관할 필요 없다. 글로벌하게 사용할 애들만 넣으면 됨. <br><br>

-   State 변경하는법

    1.  state 수정하는 함수 만들고,
    2.  만든 함수를 export 해줘야함 export let { changeName, secondFunction, .... } = user.actions
    3.  원할 때 그 함수 실행해달라고 store.js 에 요청을 해야됨.

    ```
    //store.js

    import { configureStore, createSlice } from '@reduxjs/toolkit';

    let user = createSlice({
        name : 'userName',
        initialState : 'JEON',
        reducers : {
            //reducers 안에는 함수를 만들 수 있음

            changeName(state){
                return 'Howard' + state
            },

            secondFunction(){

            }
        }
    })

    export let { changeName, secondFunction, .... } = user.actions

    export default configureStore({ reducer: {
        user = user.reducer,
    }, });
    ```

    4. 변경함수 쓸 곳에 import 해주고 (store.js 에서 export 한 함수 + useDispatch from react-redux)
    5. useDispatch() 함수도 줘야함 이건 store.js에 요청을 보내주는 함수임.
    6. 사용할 곳에서 dispatch(changeName()); 이런식으로 함수 호출해줘야한다.

    ```
    //component.js

    import { useSelector, disPatch } from "react-redux";
    import { changeName } from "../store.js";

    function Component(){

    let a = useSelector((state) => {return state});
    let dispatch = useDispatch()

    return (
        <button onClick = {() => {
            dispatch(changeName())
        }}>
    )
    }

    ```

    7. Redux로 object 자료나 array 자료를 변경하는법

    -   object 자료 변경
    -   reducers에 그냥 return 빼고, state 자료 불러서 일반 객체 값 변경하듯이 바꿔주면 된다.
    -   함수의 파라미터 문법도 쓸 수 있음. 단, 파라미터를 쓸때는 파라미터 뒤에 .payload를 꼭 붙여줘야함.
    -   참고로 파라미터에 들어간 state는 호출할때 굳이 신경쓰지 않아도 된다. state 뒤에 오는 파라미터가 첫번째 파라미터라고 생각하면 됨.
    -   보통 파라미터를 작명할때 action 이라고 이름을 많이 지음.

    ```
    let user = createSlice({
        name : 'userName',
        initialState : {name : "kim", age : 30},
        reducers : {
            changeName(state, a){
                state.name = a.payload
            },
        }
    })
    ```

    8. dispatch 함수로 전달 가능한 파라미터는 1개밖에 없음. 그래서 뭐 여러가지 정보를 전달해야 된다면, 객체든 배열이든 형태로 파라미터를 전달해주면 된다.

## LocalStorage

-   최대 5MB string 만 저장 가능
-   유저가 브라우저를 청소하지 않는 이상 반 영구적으로 남아있음
-   Session storage 는 브라우저 종료시 데이터 날아감. 로컬 스토리지는 게속 남음
-   자료 저장법,출력법

```
localStorage.setItem('key','value'); //데이터 추가
localStorage.getItem('key); //데이터 출력
localStorage.removeItem('key') //데이터 삭제

```

<br><br>

-   데이터를 즉시 수정하는 문법은 없고, 데이터를 뽑아와서 수정한후에 다시 넣어줘야함.
-   로컬스토리지에 array/object 저장 & 출력하려면
    1.  arr,obj 를 JSON 형태로 변경시켜준다. 출력은 반대로 하면 된다. 뽑아서 obj로 바꿔주면됨.
    2.  변경시킨걸 setItem 으로 넣어준다.

```
let obj = { name: 'JEON' };

localStorage.setItem('data', JSON.stringify(obj)); //obj 를 JSON 으로 변환

let 꺼낸거 = localStorage.getItem('data')
JSON.parse(꺼낸거); //로컬스토리지 출력한 JSON 데이터를 obj로 만들어줌.

```

<br><br>

-   로컬 스토리지에 배열이나, 오브젝트를 넣으려면, 처음 메인 화면 진입시가 됐던, 뭐 상품목록이 되었든 어느 순간에 로컬스토리지에 일단 비어있는 arr,obj 를 넣어 주어야 한다.
-   이때, 보통 useEffect를 쓰게 되는데, 만약 이럴경우에 페이지가 새로고침이 되면 계속해서 localstorage에 있는 녀석에게 비어있는 arr,obj를 넣기 때문에, if 문을 사용해서 만약에 스토리지에 내가 넣고자 하는 데이터의 key 값이 null 일때(존재하지 않을때) 만 빈 오브젝트,배열을 넣도록 코드를 짜주어야 한다.
```
if (localStorage.getItem('key') == null) {
    localStorage.setItem('key',JSON.stringify([]))
} else {
    return
}
```

<br><br>

-   배열 중복 제거 new Set(배열)
```
let getLsData = localStorage.getItem('watched');
getLsData = JSON.parse(getLsData);
getLsData.push(id);
getLsData = new Set(getLsData);
getLsData = Array.from(getLsData);

localStorage.setItem('watched', JSON.stringify(getLsData));
```

<br><br>