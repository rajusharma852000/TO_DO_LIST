let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        addItem(this.value);
        this.value = "";
    }
})

let addItem = (value)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `${value}<i></i>`;
    localStorage.setItem(`${value}`,`task`);

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
        
    })
    listItem.querySelector("i").addEventListener("click", 
    function(){
        let value = listItem.textContent;
        localStorage.removeItem(value);
        listItem.remove();
    })
    list.appendChild(listItem);
}

(function loadTasks(){
    for(let x in localStorage){
        let value = localStorage.getItem(x);
        if(value === "task"){
            addItem(x);
        }
    }
})();
