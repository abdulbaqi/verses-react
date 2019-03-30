
// function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }

const QuranAPI = {
	search(v){
		return fetch(`http://api.alquran.cloud/v1/ayah/${v}/editions/quran-uthmani,en.asad`)
			.then(response => {
				
			return response.json();
		}).then(jsonResponse=>{
			if(jsonResponse.code==200){
				return jsonResponse.data.map(verse=>{return verse.text})
			} else {
				return ['wrong','wrong']
			}
		})

}};

export default QuranAPI;