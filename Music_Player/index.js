var songs=[

    {
        id:1,
        imageSrc:"./Thumbnails/Cover.jpg",
        audioSrc:"./Audio/7 rings.mp3",
        title:"7 Rings - Ariana Grande"
    },

    {
        id:2,
        imageSrc:"./Thumbnails/Rain.jpg",
        audioSrc:"./Audio/Rain.m4a",
        title:"Rain - Aj Tracey ft Aitch"
    },

    {
        id:3,
        imageSrc:"./Thumbnails/Dreamer.jpg",
        audioSrc:"./Audio/Dreamer.m4a",
        title:"Dreamer - Axwell Ingrosso"
    },

    {
        id:4,
        imageSrc:"./Thumbnails/west_ten.jfif",
        audioSrc:"./Audio/_West Ten.m4a",
        title:"West Ten - Aj Tracey & Mabel"
    },

    


]

function generateAudioCards()
{

    let htmlString="";

    songs.forEach(function(song,index){

        let songHTML=`

                <div class="Audio_music">
                <div class="Audio_img">
                    <img src="${song.imageSrc}">
                </div>
                <div class="audio_detail">
                    <h1 class="audio_title">${song.title}</h1>
                    <button class="btn" onclick="playAudio(${song.id})">Play</button>
                </div>
                </div>

        `;

        htmlString+=songHTML;

    })

    document.getElementById("audios").innerHTML=htmlString;


}

generateAudioCards();


function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });

    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();

    
}

