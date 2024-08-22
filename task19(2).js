

function getUserData(callback) {

    

    let name = prompt("Enter your name:");

    

    let age = prompt("Enter your age:");
    
    

    let userData = {
        name: name,
        age: age
    };
    
    

    callback(userData);
}


function displayUserData(data) {
    console.log("User Name: " + data.name);
    console.log("User Age: " + data.age);
}


getUserData(displayUserData);