function toggleContent(clickedElement) {
    var allContent = document.querySelectorAll('.info-content');
    var content = clickedElement.querySelector('.info-content');

    // Check if the clicked content is already visible
    var isContentVisible = content.style.display === 'block';

    // Hide all content
    allContent.forEach(function(content) {
        content.style.display = 'none';
    });

    // Toggle the clicked content
    if (!isContentVisible) {
        content.style.display = 'block';
    }
}
