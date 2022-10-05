const songs = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const list = document.getElementById('list-sounds')
songs.forEach((song) => {
  const item = document.createElement('li')
  item.classList.add('item-sound')
  item.innerText = song
  item.addEventListener('click', function() {
    stopSongs()
    document.getElementById(song).play()
  })
  list.appendChild(item)
})

function stopSongs() {
    songs.forEach((sound)=> {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}