let slide = document.querySelectorAll(".slideCard");
let cards = document.querySelectorAll(".card");
let count = 0;

slide.forEach(function (slides, index) {
    slides.style.left = `${index * 100}%`
})

function myFun() {
    slide.forEach(function (curVal) {
        curVal.style.transform = `translateX(-${count * 100}%)`
    })
}

setInterval(function () {
    count++
    if (count == slide.length) {
        count = 0;
    }
    myFun();
}, 2000);

// show card details
cards.forEach(function (curCard) {
    curCard.addEventListener("click", function () {
        console.log(curCard.firstElementChild.src);

        document.querySelector(".container").style.display = "none"
        document.querySelector("nav").style.display = "flex"

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
        <img src=${curCard.firstElementChild.src} alt="">
        <div class="detailText">
            <h2>Top trending Hoodies</h2>
            <h3>30% OFF onTrends Wear</h3>
            <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
            <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
            <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
            <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p><br>
            <div class="sc" color="white">
                <h6 font-size="30px" font-weight="bold" color="black" class="ed">Select Size</h6><br>
                <div class="gf">
                    <span font-size="18px" font-weight="demi" color="grey" class="mn">XXS</span>
                    <span font-size="18px" font-weight="demi" color="grey" class="mn">XS</span>
                    <span font-size="18px" font-weight="demi" color="grey" class="mn">S</span>
                    <span font-size="18px" font-weight="demi" color="grey" class="mn">M</span>
                    <span font-size="18px" font-weight="demi" color="grey" class="mn">L</span>
                    <span font-size="18px" font-weight="demi" color="grey" class="mn">XL</span>
                    <span font-size="18px" font-weight="demi" color="grey" class="mn">XXL</span>
                    <span font-size="18px" font-weight="demi" color="grey" class="mn">XXXL</span>
                </div>
            </div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i><br/>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>

        </div>
        `
        document.querySelector("body").appendChild(div)

        // document.querySelector(".container").style.display="none";

    })
})
const menu = [
    {
        // id: 1,
        title: "Pongal with Chutney",
        category: "breakfast",
        price: 30.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMM7lfVLhDD1qtMBV9s00hPuZCEkzv3xXT2ainStaaWkj4dpiNrEU_1dvkkdj5rhvGIM&usqp=CAU",
        desc: "Pongal is a South Indian and Sri Lankan dish of rice cooked in boiling milk. Its preparation is the main custom associated with the Pongal festival. It is also eaten as a breakfast food"
    },
    {
        // id: 2,
        title: "Meals",
        category: "lunch",
        price: 99.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlkkEs6AqzQ2kF_JwhdvEaSsjzKhLhzpdJw&s",
        desc: "Bhojanam is also used to refer to an Indian-style meal made up of a selection of various dishes which are served on a platter. Bhojanam is also used in south Asia for ceremonial purposes."
    },
    {
        // id: 3,
        title: "Samosa",
        category: "snacks",
        price: 25.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA5swSrmThV69LTi3C343RrthIMpj_BB7tQ&s",
        desc: "The samosa is prepared with an all-purpose flour and stuffed with a filling, often cooked or mashed boiled potato, onions, ginger, spices and green chili. A samosa can be vegetarian or non-vegetarian."
    },
    {
        // id: 4,
        title: "Idly Chutney",
        category: "breakfast",
        price: 15.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9aDOx8v11KEADwPXiukt3IrdLvEI0-khe993s0ICUgbEtrZk0krAEBExtw&s",
        desc: "Idli is a type of steamed fluffy cake that is made of a batter of Urad Dal (black gram) and Rice. It is a very popular food in whole India and not only in India perhaps in other countries too."
    },
    {
        // id: 5
        title: "Egg dum Biryani",
        category: "lunch",
        price: 129.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-uPrB29Dsg-Vw2605Bh7Nbs9D_sPq0i8Aw&s",
        desc: "Egg dum biryani recipe – Hyderabadi egg dum biryani made with basmati rice, spice. Biryani had been loved across the globe for its unique aroma, flavor & taste."
    },
    {
        // id: 6,
        title: "Mysore Bonda",
        category: "snacks",
        price: 35.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGSN5pHQfJfsNBMUQeoDjS1ZIkZGNZ0a3zw&s",
        desc: "Mysore Bonda is made with.The taste and texture of these is good & fluffy even made with wheat Flour."
    },
    
    {
        // id: 8,
        title: "Lunch Meals",
        category: "lunch",
        price: 79.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKVyoTTgINEYESBDwrc6dJwhOaBixwyJj8A&s",
        desc: "Lunch is the meal you eat in the middle of the day. If you only have a short lunch break."
    },
    {
        // id: 9,
        title: "Bajji",
        category: "snacks",
        price: 20.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4J4uK9IglU0CmAyyCLWIskuDPIsw7H9hoUg&s",
        desc: "It is a perfect evening snack with a cup of tea or coffee, especially during monsoon or winter season. It is generally eaten as it is without any sides but tastes great with dips like green chutney, tomato sauce or schezwan chutney."
    },
    {
        // id: 10,
        title: "Chicken Curry ",
        category: "dinner",
        price: 149.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7godj3zYXFpCDNS1C68ZQ1ytIGi8TodK3pQ&s",
        desc: "Ragi Mudde are gluten-free traditional balls made with finger millet flour. Finger millet is known as ragi in South India, and mudde is a Kannada word for soft ball. Ragi mudde are nutritious, healthy and a wholesome every day food of a large rural population in Karnataka."
    },
    {
        // id: 7,
        title: "Masala Dosa",
        category: "breakfast",
        price: 89.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z8pl8IOsfUFTM6uel-T3hieeH9cx86rMKQ&s",
        desc: "Masala Dosa is one of the most popular South Indian breakfast dishes served in restaurants and tiffin centres. Dosa is a crepe made using fermented rice and lentil batter. Masala Dosa is one that is crisp, and has a potato masala or spiced potatoes stuffed in it."
    },
    {
        // id: 8,
        title: " Meals",
        category: "dinner",
        price: 79.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKVyoTTgINEYESBDwrc6dJwhOaBixwyJj8A&s",
        desc: "Lunch is the meal you eat in the middle of the day. If you only have a short lunch break."
    },

    {
        // id: 7,
        title: " chegodilu",
        category: "snacks",
        price: 20.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5Tzegr7Hrvi0D2fa-mEnwNtFO59U2nd2VUrd80iBig2TIk3tSsVW3RUVy01PtO4MAxE&usqp=CAU",
        desc: " crispy and crunchy Ring Murukku – Chegodilu, a traditional Andhra special Diwali snack/savory recipe! This is an authentic recipe Andhra Chegodilu, handmade ring murukku recipe."
    },
    {
        // id: 8,
        title: " Meals",
        category: "dinner",
        price: 79.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKVyoTTgINEYESBDwrc6dJwhOaBixwyJj8A&s",
        desc: "Lunch is the meal you eat in the middle of the day. If you only have a short lunch break."
    },

    // {
    //     id: 7,
    //     title: " chegodilu",
    //     category: "snacks",
    //     price: 20.00,
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5Tzegr7Hrvi0D2fa-mEnwNtFO59U2nd2VUrd80iBig2TIk3tSsVW3RUVy01PtO4MAxE&usqp=CAU",
    //     desc: " crispy and crunchy Ring Murukku – Chegodilu, a traditional Andhra special Diwali snack/savory recipe! This is an authentic recipe Andhra Chegodilu, handmade ring murukku recipe."
    // },
];

const sectionCenter = document.getElementById("section-center");
const btnContainer = document.getElementById("btn-container");
// Display all items when page loads
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
    let displayMenu = '';
    menuItems.forEach(item => {
        displayMenu += `
                    <div class="menu-item">
                        <img src="${item.img}" alt="${item.title}">
                        <div class="item-info">
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </div>
                        <p class="item-text">${item.desc}</p>
                    </div>`;

    });
    sectionCenter.innerHTML = displayMenu;
}

// Attach event listener to existing buttons
btnContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
        const category = e.target.dataset.id;
        let filteredMenu;
        if (category === "all") {
            filteredMenu = menu;
        } else {
            filteredMenu = menu.filter(item => item.category === category);
        }
        displayMenuItems(filteredMenu);
    }
});




