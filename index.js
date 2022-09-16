let home = document.getElementById("home")
let guest = document.getElementById("guest")
let homeCtr = 0
let guestCtr = 0

function add1(id) {
    if (id == 1){
        homeCtr++
        home.textContent = homeCtr
    }
    else {
        guestCtr++
        guest.textContent = guestCtr
    }
}

function add2(id) {
    if (id == 1){
        homeCtr+= 2
        home.textContent = homeCtr
    }
    else {
        guestCtr+= 2
        guest.textContent = guestCtr
    }
}

function add3(id) {
    if (id == 1){
        homeCtr+= 3
        home.textContent = homeCtr
    }
    else {
        guestCtr+= 3
        guest.textContent = guestCtr
    }
}