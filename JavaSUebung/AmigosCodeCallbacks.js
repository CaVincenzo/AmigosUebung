

// Callbacks
const greetUser= (username, callback) => {
    if (callback){
        console.log(callback(username));
    } else {
        console.log(username);
    }
}
const cb = (username)=> {
    // callback ist eine Funktion als Parameter in eienr Funktion
    return "Guten Abend Herr" + username;
}

greetUser(" Calamita", (username) =>{
    return "Guten Abend Herr" + username;
})

greetUser(" Calamita")