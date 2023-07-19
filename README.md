<div align="center">

  # 🔎 검색창 기능
  **[한국임상정보](https://clinicaltrialskorea.com/)의 검색영역을 클론한 toy project 입니다.**

</div>

> 원티드 프리온보딩 프론트엔드 인턴십 4주차 개인 과제

![main-min](https://github.com/jh1109/search-box/assets/117807467/9172fc63-b004-440b-b59e-5a7fbe14ad6a)


## ✔ 요구사항
### 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
- [x] 검색어가 없을 시 "검색어 없음" 표출
![apirender-min](https://github.com/jh1109/search-box/assets/117807467/405a5a33-7a90-4c14-862a-0af710774ec8)

### 2. API 호출별 로컬 캐싱 구현
![cacheing-min](https://github.com/jh1109/search-box/assets/117807467/5bf17507-ec1c-49fb-b2a8-a0a079caa8e7)
- 사용자가 검색어를 제출하면 해당 검색어를 `localStorage`에 저장하여 최근 검색어로 렌더링
- 동일한 검색어에 접근하기 위해 API 호출없이 접근 할 수 있음(API 호출 비용을 절약 할 수 있음)
- 탭이나 브라우저를 종료해도 기록을 남게하기 위해 `localStorage`에 저장 : API 응답으로 받은 `Keyword[]` 타입으로 저장
- 서버로 전송될 필요는 없는 정보라고 판단하여 쿠키를 사용하지 않음

### 3. 입력마다 API 호출하지 않도록 API 호출 횟수 줄이기
- [x] 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
![apireduce-min](https://github.com/jh1109/search-box/assets/117807467/6317c54b-1050-4a11-89b9-f1e3427f0587)
- `useEffect`의 `clean-up` 함수 기능과 유사한 `debounce` 함수 생성
- `clearTimeout` method를 먼저 동작시킨 후 `setTimeout` method 동작으로 실행시켜 마지막 event에서 500ms 지난후 API 호출
- 입력마다 호출시보다 **렌더링 소요시간을 11ms에서 5.2ms까지 최적화함**
### 4. 키보드만으로 추천 검색어들로 이동 가능하도록 구현
![keyboard-min](https://github.com/jh1109/search-box/assets/117807467/6749860e-b9db-43d7-b732-135ee60b9d14)
- onKeyDown 이벤트를 이용하여 e.key 값에 따라 focusIdx 상태 업데이트
- `focusIdx` 값과 `map` method의 `index` 인자를 비교하여 일치할 때 조건에 따른 스타일링 추가

## 💻 프로젝트 사용법
```
npm install & npm start
```

## 🛒 기술 스택
- React & TypeScript
- classnames
- eslint & prettier


## 📜 디렉토리 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Header.module.css
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┗ 📂search-box
 ┃ ┃ ┣ 📜SearchBox.tsx
 ┃ ┃ ┣ 📜SearchDropBox.module.css
 ┃ ┃ ┣ 📜SearchDropBox.tsx
 ┃ ┃ ┣ 📜SearchForm.module.css
 ┃ ┃ ┣ 📜SearchForm.tsx
 ┃ ┃ ┣ 📜SearchList.module.css
 ┃ ┃ ┣ 📜SearchList.tsx
 ┃ ┃ ┣ 📜SearchWord.module.css
 ┃ ┃ ┗ 📜SearchWord.tsx
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜httpClient.ts
 ┃ ┣ 📂interfaces
 ┃ ┃ ┗ 📜keyword.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜debounce.ts
 ┃ ┃ ┣ 📜hasKeyInLocalStorage.ts
 ┃ ┃ ┗ 📜JSON.ts
 ┣ 📂services
 ┃ ┗ 📜searchBoxService.ts
 ```


