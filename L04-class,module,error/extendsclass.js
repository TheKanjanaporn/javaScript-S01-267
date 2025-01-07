//Parent class
class Media {
    constructor(info){
        this.publishDate = info.publishDate;
        yhis.name = info.name;
    }
}

//Child class
class Song extends Media {
    constructor(songDate) {
        super(songDate);
        this.artist = songDate.artist;
    }
}