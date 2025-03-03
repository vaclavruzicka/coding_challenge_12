//Task 1 - Business Dashboard - DOM Element Selection and Creation

//Selecting the dashboard container with bot get element and query selector.
const dashboardContainer1 = document.getElementById("dashboard")
const dashboardContainer2 = document.querySelector(".dashboard")

//Creating a new elemnt using create element and the div tag.
const revenueCard = document.createElement("div")

//Using assign attibute to assign a class and an id to the new element.
revenueCard.setAttribute("class", "metric-card")
revenueCard.setAttribute("id", "revenueCard")

//Creating a new element, title, and adding the text content "Revenue".
const title = document.createElement("h3")
title.textContent = "Revenue"

//Creating a new element, value, and adding the text content "$0".
const value = document.createElement("p")
value.textContent = "$0"

//Adding the new elements to the revenue card using append child.
revenueCard.appendChild(title)
revenueCard.appendChild(value)

//Adding the revenue card to the dashbobard container using append child.
dashboardContainer1.appendChild(revenueCard)
