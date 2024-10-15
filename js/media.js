const imgCover = document.querySelector("img#cover")
const divPlayList = document.querySelector("div.playlist")

const playButton = document.querySelector("img#play")
const fforwardButton = document.querySelector("img#ffwd")
const rewindButton = document.querySelector("img#frew")

const imgVumeter = document.querySelector("img#vumeter")
const progressBar = document.querySelector("div.progress-bar")
const playingButtons = ["images/play.png", "images/pause.png"]

let index = 1
const contador = {actual: 1, total: playList.length}

const audioPlayer = new Audio()
// const audioPlayer = document.createElement("audio")
      audioPlayer.id = "AudioPlayer"
      audioPlayer.preload = "auto"
      audioPlayer.src = ""
      audioPlayer.volume = 0.3

function obtenerProgreso(audio) {
    const duracionTotal = audio.duration
    const tiempoActual = audio.currentTime
    const porcentajeReproduccion = (tiempoActual / duracionTotal) * 100
    return parseFloat(porcentajeReproduccion)
}

// Cargar la playlist
function cargarPlayList() {
    if (playList.length > 0) {
        let listaCanciones = ""
        playList.forEach((song)=> {
            listaCanciones += `<p id="${index}" data-songname="${song.title}">${song.artist} - ${song.title}</p>`
            index++
        })
        divPlayList.innerHTML = listaCanciones
        const listOfSongs = document.querySelectorAll("div.playlist p")

        if (listOfSongs.length > 0) {
            listOfSongs.forEach((currentSong)=> {
                currentSong.addEventListener("click", ()=> {
                    const selectedSong = playList.find((song)=> song.title === currentSong.dataset.songname)
                    if (selectedSong) {
                        console.log(currentSong.id)
                        navigator.mediaSession.metadata = new MediaMetadata(selectedSong)
                        contador.actual = parseInt(currentSong.id)
                        imgCover.src = selectedSong.artwork[0].src
                        audioPlayer.src = selectedSong.source
                        audioPlayer.play()
                        playButton.src = playingButtons[1]
                        listOfSongs.forEach((song)=> song.classList.remove("font-bold"))
                        currentSong.classList.add("font-bold")
                    }
                })
            })
        }
    }
}
cargarPlayList()

// EVENTOS
playButton.addEventListener("click", ()=> { // Botón Play - evento click
    if (audioPlayer.src === location.href) {
        console.error("Selecciona un archivo de audio para reproducir.")
        return 
    }

    if (audioPlayer.paused) {
        audioPlayer.play()
        playButton.src = playingButtons[1]
    } else {
        audioPlayer.pause()
        playButton.src = playingButtons[0]
    }
})

audioPlayer.addEventListener("play", ()=> imgVumeter.src = "images/vumeter-on.gif" )
audioPlayer.addEventListener("pause", ()=> imgVumeter.src = "images/vumeter-off.gif" )
audioPlayer.addEventListener("timeupdate", ()=> progressBar.style.width = `${(obtenerProgreso(audioPlayer) * 4)}px`)

audioPlayer.addEventListener("ended", ()=> {
    imgVumeter.src = "images/vumeter-off.gif"
    contador.actual < contador.total ? contador.actual++ : contador.actual = 1
    const paragraphCancion = document.querySelector(`p[id="${contador.actual}"]`)
    paragraphCancion.click()
})