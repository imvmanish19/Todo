let ul = $('#list')
let add = $('#btnAdd')
let clear = $('#btnClear')
let task = $('#inpText')

add.click(() => {
    let element = $('<li>', {
        'class': 'list-group-item',
        'text': task.val()
    })
    ul.append(element)
})

clear.click(() => task.val(''))