// function makeUser() {
//     return {
//         name: "John",
//         age: 20,
//         ref(){
//             return this;
//             }
//     };
// }
//
// let user = makeUser();
//
// console.log( user.ref().age);


// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert( this.step );
//         return this;
//     }
// };
//
// ladder.up().up().down().showStep().down().showStep();