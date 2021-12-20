## 우버이츠 클론코딩의 백엔드

### Require

#### Back-End

- nest.js
- typescript
- typeORM

#### Front-End

- typescript
- react.js

#### 데이터 전달

- GraphQL (front - back간 데이터 전달)

#### DB

- postgreSQL

---

<br>

### 설치

#### Apollo Server

```bash
npm i @nestjs/graphql graphql-tools graphql apollo-server-express
```

#### nest 모듈 생성

```
nest g mo [모듈명]
```

---

<br>

## 구현할 목록

### User Model :

- id
- createdAt
- updatedAt

- email
- password
- role (client | owner | delivery)

### User CRUD :

- Create Account
- Log In
- Edit Profile
- Verify Email
