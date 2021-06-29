const str = `
010-1234-3213
thesecon@gmail.com
https://www.omdbapi.com/?apikey=1231341&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`;

// const regexp = /fox/gi;

// console.log(regexp.test(str));

// console.log(str.replace(regexp, 'AAA')); //원본이 바뀌지 않기 때문에 바꾸고 싶을경우 재할당해야함
// console.log(str);

/*
const regexp = /\.$/gim; //.이 문자로 해석되기 위해 이스케이프(\)붙임
console.log(str.match(regexp));
*/

// console.log(str.match(/^t/gim));

/*
console.log(str.match(/fox|dog/g));
console.log(str.match(/https?/g));
*/

/*
console.log(str.match(/d{2,}/g));
console.log(str.match(/\b\w{2,3}\b/g)); // \w: 숫자를 포함한 영어 알파벳
*/

/*
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/\bf\w{1,}\b/g)); //f로 시작하는 모든 영단어 찾기
*/

/*
const h = `   the hello world   !

`;
console.log(h.replace(/\s/g, ''));
*/

console.log(str.match(/.{1,}(?=@)/g)); // @ 앞에 오는 단어 찾기
console.log(str.match(/(?<=@).{1,}/g)); // @ 뒤에 오는단어 찾기
