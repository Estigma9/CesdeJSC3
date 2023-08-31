// PROMISES, ASYNC/AWAIT

const datos = [{
    id: 1,
    title: 'La la land',
    year: 2016
}, {
    id: 2,
    title: 'The Whale',
    year: 2022
}, {
    id: 3,
    title: 'Gattaca: experimento genético',
    year: 1997
}];


// const getDatos = () =>{
//     return datos;
// }

// const getDatos = () =>{
//     setTimeout(()=>{
//         return datos;
//     }, 3000);
// };

// console.log(getDatos());


// Promesas
const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 3000);
    });
};

// getDatos().then((datos)=>console.log(datos));



//async y await
async function fetchingData (){
    try {
        const masDatos = await getDatos();
        console.log(masDatos);
        
    } catch (e) {
        console.log("Fallo del sistema, corre");        
    }
}

fetchingData();
