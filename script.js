let url= "https://www.random.org/integers/?num=1&min=10000&max=99999&col=1&base=10&format=plain&rnd=new"; 
let btn1= document.querySelector(".btn-info")
let btn2= document.querySelector(".btn-success")
let input=document.querySelector(".form-control")
function getData(){
    fetch(url).then((data)=>{
        data.text().then((dataVal)=>{
            currentOTP= dataVal.trim(); 
            console.log(currentOTP)
            alert(`Your OTP is ${currentOTP}`);  
        })
    })
}
btn1.addEventListener("click",()=>{
    getData(); 
})
btn2.addEventListener("click",()=>{
    if(input.value==currentOTP){
        alert("Your OTP is Correct!")
    }
    else{
        alert("Wrong OTP, Try Again!")
    }
})
