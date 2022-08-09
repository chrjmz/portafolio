// const requestURL = '/pro.json';
// const request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// let Projectos = request;

// let datareturn;
// // API for get requests

// let fetchRes = fetch("/pro.json");
//     fetchRes.then(res =>res.json())
//     .then(data => {
//         datareturn = data;
//         console.log(data)
//         console.log(datareturn)
//         return data
//     })

// async function f1() {
//    await fetchRes();
// }
let data_llamada
const exportar_json = async() => {
    try {
        const resp = await fetch ("/pro.json")
        data_llamada = await resp.json()
        console.log(data_llamada)
        return data_llamada
    } catch (error) {
        console.error(error)
    }
}
    
export default exportar_json();