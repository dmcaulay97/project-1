var searchBtn = document.querySelector("#searchBtn");


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {
    format: "yyyy-mm-dd"
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

document.addEventListener('change', function () {
  var elems = document.querySelectorAll('#subCategory');
  var instances = M.FormSelect.init(elems);
});

document.addEventListener('change', function () {
  var elems = document.querySelectorAll('#subCategory2');
  var instances = M.FormSelect.init(elems);
});