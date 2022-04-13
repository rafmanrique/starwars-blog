const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "https://www.swapi.tech/api",
			endPoints: ["people","planets","vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets:JSON.parse(localStorage.getItem("planets")) || [],
			vehicles:JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || []
		},
		actions: {
			fetchItems: async() =>{
				let store = getStore();
				if (!store.people.length){
					for (let endPoint of store.endPoints){
						try{
							let response = await fetch(`${store.URL_BASE}/${endPoint}`);
							if (response.ok){
								let data = await response.json();
								data.results.map(async (item)=>{
									let responseTwo = await fetch(`${store.URL_BASE}/${endPoint}/${item.uid}`)
									let result = await responseTwo.json();
									setStore({
										...store,
										[endPoint]:[...store[endPoint],result.result],
									})
									localStorage.setItem(endPoint,JSON.stringify(store[endPoint]))
								});
							}
						}catch(error){
							console.log(error);
						}
					}
				}
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
