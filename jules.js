function submitdata(event) {

    event.preventDefault();
    let dataagree = document.querySelector("#agree").checked;
    if(dataagree){
        let fname = document.querySelector("#fname").value;
        let lname = document.querySelector("#lname").value;
        let bdate= document.querySelector("#bdate").value;
        let location = document.querySelector("#location").value;
        let sex = document.querySelector("input [name=sex]: checked").value;


        document.querySelector("#fname").innerHTML = fname + " " + lname;
        document.querySelector("#bdate").innerHTML  = bdate;
        document.querySelector("#").innerHTML = 
        document.querySelector("#gender").innerHTML = sex;

    }
}