const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', // 유튜브 영상 아이디
        playerVars: {
            autoplay:true, // 자동 재생 유뮤
            loop:true, // 반복 재생 유무
            playlist:'An6LvWQuj_8' // 반복 재생할 유튜브 아이디 목록
        },
        events: {
            onReady: function(e){
                e.target.mute() // 음소거
            }
        }
    });
}