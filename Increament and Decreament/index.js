console.log("shivam")

 let count =0;
 count = document.getElementById("count").innerText;

function increament(){
    count= count + 1 ;
    document.getElementById("count").innerText= count
}

function decreament(){
    if (count <= 0){
        count = 0
        alert(" value should be greater then 0 ")
    }else{
    count= count - 1 ;
    document.getElementById("count").innerText= count
    }
}