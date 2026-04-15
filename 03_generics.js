// //1.제네릭 (일반타입)
// function getNumber(value: number): number {
//     return value;
// }
// function getString(value: string): string {
//     return value;
// }
// function getSimple<T>(value: T): T {
//     return value;
// }
// const result = getSimple<number>(1);
// console.log(result);
// const result1 = getSimple<string>('손흥민');
// console.log(result1);
// const result2 = getSimple(true);
// console.log(result2);
// //const result3 = getSimple<number>('20');
// //console.log(result3);
// function getBoolean(bool: boolean) {
//     return bool;
// }
// function getArray(arr: string[]) {
//     return arr;
// }
// function getArrayT(arr: Array<string>){
//     return arr;
// }
// function getObject(obj: {name: string}) {
//     return obj;
// }
// function getValue<T>(value: T): T {
//     return value;
// }
// console.log(getValue(true));
// console.log(getValue<string[]>(['1','2']));
// console.log(getValue({name: '손흥민'}));
// console.log(getValue(new Array('손흥민')));
// //2.제네릭 - interface 
// interface Box<T, U> {
//     value: T;
//     width: U;
// }
// const numberBox: Box<number, string> = {
//     value: 10,
//     width: 'hello'
// }
// const stringBox: Box<string, number> = {
//     value: 'hello',
//     width: 20
// }
// console.log(numberBox);
// console.log(stringBox);
// interface ApiResponse<T> {
//     data: T;
//     status: number;
// }
// const res: ApiResponse<string> = {
//     data: 'success',
//     status: 200
// }
// interface List<T> {
//     items: T[];
// }
// //2.제네릭 - Type제한
// //length 속성이 있는 타입만 허용
// function printLength<T extends {length: number}>(value:T) {
//     console.log(value, ":", value.length);
// }
// printLength('hello');
// printLength([1,2,3]);
// printLength({length: 3, name:'RM'});
// printLength(123);       //오류발생
// printLength('123');  
// //특정 타입만 허용
// function logValue<T extends string | number>(value: T) {
//     console.log(value);
// }
// logValue('hi');
// logValue(10);
// logValue(true); //에러발생
// interface Person {
//     name: string;
//     age?: number;
// }
// function printName<T extends Person>(obj: T) {
//     console.log(obj.name);
// }
// printName({ name: '손흥민'});
// printName({ name: '손흥민', age: 30});
// printName({ age: 30});  //에러발생
//키제한
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: '손흥민', age: 30 };
console.log(getProperty(user, 'name'));
console.log(getProperty(user, 'age'));
getProperty(user, 'job'); //에러발생
export {};
