## React bootstrap 설치 방법
- 구글에 React bootstrap 검색해서 설치하면 된다
- 터미널에 명령어 입력 
```
npm install react-bootstrap bootstrap 
```
- 부트스트랩 css 파일도 import 해줘야함. App.js 에 해주던지, 아니면 사이트에 있는 link 태그 복사해서 index.html 에 링크 넣어주던지 
- 근데 부트스트랩 ui 는 컴포넌트라서 태그 이름이 대문자로 시작함
  - 그리고 컴포넌트라서 상단에 import를 해줘야함. 
  - 부트스트랩에서 가져오는 모든 컴포넌트들은 다 기재해주어야함.... 조금 불편 
  ```
  import { Button, Nav, Container, Navbar } from 'react-bootstrap';
  ```
- React bootstrap 이 아닌, 원래 Bootstrap 사이트에 있는 클래스들을 가지고 와서
  기존에 쓰던 방식으로 사용해도 되지만, React 거를 사용하면 조금더 용량적인 측면에서 절약이 가능하다고 한다. 

<br><br>
## 터미널에 npm 실행시키고 나오는것 
- ctrl + c


<br><br>

## 이미지 넣기 
- img 같은건 src 폴더에 넣어주어야 한다. 
- Css 파일에서 넣기는 그냥 동일함. 경로 입력하면 됨. 일반적인것과 동일함
- Html 태그에서 style 속성으로 넣기 (이방법은 자 잘안씀)
  1. 이미지의 경로를 상단에 import 해줘야 한다.
  2. 임포트 한것은 변수 취급 받기 때문에, '+ 변수명 +' 형식으로 넣어주어야 한다.
```
  import 작명 from './images/mainBg.png'

  <div style={{ background:'url('+ 작명 +')' }}
```

- img 태그에서 src 로 넣기 
  1. 동일하게 임포트 해둔거 변수명으로 써야된다...
  2. 그래서 다른방법을 쓰는데, 프로젝트 생성시 나오는 public 폴더를 사용함
      - 리액트는 배포 전에 html js css 파일을 압축해서 배포하는데(이걸 번들링 이라고 함 bundling) 퍼블릭 폴더는 
        압축을 진행하지 않음. 
  3. public 폴더에 이미지를 넣어서 일반적인 html 에 사용하는 경로 작성방법으로 이미지를 넣을 수 있음. 
  4. 단, 일반적인 서버에 배포할때 말고, 개발서버나 뭐 테스트서버나 등등으로 배포해야 할 때 Public 폴더에 들어있는 것들이 잘 안될수도있음
  이럴때 저거 뭐야 리액트 홈페이지 들어가보면 방법이 있는데, 이미지 경로넣을때 뭔가를 더해줘야함
  ```
  <img src={process.env.PUBLIC_URL + '/public/images/img.png'}
  
  ```
  
<br><br>

## import, export
- 다른 파일의 변수를 가져오려면, 변수가 있는 파일에 export 하고 쓰려고 하는 파일에 import 를 해주면 된다.
```
-변수가 선언된 파일에 export default 변수명
을 넣어주면 된다. 

-변수를 쓰고자 하는 파일에는 import 작명 from 쓰고자하는변수가있는파일경로 (./data.js)를
import 시켜주어야 한다. 
```

- 여러개를 export 를 하려고 하면 export 기호를 쓰고 {변수명,변수명 } 처럼 중괄호안에 넣어주면 된다.
- import 할때도 import {변수명,변수명} from ~~ 이런식으로 중괄호 안에 넣어주어야 한다.
- 중괄호를 사용해서 임포트 할때는, 내맘대로 작명하면 안되고 변수명의 정확히 넣어주어야 한다. 

<br><br>

## 컴포넌트 만들때(컴포넌트에 바인딩 할 때 )
1. props 를 쓸 때는, 컴포넌트를 호출하는 곳에, props 를 쓸놈을 명시해줘야된다.
```
App() {
  let [data] = useStates(data);

  return (
    <컴포넌트 data = {data} />
  )
}
```
- App 에 컴포넌트 호출할때, 명시해주는 부분에서 예를들어 data = {data[0]} 이런식으로 명시를 해주면, 
배열의 0 번째 데이터만 props 가 가능해진다. 그래서 만약 좀 단순하게 양이 적은 어떤 목록을 데이터 바인딩 하려면
```
<컴포넌트 data = {data[0} />
<컴포넌트 data = {data[1} />
<컴포넌트 data = {data[2} />
```
이런식으로 그냥 컴포넌트를 3번 호출해줘도 무방하긴 하다. 이런방법도 있다는거지 굉장히 몰상식한 방법인듯.
<br><br>

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
```
<img src={'https://www.howard.com'+ 데이터 +'} />
```
- 경로를 {}중괄호 안에 넣고 작은따옴표''로 감싸준 다음, 데이터를 넣고싶은곳에 '' 분리시켜서 ++ 로 넣어주면 된다.
일반 스크립트 데이터 넣듯이.
- 데이터에 뭔가 산술을 더해주고 싶으면 데이터를 괄호로 감싸면 된다
```
<img src={'https://www.howard.com'+ (데이터 + 1) +'} />
```

