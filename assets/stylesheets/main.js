window.addEventListener("load", init);
var lang, l;
var n, p;
var stitle;
var sdesc;
var slink;
var plist = false;
var playlist = []
var count = 0;
var si = 40;
var songList = [{
        "song_title": "raazi",
        "song_desc": "Shankar-Ehsaan-Loy",
        "song_link": "assets/songs/Dilbaro.mp3",
        "song_image": "assets/images/2766_2.jpg"
    },
    {
        "song_title": "october",
        "song_desc": "Shantanu Moitra, Anupam Roy",
        "song_link": "assets/songs/Theher Ja.mp3",
        "song_image": "assets/images/203_4.jpg"
    },
    {
        "song_title": "102 not out",
        "song_desc": "Salim-Sulaiman",
        "song_link": "assets/songs/Bachche Ki Jaan .mp3",
        "song_image": "assets/images/42598-102-not-out-2018-songs.jpg"
    },
    {
        "song_title": "baaghi 2",
        "song_desc": "Panjabi MC, Mithoon",
        "song_link": "assets/songs/Saathi .mp3",
        "song_image": "assets/images/Baaghi 2.jpg"
    },
    {
        "song_title": "Ghar Se Nikalte Hi",
        "song_desc": "Armaan Malik, Amaal Malik",
        "song_link": "assets/songs/Ghar Se Nikalte Hi.mp3",
        "song_image": "assets/images/4706392565.jpg"
    },
    {
        "song_title": "Raid",
        "song_desc": " Tanishk Bagchi, Amit Trivedi ",
        "song_link": "assets/songs/Nit Khair Manga .mp3",
        "song_image": "assets/images/Raid.jpg"
    },
    {
        "song_title": "heer",
        "song_desc": "Ved Sharma",
        "song_link": "assets/songs/Heer.mp3",
        "song_image": "assets/images/Heer.jpg"
    },
    {
        "song_title": "Sau Martaba",
        "song_desc": " Keshav Kumar ",
        "song_link": "assets/songs/Sau Martaba .mp3",
        "song_image": "assets/images/saumartaba.jpg"
    },
    {
        "song_title": "hichki",
        "song_desc": " Jasleen Royal",
        "song_link": "assets/songs/Khol De Par.mp3",
        "song_image": "assets/images/hichki-2_200.jpg"
    },
    {
        "song_title": "bandeya",
        "song_desc": "Arjit Singh",
        "song_link": "assets/songs/bandeya.mp3",
        "song_image": "assets/images/Dil-Juunglee-2018-Hindi-Movie-Songs-Download.jpg"
    },
    {
        "song_title": "mi gente",
        "song_desc": " J. Balvin, Willy William",
        "song_link": "assets/songs/Mi Gente.mp3",
        "song_image": "assets/images/migente.jpg"
    },
    {
        "song_title": "havana",
        "song_desc": "Camila Cabello",
        "song_link": "assets/songs/Havana.mp3",
        "song_image": "assets/images/3591069749.jpg"
    },
    {
        "song_title": "thunder",
        "song_desc": "Evolve by Imagine Dragons",
        "song_link": "assets/songs/thunder.mp3",
        "song_image": "assets/images/200x0w.jpg"
    },
    {
        "song_title": "so far away",
        "song_desc": "Martin Garrix, David Guetta",
        "song_link": "assets/songs/So Far Away.mp3",
        "song_image": "assets/images/239685.jpg"
    },
    {
        "song_title": "hold on",
        "song_desc": "Ananya Birla ",
        "song_link": "assets/songs/Hold On.mp3",
        "song_image": "assets/images/3918135526.jpg"
    },
    {
        "song_title": "friends",
        "song_desc": "Marshmello, Anne-Marie ",
        "song_link": "assets/songs/FRIENDS.mp3",
        "song_image": "assets/images/200x200bb.jpg"
    },
    {
        "song_title": "call out my name",
        "song_desc": "The Weeknd ",
        "song_link": "assets/songs/Call Out My Name.mp3",
        "song_image": "assets/images/call-out-my-name.jpg"
    },
    {
        "song_title": "wolves",
        "song_desc": "Marshmello, Selena Gomez",
        "song_link": "assets/songs/Wolves.mp3",
        "song_image": "assets/images/wolves.jpg"
    },
    {
        "song_title": "say something",
        "song_desc": " Justin Timberlake ",
        "song_link": "assets/songs/Say Something.mp3",
        "song_image": "assets/images/571115.jpg"
    },
    {
        "song_title": "never be the same",
        "song_desc": " Camila Cabello ",
        "song_link": "assets/songs/neverbe the same.mp3",
        "song_image": "assets/images/never_be.jpg"
    },
    {
        "song_title": "trending nakhra",
        "song_desc": "Amrit Maan",
        "song_link": "assets/songs/trending nakhra.mp3",
        "song_image": "assets/images/66345.png"
    },
    {
        "song_title": "teeje week",
        "song_desc": "Jordan Sandhu ",
        "song_link": "assets/songs/teeje week.mp3",
        "song_image": "assets/images/66150.png"
    },
    {
        "song_title": "high end",
        "song_desc": "Diljit Dosanjh",
        "song_link": "assets/songs/High End.mp3",
        "song_image": "assets/images/66220.png"
    },
    {
        "song_title": "la la la",
        "song_desc": " Arjun Kanungo",
        "song_link": "assets/songs/la la la.mp3",
        "song_image": "assets/images/66129.png"
    },
    {
        "song_title": "shada",
        "song_desc": "Parmish Verma",
        "song_link": "assets/songs/shada.mp3",
        "song_image": "assets/images/66357.png"
    },
    {
        "song_title": "lahore",
        "song_desc": " Guru Randhawa",
        "song_link": "assets/songs/Lahore.mp3",
        "song_image": "assets/images/lahore.jpg"
    },
    {
        "song_title": "raat di gedi",
        "song_desc": "Diljit Dosanjh",
        "song_link": "assets/songs/raat di gedi.mp3",
        "song_image": "assets/images/raatdigedi.png"
    },
    {
        "song_title": "mill lo na",
        "song_desc": " Guri ",
        "song_link": "assets/songs/Mill Lo Na.mp3",
        "song_image": "assets/images/milllona.jpg"
    },
    {
        "song_title": "naah",
        "song_desc": "Harrdy Sandhu",
        "song_link": "assets/songs/Naah.mp3",
        "song_image": "assets/images/naah.jpg"
    },
    {
        "song_title": "badnam",
        "song_desc": "Mankirt Aulakh",
        "song_link": "assets/songs/Badnam.mp3",
        "song_image": "assets/images/3031972659.jpg"
    },
    {
        "song_title": "dhun laagi",
        "song_desc": " Siddharth Amit Bhavsar",
        "song_link": "assets/songs/Dhun-Laagi.mp3",
        "song_image": "assets/images/love.jpg"
    },
    {
        "song_title": "Bewafa Tane Dur Thi Salam",
        "song_desc": "Jiganesh Kaviraj",
        "song_link": "assets/songs/Bewafa Tane Dur Thi Salaam.mp3",
        "song_image": "assets/images/200x0w (1).jpg"
    },
    {
        "song_title": "Odhni odu",
        "song_desc": "Vikas Ambore",
        "song_link": "assets/songs/Odhani-Odhoone.mp3",
        "song_image": "assets/images/200x0w (2).jpg"
    },
    {
        "song_title": "Bhuli Javu Che",
        "song_desc": "Sachin Sanghvi",
        "song_link": "assets/songs/Bhuli_Javu_Che.mp3",
        "song_image": "assets/images/200x0w (3).jpg"
    },
    {
        "song_title": "reva",
        "song_desc": " Divya Kumar",
        "song_link": "assets/songs/Maa Reva Journey.mp3",
        "song_image": "assets/images/4250135222.jpg"
    },
    {
        "song_title": "Udu Aaje",
        "song_desc": " Sunidhi Chauhan",
        "song_link": "assets/songs/Udu Aaje.mp3",
        "song_image": "assets/images/4024680942.jpg"
    },
    {
        "song_title": "Icon",
        "song_desc": "Nakash Aziz",
        "song_link": "assets/songs/Icon.mp3",
        "song_image": "assets/images/200x0w (4).jpg"
    },
    {
        "song_title": "Sar Sar Ke",
        "song_desc": "Aditya Gadhvi",
        "song_link": "assets/songs/Sar Sar Ke.mp3",
        "song_image": "assets/images/3576658833.jpg"
    },
    {
        "song_title": "Vhalam Aavo Ne",
        "song_desc": "Jigardan Gadhavi",
        "song_link": "assets/songs/Vhalam Aavo Ne.mp3",
        "song_image": "assets/images/6ZWmp37eRnc.jpg"
    },
    {
        "song_title": "Mohabbat Khape",
        "song_desc": "Vijay Suvada",
        "song_link": "assets/songs/VIJAY SUVADA.mp3",
        "song_image": "assets/images/200x0w (5).jpg"
    },
];
var maxn = songList.length;
var play_btn, pause_btn, for_btn, back_btn, slider;
var fsong, bsong;
var audio, ul, ul1;
var btn;
var searching = 0;
var searched = false;
var status = 1;

