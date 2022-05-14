const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: JSON.parse(localStorage.getItem("token")) || "",
			URL_BASE: "http://127.0.0.1:3000",
			endPoints: ["people", "planets"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || []
		},
		actions: {

			handleGetRemoteFavorites: async () => {
				let store = getStore();
				const response = await fetch(`${store.URL_BASE}/favorites`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${store.token}`
					}
				})
				let data = await response.json()
				console.log(data)

				if (response.ok) {
					setStore({
						...store, favorites: data
					});
					localStorage.setItem("favorites", JSON.stringify(data));
				}
			},

			handleRegister: async (email, password) => {
				let store = getStore();
				let actions = getActions();

				const response = await fetch(`${store.URL_BASE}/user`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(email, password)
				})


				if (response.ok) {

					actions.handleLogin(email, password)
					// localStorage.setItem("token",data.token)
				}
			},

			handleLogin: async (login) => {
				let store = getStore();
				const response = await fetch(`${store.URL_BASE}/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(login)
				})
				let data = await response.json()
				if (response.ok) {

					setStore({
						...store, token: data.token
					});
					// localStorage.setItem("token",data.token);

				}
			},


			fetchItems: async () => {
				let store = getStore();
				if (!store.people.length && !store.planets.length) {
					try {
						let responsePeople = await fetch(`${store.URL_BASE}/people`);
						let responsePlanet = await fetch(`${store.URL_BASE}/planet`);
						let data1 = await responsePeople.json();
						let data2 = await responsePlanet.json();
						console.log(data1)
						console.log(data2)
						if (responsePeople.ok && responsePlanet.ok) {
							localStorage.setItem("people", JSON.stringify(data1))
							localStorage.setItem("planets", JSON.stringify(data2))
						}

					} catch (error) {
						console.log('error', error);
					}
				}
				// let store = getStore();
				// if (!store.people.length){
				// 	for (let endPoint of store.endPoints){
				// 		try{
				// 			let response = await fetch(`${store.URL_BASE}/${endPoint}`);
				// 			if (response.ok){
				// 				let data = await response.json();
				// 				data.results.map(async (item)=>{
				// 					let responseTwo = await fetch(`${store.URL_BASE}/${endPoint}/${item.uid}`)
				// 					let result = await responseTwo.json();
				// 					setStore({
				// 						...store,
				// 						[endPoint]:[...store[endPoint],result.result],
				// 					})
				// 					localStorage.setItem(endPoint,JSON.stringify(store[endPoint]))
				// 				});
				// 			}
				// 		}catch(error){
				// 			console.log(error);
				// 		}
				// 	}
				// }
			},

			handleLogOut: () => {
				let store = getStore();
				setStore({
					favorites: []
				})
				localStorage.setItem(
					"favorites",
					JSON.stringify(getStore().favorites)
				);
				setStore({
					...store,
					token: ""
				})
				localStorage.setItem("token", JSON.stringify(""))
			},
			// addFavorites: (id) =>{
			// 	const store = getStore()
			// 	let exists = store.favorites.find((item)=>{
			// 		return item == id	
			// 	})
			// 	if(!exists){
			// 		setStore({
			// 			...store,
			// 			favorites:[...store.favorites,id]
			// 		})
			// 		localStorage.setItem("favorites" ,JSON.stringify(store.favorites))
			// 	}

			// },

			// deleteFavs: (id) =>{
			// 	const store = getStore()
			// 	let newFavorite = store.favorites.filter((item,index)=>{
			// 		return id != index
			// 	})
			// 	store.favorites = newFavorite
			// 	setStore({
			// 		...store,
			// 		favorites: store.favorites
			// 	})
			// 	localStorage.setItem("favorites", JSON.stringify(store.favorites))
			// },

			// handleGetRemoteFavorites: async () => {
			// 	let store = getStore();
			// 	const response = await fetch (`${store.URL_BASE}/Favorites`, {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 			"Authorization": `Bearer ${store.token}`
			// 		}
			// 		})
			// 		let data = await response.json()
			// 		console.log(data)

			// 		if (response.ok){
			// 			setStore({
			// 				...store, favorites:data 
			// 			});
			// 			localStorage.setItem("favorites", JSON.stringify(getStore().favorites));
			// 		}
			// }

		}
	}
};

export default getState;
