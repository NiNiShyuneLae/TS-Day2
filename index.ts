//Using Array
// const arr : string[] = ['banana','apple']
// arr.push('mango')
// console.log(arr)

//Combining with Union aka | in Array
// //note if you put readonly type you can't mutate
// const arr: readonly (string | number)[] = ["nan", 1];
// console.log(arr);

//Blend type with array
// type Person = {
//     name : string,
//     gender : "male" | 'female'
// }
// const arr : Person[] = [
//     {
//         name:'Heather',
//         gender : 'female'
//     },
//     {
//         name:'NiNi',
//         gender:'female'
//     }
// ]
// console.log(arr[1].name)

//tuple
// const arr :readonly [string,number,boolean] = [
//     'hello',1,false
// ]
// console.log(arr)

//any
// const arr : any[] = [
//     'hello',1,false
// ]
// arr.shift()
// console.log(arr)

// const obj : any = {name:'heather'}
// console.log(obj.name)

//void
// const printer = ():void => {
//     console.log('first')
//     return;
// }
// console.log(printer())

//never
// const printer = ():never => {
//     throw new Error ('Hello')
//     console.log("first")
// }
// console.log(printer())

//enum
// enum Gender {
//   male = 2,
//   female,
// }

// type Person = {
//   name: string;
//   gender: Gender;
// };

// const Info: Person = {
//   name: "Heather",
//   gender: Gender.male,
// };

// if(Info.gender === Gender.male){
//     console.log('okay')
// }


// let arr : number [] | string;
// arr = 'Hello'
// arr = [1,2,3]
// console.log(arr)


//unknown && casting
// const x : unknown = 'hello'
// console.log((x as string).length)

//function
// const sum = (x:number,y:number):number => {
//     return x+y
// }
// let calc : Function = sum
//the outcome is hello1 and it deflects the intention
// console.log(calc('hello',1))

//use function and aliases
// type funn = (x:number,y:number) => void
// const sum = (x:number,y:number):number => {
//     return x+y
// } 

// const calc : funn = sum
// console.log(calc('Hello',1))