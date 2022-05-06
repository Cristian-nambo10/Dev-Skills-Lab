let btn = document.getElementById('button');

btn.addEventListener('click', function() {
    let list = document.createElement('li')
    let input = document.getElementById('text-box')
    list.textContent = input.value
    document.querySelector('ul').appendChild(list);
    input.value = ''
    console.log(list)
})

// document.querySelector('ul').addEventListener('click', remove)
//     function remove(evt) {
//     evt.target.remove('li');
// }

// $('li').on('click', 'unorder', function() {
//     $(this).closest('ul').remove()
// })

// $('#unorder').onclick(function() {
//    $('ul').remove();
// })
// $('ul').remove();
// $('#unorder').addEventListener('click', remove)
$('list').addClass('link')

$("#skills unorder").on("click", "button", function () {
        $(this).closest("li").remove()
      })



    