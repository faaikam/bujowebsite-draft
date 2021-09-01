////////// Daily Tracker //////////

let container = document.getElementById("container")
let defaultTrackerList = ["Good Sleep","Healthy Food","Enough Water","Workout","Good Mood"]
let trackerButton = document.getElementById("add-tracker-list")
let trackerList = document.getElementById("tracker-title")

createDate()
createTracker()
showCheckBox()
trackerButton.addEventListener("click",addTracker)
container.addEventListener("click",deleteTracker)

// create date column
function createDate () {
    const createCol = document.createElement("div")
    createCol.classList.add("create-col")
    container.appendChild(createCol)   

    const title = document.createElement("span")
    title.classList.add("title")
    createCol.appendChild(title)
    title.innerHTML = "Date"

    const ul = document.createElement("ul")
    ul.classList.add("ul")
    createCol.appendChild(ul)

    for (let i = 1; i <= 30; i++) {
        const li = document.createElement("li")
        li.classList.add("li")
        ul.appendChild(li)
        li.innerHTML = `${i}`
    }
}

// create stored tracker
function createTracker () {
    
    // default tracker
    for (i = 0; i < defaultTrackerList.length; i++) {
    
        const createCol = document.createElement("div")
        createCol.classList.add("create-col")
        container.appendChild(createCol)   
    
        const title = document.createElement("span")
        title.classList.add("title")
        createCol.appendChild(title)
        title.innerHTML = `${defaultTrackerList[i]}`
    
        const ul = document.createElement("ul")
        ul.classList.add("ul")
        createCol.appendChild(ul)
    
            for (let j = 1; j <= 30; j++) {
                const li = document.createElement("li")
                li.classList.add("li")
                ul.appendChild(li)
                li.innerHTML = `<input type="checkbox" id="${defaultTrackerList[i]}${j}" class="checkbox" name="daily-check" onclick=checkBox(this.id)>`
            }   
        }

    // stored additional tracker
    let storedLists
    
    if (localStorage.getItem("storedLists") === null) {
        storedLists = []
    }
    else {
        storedLists = JSON.parse(localStorage.getItem("storedLists"))
    }

    for (i = 0; i < storedLists.length; i++) {
    
    const createCol = document.createElement("div")
    createCol.classList.add("create-col")
    container.appendChild(createCol)   

    const title = document.createElement("span")
    title.classList.add("title")
    createCol.appendChild(title)
    title.innerHTML = `${storedLists[i]}`

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-tracker-button")
    createCol.appendChild(deleteButton)
    deleteButton.innerHTML = "x"

    const ul = document.createElement("ul")
    ul.classList.add("ul")
    createCol.appendChild(ul)

        for (let j = 1; j <= 30; j++) {
            const li = document.createElement("li")
            li.classList.add("li")
            ul.appendChild(li)
            li.innerHTML = `<input type="checkbox" id="${storedLists[i]}${j}" class="checkbox" name="daily-check" onclick=checkBox(this.id)>`
        }   
    }
}

// create addtional tracker
function addTracker () {
    if (trackerList.value == "") {
        alert("Please fill the title")
    }
    else {
    const createCol = document.createElement("div")
    createCol.classList.add("create-col")
    container.appendChild(createCol)   

    const title = document.createElement("span")
    title.classList.add("title")
    createCol.appendChild(title)
    title.innerHTML = `${trackerList.value}`

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-tracker-button")
    createCol.appendChild(deleteButton)
    deleteButton.innerHTML = "x"

    const ul = document.createElement("ul")
    ul.classList.add("ul")
    createCol.appendChild(ul)

        for (let j = 1; j <= 30; j++) {
            const li = document.createElement("li")
            li.classList.add("li")
            ul.appendChild(li)
            li.innerHTML = `<input type="checkbox" id="${trackerList.value}${j}" class="checkbox" name="daily-check" onclick=checkBox(this.id)>`
        }
    
    // local storage
    let storedLists
    if (localStorage.getItem("storedLists") === null) {
        storedLists = []
    }
    else {
        storedLists = JSON.parse(localStorage.getItem("storedLists"))
    }
    
    storedLists.push(trackerList.value)
    localStorage.setItem("storedLists",JSON.stringify(storedLists))
    }

    trackerList.value = ""
}

