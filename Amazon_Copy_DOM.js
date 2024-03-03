const signinbox = document.querySelector(".signinbox");
const cartbox = document.querySelector(".cartitems");

const signin = document.querySelector("#signin");
const cart = document.querySelector("#cart");

signin.addEventListener('click', (e) => {
    cartbox.classList.add("invisible");
    signinbox.classList.remove("invisible");
    searchBox.classList.add("invisible");
    e.stopPropagation();
})

signinbox.addEventListener("click", (e) => {
    e.stopPropagation();
})

document.body.addEventListener("click", () => {
    signinbox.classList.add("invisible");
    cartbox.classList.add("invisible");
    searchBox.classList.add("invisible");
})


cart.addEventListener('click', (e) => {
    signinbox.classList.add("invisible");
    cartbox.classList.remove("invisible");
    searchBox.classList.add("invisible");
    e.stopPropagation();
})

cartbox.addEventListener("click", (e) => {
    e.stopPropagation();
})

// signinbox button fnctionality
const signinform = document.querySelector(".signinbox form");

signinform.addEventListener("submit", (e) => {
    signinbox.innerHTML = "<i><h2 style='background-color : #ffc300; border-radius:10px;'>Logged In </h2></i>";
    e.preventDefault();
    e.stopPropagation();
})

const h2 = document.querySelector(".cartitems h2");
for (let i = 1; i <= 8; i++) {
    const addCart = document.querySelector(`#i${i} button`);
    const img = document.querySelector(`#i${i} img`);

    addCart.addEventListener("click", (v) => {
        if (cartbox.contains(h2)) {
            h2.remove();
        }

        const newImg = document.createElement("img");
        newImg.src = img.src;
        newImg.style.width = "90%";
        newImg.style.height = "10%";

        const rem = document.createElement("button");
        rem.innerText = "Remove from cart"
        rem.style.backgroundColor = "#ffc300";
        rem.style.borderRadius = "10px";
        rem.style.margin = "1em 0";
        cartbox.append(newImg);
        cartbox.append(rem);
        rem.addEventListener("click", (e) => {
            newImg.remove();
            rem.remove();
            if (cartbox.childElementCount === 0) {
                cartbox.append(h2);
            }
            e.stopPropagation();
        })
        v.stopPropagation();
    })
}

const searchBox = document.querySelector(".search");
const per_string = searchBox.innerText
const search = document.querySelector("#searchInp");
const searchValue = document.querySelector("#searchInp input");
search.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBox.innerText = "you searched " + searchValue.value + " but" + ", " + per_string;
    searchBox.classList.remove("invisible");
    signinbox.classList.add("invisible");
    cartbox.classList.add("invisible");
    e.stopPropagation();
})
