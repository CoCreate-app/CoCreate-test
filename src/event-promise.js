
const socketEventAsync = (eventname) => {
	return new Promise((resolve) => {
		document.addEventListener(eventname, function(event) {
			console.log(event)
		    resolve(event.detail);
		}, { once: true })
		
	})
}

export default socketEventAsync;

