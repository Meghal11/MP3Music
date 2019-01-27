function Song(title, desc, link, image) {
    this.title = title;
    this.desc = desc;
    this.link = link;
    this.image = image;
}

var object = {
    songlist: [],
    addSong: function (title, desc, link, image) {
        var song = new Song(title, desc, link, image);
        this.songlist.push(song);
    },
    delete: function (value) {
        object.songlist.splice(value, 1);
        object.savePlaylist();
    },
    savePlaylist: function () {
        if (window.localStorage) {
            var json = JSON.stringify(object.songlist);
            localStorage.setItem('saved_playlist', json);
        } else {
            alert("Localstorage not supported");
        }
    },
    loadPlaylist: function () {
        if (localStorage.saved_playlist) {
            var saved = localStorage.getItem('saved_playlist');
            object.songlist = JSON.parse(saved);
            printPlaylist(object.songlist);
        }
    },
    playPlaylist: function () {
        stitle = this.innerHTML;
        sdesc = this.nextElementSibling.innerHTML;
        document.getElementById("pbc").innerHTML = stitle;
        object.songlist.forEach(function (obj) {
            if (stitle.localeCompare(obj.title) == 0 && sdesc.localeCompare(obj.desc) == 0) {
                slink = obj.link;
                audio.src = slink;
                audio.play();
            }
        })
        setTimeout(function () {
            document.getElementById("rangeslide").max = audio.duration;
        }, 1000);
        song_timer = setInterval(function () {
            document.getElementById("rangeslide").value = audio.currentTime.toString();
            document.getElementById("currrange").innerHTML = audio.currentTime;
        }, 1000);
    }
}