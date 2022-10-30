
const list = document.querySelector(".main__list");
const container = document.querySelector(".container"); 


class Workout {
    constructor (exersize, reps, rest) {
        this.exersize = exersize;
        this.reps = reps;
        this.rest = rest;
    }
}

class UI {
    static clearInputs () {
        document.querySelector(".exersize").value = "";
        document.querySelector(".reps").value = "";
        document.querySelector(".rest").value = "";
    }

    static addWorkoutToList (workout) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${workout.exersize}</td>
        <td>${workout.reps}</td>
        <td>${workout.rest}</td>
        <td><a class ="delete">x</a></td>`;
        list.appendChild(row);
    }

    static deletePlan () {
        list.addEventListener("click", (e) => {
           const item = e.target;
           if ( item.classList[0] === "delete") {
            item.parentElement.parentElement.remove();
           }
          
        })
    }

    static showError (message, className) {
        const wrapper = document.querySelector(".wrapper");
        const title = document.querySelector(".title");
        const div = document.createElement("div");
        div.className = `${className}`;
        div.appendChild(document.createTextNode(message));
        wrapper.insertBefore(div, title);
        setTimeout(() =>document.querySelector(".error").remove(),3000 );
        setTimeout(() =>document.querySelector(".success").remove(),3000 );
    }
}

container.addEventListener("submit", (e) => {
    e.preventDefault();

    const exersize = document.querySelector(".exersize").value;
const reps = document.querySelector(".reps").value;
const rest = document.querySelector(".rest").value;

if (exersize === "" || reps === "" || rest=== "") {
    UI.showError("Fill the Input please","error");
} else {
   const workout = new Workout (exersize, reps, rest);

    UI.addWorkoutToList(workout);

    UI.clearInputs();

    UI.showError("plan added to List", "success")

    UI.deletePlan();
}
})