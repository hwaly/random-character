# 무작위 글자 생성

## 설치
```js
npm install hwaly-random-character
```

## 사용법
```js
import RandomCharacter from 'hwaly-random-character';

const randomCharacterOption = {
    // 원하는 타입 지정
    // 생략 가능
    // default: 'digit'
    // type: 'digit' or type: 'digit, lower ...' 으로 지정
    //
    // 사용 가능 타입
    // digit: 0123456789,
    // lower: abcdefghijklmnopqrstuvwxyz,
    // upper: ABCDEFGHIJKLMNOPQRSTUVWXYZ,
    // korean: 유니코드 44032 ~ 55204 사이의 글자,
    // special: ~!@#$%^&*()_+{}|:"<>?`-=[];',./!♡♥☆★♩♪♬
    type: 'digit',
    
    // 생성 할 문자 개수
    // default: 1
    size: 1
};

// 옵션 생략 가능
const randomCharacter = new RandomCharacter();
console.log(`Default: ${randomCharacter.generate()}`);

// 타입 추가
const randomCharacter2 = new RandomCharacter({
    lastName: '연이정김조임김',
    firstName: '병화유미태운동임기현승민호혜진'
});
console.log(`Name: ${randomCharacter2.generate({type: 'lastName'})}${randomCharacter2.generate({type: 'firstName', size: 2})}`);
```