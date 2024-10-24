// //// .pop() / .unshift(....) / .push(...) / .shift() / .length / .indexOf(...) /.includes(....) / ... 


// // const years = [1900 , 1990 , 2000 , 2002]
// // console.log(years)

// // console.log(years.indexOf(2000))

// // const peoples = ["steven" , "15" , "peter"]

// // "===" , "=="
// // console.log(peoples.includes("15"))


// // if(peoples.includes("steven")){ //// true or false
// //     console.log("steven is in the list")
// // }
// // else {
// //     console.log("steven is not in the list")
// // }



// ////// challange correction : 
// ///1
// // function calcTip(bill){    //// function declaration 
// //   if (bill>=50 && bill<=300) {
// //     return bill*0.15
// //   } else {
// //     return bill*0.20
// //   }
// // }


// // const calcTip1 = function (bill){    //// function expression 
// //     if (bill>=50 && bill<=300) {
// //       return bill*0.15
// //     } else {
// //       return bill*0.20
// //     }
// //   }



// //   const calcTip2 = bill => {     ///// arrow function 
// //     if (bill>=50 && bill<=300) {
// //         return bill*0.15
// //       } else {
// //         return bill*0.20
// //       }
// //   }

// //   console.log(calcTip(100))
// //   console.log(calcTip1(100))
// //   console.log(calcTip2(100))

// ///2 

// // const bills =[125,555,44]

// // console.log(bills)

// //// 3 


// // const tips = [calcTip(bills[0]) , calcTip(bills[1]) ,calcTip(bills[bills.length-1])  ]

// // console.log(tips)


// // const total =  [bills[0]+tips[0], bills[1]+tips[1] ,bills[2]+tips[2] ]

// // console.log(total)



// /////// object ///////////// : 

// // const info = ["peter" , 15 , "teacher"]
// // console.log(info[1])

// // const freinds = ["Michael" , "Peter" , "Steven"]


// // const Michaelinfo = {   //// key/properetie : value
    
// //  firstName : "Michael" ,
// //  lastName : "Jackson",
// //  age : 25 ,
// //  job : "singer" , 
// //  hobbies : ["singing" , "dancing" , "acting"]

// // }

// // console.log(Michaelinfo)   
// //// dot notation (object.key)  ?,,,,,,,,,,,,,,,,,,,  ::

// // console.log(Michaelinfo.firstname)
// // console.log(Michaelinfo.age)
// // console.log(Michaelinfo.hobbies[1])




// ///  bracket notaion ?,,,,,,,,,,,,,,,,,,,,,  ::


// // console.log(Michaelinfo["age"]) //// bracket notation  
// // console.log(Michaelinfo.age)  //// dot notation 

// // const namekey = "Name"

// // console.log(Michaelinfo[" firstName"]) //// bracket notation  

// // console.log(Michaelinfo["last"+namekey])
// // console.log(Michaelinfo.lastName)

// // const Michaelinfo = {   //// key/property : value
    
// //  firstName : "Michael" ,
// //  lastName : "Jackson",
// //  age : 25 ,
// //  job : "singer" , 
// //  hobbies : ["singing" , "dancing" , "acting"]

// // }

// // const intrestedIn = prompt("what do you want to khnow about Michael ? choose between firstName , lastName , age , job and hobbies")


// // console.log(intrestedIn)


// // console.log(Michaelinfo[intrestedIn])
// // // firstName

// // if (Michaelinfo[intrestedIn]){
// //     console.log(Michaelinfo[intrestedIn])
// // }
// // else {
// //     console.log("sorry we dont have that info")
// // }


const Michaelinfo = {   //// key/property : value
    
 firstName : "Michael" ,
 lastName : "Jackson",
 age : 25 ,
 job : "singer" , 
 hobbies : ["singing" , "dancing" , "acting"] , 
 freinds : ["peter" , "max" , "steven" , "barkley"]

}

// console.log(Michaelinfo.firstName)
// console.log(Michaelinfo["lastName"])

// Michaelinfo.location = "america"  //// add with dot(.) notaion
// Michaelinfo["twitter"] = "@michael"  /// add with bracket notation

// console.log(Michaelinfo)

// //// -Michael- has -3- hobbies  and  has -4- freinds and his best freind is called -barkley- .... 











