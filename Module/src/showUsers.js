const AVATAR_URL = 'https://eu.ui-avatars.com/api/?name='

const createUserCard = (user) => {
	const { name,
			email,
			website,
			company: {

			}
	} = user

		// const name = user.name
	const userCard = document.createElement('div')
	// userCard.textContent = name
	userCard.className = 'user-card'

	const info = document.createElement('div')
	info.className = 'user-info'

	const userName = document.createElement('h4') 
	userName.textContent = name

	const userEmail = document.createElement('div') 
	userEmail.textContent = `Email: ${email}, webside: ${website}`


	const userAvatar = document.createElement('img')
	userAvatar.src = AVATAR_URL + name

	userCard.appendChild(userAvatar)
	userCard.appendChild(info)
	info.appendChild(userName)
	info.appendChild(userEmail)

	userListElem.appendChild(userCard)
}

const showUsers = users => {
	users.forEach(createUserCard)
}
