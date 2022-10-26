const container = document.querySelector(".container");
const input = document.querySelector(".todo__input");
const button = document.querySelector(".todo__btn");
const list = document.querySelector(".todo__list");
button.addEventListener("click", addTodo);

function addTodo () {

    if (input.value.length === 0) {
        const newError = document.createElement("h3");
        container.insertBefore(newError,container.firstChild);
        newError.classList.add("error");
        newError.innerText = "Please fill the Input"
        function removeError (){
            newError.remove()
        }
        setTimeout (removeError, 1300);
    } 
    else {

        const newError = document.createElement("h3");
        container.insertBefore(newError,container.firstChild);
        newError.classList.add("success");
        newError.innerText = "Item added to List"
        function removeError (){
            newError.remove()
        }
        setTimeout (removeError, 1300);

    const newDiv = document.createElement("div");
    const newLi = document.createElement("h3");
    const removeBtn = document.createElement("button");

    newDiv.classList.add("newdiv");
    removeBtn.classList.add("removebtn");
    newLi.classList.add("newli");

    newLi.innerText = input.value ;
    removeBtn.innerText = "remove"

    input.value = ""

    list.append(newDiv);
    newDiv.append(newLi);
    newDiv.append(removeBtn);

    container.addEventListener("click", removeTodo);

    function removeTodo (e) {
       const item = e.target
       if (item.classList[0] === ("removebtn") ){
        item.parentElement.classList.add("fade")
        function remove () {
            item.parentElement.remove();
        }
        setTimeout(remove,1800);
          }
  }
 }
}