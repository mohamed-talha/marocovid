function createAccount() {
	let url = "http://192.168.1.20:8083/account/createAccount";

	let data = {
	id: document.getElementById('accountId').value,
	numberOfDirectInfectedContact: 0,
	numberOfIndirectInfectedContact: 0,
	isInfected: false,
	infectedOn: 0,
	infectionDeclaredBy: 'null'
	}

	let fetchData = { 
	method: 'POST',     
	headers: {
	  'Accept': 'application/json',
	  'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
	}

	fetch(url, fetchData)
	.then((resp) => resp.json())
	.then(function(account) {
		window.location.href = "create-account-reply.html?error=0&id="+account.id+"&direct="+account.numberOfDirectInfectedContact+"&indirect="+account.numberOfIndirectInfectedContact;
	});
}