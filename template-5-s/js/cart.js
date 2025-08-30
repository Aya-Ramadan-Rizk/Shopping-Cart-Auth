let all_products = document.querySelector(".products")

let get_cart = localStorage.getItem("productInCart")
if(get_cart){
    let item = JSON.parse(get_cart)
    drowProduct(item)
}
function drowProduct(products){
    let y = products.map((item ,index) => {
        return`
                <div class="card" style="width:300px">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <span>Color : ${item.color}</span>
                        <p class="card-text">${item.desc}</p>
                        <a href="#" class="btn btn-primary add_to_cart" onclick="remove(${index})">Remove From Cart</a>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <img class="card-img-bottom" src="${item.img}" alt="Card image" style="width:100%">
                </div>
            `
    })
    all_products.innerHTML = y.join("");
}

function remove(index){
    let remove_products = JSON.parse(localStorage.getItem("productInCart")) || [];
    remove_products.splice(index, 1);
    localStorage.setItem("productInCart", JSON.stringify(remove_products));
    drowProduct(remove_products);
}