// delete tracker
function deleteTracker(e) {
    const list = e.target
    //console.log(list.classList)
    //console.log(list.parentElement)

    if (list.classList.contains("delete-tracker-button")) {
        list.parentElement.remove()
    
        let storedLists
        if (localStorage.getItem("storedLists") === null) {
            storedLists = []
        }
        else {
            storedLists = JSON.parse(localStorage.getItem("storedLists"))
        }

        const index = storedLists.indexOf(list.parentElement.innerText.slice(0,-1))
        storedLists.splice(index,1)

        localStorage.setItem("storedLists",JSON.stringify(storedLists))
    }
}

// set value to checkbox
function checkBox(id){

    const idLi = id
    //console.log(id)
    //console.log(idLi)

    if (document.getElementById(`${id}`).checked === true) {
        localStorage.setItem(`${id}`,true)  
    }
    else {
        localStorage.setItem(`${id}`,false) 
    }
}

// show checkbox
function showCheckBox() {
    let storedLists
    if (localStorage.getItem("storedLists") === null) {
        storedLists = []
    }
    else {
        storedLists = JSON.parse(localStorage.getItem("storedLists"))
    }

    for (i = 0; i < defaultTrackerList.length; i++) {
        for (j = 1; j <= 30; j++) {
            if (JSON.parse(localStorage.getItem(`${defaultTrackerList[i]}${j}`)) == true) {
                document.getElementById(`${defaultTrackerList[i]}${j}`).setAttribute("checked",true)
            }
        }
    } 

    for (i = 0; i < storedLists.length; i++) {
        for (j = 1; j <= 30; j++) {
            if (JSON.parse(localStorage.getItem(`${storedLists[i]}${j}`)) == true) {
                document.getElementById(`${storedLists[i]}${j}`).setAttribute("checked",true)
            }
        }
    }
}



////////// September Cards //////////

let cardsContainer = document.getElementById("monthly-card-section")
let cardsRow1 = document.getElementById("row1")
let cardsRow2 = document.getElementById("row2")
let cardsRow3 = document.getElementById("row3")
let cardsRow4 = document.getElementById("row4")
let cardsRow5 = document.getElementById("row5")
let cardName = document.getElementById("card-name")
let cardNameButton = document.getElementById("add-card-name")
let cardsSection = document.getElementById("monthly-card-section")
let cardAns = document.getElementById("card-ans")
let cardAnsButton = document.getElementById("add-card-ans")

// select options
let cardOption = document.getElementById("card-option")
let storedCards
    if (localStorage.getItem("storedCards") === null) {
        storedCards = []
    }
    else {
        storedCards = JSON.parse(localStorage.getItem("storedCards"))
    }
let defaultCardsList = ["What makes me happy","What I achieved","What I gave back to society","My favourite quote"]
let selectOption = defaultCardsList.concat(storedCards)

for (i = 0; i < selectOption.length; i++) {
    const opt = document.createElement("option")
    opt.value = selectOption[i]
    opt.textContent = selectOption[i]
    cardOption.appendChild(opt)
}

createCards()
showCardLists()
cardNameButton.addEventListener("click",addCard)
cardsSection.addEventListener("click",deleteCard)
cardAnsButton.addEventListener("click",addListToCard)

// create stored cards
function createCards() {

    // create default card
    for (i = 0; i < defaultCardsList.length; i++) {

        const createCard = document.createElement("div")
        createCard.classList.add("col-sm-3")
        createCard.classList.add("monthly-cards")
        cardsRow1.appendChild(createCard)

        const createCardTitle = document.createElement("div")
        createCardTitle.classList.add("card-title")
        createCard.appendChild(createCardTitle)
        createCardTitle.innerHTML = `${defaultCardsList[i]}`
        
        const createCardList = document.createElement("div")
        createCardList.classList.add("card-list")
        createCard.appendChild(createCardList)
    }

    // stored additional card
    let storedCards
    if (localStorage.getItem("storedCards") === null) {
        storedCards = []
    }
    else {
        storedCards = JSON.parse(localStorage.getItem("storedCards"))
    }

    for (i = 0; i < storedCards.length; i++) {

        const createCard = document.createElement("div")
        createCard.classList.add("col-sm-3")
        createCard.classList.add("monthly-cards")
        
        const deleteCardButton = document.createElement("button")
        deleteCardButton.classList.add("delete-card-button")
        deleteCardButton.classList.add("float-end")
        createCard.appendChild(deleteCardButton)
        deleteCardButton.innerHTML = "x"

        const createCardTitle = document.createElement("div")
        createCardTitle.classList.add("card-title")
        createCard.appendChild(createCardTitle)
        createCardTitle.innerHTML = `${storedCards[i]}`
        
        const createCardList = document.createElement("div")
        createCardList.classList.add("card-list")
        createCard.appendChild(createCardList)

        if (i >= 0 && i < 4) {cardsRow2.appendChild(createCard)} 
        if (i >= 4 && i < 8) {cardsRow3.appendChild(createCard)}
        if (i >= 8 && i < 12) {cardsRow4.appendChild(createCard)}
        if (i >= 12 && i < 16) {cardsRow5.appendChild(createCard)}
        if (i >= 16) {alert ("เกินไป๊!!")}
    }
}

