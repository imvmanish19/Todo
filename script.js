let ul = $('#list')
let add = $('#btnAdd')
let clear = $('#btnClear')
let task = $('#inpText')
let btnSort = $('#btnSort')
let btnRemove = $('#btnRemove')

function additem() {
    if(task.val()){
        let element = $('<li>', {
            'class': 'list-group-item',
            'text': task.val()
        })
        element.click(() => {
            element.toggleClass('done')
        })
        ul.append(element)
    }
}

add.click(additem);

task.keypress((e) => {
    if(e.which == 13) 
    {
        additem();
    }
})

clear.click(() => task.val(''))

btnRemove.click(() => {
    $('ul .done').remove()
})

btnSort.click(() => {
    $('ul .done').appendTo(ul)
})