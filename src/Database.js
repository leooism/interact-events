export const sendData = async (eventObj) => {
	await fetch("https://interact-d354c-default-rtdb.firebaseio.com/event.json", {
		method: "POST",
		headers: {
			"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"Access-Control-Allow-Credentials": true,
		},
		credentials: "include",
		body: eventObj,
	});
};
