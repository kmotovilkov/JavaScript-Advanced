 function movies(arr) {

    let movies = [];

    arr.forEach(line => {
        const args = line.split(" ");
        const addIndex = args.indexOf("addMovie");
        const directorIndex = args.indexOf("directedBy");
        const dateIndex = args.indexOf("onDate");

        if (addIndex > -1) {
            movies.push({name: args.slice(addIndex + 1).join(" ")});
        }
        if (directorIndex > -1) {
            const name = args.slice(0, directorIndex).join(" ");
            const director = args.slice(directorIndex + 1).join(" ");

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        }

        if (dateIndex > -1) {
            const name = args.slice(0, dateIndex).join(" ");
            const date = args.slice(dateIndex + 1).join(" ");

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    });
    movies.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    });
}


movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);