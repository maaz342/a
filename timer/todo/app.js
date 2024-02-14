var c = document.getElementById('app');

function createElem() {
    var r = document.getElementById('myinput');
    var a = document.createElement('div');
    a.classList.add('list-item');
    
    var txt = document.createTextNode(r.value);
    a.appendChild(txt);

    c.appendChild(a);

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        var newText = prompt('Enter new text:', txt.nodeValue);
        if (newText !== null) {
            txt.nodeValue = newText;
            r.value = newText;
        }
    };
    a.appendChild(editButton);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        a.remove();
    };
    a.appendChild(deleteButton);
}

function deletea() {
    var r = document.getElementById('myinput');
    r.value = "";
    c.innerHTML = "";
}
