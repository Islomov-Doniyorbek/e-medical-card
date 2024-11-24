let loginBtn, doctor, head, bemor;
bemor = document.querySelector(".forBemor")
doctor = document.querySelector(".forDoctor")
head = document.querySelector(".forHead")
function login() {
    

    
    
    
    loginBtn = document.querySelector(".loginBtn")
    
    loginBtn.addEventListener("click", () => {
        let form = document.querySelector(".form")
        let loginPhone = prompt("Telefon raqamingizni kiriting: ");
        let loginPassword = prompt("Parol: ");
        if (loginPhone === "+998995959595" && loginPassword === "stomatolog001") {
            alert("Xush kelibsiz!");
            doctor.style.display = "flex"
            head.style.display = "none"
            bemor.style.display = "none";
            let doc = {
                fish: "Nematova Farida Kahharovna",
                kasbi: "Stomatolog"
            }
            let info = JSON.parse(localStorage.getItem("doktor"));
            info = doc;
            localStorage.setItem("doktor", JSON.stringify(info));
        } else {
            let info = JSON.parse(localStorage.getItem("info"));
            info.forEach(element => {
                if (element.phone == loginPhone) {
                    alert(`Xush kelibsiz ${element.ism}`)
                    doctor.style.display = "none"
                    head.style.display = "none"
                    bemor.style.display = "flex"
                }
            
            });
        }
        form.style.display = "none"
        loginBtn.style.display = "none"
        
    })
}
login()
function registration() {
    let ism, fam, address, phone, password, form__btn;
    let form = document.querySelector(".form")
    loginBtn = document.querySelector(".loginBtn")
    
    form__btn = document.querySelector(".form__btn");
    
    
    form__btn.addEventListener("click", () => {
        form.style.display = "none"
        loginBtn.style.display = "none"
        ism = document.querySelector("#ism").value;
        fam = document.querySelector("#fam").value;
        address = document.querySelector("#address").value;
        phone = document.querySelector("#phone").value;
        password = document.querySelector("#password").value;
        let obj = 
            {ism: ism, fam: fam, address: address, phone: phone, password: password}
        
        let info = JSON.parse(localStorage.getItem("info")) || [];
        info.push(obj);
        localStorage.setItem("info", JSON.stringify(info));
        info.forEach(element => {
            if (element.phone != phone) {
                alert("Ro'yxatdan o'tdingiz!")
                doctor.style.display = "none"
                head.style.display = "none"
                bemor.style.display = "flex"
            } 
        });
    })

}
registration()
// localStorage.clear()