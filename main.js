const shoppingListArray = [
  //   { item: "Rice", isInBasket: false },
  //   { item: "Onion", isInBasket: false },
  //   { item: "Butter", isInBasket: true },
  //   { item: "Parmesan", isInBasket: true },
  //   { item: "Garlic", isInBasket: false },
  //   { item: "Wild Mushroom", isInBasket: false },
  //   { item: "Chicken Stock", isInBasket: false },
  //   { item: "White Wine", isInBasket: false },
  //   { item: "Basil", isInBasket: true },
  //   { item: "Oregano", isInBasket: true },
  //   { item: "Chili Flakes", isInBasket: true },
];

// DOM
const shoppingListUl = document.querySelector(".shoppingListElement");
const addButton = document.querySelector("#addButton");
const clearList = document.querySelector("#clearList");

// Event Handlers
addButton.addEventListener("click", addItem);
clearList.addEventListener("click", clearItems);

function allShoppingList(itemList) {
  for (let i = 0; i < itemList.length; i++) {
    let li = document.createElement("li");
    li.innerText = itemList[i].item;

    if (itemList[i].isInBasket) {
      li.classList.add("in-basket");
    } else {
      li.classList.add("not-in-basket");
    }
    shoppingListUl.appendChild(li);

    let button = document.createElement("button");
    button.textContent = "Add to basket";
    button.addEventListener("click", toggleBasket);
    li.appendChild(button);
    document.getElementById("shoppingList").appendChild(li);
  }
}

function toggleBasket(event) {
  const button = event.target;
  const li = button.parentElement;
  li.classList.toggle("in-basket");
  if (li.classList.contains("in-basket")) {
    button.textContent = "Remove from basket";
  } else {
    button.textContent = "Add to basket";
  }
}

function addItem(userInput) {
  let userAnswer = (userInput.innerText = document.getElementById(
    "itemForm"
  ).value);
  const userAnswerObject = { item: userAnswer, isInBasket: false };
  allShoppingList([userAnswerObject]);
}

function clearItems(event) {
  const shoppingList = document.getElementById("shoppingListElement");
  while (shoppingList.hasChildNodes()) {
    shoppingListElement.removeChild(shoppingList.firstChild);
  }
}

allShoppingList(shoppingListArray);
