const todoInput = document.getElementById('text-field'); // Input Field
const todoSubmit = document.getElementById('submit'); // Add Item
const todoClearItems = document.getElementById('clearItems') // Remove Item
const todoClearAll = document.getElementById('clearList'); // Clear All
const listParent = document.querySelector('.output');  // UL Element
const listItems = document.getElementsByClassName('listItems'); // Generated LI elements
let inputData = ""; // Sets inputData as an empty global string & variable.

todoInput.addEventListener('input', () => { // Event listener on input form to ensure placeholder text stays 

  if (todoInput.value === "") { // If input text-field is empty

    todoInput.placeholder = "Add to your to-do list!"

  } else { // If input text-field is not empty

    todoInput.placeholder = "";

  }

});

function createItems() { // Creates new list items with input data.

  const newList = document.createElement("li");

  listParent.appendChild(newList);

  newList.innerHTML = todoInput.value;

  newList.className = "listItems";

  todoInput.value = null;

}

todoSubmit.addEventListener("click", () => { // Submit button

  inputData = todoInput.value;

  if (inputData.length > 0) { // If input is in the text-field

    createItems();
    todoInput.placeholder = "Add to your to-do list!";

  } else { // If no text is in the text field

    todoInput.placeholder = "Invalid input, try again!";

    console.warn("Invalid Input Detected.");

    setTimeout(() => {

      todoInput.placeholder = "Add to your to-do list!";

    }, 3000);

  }

});

todoClearItems.addEventListener("click", () => { // Remove Item button

  for (const item of listItems) {

    if (item.textContent === todoInput.value) { // If the text in the text-field matches a list item

      item.remove();
      todoInput.value = null;

    }

  }

  todoInput.placeholder = "Add to your to-do list!";

});

todoClearAll.addEventListener("click", () => { // Clear List button

  while (listParent.firstChild) { // While there is still list items

    listParent.removeChild(listParent.firstChild);

    todoInput.value = null;

  }

});
