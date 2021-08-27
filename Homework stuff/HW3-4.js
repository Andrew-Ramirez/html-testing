document.getElementById('theButton').addEventListener('click', function(event) {
    let editIn = document.createElement('li');
    let addedItem = document.getElementById('addItem').value;
    let text = document.createTextNode(addedItem);
    editIn.appendChild(text)
    document.getElementById('list').appendChild(editIn);
    document.getElementById('addItem').value=''
})

document.getElementById('list').addEventListener('click', function(event) {
    event.target.style.setProperty("text-decoration", "line-through");
    setTimeout(() => {
        event.target.remove()
    }, 1000);
})

