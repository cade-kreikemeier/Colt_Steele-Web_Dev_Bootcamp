var movies = [
	{
		title: "Saving Private Ryan",
		rating: 5,
		hasWatched: true,
	},
	{
		title: "Finding Nemo",
		rating: 4,
		hasWatched: true,
	},
	{
		title: "1919",
		rating: 4.5,
		hasWatched: false,
	},
	{
		title: "Contact",
		rating: 3.5,
		hasWatched: true,
	},
];

movies.forEach(function (movie) {
	console.log(buildString(movie));
});

function buildString(movie) {
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += '"' + movie.title + '" - ';
	result += movie.rating + " stars";
	return result;
}