// create card
function addCard() {
   
    if (cardName.value == "") {
        alert("Please fill card name")
    }

    else {

        let storedCards
        if (localStorage.getItem("storedCards") === null) {
            storedCards = []
        }
        else {
            storedCards = JSON.parse(localStorage.getItem("storedCards"))
        }

        storedCards.push(cardName.value)
            
            let i = storedCards.length

            const createCard = document.createElement("div")
            createCard.classList.add("col-sm-3")
            createCard.classList.add("monthly-cards")
            
            const deleteCardButton = document.createElement("button")
            deleteCardButton.classList.add("delete-card-button")
            deleteCardButton.classList.add("float-end")
            createCard.appendChild(deleteCardButton)
            deleteCardButton.innerHTML = "x"

            const createCardTitle = document.createElement("div")
            createCardTitle.classList.add("card-title")
            createCard.appendChild(createCardTitle)
            createCardTitle.innerHTML = `${cardName.value}`
            
            const createCardList = document.createElement("div")
            createCardList.classList.add("card-list")
            createCard.appendChild(createCardList)

            if (i >= 0 && i < 4) {cardsRow2.appendChild(createCard)} 
            if (i >= 4 && i < 8) {cardsRow3.appendChild(createCard)}
            if (i >= 8 && i < 12) {cardsRow4.appendChild(createCard)}
            if (i >= 12 && i < 16) {cardsRow5.appendChild(createCard)}
            if (i >= 16) {alert ("เกินไป๊!!")}

        localStorage.setItem("storedCards",JSON.stringify(storedCards))

        cardName.value = ""

        //to refresh div arrangment
        location.reload()
    }
}

// delete card
function deleteCard(e) {
    const list = e.target
    //console.log(list.classList)
    //console.log(list.parentElement)

    if (list.classList.contains("delete-card-button")) {
        list.parentElement.remove()
    
        let storedCards
        if (localStorage.getItem("storedCards") === null) {
            storedCards = []
        }
        else {
            storedCards = JSON.parse(localStorage.getItem("storedCards"))
        }

        const index = storedCards.indexOf(list.parentElement.innerText.slice(0,-1))
        storedCards.splice(index,1)

        localStorage.setItem("storedCards",JSON.stringify(storedCards))

        //to refresh div arrangment
        location.reload()
    }
}

// show all lists in cards
function showCardLists() {
    let storedCardLists 
    if (localStorage.getItem("storedCardLists") === null) {
        storedCardLists = []
    }
    else {
        storedCardLists = JSON.parse(localStorage.getItem("storedCardLists"))
    }

    for (i = 0; i < storedCardLists.length; i++) {
        
        for (j = 0; j < selectOption.length; j++) {
            const f = selectOption[j]
            
            if(storedCardLists[i].card == f) {
                
                const card = document.getElementsByClassName("monthly-cards")
                const cardName = card[j]

                const newList = document.createElement("div")
                newList.classList.add("list")

                if (j >= 0 && j < 4) { 
                    cardName.childNodes[1].appendChild(newList)
                    newList.innerHTML = storedCardLists[i].text
                }

                if (j >= 4 && j < 20) {
                    cardName.childNodes[2].appendChild(newList)
                    newList.innerHTML = storedCardLists[i].text
                }
            }
        }
    }
}

