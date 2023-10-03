document.querySelectorAll('li')
 .forEach(function(li) {
    li.addEventListener('click', function(e) {
      e.target.classList.toggle('selected');
    });
  });