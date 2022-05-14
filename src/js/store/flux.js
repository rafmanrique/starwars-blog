const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token:JSON.parse(localStorage.getItem("token")) || "",
			URL_BASE: "http://127.0.0.1:3000",
			endPoints: ["people","planets","vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets:JSON.parse(localStorage.getItem("planets")) || [],
			vehicles:JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || []
		},
		actions: {
			handleLogin: async (login) => {
				let store = getStore();
				const response = await fetch (`${store.URL_BASE}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(login)
				})
				let data = await response.json()
				
				if (response.ok){
					
					setStore({
						...store,token:data.token
					})
					localStorage.setItem("token",data.token)
				}
			},
			
			
			fetchItems: async() =>{
				let store = getStore();
				if(!store.people.length && !store.planets.length){
					try{let responsePeople = await fetch(`${store.URL_BASE}/people`);
						let responsePlanet = await fetch(`${store.URL_BASE}/planet`);
						let data1 = await responsePeople.json();
						let data2 = await responsePlanet.json();
						console.log(data1)
						console.log(data2)
						if (responsePeople.ok && responsePlanet.ok){
							localStorage.setItem("people", JSON.stringify(data1))
							localStorage.setItem("planets", JSON.stringify(data2))
						}

					}catch (error){
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
			addFavorites: (id) =>{
				const store = getStore()
				let exists = store.favorites.find((item)=>{
					return item == id	
				})
				if(!exists){
					setStore({
						...store,
						favorites:[...store.favorites,id]
					})
					localStorage.setItem("favorites" ,JSON.stringify(store.favorites))
				}
				
			},

			deleteFavs: (id) =>{
				const store = getStore()
				let newFavorite = store.favorites.filter((item,index)=>{
					return id != index
				})
				store.favorites = newFavorite
				setStore({
					...store,
					favorites: store.favorites
				})
				localStorage.setItem("favorites", JSON.stringify(store.favorites))
			}
			}
		}
	};

export default getState;
