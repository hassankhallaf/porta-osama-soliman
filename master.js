
let line=document.querySelectorAll("header .container ul li a")

line.forEach(function(ele){
    ele.onclick= function(){
        line.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})



// 

// let allli= document.querySelectorAll(" header ul li")

// allli.forEach(function(ele){
//     ele.onclick= function(){
//         allli.forEach(function(ele){
//              ele.classList.remove("active")
//         })
//         this.classList.add("active")
   
//     }
    
// })  