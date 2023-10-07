// Get the container

let container = document.querySelector('.container'),
head_title = document.querySelector('.head-title'),
tg = window.Telegram.WebApp
let card_items_person;

tg.expand()

// render function to list the category
function render(persons) {

    container.innerHTML = ""
    // We drew the category using the objects in the category
    if(persons.length > 0) {
        persons.map((item, id) =>{
            return container.innerHTML +=  `
                <div class="card" onclick="category_id(${id})">
                    <div class="card_content">
                    <img src="${item.img}"/>
                    <p class="title">${item.title}</p></div>
                </div>
                `
        })
    } else {
        console.log("err");
    }
}

render(category)


// function to capture data in category by id

function category_id(id) {

    container.innerHTML = ""
    
    let card_item = category[id].card
    card_items_person = card_item

    container.innerHTML += `
        <button class="backBtn" onclick="back()">back</button>
    ` 
    
    head_title.innerText = `
        ${category[id].title}
    `
    if(card_item.length > 0) {
        // We drew the card_item using the objects in the item
        card_item.map(item => {
            return container.innerHTML += `
            <div class="card" onclick="send_data(${item.card_id})">
                        <div class="card_content">
                            <img class="card_img" src="${item.card_img}"/>
                            <p class="title title_text">${item.first_name}</p>
                        </div>
            </div>
            `
        })

    } else {
        console.log("err");
    }
} 

// function for the back button to go back
function back() {

    container.innerHTML = ''
    head_title.innerText = "Category"

    render(category)
}

function send_data(id) {
   let card_person_id = card_items_person[id-1]

   const data = {
        title: card_person_id.first_name,
   }

   tg.sendData(JSON.stringify(data));
}