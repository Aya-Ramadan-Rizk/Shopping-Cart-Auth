// localStorage :     كلمة معناها مكان تخزين محلي

// localStorage.setItem("username" , "mostafa")
// localStorage.setItem("password" , "123456")

// console.log(localStorage.getItem("username") , localStorage.getItem("password"))
// localStorage.removeItem("username")     // بيشيل الكي والفاليو بتاعتها بس
// localStorage.clear()                    // بيفضي كله
// ----------------------------------------



// --------------------------------------
let all_products = document.querySelector(".products")
let products =[
    {
        id : 1 ,
        title : "Harry Potter’s Robes" ,
        desc : "The wizard robes worn by Harry Potter throughout the film series." ,
        Year  : "2001",
        img : "images/صوره لروب هاري بوتر-3.jpg",
    },
    {
        id : 2 ,
        title : "Darth Vader’s Costume" ,
        desc : "The full black armor and cape worn by Darth Vader in Star Wars." ,
        Year  : "1977",
        img : "images/صوره لزي دارث  فيدر-1.jpg",
    },
    {
        id : 3 ,
        title : "Indiana Jones’s Outfit" ,
        desc : "The iconic fedora hat, leather jacket, and whip used by Indiana Jones." ,
        Year  : "1981",
        img : "images/صوره لزي إنديانا  جونز-1.jpg",
    },
    {
        id : 4 ,
        title : "Harry Potter’s Magic Wand" ,
        desc : "The magical wand used by Harry Potter for casting spells.",
        Year  : "2001",
        img : "images/صوره لعصا هاري بوتر السحريه-1.jpg",
    },
    {
        id : 5 ,
        title : "Captain America’s Shield" ,
        desc : "The iconic vibranium shield used by Captain America in Marvel films.",
        Year  : "2011",
        img : "images/صوره لدرع كابتن امريكا-1.jpg",
    },
    {
        id : 6 ,
        title : "Sherlock Holmes’s Pipe" ,
        desc : "The classic smoking pipe used by Sherlock Holmes in various adaptations.",
        Year  : "Red",
        img : "images/صوره لغليون شيرلوك هولمز-1.jpg",
    },
    {
        id : 7 ,
        title : "Iron Man’s Helmet" ,
        desc : "The red and gold helmet worn by Tony Stark in the Iron Man suit.",
        Year  : "2008",
        img : "images/صوره لخوذة الرجل الحديدي-2.webp",
    },
    {
        id : 8 ,
        title : "James Bond’s Aston Martin Model" ,
        desc : "Model of the famous Aston Martin car used by James Bond in multiple films.",
        Year  : "Various films",
        img : "images/صوره لموديل سيارة أستون مارتن لجيمس بوند-1.jpg",
    },
    {
        id : 9 ,
        title : "Thor’s Hammer (Mjolnir)" ,
        desc : "The enchanted hammer wielded by Thor in the Marvel Cinematic Universe.",
        Year  : "2011",
        img : "images/صوره لمطرقة ثور ميولنير-1.jpg",
    },
]
function drowProducts(){
    let y = products.map((item) => {
        return`
                <div class="card" style="width:14em">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <span>Year Released : ${item.Year}</span>
                        <p class="card-text">${item.desc}</p>
                        <a href="#" class="btn btn-primary add_to_cart" onclick="addToCart(${item.id})">Add To Cart</a>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <img class="card-img-bottom" src="${item.img}" alt="Card image" style="width:100%">
                </div>
            `
    })
    all_products.innerHTML = y.join("");
}
drowProducts()
///////////////////////////////////////////////////////////
// function check(){
//     if(localStorage.getItem("username")){
//         window.location = "cart-products.html"
//     }else{
//         window.location = "login.html"
//     }
// }
// /---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---/---
let view_product_div = document.querySelector(".veiw-product div")
let badge = document.querySelector(".badge")
// let added_item = [];
let added_item = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];
if(added_item){
    added_item.map(item => {
        view_product_div.innerHTML += `<p>${item.title}</p>`
    })
    badge.style.display = "block"
    badge.innerHTML = added_item.length
}

function addToCart(id){
    let choose_item = products.find((item) => item.id === id)
    view_product_div.innerHTML += `<p>${choose_item.title}</p>`

    added_item = [...added_item , choose_item]
    localStorage.setItem("productInCart" , JSON.stringify(added_item))

    let view_product_div_p = document.querySelectorAll(".veiw-product div p")
    // console.log(view_product_div_p.length)
    badge.innerHTML = view_product_div_p.length
    badge.style.display = "block"

    veiw_product.style.display = "block"
}
let cart = document.querySelector(".cart")
let veiw_product = document.querySelector(".veiw-product")
cart.addEventListener("click" , () =>{
    if(veiw_product.innerHTML != ""){
        if(veiw_product.style.display == "block"){
            veiw_product.style.display = "none"
        }else{
            veiw_product.style.display = "block"
        }
    }
})

// -------------------------------------
let inputsearch = document.getElementById("search");
let notfound = document.getElementById("notfound");
// ------------------------   input البحث   s   ------------------------
inputsearch.addEventListener("input", () => {
    let inputvalue = inputsearch.value.toLocaleLowerCase();
    let productfiltr = products.filter((item) => {
    return item.title.toLocaleLowerCase().includes(inputvalue);
    });
    all_products.innerHTML = "";
    productfiltr.forEach((item) => {
       all_products.innerHTML +=   `
                                        <div class="card" style="width:300px">
                                            <div class="card-body">
                                                <h4 class="card-title">${item.title}</h4>
                                                <span>Year Released : ${item.Year}</span>
                                                <p class="card-text">${item.desc}</p>
                                                <a href="#" class="btn btn-primary add_to_cart" onclick="addToCart(${item.id})">Add To Cart</a>
                                                <i class="fa-solid fa-heart"></i>
                                            </div>
                                            <img class="card-img-bottom" src="${item.img}" alt="Card image" style="width:100%">
                                        </div>
                                    `
        });
    if (productfiltr.length == 0) {
        notfound.style.display = "block";
    } else {
        notfound.style.display = "none";
    }
});
// ------------------------   input البحث   e   ------------------------