#! bin/usr/dev node


//   data types:
// "rabia":  //string
// 12 : //number
// false : //boolean


// ARRAY:    [ ]  always separate your elements in array by giving
//  ,
//  object : {} inside the brackets there will be key and value
// 
// 
import { AnyARecord } from "dns";
import inquirer from "inquirer"

const currency :any ={
    USD :1, //BASE CURRENCY
    EUR :0.91,
    GBP :0.76,
    INR :74.57,
    PKR :200
}


let user_answer = await inquirer.prompt([
    {
    name:"from",
    message:"Enter From Currency",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR"]

    },
 {
 name:"to",
 message:"Enter From Currency",
 type:"list",
 choices:["USD","EUR","GBP","INR","PKR"]
 },
{
    name:"amount",
    message:"Enter From amount",
    type:"number"
}

]
)


let fromamount = currency[user_answer.from]
let toamount  = currency [user_answer.to]
let amount = user_answer.amount
let baseamount =amount/fromamount //usd base currency
let convertedamount= baseamount * toamount
                 

console.log(convertedamount);