<br><br>
## 여러가지 페이지 만들기 (라우터)
- 페이지를 구분하는것을 일명 라우팅이라고 그럼

- 일반적인 html 로 만들어진 프로젝트와 다름
- 리액트는 싱글페이지라서 html 파일이 하나밖에 없음.
- 리액트에서 여러 페이지 만드는법
  1. 컴포넌트를 만들어서 상세페이지 내용 채움
  2. 누가 상세페이지로 접속하면 그 컴포넌트를 보여줌.
  3. 해당 내용을 직접 만들어도 되지만, 아주 길어지기 때문에 주로 라이브러리를 사용함
     <br><br>

  - react-router-dom (리액트 프로젝트 여러페이지 쉽게 보여주는 라이브러리)
    - npm install react-router-dom@6 명령어를 입력
    - 라이브러리를 사용하기 위해 index.js 에 임포트를 하고 추가해야될 내용이 있음
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
    - 그리고 App.js 에도 부트스트랩때와 마찬가지로 몇가지 컴포넌트들을 임포트 해워야 된다. 
    ```
      import { Routes, Route, Link } from 'react-router-dom'
    ```

- 사용법은 react-router-dom6 홈페이지에서 상세하게 찾아볼것. 우선 뭐 기본 사용법만 기록하겠음. 
<br><br>

#### react-router-dom6 간단 사용법들
- App.js 에 부트스트래버럼 몇가지 임포트를 해준다.
```
import { Routes, Route, Link } from 'react-router-dom'
```
- html 작성하는 곳에 Routes,Route 태그를 넣어준다.
- Route 는 추가할 페이지? 개수만큼 넣어주면 된다. 
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
  - path 는 url 뒤에 붙을 경로를 의미함
  - element= {} 는 중괄호 내에, 해당 경로에서 어떤 페이지를 보여줄것인지를 넣어주면 됨. 
  - 메인 페이지의 경로는 path="/" 슬레시 하나만 넣어주면 된다.
  - 아래는 기본 Route 쓰는 방법임 
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

  - 단 이렇게 만들경우에 단점이 한눈에 구조를 알아보기 어려우니까, 페이지별로 컴포넌트를 만들어버리면 라우터 태그 내에
  그냥 컴포넌트만 집어넣으면 되서 관리하기가 용이해진다. 

- 버튼 클릭시 라우터 변경하는법
  - Link 태그를 사용해서 a 태그처럼 사용하면 된다
  - Link 태그는 대문자 시작임
  - to 안에 붙이고싶은 경로를 넣어주면 된다. Route 태그에 적은 path 경로. 
  ```
    <Link to="/">메인</Link>
    <Link to="/detail">상세페이지</Link>
    <Link to="/cart">장바구니</Link>
  ```
<br><br>

- useNavigate, Outlet (라우터 컴포넌트)

- useNavigate 훅
  - use 어쩌구 저쩌구 하는것들을 훅이라고 하는데 유용한 함수들이 들어있는 컴포넌트들이다.
  - 변수에 담아서 사용하면 된다.
  ```
    let navigate = useNavigate();
  ```
  - useNavigate 는 페이지 이동을 도와주는 함수이다. 
  - 위에서 Link 태그를 썼는데 저렇게 안해도 됨. 
  - 페이지 이동 시킬 요소에다가 onClick 으로 넣어주면 된다.
- ```
    <Nav.Link onClick{() => { navigate('/detail' } }>상품상세페이지 이동</Nav.Link>
  ```
  - 네비게이트 함수에 히스토리백이랑 앞전페이지 이동기능도 있음
  - 파라미터에 1을 넣으면 앞에페이지, -1을 넣으면 이전페이지 이동함
  ```
    <Nav.Link onClick{() => { navigate(-1) } }>이전페이지</Nav.Link>
  ```
<br><br>

- 404 페이지 만들기 
  - 이건 라우터태그 경로에 * 을 넣어주면, 라우터로 지정된 모든 경로외에 다른 경로로 들어오면 띄워주는 페이지를 만들 수 있음
    ```
    <Route path="*" element={<div>404페이지 입니다.</div>}/>
    ```
<br><br>

