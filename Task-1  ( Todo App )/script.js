var items = ['item 1', 'item 2', 'item 3', 'item 4'];

var list = document.querySelector('#myList');

items.forEach(function (item) {
    CreateItem(item);

});

list.addEventListener('click', function (item) {

    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked')
        ToogleDeleteButton();
    }

});

document.querySelector('#daleteAll').onclick = function () {
    var elements = document.querySelectorAll('.checked');

    elements.forEach(function (item) {
        item.style.display = 'none'
    });
};

function ToogleDeleteButton() {
    var checkList = document.querySelectorAll('.checked');

    if (checkList.length) {
        document.querySelector('#daleteAll').classList.remove('d-none')
    } else {
        document.querySelector('#daleteAll').classList.add('d-none')
    }
}

document.querySelector('#btnCreate').onclick = function () {
    var item = document.querySelector('#txtItem').value

    if (item === '') {
        alert('xais olunur deyer girin');
        return;
    }
    CreateItem(item);
};


function CreateItem(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className = 'list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7')
    span.className = 'close'
    span.appendChild(text);
    li.appendChild(span);


    span.onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none'
        li.classList.remove('checked')
    }
}


