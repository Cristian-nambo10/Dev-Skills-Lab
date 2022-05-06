let btn = document.getElementById('button');

btn.addEventListener('click', function() {
    let list = document.createElement('li')
    let input = document.getElementById('text-box')
    list.textContent = input.value
    document.querySelector('ul').appendChild(list);
    input.value = ''
    console.log(list)
})

document.querySelector('ul').addEventListener('click', remove)

function remove(evt) {
    evt.target.remove('li');
}
    