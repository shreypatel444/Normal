
let a = document.querySelector("#fact")

const FnApi = async () =>{

    const num = prompt("Enter number...");

    const respone = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respone.json();
    console.log(data[num].email);
    document.write(a.innerText = data[num].id);
}

FnApi();