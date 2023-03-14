function writeCards(name, event) {
    let message=[]
    for (let i = 0; i < name.length; i ++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)}
        return message;
}



function countDown(number){
    while (number >= 0){
        console.log(number);
        number --;   
     }}

let newCount = [4]
function newCountDown() { while (newCount > -1) {
    console.log(newCount--)
}}