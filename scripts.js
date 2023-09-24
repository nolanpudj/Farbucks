//navbar style on scroll
window.addEventListener("scroll", () => {
    if(this.scrollY > 0){
        document.querySelector("header").style.backgroundColor = "white"
        document.querySelector("header").style.boxShadow = "#5e5e5e 0px 0px 10px"
        document.querySelector("header").classList = ""
    }else{
        document.querySelector("header").style.backgroundColor = "#00000000"
        document.querySelector("header").style.boxShadow = "none"
        document.querySelector("header").classList = "headfoot-clear"
    }
}, false)

//Burger Navbar
let burger = document.getElementById("burger")
let navbar = document.getElementById("navbar")
let navbarHidden = true

if(burger != null) burger.addEventListener("click", () => {
    console.log("hey")
    if(navbarHidden) navbar.style.display = "inline"
    if(!navbarHidden) navbar.style.display = "none"
    navbarHidden = !navbarHidden
})

//onresize
window.addEventListener("resize", () => {
    let phoneSize = window.matchMedia("(max-width: 550px)").matches
    if(!phoneSize) navbar.style.display = "inline"
    if(navbarHidden && phoneSize) navbar.style.display = "none"
})

//Validation (Register Page)
regForm = document.getElementById("regForm")
if(regForm != null) regForm.onsubmit = () => {return validate()}

function validate(){
    if(!validateName()) return false;
    if(!validateEmail()) return false;
    if(!validatePassword()) return false;
    if(!validateAddress()) return false;
    if(!validateGender()) return false;
    if(!validateAgreement()) return false;
    alert("Registered!!")
    return true
}

function validateName(){
    let name = document.forms["regForm"]["name"].value
    if (name == ""){
        return invalidInputAlert("name", "Please fill your name")
    }else if (name.length <= 2){
        return invalidInputAlert("name", "Your name is too short!")
    }
    document.getElementById("name").style.backgroundColor = "white"
    return true
}

function validateEmail(){ //x@x.x
    let email = document.forms["regForm"]["email"].value
    let adSym = email.indexOf("@");
    if (email == ""){ //is empty
        return invalidInputAlert("email", "Please fill the email")
    }else if ( adSym == -1 || adSym == 0 || email.startsWith(".")){ // "@" at begining or does not exist, "." at begining
        return invalidInputAlert("email", "Email format is invalid")
    }else if (email.substring(adSym+1) == "" || email.substring(adSym+1).indexOf("@") != -1){ //"@" at end or exist multiple
        return invalidInputAlert("email", "Email format is invalid")
    }
    document.getElementById("email").style.backgroundColor = "white"
    return true
}

function validatePassword(){
    let password = document.forms["regForm"]["password"].value
    if (password.length < 8){
        return invalidInputAlert("password", "Password at least contain 8 character")
    }
    let upperCase = false
    let number = false
    for(let i=0; i<password.length; i++){
        let asc = password.charCodeAt(i);
        if (asc >= 48 && asc <= 57){
            number = true
        }
        else if (asc >= 65 && asc <= 90){
            upperCase = true
        }
    }
    if (!upperCase || !number){
        return invalidInputAlert("password", "Password must contain capital letter and number")
    }
    document.getElementById("password").style.backgroundColor = "white"
    return true
}

function validateAddress(){
    let address = document.forms["regForm"]["address"].value
    if (address == ""){
        return invalidInputAlert("address", "Please fill your address")
    }
    else if (address.length <= 5){
        return invalidInputAlert("address", "Your Address is too short (<= 5 character)")
    }
    document.getElementById("address").style.backgroundColor = "white"
    return true
}

function validateGender(){
    let gender = document.querySelectorAll("input[name='gender']")
    if(gender[0].checked || gender[1].checked) return true;
    return invalidInputAlert(null, "Please select your gender!")
}

function validateAgreement(){
    if(!document.forms["regForm"]["agreement"].checked){
        return invalidInputAlert(null, "Make sure you agree to the terms and conditions!")
    }
    return true
}

function invalidInputAlert(id, message){
    if(id != null) document.getElementById(id).style.backgroundColor = "#ffe0ee"
    alert(message)
    return false
}


//See More (Coffee Page)
let toggleSeeMore = true;
let beverages = document.getElementById("beverages")
let seeMore = document.getElementById("see-more")
if(beverages != null) var coffee = beverages.innerHTML;

if(seeMore != null) seeMore.addEventListener("click", () => {
    if(toggleSeeMore){
        document.getElementById("beverages").innerHTML = coffee + 
        `<div class="coffee-item">
            <img src="Assets/coffee_7.png"/>
            <div class="coffee-info">
                <div class="coffee-name-price">
                    <h2>Black Roast</h2>
                    <h5>Rp 69K</h5>
                </div>
                <h4>Roasted black coffee bean served with hot water</h4>
            </div>
        </div>
        <div class="coffee-item">
            <img src="Assets/coffee_8.png"/>
            <div class="coffee-info">
                <div class="coffee-name-price">
                    <h2>Coffee Float</h2>
                    <h5>Rp 69K</h5>
                </div>
                <h4>The best refreshment for the hottest day</h4>
            </div>
        </div>
        <div class="coffee-item">
            <img src="Assets/coffee_9.png"/>
            <div class="coffee-info">
                <div class="coffee-name-price">
                    <h2>Luwak Coffee</h2>
                    <h5>Rp 69K</h5>
                </div>
                <h4>Premium fermented coffee bean</h4>
            </div>
        </div>`;
        document.getElementById("see-more").innerHTML = "Show Less"
    } else{
        document.getElementById("beverages").innerHTML = coffee
        document.getElementById("see-more").innerHTML = "Show More"
    }
    
    
    toggleSeeMore = !toggleSeeMore;
});