function init() {
    document.getElementById("page_loader").setAttribute('class', 'hidden');
    document.getElementById("search").addEventListener("click", performSearch);
    document.getElementById("bdr").innerHTML = "hindi";
    document.getElementById("add").addEventListener("click", hin);
    document.getElementById("hin").addEventListener("click", hin);
    document.getElementById("eng").addEventListener("click", eng);
    document.getElementById("pun").addEventListener("click", pun);
    document.getElementById("guj").addEventListener("click", guj);
    document.getElementById("plist").addEventListener("click", showPlaylist);
    document.getElementById("slist").addEventListener("click", showSearch);
    document.getElementById("home").addEventListener("click", hidePlaylist);
    play_btn = document.getElementById("play-btn");
    play_btn.addEventListener("click", startSong);
    pause_btn = document.getElementById("pause-btn");
    pause_btn.addEventListener("click", pauseSong);
    back_btn = document.getElementById("back-btn");
    back_btn.addEventListener("click", backSong);
    for_btn = document.getElementById("forward-btn");
    for_btn.addEventListener("click", forwardSong);
    audio = document.getElementById("audio");
    n = document.getElementsByClassName("s");
    for (var i = 0; i < maxn; i++) {
        n[i].addEventListener("click", playSong);
    }
    p = document.getElementsByClassName("atp");
    for (var i = 0; i < maxn; i++) {
        p[i].addEventListener("click", addPlaylist);
    }
    slider = document.getElementById("rangeslide");
    slider.addEventListener("change", seekSong);
    object.loadPlaylist();
}

