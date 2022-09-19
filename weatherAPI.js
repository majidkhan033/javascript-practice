// import axios from "axios";
// import readlineSync from "readline-sync"

// function getWeather() {
//     try {
//         let cityname = readlineSync.question("Enter Cityname : ")
//         while(!cityname){
//             cityname=readlineSync.question("City name can't be Empty, please Re-Enter the Name : ")
//         }

//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a06f7ae7926aa6e13224d71923f`)

//         console.log(res.data);

//         //The Temperature in Hyderabad city is x centigrade

//         console.log(`The Temperature in ${cityname} is ${(res.data.main.temp-273).toFixed(2)} centigarde`)
//     }
//     catch (error) {
//         console.error(error);
//         console.error(error.response.data);
//     }
// }
// getWeather();



import axios from "axios";
import readlineSync from "readline-sync";

// function getWeather() {
//     try {
//         let cityname = readlineSync.question("Enter Cityname : ");
//         while (!cityname) {
//             cityname = readlineSync.question("City name cant be Empty please Re-enter the Name : ");
//         }

//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a06f7a0d0fae7926aa6e13224d71923f`)
//             .then((res) => {
//                 console.log(res.data);
//             })
//             .catch((err) => {
//                 // console.error(err);
//                 console.error(err.response.data);
//             })

//     } catch (error) {
//         console.error(error);
//     }
// }


async function getWeather() {
    try {
        let cityname = readlineSync.question("Enter Cityname : ");
        while (!cityname) {
            cityname = readlineSync.question("City name cant be Empty please Re-enter the Name : ");
        }

        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a06f7a0d0fae7926aa6e13224d71923f`)

        console.log(res.data);

        //The Temperature in X city is _ Centrigrade

        console.log(`The Temperature in ${cityname} is ${(res.data.main.temp - 273).toFixed(2)} Centigrade`)
    } catch (error) {
        console.error(error);
        console.error(err.response.data);
    }
}

getWeather();