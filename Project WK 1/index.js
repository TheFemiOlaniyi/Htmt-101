const usersDatabase = {
    "adewale199" : {
        firstname: "adewale",
        lastname: "ogundele",
        email:"adewaleogun@gmail.com",
        accountActivated: true,
        password: "adewale7899"
    },

    "Funmi920" : {
        firstname: "Funmilayo",
        lastname: "Bathesheba",
        email:"funmilayo@gmail.com",
        accountActivated: false,
        password: "blackberry"
    },

    "Muturu" : {
        firstname: "Muturu",
        lastname: "Boko",
        email:"bokoyoko@gmail.com",
        accountActivated: true,
        password: "bokolawal"
    },
}


function displayuserdetails(){

     let username = prompt('Enter Your Username')
//console.log(validateusername(username))

while (validateusername(username)== false){
   
    username = prompt('Invalid! Please Enter Your a valid Username')
}

 if(username==null){
    return
    }

console.log("username" , username)

let password = prompt ('Enter Your Password')
//console.log(validatepassword(password))

while (validatepassword(password)== false){
    password = prompt ('Password not Valid. Please Try Again')
}

if(password==null){
    return
}

//confirm password
let passwordconfirm = prompt ('Confirm your password')
while (passwordconfirm !== password){
    passwordconfirm = prompt ('Password Incorrect. Confirm your password again!')
}
if(password==null){
    return
}


//Confirm username
const user = usersDatabase [username]
if (user==undefined){
    alert("user not found! Please try again or Register on the app")
    return
}
console.log(user)
alert(`
User found with the following details
first name: ${user.firstname}
Last name: ${user.lastname}
email name: ${user.email}
Account status: ${user.accountActivated}

`)
//console.log(username, password, passwordconfirm)



}


displayuserdetails()
alert("Thank you! User name and password valid")
alert("You have come to the end of this program")



function validateusername (username){
    if (username == null){
        return true
    }
    if (username.length > 10){
        return false
    }
    else{
        return true
    }
    
}

function validatepassword (password){
    if (password == null){
        return true
    }
    if (password.length < 6){
        return false
    }
    else{
        return true
    }
}



