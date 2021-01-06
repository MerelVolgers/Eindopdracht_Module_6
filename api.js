const baseUrl = "https://jsonbox.io/";
const apiUrl = "https://jsonbox.io/box_1eace51228e3d7789800";
const endPoint = "box_1eace51228e3d7789800";



const getData = async () => {
    try {
        const response = await fetch (apiUrl, {
            method: "GET",
            headers: {}
        })
        const data = await response.json();
        console.log(data);
        return(data)
    } catch (error) {
        console.log(error);
    }
}

const data = getData();
console.log(data)