// add list to card
function addListToCard() {
    
    if (cardAns.value == "") {
        alert("Please fill your note")
    }
    else {
        const e = document.getElementById("card-option")
        const opt = e.options[e.selectedIndex].value

        alert(`note "${cardAns.value}" to card "${opt}" ?`)
        
        for (i = 0; i < selectOption.length; i++) {
            const f = selectOption[i]
            
            if (opt == f) {
                const card = document.getElementsByClassName("monthly-cards")
                const cardName = card[i]

                const newList = document.createElement("div")
                newList.classList.add("list")

                if (i >= 0 && i < 4) { 
                    cardName.childNodes[1].appendChild(newList)
                    newList.innerHTML = `${cardAns.value}`
                    
                    // localstorage
                    let storedCardLists 
                    if (localStorage.getItem("storedCardLists") === null) {
                        storedCardLists = []
                    }
                    else {
                        storedCardLists = JSON.parse(localStorage.getItem("storedCardLists"))
                    }
                    
                    let pairList = {
                        card: opt,
                        text: cardAns.value
                    }

                    storedCardLists.push(pairList)
                    localStorage.setItem("storedCardLists",JSON.stringify(storedCardLists))
                }

                if (i >= 4 && i < 20) {
                    cardName.childNodes[2].appendChild(newList)
                    newList.innerHTML = `${cardAns.value}`

                    // localstorage
                    let storedCardLists 
                    if (localStorage.getItem("storedCardLists") === null) {
                        storedCardLists = []
                    }
                    else {
                        storedCardLists = JSON.parse(localStorage.getItem("storedCardLists"))
                    }
                    
                    let pairList = {
                        card: opt,
                        text: cardAns.value
                    }

                    storedCardLists.push(pairList)
                    localStorage.setItem("storedCardLists",JSON.stringify(storedCardLists))
                }
            }    
        }   
        
        cardAns.value = "" 
    }
}



////////// My Journals //////////

let journalContainer = document.getElementById("journal-container")
let journalTitle = document.getElementById("journal-title")
let journalText = document.getElementById("journal-text")
let journalButton = document.getElementById("add-journal")

showJournal()
journalButton.addEventListener("click",addJournal)
journalContainer.addEventListener("click",deleteJn)
journalContainer.addEventListener("click",editJn)

// show all journals
function showJournal() {
    let storedJn
    if (localStorage.getItem("storedJn") === null) {
        storedJn = []
    }
    else {
        storedJn = JSON.parse(localStorage.getItem("storedJn"))
    }

    for (i = 0; i < storedJn.length; i++) {

        const createJnDiv = document.createElement("div")
        createJnDiv.classList.add("card")
        journalContainer.appendChild(createJnDiv)


        const createJnTitle = document.createElement("div")
        createJnTitle.classList.add("jn-title")
        createJnDiv.appendChild(createJnTitle)
        createJnTitle.innerHTML = `${storedJn[i].jnTitle}`

        const createJnText = document.createElement("div")
        createJnText.classList.add("jn-text")
        createJnDiv.appendChild(createJnText)
        createJnText.innerHTML = storedJn[i].jnText

        const deleteJnButton = document.createElement("button")
        deleteJnButton.classList.add("delete-jn-button")
        deleteJnButton.setAttribute("type","button")
        createJnTitle.appendChild(deleteJnButton)
        deleteJnButton.innerHTML = "x"

        const editJnButton = document.createElement("button")
        editJnButton.classList.add("edit-jn-button")
        editJnButton.setAttribute("type","button")
        createJnTitle.appendChild(editJnButton)
        editJnButton.innerHTML = "edit"
    }
}

