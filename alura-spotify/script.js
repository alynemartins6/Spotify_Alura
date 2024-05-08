const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlayList = document.getElementById('result-playlist');

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlayList.classList.add('hidden');
    const artistsName = document.getElementById('artist-name');
    const artistsImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistsName.innerText = element.name;
        artistsImage.src = element.urlImg;
    });
    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input',function(){
    const searchTerm = searchInput.value.toLocaleLowerCase();
    if(searchTerm === ''){
        resultPlayList.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);

})