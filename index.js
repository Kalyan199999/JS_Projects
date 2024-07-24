
const login = document.querySelector('.login');
const signup = document.querySelector('.signup');

login.addEventListener('click',()=>{
    window.location.assign('login.html');
})

signup.addEventListener('click',()=>{
    window.location.assign('login.html')
})


let songs = document.querySelectorAll('.c');
console.log(songs);

for(i=0;i<songs.length;i++)
{
    songs[i].addEventListener('click',()=>{
        let songList = document.querySelector('.songsList');
        songList.classList.add('songsListActive');
    })
}

let songsClose = document.getElementById('close');
songsClose.addEventListener('click',()=>{
    let songList = document.querySelector('.songsList');
        songList.classList.remove('songsListActive');
})

const search  =document.querySelector('#search');

search.addEventListener('click',()=>{
    let find = document.querySelector('.find');
    find.classList.toggle('active');
})

