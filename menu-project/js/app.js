const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "img/pic-1.jpg",
        desc: "Nihil laboriosam nulla recusandae officia voluptates tempora, alias voluptatibus omnis necessitatibus ea!"
    },
    {
        id: 2,
        title: "dinner double",
        category: "dinner",
        price: 15.56,
        img: "img/pic-2.jpg",
        desc: "Nihil l voluptatibus omnis necessitatibus ea! aboriosam nulla recusandae officia voluptates tempora, alia"
    },
    {
        id: 3,
        title: "Oat meal",
        category: "breakfast",
        price: 15.90,
        img: "img/pic-2.jpg",
        desc: "Nihil ea  laboriosam nulla recusandae officia voluptates tempora, alias voluptatibus omnis necessitatibus!"
    },
    {
        id: 4,
        title: "Spaghetti",
        category: "lunch",
        price: 89.32,
        img: "img/pic-1.jpg",
        desc: "alias voluptatibus  Nihil laboriosam nulla recusandae officia voluptates tempora, omnis necessitatibus ea!"
    },
    {
        id: 5,
        title: "Nigerian jellof",
        category: "dinner",
        price: 1.99,
        img: "img/pic-2.jpg",
        desc: " nulla recusandae officia voluptates tempora, alias Nihil laboriosamvoluptatibus omnis necessitatibus ea!"
    },
    {
        id: 6,
        title: "battter",
        category: "dinner",
        price: 45.39,
        img: "img/pic-1.jpg",
        desc: "Nihil laboriosam nulla recusandae officia voluptates tempora, alias voluptatibus omnis necessitatibus ea!"
    },
    {
        id: 6,
        title: "shake shake",
        category: "shake",
        price: 5.39,
        img: "img/pic-2.jpg",
        desc: "Nihil laboriosam nulla recusandae officia voluptates tempora, alias voluptatibus omnis necessitatibus ea!"
    },
]

const menuLayer =  document.querySelector('.section-center');

const btnContainer = document.querySelector('.btn-container');



// load item
window.addEventListener('DOMContentLoaded', () => { displayMenuItems(menu);
displayMenuButtons()
    
})

// display buttons
function displayMenuButtons() {
    //geting unique categories
    const categories = menu.reduce((values, item) => {
        // if returned array does not contain item category psuh into array
        if(!values.includes(item.category))
            values.push(item.category)
        return values
    }, ['all'])
    // console.log(categories)

    const categoryBtns = categories.map((category) => {
        return `
        <button class="filter-btn" type="button" data-id="${category}">${category}</button>

        `
    }).join("");
    btnContainer.innerHTML = categoryBtns
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterButtons(filterBtns);
}

//filter btns
function filterButtons(menuButtons) {
    menuButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            // dataset 
           const category = e.currentTarget.dataset.id
           const menuCategory = menu.filter((menuItem) => {
            //    console.log(menuItem.category)
               if(menuItem.category === category) {
                console.log(category)
                return menuItem
               }
           })
           if(category === 'all') {
            displayMenuItems(menu);
            
           } else {
               displayMenuItems(menuCategory)
           }
        //    console.log(menuCategory)
        })
    })
}


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        // console.log(item);
        return `
        <article class="menu-item">
            <div class="image-box">
                <img src="${item.img}" class="photo" alt="${item.price}">
            </div>
            <div class="product-info">
                <div class="prod-heading">
                    <p>${item.title}</p>
                    <p>N ${item.price}</p>
                </div>
                <div class="prod-text">
                    <p>${item.desc}</p>
                </div>
            </div>
        </article>
        `
    })
    displayMenu = displayMenu.join("")
    menuLayer.innerHTML = displayMenu
}

