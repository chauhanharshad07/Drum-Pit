let data = {
    A: {
        name: "Ti",
        sound: "sound/first.mp3",
    },
    S: {
        name: "Dha",
        sound: "sound/second.mp3",
    },
    D: {
        name: "Dhin",
        sound: "sound/third.mp3",
    },
    F: {
        name: "Dhom",
        sound: "sound/four.mp3",
    },
    G: {
        name: "Taa",
        sound: "sound/five.mp3",
    },
    H: {
        name: "Taan",
        sound: "sound/six.mp3",
    },
    J: {
        name: "Na",
        sound: "sound/seven.mp3",
    },
    K: {
        name: "Dhinnn",
        sound: "sound/eight.mp3",
    },
    L: {
        name: "Ka",
        sound: "sound/nine.mp3",
    },
    M: {
        name: "Dhaa",
        sound: "sound/ten.mp3",
    },
    N: {
        name: "Tin",
        sound: "sound/eleven.mp3",
    },
    B: {
        name: "Ta",
        sound: "sound/twel.mp3",
    },
};

let drumkit = document.getElementById("drumkit");
function card() {
    for (let key in data) {
        let createdrum = document.createElement("div")
        //    console.log(createdrum);
        createdrum.classList.add("element", data[key].name)
        drumkit.appendChild(createdrum);


        let h2 = document.createElement("h2");
        h2.textContent = key;
        createdrum.appendChild(h2);

        let span = document.createElement("span");
        span.innerHTML = data[key].name;
        createdrum.appendChild(span);

        createdrum.addEventListener("click", function (e) {
            let key = e.currentTarget.querySelector("h2").textContent;
            // console.log(key);
            playDrum(key.toUpperCase());
        })
    }
}
function playDrum(key) {
    console.log(key);
    if (data.hasOwnProperty(key)) {
        let createdrum = document.querySelector(`.element.${data[key].name}`);
        console.log(createdrum);
        createdrum.classList.add("active");

        // audio

        let audio =new Audio();
        audio.src =data[key].sound;
        console.log(audio);
        audio.play();
        
        // console.dir(audio )


        audio.addEventListener("timeupdate",function(){
            if(audio.currentTime >= audio.duration / 32){
                createdrum.classList.remove("active");
                audio.removeEventListener("timeupdate",arguments,callee)
            }
        })
    }
}
document.addEventListener("keydown",function(event){
    playDrum(event.key.toUpperCase())
})

card();
