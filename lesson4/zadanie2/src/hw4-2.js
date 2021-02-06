
function userInfo(user) {
	if (user.registered === true) {
		console.log(`Дата регистрации: ${user.data}`)
	} else {
		console.log (`Незарегистрированный пользователь: ${user.name}`)
	}
}
const user1 = {
	name: 'Пупа',
	registered: true,
	data: '31.12.20',
	getInfo: userInfo 
}

const user2 = {
	name: 'Лупа',
	registered: false,
	data: '01.01.21',
	getInfo: userInfo
}

const us1 = user1.getInfo(user1);
const us2 = user2.getInfo(user2);


