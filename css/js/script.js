
// btn.addEventListener('click', function() {
//     let list = document.createElement('li')
//     let input = document.getElementById('text-box')
//     list.textContent = input.value
//     document.querySelector('ul').appendChild(list);
//     input.value = ''
//     console.log(list)

// document.querySelector('ul').addEventListener('click', remove)
//     function remove(evt) {
//     evt.target.remove('li');
// }


$(function() {
  $('#button').click(function() {
    let $item = $('#text-box').val();
    $('ul#unorder').append('<li>' + $item + '</li>');
    $item = $('#text-box').val(' ');
    // $('ul#unorder').empty
  });
});

// $('button').live(() => {
//   $('li').addClass('clear');
// });

$('ul#unorder').live('click', function() {
  if ('click' === true) {
    $('ul#unorder').children().remove();
  }
})



  

  


    