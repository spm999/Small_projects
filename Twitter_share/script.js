const blogPosts = document.querySelectorAll('.blog-post');
const customMenu = document.getElementById('customMenu');
const twitterButton = document.getElementById('twitterButton');

let selectedText = '';

blogPosts.forEach((post) => {
    post.addEventListener('mouseup', (event) => {
        const selection = window.getSelection().toString().trim();

        if (selection !== '') {
            selectedText = selection;
            showCustomMenu(event.pageX, event.pageY);
        } else {
            hideCustomMenu();
        }
    });
});

twitterButton.addEventListener('click', () => {
    const tweetText = encodeURIComponent(selectedText);
    const twitterURL = `https://twitter.com/intent/tweet?text=${tweetText}`;

    window.open(twitterURL, '_blank');
});

function showCustomMenu(x, y) {
    customMenu.style.display = 'block';
    customMenu.style.left = x + 'px';
    customMenu.style.top = y + 'px';
}

function hideCustomMenu() {
    customMenu.style.display = 'none';
}
