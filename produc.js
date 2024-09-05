let iconcart = document.querySelector('.iconcart');
let closecart = document.querySelector('.cls');
let body = document.querySelector('body');
let ListProduc = document.querySelector('.listproduct');
let Listcarthtml = document.querySelector('.listcart');
let iconspncarthtml = document.querySelector('.iconcart span');

let listproduct = [];
let carts = [];

iconcart.addEventListener('click', () => {
    body.classList.toggle('showcart');
});

closecart.addEventListener('click', () => {
    body.classList.toggle('showcart');
});

const adddatahtml = () => {
    ListProduc.innerHTML = '';
    if (listproduct.length > 0) {
        listproduct.forEach(product => {
            let newpr = document.createElement('div');
            newpr.classList.add('item');
            newpr.dataset.id = product.id;
            newpr.innerHTML = `<img src="${product.image}" alt="${product.name}">
                               <h2>${product.name}</h2>
                               <div class="pricee">${product.price}</div>
                               <button class="addCart">Add To Cart</button>`;
            ListProduc.appendChild(newpr);
        });
    }
};

ListProduc.addEventListener('click', (event) => {
    let posclick = event.target;
    if (posclick.classList.contains('addCart')) {
        let prodid = posclick.parentElement.dataset.id;
        addtcrt(prodid);
    }
});

const addtcrt = (prodid) => {
    let findind = carts.findIndex((value) => value.product_id == prodid);
    if (findind < 0) {
        carts.push({
            product_id: prodid,
            quantity: 1
        });
    } else {
        carts[findind].quantity += 1;
    }
    addcarttoHTML();
    console.log(carts);
};

const addcarttoHTML = () => {
    Listcarthtml.innerHTML = '';
    let totalquan =  0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalquan = totalquan + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            let pspd = listproduct.findIndex((value) => value.id == cart.product_id);
            let info = listproduct[pspd];
            newCart.innerHTML = `<div class="imgg">
                                    <img src="${info.image}" alt="${info.name}">
                                </div>
                                <div class="namee">${info.name}</div>
                                <div class="totalprice">${info.price * cart.quantity}</div>
                                <div class="quant">
                                    <span class="minus"></span>
                                    <span>${cart.quantity}</span>
                                    <span class="plus"></span>
                                </div>`;
            Listcarthtml.appendChild(newCart);
        });
    }
    iconspncarthtml.innerHTML = totalquan ;
};

const initApp = () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            listproduct = data;
            console.log(listproduct);
            adddatahtml();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};

initApp();
