

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.toggle-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('data-target');
            var content = document.getElementById(targetId);
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});


