
// console.log("Before five second wait.")

// setTimeout(() => {
//     console.log("after five second")
// }, 5000);


// console.log("Hellow world")


// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b ,sum){
//     setTimeout(()=>{
//         console.log("hellow how are you.")
//     },2000)
//     sum(a,b);
// }


// calculator(4,6,sum);
//################################################

const getPromise= ()=>{
    return new Promise ((reslove,reject)=>{
           console.log("Waiting")
           reject("Some error occured")
    })
}


const promise = getPromise()

promise.then((res)=>{
    console.log("Promise is "+res)
})

promise.catch((err)=>{
    console.log("Waiting for catch.."+err)
})