
const URL = 'https://jsonplaceholder.typicode.com';

const usersURL = URL + '/users';

const getUsers = async () => { 
	const getUsersReq = await fetch(usersURL);
	const data = await getUsersReq.json();
	users = data;
	
}
const userListElem = document.getElementById('user-list')
const start = async () => {
	await getUsers();

	showUsers(users);
	addNewUserButtonHandler();


}


start();
