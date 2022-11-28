## React bootstrap 설치 방법
- 구글에 React bootstrap 검색해서 설치하면 된다
- 터미널에 명령어 입력 
```
npm install react-bootstrap bootstrap 
```
- css 파일도 import 해줘야함. App.js 에 해주던지, 아니면 사이트에 있는 link 태그 복사해서 index.html 에 링크 넣어주던지 
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
- Html 태그에서 style 속성으로 넣기
  1. 이미지의 경로를 상단에 import 해줘야 한다.
  2. 임포트 한것은 변수 취급 받기 때문에, '+ 변수명 +' 형식으로 넣어주어야 한다.
- img 태그에서 src 로 넣기 
```
  import 작명 from './images/mainBg.png'

  <div style={{ background:'url('+ 작명 +')' }}
```