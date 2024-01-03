var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

function getEmotions(){
    setInterval(async function(){
      const res = await fetch("http://127.0.0.1:5000/api/most_voted", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.result);
        var video = document.getElementById("video");
        var videoSource = document.getElementById("videoSrc");
        
        switch(data.result){
            case "happy":
                videoSource.src ="../LiveStream/assets/Emotion/Emotions-04.mp4";
                video.load();
                break;
            case "excited":
                videoSource.src ="../LiveStream/assets/Emotion/Emotions-02.mp4";
                video.load();
                break;
            case "sad":
                videoSource.src ="../LiveStream/assets/Emotion/Emotions-06.mp4";
                video.load();
                break;
            case "angry":
                videoSource.src ="../LiveStream/assets/Emotion/Emotions-01.mp4";
                video.load();
                break;
            case "sick":
                videoSource.src ="../LiveStream/assets/Emotion/Emotions-05.mp4";
                video.load();
                break;
            case "loving":
                videoSource.src ="../LiveStream/assets/Emotion/Emotions-03.mp4";
                video.load();
                break;
        }
      })
      .catch(error => console.log('error', error));

    }, 3000);     
}

getEmotions();