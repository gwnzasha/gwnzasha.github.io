
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>'; 
}

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>'; 
        localStorage.setItem('mode', 'dark'); 
    } else {
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>'; 
        localStorage.setItem('mode', 'light'); 
    }
});

const followBtn = document.getElementById('follow-btn');

followBtn.addEventListener('click', function() {
    if (followBtn.innerText === 'Follow') {
        followBtn.innerText = 'Following';
        followBtn.style.backgroundColor = '#4CAF50'; 
    } else {
        followBtn.innerText = 'Follow';
        followBtn.style.backgroundColor = '';
    }
});

document.getElementById('anime-item').addEventListener('click', async function() {
    try {
        const modal = document.getElementById('anime-modal');
        const modalTitle = document.getElementById('modal-anime-title');
        const modalSynopsis = document.getElementById('modal-anime-synopsis');
        const modalImage = document.getElementById('modal-anime-image'); 

        const response = await fetch('https://api.jikan.moe/v4/random/anime');
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        const anime = data.data;

        console.log('Fetched Anime Data:', data);

        // anime data title, synopsis, and image
        if (anime && anime.title && anime.synopsis && anime.images && anime.images.jpg) {

            modalTitle.textContent = anime.title;
            modalSynopsis.textContent = `Synopsis: ${anime.synopsis}`;
            modalImage.src = anime.images.jpg.image_url; 

            modal.style.display = 'block';
        } else {
            console.error('Anime data is missing title, synopsis, or image:', anime);
        }
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }
});

document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('anime-modal');
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('anime-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