function hin() {
    lang = "hindi";
    document.getElementById("bdr").innerHTML = lang;
    document.getElementById("products1").className = "show";
    document.getElementById("products3").className = "hide";
    document.getElementById("products2").className = "hide";
    document.getElementById("products4").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("list").className = "hide";
    document.getElementById("searchdiv").className = "hide";
}

function eng() {
    lang = "english";
    document.getElementById("bdr").innerHTML = lang;
    document.getElementById("products2").className = "show";
    document.getElementById("products1").className = "hide";
    document.getElementById("products3").className = "hide";
    document.getElementById("products4").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("list").className = "hide";
    document.getElementById("searchdiv").className = "hide";
}

function pun() {
    lang = "punjabi";
    document.getElementById("bdr").innerHTML = lang;
    document.getElementById("products3").className = "show";
    document.getElementById("products2").className = "hide";
    document.getElementById("products1").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("products4").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("list").className = "hide";
    document.getElementById("searchdiv").className = "hide";
}

function guj() {
    lang = "gujarati";
    document.getElementById("bdr").innerHTML = lang;
    document.getElementById("products4").className = "show";
    document.getElementById("products3").className = "hide";
    document.getElementById("products1").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("products2").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("list").className = "hide";
    document.getElementById("searchdiv").className = "hide";
}

