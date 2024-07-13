















// // console.log("Spotify");

// let audioElement = new Audio('songs/aigiri_1.mp3')

// let songs = [
//     { songName: 'Aigiri_Nandini_VishvaVinodini', filePath: 'songs/aigiri_1.mp3', imagePath: 'images/img-1.jpg' },
//     { songName: 'nand_kishor_kuvar_hari_nandan', filePath: 'song/nand_kishor_kuvar_hari_nandan_.mp3', imagePath: 'images/img-2.jpg' },
//     { songName: 'Rao_Sahab_Da', filePath: 'song/Rao_Sahab_Da.mp3', imagePath: 'images/img-3.jpg' },
//     { songName: 'Roke_Na_Ruke_Naina', filePath: 'song/Roke_Na_Ruke_Naina.mp3', imagePath: 'images/img-4.jpg' },
//     { songName: 'Tera_Yaar_Hoon_Main', filePath: 'song/Tera_Yaar_Hoon_Main.mp3', imagePath: 'images/img-5.jpg' },
//     { songName: 'Thee_Thalapathy', filePath: 'song/Thee_Thalapathy.mp3', imagePath: 'images/img-6.jpg' },
//     { songName: 'Top_10_Sachet_Parampara_Viral_Songs', filePath: 'song/Top_10_Sachet_Parampara_Viral_Songs.mp3', imagePath: 'images/img-7.jpg' },
// ]

// // set array in song list

// let song_contain = Array.from(document.getElementsByClassName('song-contain'))

// song_contain.forEach((element, i) => {
//     console.log(element, i);
//     element.getElementsByTagName('img')[0].src = songs[i].imagePath
//     element.getElementsByClassName('songName')[0].innerText = songs[i].songName
// })

// // handle song list play button

// function previosePlayStop() {
//     e.target.classList.remove('fa-pause')
//     e.target.classList.add('fa-play')
// }

// let songListPlayBtn = Array.from(document.getElementsByClassName('song-list-play-bt'))

// songListPlayBtn.forEach((element) => {
//     element.addEventListener('cliack', (e) => {
//         previosePlayStop();
//         e.target.classList.remove('fa-play')
//         e.target.classList.add('fa-pause')
//     })
// })

// // handle play/pause

// let masterPlay = document.getElementById('masterPlay')
// let gif = document.getElementById('gif')

// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play')
//         masterPlay.classList.add('fa-pause')
//         gif.style.opacity = 1
//     }
//     else {
//         audioElement.pause()
//         masterPlay.classList.remove('fa-pause')
//         masterPlay.classList.add('fa-play')
//         gif.style.opacity = 0
//     }
// })

// // main Song play bar

// let myProgressBar = document.getElementById('myProgressBar')

// audioElement.addEventListener('timeupdate', () => {
//     // console.log('timeupdate');
//     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
//     // console.log(progress);
//     myProgressBar.value = progress
// })

// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
// })