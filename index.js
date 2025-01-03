const inputText = document.querySelector("#input_text"),
      newItemAdd = document.querySelector("#new-item-add"),
      itemBox = document.querySelector("#item-box"),
      lineCheckboxes = document.querySelectorAll(".line-through"),
      textAdd = document.querySelectorAll(".text_add"),
      delateItems = document.querySelectorAll(".delate_items");

for (let i = 0; i < delateItems.length; i++) {
  delateItems[i].addEventListener("click", function(e) {
    e.target.parentNode.style.transform = "translateX(500px)"
    setTimeout( function() {
      e.target.parentNode.remove()
    }, 500)
  })
};

itemBox.addEventListener("click", function(e) {
  if (e.target.classList.contains("delate_items")) {
    e.target.closest("li").style.transform = "translateX(500px)"
    setTimeout( function() {
      e.target.parentNode.remove()
    }, 500)
  }
});

for (let i = 0; i < lineCheckboxes.length; i++) {
  lineCheckboxes[i].addEventListener("change", function(e) {
    if (lineCheckboxes[i].checked) {
      e.target.nextElementSibling.style.textDecoration = "line-through";
      e.target.nextElementSibling.style.color = "#8c8c8c"
    } else {
      e.target.nextElementSibling.style.textDecoration = "none";
      e.target.nextElementSibling.style.color = "black"
    }
  });
}

newItemAdd.addEventListener("click", addItem);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && inputText.value !== "") {
    addItem(e)
  }
});

function addItem(e) {
  e.preventDefault();
  let ItemValue = inputText.value.trim();
  
  if (inputText.value.trim() !== "") {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    itemBox.appendChild(li);
  
    let itemBoxDiv = document.createElement("div");
    itemBoxDiv.className = "item_box d-flex align-items-center"
    li.appendChild(itemBoxDiv);
  
    let newInput = document.createElement("input");
    newInput.className = "form-check-input me-2 line-through";
    newInput.type = "checkbox";
    itemBoxDiv.prepend(newInput);
  
    let paragraf = document.createElement("p");
    paragraf.className = "mb-0 text_add";
    itemBoxDiv.appendChild(paragraf);
    paragraf.appendChild(document.createTextNode(ItemValue));
  
    let newBotton = document.createElement("button");
    newBotton.className = "btn btn-danger delate_items rounded-circle";
    newBotton.innerHTML = "X";
    li.appendChild(newBotton);
    
    newInput.addEventListener("change", function(e) {
     if (newInput.checked) {
      e.target.nextElementSibling.style.textDecoration = "line-through";
      e.target.nextElementSibling.style.color = "#8c8c8c"
     } else {
      e.target.nextElementSibling.style.textDecoration = "none";
      e.target.nextElementSibling.style.color = "black"
     }
     });
  
   inputText.value = "";
  }

}

