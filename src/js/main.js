/**
 * Fetches GIFs from the Giphy API
 *
 * @param {String} searchTerm what you want to search giphy for
 * @param {Function} callback the function to call when giphy replies with some gifs
 */
let getGif = function(searchTerm, callback) {
	// learn about how the giphy API wants you to construct your URLs to make a request here:
	// https://developers.giphy.com/docs/api/endpoint#search
	const GIPHY_API = 'https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&rating=G&';
	
	// axios is a package for fetching data via ajax.
	axios.get(GIPHY_API + 'q=' + searchTerm)
		.then(function(response) {
			callback(response.data.data)
		})
		.catch(function (error) {
			console.warn(error);
		})
}











/*
 * simple example of how to get cat gifs and console log the results
 */

let topicName = document.querySelector('.topic')
let myButton = document.querySelector('.submit-topic')
console.log(topicName.value)

myButton.addEventListener('click', function (event) {
	getGif(topicName.value, function(gifData) {
		console.log(gifData)
		

		

			for (let i = 0; i < 10; i++) {
				console.log(getGif[i])

				let widthHeight = Math.random() * 300

				let createdImg = document.createElement("img")
				createdImg.setAttribute('src' , gifData[i].images.original.url)
				createdImg.classList.add('new-img')
				document.body.append(createdImg)
				
				createdImg.style.left = Math.random() * 600 + 'px'
				createdImg.style.top = Math.random() * 0 + 'px'
				
				
				
			}

			setInterval(function() {
				let nextDrop = document.querySelector('.new-img:not(.falling)')
				nextDrop.classList.add('falling')
			}, 1000);


	})

})


	// search giphy for whatever is typed in

	// get what was typed in topicName
	// send it to giphyAPI

	// get the value of top00icName
	// call getGif "value"

		// put all gif on screen

		// loop through array
		// making a gif for each object

		// loop through array
		// make an img elemnent
		// get src from the object // object.images.original.url
		// append on body