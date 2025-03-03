//Task 1 - Business Dashboard - DOM Element Selection and Creation

//Selecting the dashboard container with bot get element and query selector.
const dashboardContainer1 = document.getElementById("dashboard")
const dashboardContainer2 = document.querySelector(".dashboard")

//Creating a new elemnt using create element and the div tag.
function createMetricCard(id, title, amount) {

    const metricCard = document.createElement("div")

    //Using assign attibute to assign a class and an id to the new element.
    metricCard.setAttribute("class", "metric-card")
    metricCard.setAttribute("id", id)

    //Creating a new element, title, and adding the text content "Revenue".
    const header = document.createElement("h3")
    header.textContent = title

    //Creating a new element, value, and adding the text content "$0".
    const value = document.createElement("p")
    value.textContent = `$${amount}`

    //Adding the new elements to the revenue card using append child.
    metricCard.appendChild(header)
    metricCard.appendChild(value)

    //Returning the created metric card.
    return metricCard
}
//Adding the revenue card to the dashbobard container using append child.
dashboardContainer1.appendChild(createMetricCard("revenueCard", "Revenue", 1000))

//Task 2 - Updating Dashboard Metics - Working with NodeLists and Arrays

//Creating the two new metic cards, Profit and Expenses
dashboardContainer1.appendChild(createMetricCard("profitCard", "Profit", 600))
dashboardContainer1.appendChild(createMetricCard("expensesCard", "Expenses", 400))

//Creating a  Node List for each metric card using it's class.
const metricCardNodeList = document.querySelectorAll(".metric-card")

//Converting the Node List into an Array so that I can use array methods.
const metricCardArray = Array.from(metricCardNodeList)

//Using the array method forEach in order to change each of the cards to be the color cyan.
metricCardArray.forEach((card) => {
    card.style.backgroundColor = "cyan"
})

//Task 3 - Dynamic Inventory Management - Adding and Removing Items

//Creating a function that adds a new item to an inventory list with the press of a button and deletes it when the product is pressed.
function newInventoryItem (name) {
    
    //Selecting the inventory list.
    const inventoryList = document.getElementById("inventoryList")

    //Creating a new list item.
    const newItem = document.createElement("li")

    //Giving the list itme the class "product-item".
    newItem.setAttribute("class", "product-item")

    //Giving the item the same name as input at the beginning of the function.
    newItem.textContent = name

    //Adding an event listening so that when a product is clicked it deletes itself.
    newItem.addEventListener("click", function () {
        inventoryList.removeChild(newItem)
    })

    //Adding the new item to the inventory list using append child.
    inventoryList.appendChild(newItem)
}

//Task 4 - Business Customer Section - Handling Event Bubbling

//Selecting the customer section of the html document.
const customerSection = document.getElementById("customerSection")

//Creating a function that adds a customer card that returns a message when clicked.
function createCustomerCard(name) {

    //Setting the the customer to a div tag.
    const customer = document.createElement("div")
    
    //Setting the class to "customer-card".
    customer.setAttribute("class", "customer-card")

    //Setting the text of the card to the name of the customer.
    customer.textContent = name

    //Adding an event listner so that when a card is clicked, it returns a note in the console log.
    customer.addEventListener("click", (event) => {
    console.log("Customer Card Clicked")

    //Using stopPropagation to  not allow for event bubbling.
    event.stopPropagation()
    })

    //Adding the customer card to the customer section using append child.
    customerSection.appendChild(customer)
}


//Creating customer cards.
createCustomerCard("John Smith")
createCustomerCard("Jane Smith")
