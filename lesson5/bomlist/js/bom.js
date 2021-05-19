const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.onclick = function() {
    let myChapter = input.value;
    input.value = '';

    const listChapter = document.createElement('li');
    const listBtn = document.createElement('button');
    const listText = document.createElement('span');

    listText.textContent = myChapter;
    listBtn.textContent = 'X';
    listChapter.appendChild(listBtn);
    list.appendChild(listChapter);

    listBtn.onclick = function(e) {
        list.removeChild(listChapter);
    }

    input.focus();

}