// //1. Data Type 
// let num: number = 10;
// const greet: string = 'Hello TypeScrit';
// const isOn: boolean = true;
// const person: object = {name: '손흥민', age: 10};
// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// const bts: string[] = ['진' ,'슈가', '제이홉'];
// const item: [string, number, boolean] = ['손흥민', 30, true];
// let name: any = '손흥민';
// name = 1;
// //num = 'hello';
export {};
// let empty: null = null;
// let notAssigned: undefined = undefined;
// // console.log(person['name']);
// // console.log(bts[2]);
// // console.log(item[0]);
// //2. 함수의 매개변수와 반환값
// function add(num1:number, num2:number):number {
//     return num1 + num2;
// }
// const result = add(5, 4);
// console.log(result);
// //const result1 = add('1','2');
// //const result2: string = add(3,4);
// //const result3: number = add(4);
// //3.함수의 매개변수와 반환값
// function sayHello(name: string): string {
//     return `Hello ${name}`;
// }
// let greeting = sayHello('RM');
// console.log(greeting);
// function sayHi(name: string): void {
//     console.log(`Hi ${name}`);
// }
// const hi = sayHi('손흥민');
// console.log(hi);
// //4. 함수형 매개변수
// function sayHello(name: string): string {
//     return `Hello ${name}`;
// }
// // 선언시 콜백함수의 형도 지정해야 한다. 반환형의 타입은 => 로 한다. 
// function greeting(name: string, callback: (name: string) => string): string {
//     return callback(name);
// }
// const result = greeting('손흥민', sayHello);
// //호출시 화살표 함수 
// const result1 = greeting('손흥민', (name: string) => `Hello ${name}`);
// console.log(result, result1);
// //5. 형 추론
// let name = '손흥민';
// let age = 30;
// let isOn = true;
// let person1 = {name: '손흥민', age:10};
// const bts = ['진', '슈가', '제이홉'];
// console.log(typeof name);       //string
// console.log(typeof age);        //number
// console.log(typeof isOn);       //boolean
// console.log(typeof person1);    //object
// console.log(typeof bts);        //object
// //name = 1;                 //error 
// //age = '1';                //error
// //person1 = {name: 'RM'};   //error
// //6. 형추론 
// function sayHello(name: string): string {
//     return `Hello ${name}`;
// }
// let greeting = sayHello('RM');
// function sayHello1(name: string) {
//     return `Hello ${name}`;
// }
// let greeting1 = sayHello1('RM1');
// function sayHello2(name: string) {
//     console.log(`Hello ${name}`);
//     return
// }
// let greeting2 = sayHello2('RM2');
// function sayHello3(name: string) {
//     console.log(`Hello ${name}`);
// }
// let greeting3 = sayHello3('RM3');
// console.log(greeting);
// console.log(greeting1);
// console.log(greeting2);     //undefined
// console.log(greeting3);     //undefined
// //7.union type 
// let num: number | string = 10 ;
// //num = 10;
// console.log(typeof num);
// num = '20';
// console.log(typeof num);
// function getAge(age: number | string): string {
//     return '나의 나이는 ' + age;
// }
// console.log(getAge(20));
// console.log(getAge('30'));
// console.log(getAge('백살'));
// //8.구구단 출력 퀴즈 
// function getGuGuDan(dan: number): void {
//     console.log(`** ${dan} 단 **`);
//     for (let i = 1; i < 10; i++){
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
//     console.log('');
// }
// function getDan(): void {
//     for (let i = 2; i < 10; i++) {
//         getGuGuDan(i);
//     } 
// }
// getDan();
// //9. 학점 반환 함수 정의 퀴즈 
// function getScore(num: number): string {
//     let grade : string = "";
//     if (num >= 90) {
//         grade = "A";
//     } else if(num >= 80) {
//         grade = "B";
//     } else if (num >= 70) {
//         grade = "C";
//     } else if (num >= 60) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }
//     return grade;
// }
// let gradeScore : string = "";
// gradeScore = getScore(91);
// console.log(gradeScore);
// gradeScore = getScore(81);
// console.log(gradeScore);
// gradeScore = getScore(71);
// console.log(gradeScore);
// gradeScore = getScore(61);
// console.log(gradeScore);
// gradeScore = getScore(51);
// console.log(gradeScore);
// gradeScore = getScore(100);
// console.log(gradeScore);
// //9.interface
// const person = {name: '손흥민', age: 30};
// console.log(person);
// interface Person {
//     name: string;
//     age: number;
// }
//const person1: Person = { name: '손흥민', age: 30};
//const person2: Person = { name: '손흥민'};
//const person3: Person = { name: '손흥민', age: 20, team: 'LA'};
// console.log(person1);
// console.log(person2);
// console.log(person3);
// //10. 영화 interface 만들어보기
// interface Movie {
//     rank: number | string;
//     title: string;
// }
// const movie1: Movie = { rank: 1, title: 'TITLE1' }
// console.log(movie1);
// //11.옵션 속성(optional)
// interface Student {
//     name: string;
//     grade: number;
//     major?: string;
// }
// function studentInfo(s: Student): void {
//     console.log(s.name);
//     console.log(s.grade);
// }
// studentInfo({name: '손흥민1', grade: 1, major: '컴공'});
// const s1: Student = {name: '손흥민2', grade: 3};
// studentInfo(s1);
// const s2 = {name: '손흥민3', grade: 2};
// studentInfo(s2);
// //12. interface 상속
// interface Person {
//     name: string;
//     age: number;
// }
// interface Student extends Person {
//     major: string;
// }
// const s: Student = {name: '손흥민', age: 30, major: '컴공'};
// //const s1: Student = {name: '손흥민', age: 33};    //major 없어서 error 
// console.log(s);
// //console.log(s1);
// //13. interface-union type  (|)
// interface Person {
//     name: string;
//     age: number;
// }
// interface Student extends Person{
//     major: string;
// }
// interface Player extends Person {
//     skill: string;
// }
// // const p1: Student = {name: '손흥민s', age: 20, major: '컴공'};
// // const p2: Player = {name: '손흥민p', age: 25, skill: '축구'};
// // function description(p: Student | Player): void {
// //     if ('major' in p) {
// //         const info = `${p.name}, ${p.age}, ${p.major}`;
// //         console.log(info);
// //         return;
// //     }
// //     if ('skill' in p) {
// //         const info = `${p.name}, ${p.age}, ${p.skill}`;
// //         console.log(info);
// //     }
// // }
// // description(p1);
// // description(p2);
// //14.interface-intersection (타입 2개를 합쳐서 사용) & 
// function info (p: Student & Player) {
//     const result = `${p.name}, ${p.major}, ${p.skill}`;
//     console.log(result);
// }
// info({name:'손흥민', age:23, major:'컴공', skill: '축구'});
//15. interface - 선언병합 (같은 이름으로 interface를 정의하면 병합됨)
// interface Person {name: string;}
// interface Person {age: number;} 
//   == 위 두문장과 아래 Person은 같다.
// interface Person {
//     name:string;
//     age:number;
// }
// interface Maker {
//     name: string;
//     country: string;
// }
// interface Car {
//     model: string;
//     maker: Maker;
// }
// //16. 영화목록 모델링 실습하기 
// // articleList 안의 movie 목록
// interface Movie {
//     title: string;
//     url: string;
//     image: string;
//     authorName: string;
//     authorUrl: string;
//     authorImage: string;
//     createTime: string;
// }
// // 전체 목록 
// interface MovieInfos {
//     articleList: Movie[];
//     lastPublishTime: number | string;
//     moreList: boolean;
// }
// let movie1: Movie = {
//     title: "처음부터 잘했으면 얼마나 좋니",
//     url: "https://brunch.co.kr/@@5jTv/181",
//     image: "http://t1.daumcdn.net/brunch/service/user/5jTv/image/n7xyXBI7dc49uNtoNs7qeNxiitA.jpg",
//     authorName: "J Hyun",
//     authorUrl: "https://brunch.co.kr/@@5jTv",
//     authorImage: "http://t1.daumcdn.net/brunch/service/guest/image/n8U-248ouFMq5FhHnbUuiS5BAx4.JPG",
//     createTime: "2022-12-13 07:07:55"
// }
//console.log(movie1);
// let movieInfo1: MovieInfos = {
//      articleList: [],
//      lastPublishTime: 1670551182000,
//      moreList: true
//  };
//  movieInfo1.articleList.push(movie1);
//  console.log(movieInfo1);
// //17.Promise - 회원가입 promise 예제를 typesript로 변경(함수형 매개변수)
// interface User {
//     name:string;
//     email:string;
// }
// const DB : User[] = [];
// function saveDB(user: User): Promise<User> {   //generics
//     const oldDBLength = DB.length;
//     DB.push(user);
//     console.log(`${user.name} 저장 완료되었습니다.`);
//     return new Promise((resolve, reject) => {
//         if (DB.length > oldDBLength) {
//             resolve(user);
//         } else {
//             reject(new Error('저장에 실패했습니다.!'));
//         }
//     });
// }
// function sendEmail(user: User): Promise<User> {
//     console.log(`${user.email}으로 이메일을 발송했습니다.`);
//     return new Promise((resolve) => {
//         resolve(user);
//     });
// }
// function getResult(user: User): Promise<string> {
//     return new Promise((resolve) => {
//        resolve(`${user.name}님 등록 성공했습니다.`); 
//     });
// }
// function registerByPromise(user: User): Promise<string|Error> {
//     const result = saveDB(user).then(sendEmail).then(getResult)
//                                .catch((error) => new Error(error));
//     return result;
// }
// const myUser : User = { name: '손흥민', email: 'son@naver.com' };
// const result : Promise<string|Error> = registerByPromise(myUser);
// result.then(console.log);
// //18. 타입별칭
// type PersonName = string;
// let name: string = '신호탄';
// let name1: PersonName = '국기봉';
// function printAge(num: string|number) {
//     console.log(num);
// }
// type Age = string|number;
// function printAge1(num: Age) {
//     console.log(num);
// }
// printAge(10);
// printAge('20');
// //19. Person 타입별칭 만들어보기 
// type Person = {
//     name:string;
//     email:string;
// }
// let person: Person = {name: '신호탄', email: 'aaa@google.com'};
