function songs(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;

        }
    }
    let songNum = arr.shift();
    let typeList = arr.pop();
    for (let i = 0; i < songNum; i++) {
        let current = arr[i];
        let [type, name, time] = current.split("_");

        let song = new Song(type, name, time);

        if (typeList===song.type){
            console.log(song.name);
        }else if (typeList==="all"){
            console.log(song.name);
        }
    }

}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);