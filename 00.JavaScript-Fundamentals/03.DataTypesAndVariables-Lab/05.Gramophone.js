function gramophone(bandName, albumName, songName) {
    let duration = Math.ceil(((albumName.length * bandName.length) * songName.length / 2) / 2.5);
    console.log(`The plate was rotated ${duration} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');