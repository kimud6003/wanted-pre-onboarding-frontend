# Wanted

## 과제

- 과제 수행 과정에서 지원자분들의 자율성과 창의력을 발휘하는 것을 기대하고 존중합니다. 다만, 아래 과제 안내에 적힌 가이드라인들은 모두 정확히 준수해주시기를 바랍니다.
- 가이드라인에 명시된 `test-id` 속성이 제대로 부여되지 않은 경우 구현이 안된 것으로 판단됩니다.
- 가이드라인에 명시된 사항 외에는 자유롭게 진행해주셔도 됩니다.

### :: 1. 로그인 / 회원가입

- `/signup` 경로에 회원가입 기능을 개발
- `/signin` 경로에 로그인 기능을 개발
- 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성

  - 이메일 input에 `data-testid="email-input"` 속성을 부여
  - 패스워드 input에 `data-testid="password-input"` 속성을 부여
  - 회원가입 페이지에는 회원가입 button에 `data-testid="signup-button"` 속성을 부여
  - 로그인 페이지에는 로그인 button에 `data-testid="signin-button"` 속성을 부여


#### Assignment 1

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상

- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여

#### Assignment 2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로 이동

#### Assignment 3

- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로 이동

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
  - 응답받은 JWT는 로컬 스토리지에 저장

#### Assignment 4

- 로그인 여부에 따른 리다이렉트 처리

  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 

---

### :: 2. TODO LIST

#### Assignment 5

- `/todo`경로에 접속하면 투두 리스트의 목록제공
- 목록에서는 TODO의 내용과 완료 여부가 표시
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현
- TODO는 `<li>` tag를 이용

#### Assignment 6

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button 새성

  - TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여
  - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가
- TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO의 목록유지

#### Assignment 7

- TODO의 체크박스를 통해 완료 여부를 수정 가능

#### Assignment 8

- TODO 우측에 수정버튼과 삭제 버튼 생성

  - 수정 버튼에는 `data-testid="modify-button"` 속성을 부여
  - 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여

#### Assignment 9

- 투두 리스트의 삭제 기능을 구현

  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템 삭제 가능

#### Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요

  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성
  - 수정모드에서는 TODO의 내용을 변경 가능

  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경
    - 수정 input창에는 `data-testid="modify-input"` 속성을 부여

  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시
    - 제출버튼에는 `data-testid="submit-button"` 속성을 부여
    - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여

  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 가능

  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 가능