- Nested Routes
  - 여러개 유사한 페이지가 필요할때  
  - 특정 페이지에 속한 하위 페이지들을 만드는 문법이다.
  - 예를들어 detail 중에서도 특정한것들을 보여줄 페이지, detail/more 이나 detail/price 등 detail 의 하위 페이지들을 추가할떄 사용함
  ```
    <Route path="/detail" element={<div>상품상세페이지</div>}>
      <Route path="more" element={<div>상세에서 더 상세</div>} />
      <Route path="price" element={<div>상세에서 가격상세페이지</div>} />
    </Route>
  ```

  - Nested는, 부모 페이지와 자식페이지 둘다 보여줌
  - Nested 를 사용할때는, 부모되는 Route에 자식되는 Route 들을 어디에서 보여줄지를 작성해주어야 한다.
  - 이때 사용하는게 Outlet 임.
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

#### src 폴더 내에 폴더 구조
- src 폴더 내에 그냥 폴더를 만들어서 묶어두면 된다. 


<br><br>

## Routes 로 수십개 페이지 보여주기

- 예를들어 상품목록 > 상품 상세페이지로 들어가야되는데, 이게 수십개다. 그럼 어떤 문법을 써야하는지
- URL 파라미터문법을 써야한다.
  - URL 파라미터는 여러개 사용가능함 /detail/:id/text/:id
- Route 의 패스 경로 뒤에 :작명 을 넣어준다.
<br><br>

1. 메인 페이지(App.js), 즉 컴포넌트를 불러와서 보여주는 페이지에서 라우트 url 에 추가 경로를 넣어준다.
2. 컴포넌트 페이지로 가서, useParams() 함수를 사용해준다. 


```
 <Route path="/detail/:작명" element={<Detail data={shoes}></Detail>}/>
```

<br><br>

## useState 관련
- 메인 페이지에서 사용하는 useState 를 컴포넌트 페이지에서 사용하려면, props 를 통해서 가져오는게 편하다. 물론 컴포넌트 페이지에 따로 메인 페이지에 적용된 데이터를 한번더 변수에 담아서 써도 되지만, 그렇게 되면 데이터 변경을 페이지마다 해줘야 하기 때문에 props로 불러와서 처리하는게 좋다.

<br><br>

## Styled-components 라이브러리 

- npm install styled-components 로 설치 가능
- 쓰고자 하는 파일에 import styled from 'styled-components' 넣어준다. 
- 변수에다가 저장해서 쓰면됨.
- 백틱을 써야됨
- 하나의 스타일 된 요소 컴포넌트를 만든다고 생각하면 된다. 
- 장점
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
- 그리고 props 문법으로, 비슷한 컴포넌트들을 조금씨 다르게 쓸 수 있음
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
- 위의 방법으로 음음 됨 
- 자바스크립트의 문법같은것도 사용할 수 있음. 만약 배경이 파란색이면 컬러는 화이트, 아니면 블랙 이런식으로 
- 단점
  1. 스타일 재사용이 어렵다.(import, export 로 쓸수있으나 굳이 그럴거면 css 파일쓰면됨)
  2. 협업시 다른사람이 이해하기 힘들 수 있다.
  3. 

<br><br>
- 부가적으로 한 파일에만 종속되는 css 파일을 만들고싶으면 파일명.module.css 로 CSS파일을 만들면 된다. 파일명은 종속시키고 싶은 js 파일의 이름임

<br><br>

## LifeCycle & useEffect 
- 컴포넌트의 lifeCycle 
    - 컴포넌트는 장착되기도 하고(mount), 업데이트도 되고(update), 필요없으면 제거(unmount)가 되기도 하는데, 이거를 라이프사이클이라고 부름 ㅋ
    - 이거를 왜 배우냐면, 내가 이 과정이 일어나는 중간중간에 간섭을 할 수 있기 때문이다.
    - 간섭이라고 하면 그냥 코드 실행임. 이벤트 발생과 비슷한 느낌임
    <br><br>
- 컴포넌트 작성 함수 내에 useEffect 함수를 써주면 된다.
    1. 먼저 import { useEffect } from "react"; 임포트를 해준다. 그냥 함수를 쓰면 자동으로 해주긴 함
    ```
    function Detail(){

        useEffect(() => {
            mount,update 될 때 실행시킬 함수
        })

        return (

        )
    }
    ```
<br><br>

- useEffect 를 쓰는 이유
    - 화면이 모두 rendering 이 된 이후에 실행시켜준다.
    - 사실 그냥 리턴 위에다가 함수 작성해도 되는데, 시점이 안맞을 수 있음. 
    - 서버에서 데이터를 가져오거나, 연산이 복잡한 함수를 사용할때, 또는 타이머를 쓸 때 useEffect 안에 작성해준다. 


















