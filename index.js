document.addEventListener('DOMContentLoaded', function() {
    var scrollable = document.getElementById('scrollable');
    var aboutme = document.getElementById('aboutme');
    if (window.location.href.indexOf("#aboutme") > -1) {
        scrollable.style.display = 'none';
    } else {
        scrollable.classList.remove('invisible');
        scrollable.addEventListener('scroll', function(event) {
            this.classList.add('hide');

        });
    }
    aboutme.classList.remove('invisible');
});
