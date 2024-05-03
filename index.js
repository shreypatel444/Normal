const URL = "https://www.upwork.com/gds";

var num=prompt("Write a number between 1 to 5.");

const factPara = document.querySelector("#fact");

const btn = document.querySelector("#btn");

const getFacts = async () => {

    console.log("getting data .....");

    let response = await fetch(URL); 
    console.log(response);

    let data = await response.json();
    if(0<=num && num<5){
    factPara.innerText = data[num].text;
    }
    else{
        document.write("You enter wrong value!");
    }
};

btn.addEventListener("click", getFacts);
