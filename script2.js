
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
        const animeTitleElement = document.getElementById('anime-title');
        const animeItemInfo = document.querySelector('.gallery-item-info');

        const response = await fetch('https://api.jikan.moe/v4/random/anime');
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        const anime = data.data;

        animeTitleElement.textContent = anime.title;
        
        const animeSynopsis = document.createElement('p');
        animeSynopsis.textContent = `Synopsis: ${anime.synopsis}`;
        animeItemInfo.appendChild(animeSynopsis);

        console.log(`Fetched Anime: ${anime.title}`);
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }
});

document.getElementById('anime-item').addEventListener('click', async function() {
    try {
        const animeTitleElement = document.getElementById('anime-title');
        const animeItemInfo = document.querySelector('.gallery-item-info');

        const response = await fetch('https://api.jikan.moe/v4/random/anime');
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        const anime = data.data;

        animeTitleElement.textContent = anime.title;
        
        const animeSynopsis = document.createElement('p');
        animeSynopsis.textContent = `Synopsis: ${anime.synopsis}`;
        animeItemInfo.appendChild(animeSynopsis);

        console.log(`Fetched Anime: ${anime.title}`);
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }
});
