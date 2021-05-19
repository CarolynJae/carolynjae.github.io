const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    let myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');

    listText.textContent = myItem;
    listBtn.textContent = 'X';
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.focus();

}