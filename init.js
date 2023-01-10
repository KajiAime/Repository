const PORT = 8080;
console.log('http://localhost:%s',PORT);
function loginFunc(logger){
    info = JSON.parse(data);
    if((info[logger].username == document.getElementById("username").value)){
        if((info[logger].password == document.getElementById("password").value)){
            location.replace('./homePage.htm');
        }
        else{
            alert("Login failed. Check the password.");
        }
    }
    else{
        alert("Login failed.");
    }
}
async function getData(){
    let dat = await fetch('./base.json');
    let json = await dat.json();
    for(var j=0; j<json.length; j++){
        var tab = document.getElementById("balance");
        var rows = tab.insertRow(1);
        var cell1 = rows.insertCell(0);
        var cell2 = rows.insertCell(1);
        var cell3 = rows.insertCell(2);
        var cell4 = rows.insertCell(3);
        var cell5 = rows.insertCell(4);
        cell1.innerHTML = json[j].Date;
        cell2.innerHTML = json[j].Description;
        cell3.innerHTML = parseInt(json[j].Income);
        cell4.innerHTML = parseInt(json[j].Expenses);
        cell5.innerHTML = parseInt(json[j].Balance);
    }
    console.log(json); 
}
function addToTable(){
    // var fs = require("fs");
    // fs.readFile("./base.json", "utf8", (err, base) => {
    //     if(err){
    //         console.log("Error: Unable to read file: ", err);
    //         return;
    //     } 
    //     console.log("Data: ", base);
    //     try{
    //         var customer = JSON.parse(base);
    //         console.log(customer[0].Date);
    //     }
    //     catch(err){
    //         console.log("JSON Parse Error:", err);
    //     }
    // });

    var table = document.getElementById("balance");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = document.getElementById("date").value;
    cell2.innerHTML = document.getElementById("desc").value;
    cell3.innerHTML = document.getElementById("income").value;
    cell4.innerHTML = document.getElementById("expenses").value;
    cell5.innerHTML = parseInt(document.getElementById("balance").rows[2].cells[4].innerHTML) + parseInt(cell3.innerHTML) - cell4.innerHTML;
    var obj = {
        Date: cell1.innerHTML,
        Description: cell2.innerHTML,
        Income: cell3.innerHTML,
        Expenses: parseInt(cell4.innerHTML),
        Balance: parseInt(cell5.innerHTML)
    };
    json.push(obj);
    console.log(JSON.stringify(json));
    return 0;
}
addToTable();
