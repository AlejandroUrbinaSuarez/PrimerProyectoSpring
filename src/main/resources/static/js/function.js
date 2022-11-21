async function funcion(){
	await fetch('api/persons', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    window.location.href="api/persons"
}