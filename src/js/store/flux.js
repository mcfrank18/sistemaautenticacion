const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			logged: false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			enviarDatos: (e, mail, pass) => {
				e.preventDefault();
				console.log("mail", mail);
				console.log("pass", pass);

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: mail,
					password: pass
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3000-emerald-bee-81b0un6g.ws-us23.gitpod.io/user", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						sessionStorage.setItem("token", result.token);
						setStore({ logged: true });
					})
					.catch(error => console.log("error", error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
