// //examples
// const tsFuncSum = (arr: number[]) => arr.reduce((a, b) => a + b)
// tsFuncSum([1, 2, 3, 4])
//
// //________________________________
// interface myObjInterface {
//     readonly name: string,
//     age: number,
//     gender: string,
//     jsMaster?: boolean
// }
//
// const obj: myObjInterface = {
//     name: 'name',
//     age: 30,
//     gender: 'male',
// }
//
// //________________________________
// enum Methods {
//     add,
//     sub
// }
//
// function calculate(method: Methods, first: number, second: number): number {
//     switch (method) {
//         case Methods.add:
//             return first + second;
//         case Methods.sub:
//             return first - second
//     }
// }
//
// //________________________________
// type TypeFn = () => void;
// const ArrowFunc: TypeFn = () => console.log('return nothing')
//
// //________________________________
// interface myArrInterface<T> {
//     [n: number]: T;
//
//     map<U>(fn: (el: T) => U): U[]
// }
//
// const myArr: myArrInterface<number> = [1, 2, 3, 4]
// myArr.map((el) => `${el}+1`)
//
// //________________________________
// function getLength<T extends Array<any>>(arr: T): number {
//     return arr.length;
// }
//
// getLength(['12', 2, 3])
