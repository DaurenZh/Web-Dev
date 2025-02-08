// let myNodeList = document.getElementsByTagName('li');
// let i;
// for (i = 0; i < myNodeList; i++) {
//     let span = document.createElement('span');
//     let txt = document.createTextNode('\u00D7');
//     span.className = 'close';
//     span.appendChild(txt)
//     myNodeList[i].appendChild(span)
// }

// let close = document.getElementById('close');
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         let div = this.parentElement;
//         div.style.display = 'none';
//     }
// }

// let list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'li') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);

// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";

//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add close button to existing list items
    let myNodeList = document.getElementsByTagName('LI');
    for (let i = 0; i < myNodeList.length; i++) {
        let span = document.createElement('SPAN');
        let txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        myNodeList[i].appendChild(span);
    }

    // Click on close button to hide the current list item
    let close = document.getElementsByClassName('close');
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }

    // Add a "checked" symbol when clicking on a list item
    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
});

// Function to create new list item
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    // Create close button for new item
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Add click handler to new close button
    span.onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}