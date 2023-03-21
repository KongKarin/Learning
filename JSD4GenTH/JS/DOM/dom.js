// const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
// console.log(gJavascript);
// gJavascript.innerHTML = 'Advance JAVASCRIPT!!';

const gJavascript = document.querySelector('#reading-list li:nth-child(3) .name');
console.log(gJavascript);
gJavascript.innerHTML = 'Advance JAVASCRIPT!!';

const readingList = document.querySelectorAll('#reading-list li .name');
readingList.forEach(function(list) {
    // console.log(list.textContent);
    list.textContent = `book title: ${list.textContent} `; //add to every book list 
})

let addInput = document.getElementById("add-input");

const handleClickAddList = () => {
  let list = document.createElement("li");
  list.innerHTML = `<span class='name'>${addInput.value}</span><span class='delete' onclick='handleDeleteList()'>delete</span>`;
  document.querySelector("#reading-list ul").appendChild(list);
};

const handleDeleteList = () => {
  let parent = event.target.parentNode;
  parent.remove();
};
// createDOM
//better way for element.addEventListener()
// const list = document.querySelector('#reading-list ul');
// list.addEventListener('click', function(e){
//     if (e.target.class == 'delete') {
//         const li =e.target.parentNode;
//         list.removeChild(li);
//     }
// })

// // //Interacting with Form -- add readinglist
// const addForm = document.forms['add-list'];
// addForm.addEventListener('submit',function(e){
//     e.preventDefault(); // prevent from refresh
//     const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
//    // console.log(value);

// // //create element
// const addElement() {
//     const newlist = document.createElement('#reading-list li .name');
// }
// //add content
 

// //add classes



// //append to DOM


// });