// add journal
function addJournal() {
    
    let storedJn
    if (localStorage.getItem("storedJn") === null) {
        storedJn = []
    }
    else {
        storedJn = JSON.parse(localStorage.getItem("storedJn"))
    }
    
    if (journalTitle.value == "" || journalText.value == "" ) {
        alert("Please fill title and text")
    }
    else {
        const createJnDiv = document.createElement("div")
        createJnDiv.classList.add("card")
        journalContainer.appendChild(createJnDiv)

        const createJnTitle = document.createElement("div")
        createJnTitle.classList.add("jn-title")
        createJnDiv.appendChild(createJnTitle)
        createJnTitle.innerHTML = `${journalTitle.value}`

        const createJnText = document.createElement("div")
        createJnText.classList.add("jn-text")
        createJnDiv.appendChild(createJnText)
        createJnText.innerHTML = `${journalText.value}`

        const deleteJnButton = document.createElement("button")
        deleteJnButton.classList.add("delete-jn-button")
        deleteJnButton.setAttribute("type","button")
        createJnTitle.appendChild(deleteJnButton)
        deleteJnButton.innerHTML = "x"

        const editJnButton = document.createElement("button")
        editJnButton.classList.add("edit-jn-button")
        editJnButton.setAttribute("type","button")
        createJnTitle.appendChild(editJnButton)
        editJnButton.innerHTML = "edit"

        // local storage
        let jnList = {
            jnTitle: journalTitle.value,
            jnText: journalText.value
        }
        storedJn.push(jnList)
        localStorage.setItem("storedJn",JSON.stringify(storedJn))
        }

    journalText.value = ""  
    journalTitle.value = ""  
    
    //to refresh div arrangment
    location.reload()
}

// delete journal
function deleteJn(e) {
    
    let list = e.target
    //console.log(list.classList)
    //console.log(list.parentElement.parentElement)

    if (list.classList.contains("delete-jn-button")) {
        
        list.parentElement.parentElement.remove()
    
        let storedJn
        if (localStorage.getItem("storedJn") === null) {
            storedJn = []
        }
        else {
            storedJn = JSON.parse(localStorage.getItem("storedJn"))
        }
        
        for (i = 0; i < storedJn.length; i++) {
            
            const storedIndex = storedJn[i].jnTitle
            //console.log(storedJn[i].jnTitle)

            const index = list.parentElement.innerText.slice(0,-5)
            //console.log(list.parentElement.innerText.slice(0,-5))
            
            if (storedIndex == index) {
                //console.log(storedJn[i])
                storedJn.splice(i,1)
            }
        }
        localStorage.setItem("storedJn",JSON.stringify(storedJn))
    }
    //to refresh div arrangment
    //location.reload()
}

// edit journal
function editJn(e) {

    let list = e.target
    //console.log(list.classList)
    //console.log(list.parentElement.parentElement)
    
    if (list.classList.contains("edit-jn-button")) {

        if (journalTitle.value !== "" || journalText.value !== "" ) {
            alert("Please clear title and text")
        }

        let storedJn
        if (localStorage.getItem("storedJn") === null) {
            storedJn = []
        }
        else {
            storedJn = JSON.parse(localStorage.getItem("storedJn"))
        }

        for (i = 0; i < storedJn.length; i++) {
            const storedIndex = storedJn[i].jnTitle
            //console.log(storedJn[i].jnTitle)

            const index = list.parentElement.innerText.slice(0,-5)
            //console.log(list.parentElement.innerText.slice(0,-5))
            
            if (storedIndex == index) {
                //console.log(storedJn[i])
                journalTitle.value = storedJn[i].jnTitle
                journalText.value = storedJn[i].jnText

                //when press submit edited value 
                //1)splice below working and set (remove old item) to localstorage 
                //2)submit new edited value to localstorage working
                storedJn.splice(i,1)
            }
        }
        //localstorage for splice
        localStorage.setItem("storedJn",JSON.stringify(storedJn))
    }
    //to refresh div arrangment
    //location.reload()
}

// get ideas
let ideasButton = document.getElementById("ideas")
let showIdeas = document.getElementById("show-ideas")

let ideasList = {
    0:"what is your favourite story about your childhood",
    1:"5 things you do well",
    2:"what do you need",
    3:"how have you changed in last 3 years",
    4:"dream job",
    5:"what is your ideal day looks like",
    6:"what makes you smile",
    7:"what do you love about yourself",
    8:"your role model",
    9:"how do you cope with stress",
    10:"who do you aspire to be",
    11:"what are 3 things you are good at",
    12:"your experience you never forget",
    13:"what do you afraid of",
    14:"write letter to someone",
    15:"what is your favourite quote",
    16:"what new hobby you want to try",
    17:"when do you feel most relax",
    18:"where do you feel free",
    19:"what memories would you like to have when you are 80s"
}

ideasButton.addEventListener("click",randomIdeas)

function randomIdeas() {
    i = String(Math.floor(Math.random() * 20))

    console.log(ideasList[i])

    // access property value when property name is number
    showIdeas.innerHTML = ideasList[i]
}

        


