function playSong() {
    stitle = this.innerHTML;
    sdesc = this.nextElementSibling.innerHTML;
    document.getElementById("pbc").innerHTML = stitle;
    songList.forEach(function (obj) {
        if (stitle.localeCompare(obj.song_title) == 0 && sdesc.localeCompare(obj.song_desc) == 0) {
            slink = obj.song_link;
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

function startSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function backSong() {
    if (plist == false) {
        for (var i = 0; i < maxn; i++)
            if (stitle.localeCompare(n[i].innerHTML) == 0) {
                var j = i - 1;
                if (i == 0)
                    j = maxn - 1;
                bsong = n[j].innerHTML;
                document.getElementById("pbc").innerHTML = bsong;
                songList.forEach(function (obj) {
                    if (bsong.localeCompare(obj.song_title) == 0) {
                        slink = obj.song_link;
                        audio.src = slink;
                        audio.play();
                    }
                })
                setTimeout(function () {
                    slider.max = audio.duration;
                }, 1000);
                song_timer = setInterval(function () {
                    slider.value = audio.currentTime;
                    document.getElementById("currrange").innerHTML = audio.currentTime;
                }, 1000);
            }
    }
    if (plist == true) {
        for (var i = 0; i < count; i++)
            if (stitle.localeCompare(playlist[i]) == 0) {
                var j = i - 1;
                if (i == 0)
                    j = count - 1;
                bsong = playlist[j];
                document.getElementById("pbc").innerHTML = bsong;
                songList.forEach(function (obj) {
                    if (bsong.localeCompare(obj.song_title) == 0) {
                        slink = obj.song_link;
                        audio.src = slink;
                        audio.play();
                    }
                })
                setTimeout(function () {
                    slider.max = audio.duration;
                    document.getElementById("maxrange").innerHTML = audio.duration;
                }, 1000);
                song_timer = setInterval(function () {
                    slider.value = audio.currentTime;
                    document.getElementById("currrange").innerHTML = audio.currentTime;
                }, 1000);
            }
    }
    stitle = bsong;
}

function forwardSong() {
    if (plist == false) {
        for (var i = 0; i < maxn; i++) {
            if (stitle.localeCompare(n[i].innerHTML) == 0) {
                var j = i + 1;
                if (i == (maxn - 1)) {
                    j = 0;
                }
                fsong = n[j].innerHTML;
                document.getElementById("pbc").innerHTML = fsong;
                songList.forEach(function (obj) {
                    if (fsong.localeCompare(obj.song_title) == 0) {
                        slink = obj.song_link;
                        audio.src = slink;
                        audio.play();
                    }
                })
                setTimeout(function () {
                    slider.max = audio.duration;
                }, 1000);
                song_timer = setInterval(function () {
                    slider.value = audio.currentTime;
                    document.getElementById("currrange").innerHTML = audio.currentTime;
                }, 1000);
            }
        }
    } else if (plist == true) {
        for (var i = 0; i < count; i++) {
            if (stitle.localeCompare(playlist[i]) == 0) {
                var j = i + 1;
                if (i == (count - 1)) {
                    j = 0;
                }
                fsong = playlist[j];
                document.getElementById("pbc").innerHTML = fsong;
                songList.forEach(function (obj) {
                    if (fsong.localeCompare(obj.song_title) == 0) {
                        slink = obj.song_link;
                        audio.src = slink;
                        audio.play();
                    }
                })
                setTimeout(function () {
                    slider.max = audio.duration;
                    document.getElementById("maxrange").innerHTML = audio.duration;
                }, 1000);
                song_timer = setInterval(function () {
                    slider.value = audio.currentTime;
                    document.getElementById("currrange").innerHTML = audio.currentTime;
                }, 1000);
            }
        }
    }
    stitle = fsong;
}

function seekSong() {
    audio.currentTime = slider.value;
}

function addPlaylist() {
    event.srcElement.setAttribute('disabled', 'true');
    var sname = event.srcElement.previousElementSibling.previousElementSibling.innerHTML;
    var sdescr = event.srcElement.previousElementSibling.innerHTML;
    event.srcElement.setAttribute('id', sname);
    object.songlist.forEach(function (obj) {
        if (sname.localeCompare(obj.title) == 0 && sdescr.localeCompare(obj.desc) == 0) {
            status = 0;
        }
    })
    if (status == 1) {
        ul = document.getElementById("pul");
        var li = document.createElement('li');
        var img = document.createElement('img');
        var btn1 = document.createElement('a');
        var inneri = document.createElement('i');
        inneri.setAttribute('class', "fa fa-times");
        btn1.appendChild(inneri);
        songList.forEach(function (obj) {
            console.log(sname);
            console.log(obj.song_title);
            if (sname.localeCompare(obj.song_title) == 0 && sdescr.localeCompare(obj.song_desc) == 0) {
                img.setAttribute('src', obj.song_image);
                object.addSong(obj.song_title, obj.song_desc, obj.song_link, obj.song_image);
            }
        });
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        span1.innerHTML = sname;
        span2.innerHTML = sdescr;
        playlist.push(sname);
        span1.addEventListener("click", object.playPlaylist);
        btn1.addEventListener("click", deleteSong);
        li.appendChild(img);
        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(btn1);
        ul.appendChild(li);
        object.savePlaylist();
    } else {
        alert("song already added");
        status = 1;
    }
}

function printPlaylist(songarr) {
    ul = document.getElementById("pul");
    for (i = 0; i < songarr.length; i++) {
        var li = document.createElement('li');
        var img = document.createElement('img');
        var btn1 = document.createElement('a');
        var inneri = document.createElement('i');
        inneri.setAttribute('class', "fa fa-times");
        btn1.appendChild(inneri);
        sname = songarr[i].title;
        sdescr = songarr[i].desc;
        img.setAttribute('src', songarr[i].image);
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        span1.innerHTML = sname;
        span2.innerHTML = sdescr;
        playlist.push(sname);
        span1.addEventListener("click", object.playPlaylist);
        btn1.addEventListener("click", deleteSong);
        li.appendChild(img);
        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(btn1);
        ul.appendChild(li);
    }
}

function deleteSong() {
    var elem = event.srcElement.parentElement.parentElement;
    var rsong = event.srcElement.parentElement.parentElement.childNodes[1].innerHTML;
    ul.removeChild(elem);
    for (let i = 0; i < maxn; i++) {
        if (rsong.localeCompare(p[i].parentElement.childNodes[1].innerHTML) == 0) {
            p[i].removeAttribute('disabled', 'true');
        }
    }
    for (let i = 0; i < playlist.length; i++) {
        if (rsong.localeCompare(playlist[i]) == 0) {
            playlist.splice(i, 1);
            value = i;
            object.delete(i);
        }
    }
}

function showPlaylist() {
    document.getElementById("products3").className = "hide";
    document.getElementById("products2").className = "hide";
    document.getElementById("products1").className = "hide";
    document.getElementById("products4").className = "hide";
    document.getElementById("searchdiv").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("list").className = "show";
    plist = true;
}

function hidePlaylist() {
    document.getElementById("products1").className = "show";
    document.getElementById("products3").className = "hide";
    document.getElementById("products2").className = "hide";
    document.getElementById("products4").className = "hide";
    document.getElementById("searchdiv").className = "hide";
    document.getElementById("presearch").className = "hide";
    document.getElementById("list").className = "hide";
    plist = false;
}

function performSearch() {
    searched = true;
    if (searching == 1) {
        ul = document.getElementById("searchlist");
        for (i = 0; i < l; i++) {
            ul.removeChild(document.querySelector("#searchlist li"));
        }
    }
    var pr = doAjax();
    pr.then(data => {
        document.getElementById("presearch").className = "hide";
        document.getElementById("products3").className = "hide";
        document.getElementById("products2").className = "hide";
        document.getElementById("products1").className = "hide";
        document.getElementById("products4").className = "hide";
        document.getElementById("list").className = "hide";
        document.getElementById("searchdiv").className = "show";
        ul1 = document.getElementById("searchlist");
        for (x = 0; x < data.length; x++) {
            l = data.length;
            var li1 = document.createElement('li');
            li1.setAttribute('class','ulchild')
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'row');
            var div2 = document.createElement('div');
            div2.setAttribute('class', 'b');
            var img1 = document.createElement('img');
            img1.setAttribute('src', data[x].artworkUrl100);
            img1.setAttribute('class', 'imgheight');
            div2.appendChild(img1);
            var div3 = document.createElement('div');
            div3.setAttribute('class', 'c');
            var span3 = document.createElement('span');
            span3.setAttribute('class', 's');
            var span4 = document.createElement('span');
            var btn2 = document.createElement('button');
            btn2.setAttribute('class', 'atp');
            btn2.innerHTML = "Add to Playlist";
            btn2.addEventListener('click', addPlaylist);
            var regex = /[()]/;
            var myString = data[x].trackCensoredName;
            var ms;
            if (regex.test(myString)) {
                ms = myString.substring(0, myString.indexOf('('))
            } else {
                ms = myString;
            }
            span3.innerHTML = ms;
            var myString1 = data[x].collectionCensoredName;
            var ms1;
            if (regex.test(myString1)) {
                ms1 = myString1.substring(0, myString1.indexOf('('))
            } else {
                ms1 = myString1;
            }
            span4.innerHTML = ms1;
            span3.addEventListener("click", playSong);
            div3.appendChild(span3);
            div3.appendChild(span4);
            div3.appendChild(btn2);
            div1.appendChild(div2);
            div1.appendChild(div3);
            var object = {
                "song_title": ms,
                "song_desc": ms1,
                "song_link": data[x].previewUrl,
                "song_image": data[x].artworkUrl100
            };
            songList.push(object);
            li1.appendChild(div1);
            ul1.appendChild(li1);
            searching = 1;
        }
    }).catch(err => {
        console.log("error" + err);
    });
}

function doAjax() {
    var pr = new Promise((resolve, reject) => {
        var param = document.getElementById("song_name").value;
        var url = "https://itunes.apple.com/search?term=" + param + "&country=in";
        fetch(url).then(response => response.json().then(json => {
            resolve(json.results);
        })).catch(err => console.log(err));
    });
    return pr;
}

function showSearch() {
    document.getElementById("products3").className = "hide";
    document.getElementById("products2").className = "hide";
    document.getElementById("products1").className = "hide";
    document.getElementById("products4").className = "hide";
    document.getElementById("list").className = "hide";
    if (!searched) {
        document.getElementById("presearch").className = "show";
        document.getElementById("searchdiv").className = "hide";
    }
    if (searched) {
        document.getElementById("presearch").className = "hide";
        document.getElementById("searchdiv").className = "show";
    }
}