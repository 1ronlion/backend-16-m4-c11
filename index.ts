type song = {
    title: string
}

interface songList{
    songs : song[]
}

class Album {

    name;
    author;
    gender;
    songList;

    constructor(name: string, author: string, gender: string, songs: songList){

        this.name = name
        this.author = author
        this.gender = gender
        this.songList = songs

    }

}
const canciones : songList = {songs: [{title: "11 y 6"},{title: "Giros"}]}
const album = new Album("El amor despues del amor", "Fito Paez", "Pop", canciones)
console.log("🚀 ~ album:", album)
