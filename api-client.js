const baseUrl = "https://jsonbox.io/";
const apiUrl = "https://jsonbox.io/box_1eace51228e3d7789800/";
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
};

const postData = async (data) => { 
    const result = await fetch (apiUrl, {
        method: "POST",
        body: JSON.stringify(data), 
        headers: {
            "Content-Type" : "application/json"
        }
    });
    const json = await result.json();
    console.log(json);
    // console.log(json._id);
    return(json._id);
};


const deleteDataById = async (id) => {
    const idToRemove = apiUrl + id;
    const result = await fetch (idToRemove, {
        method: "DELETE",
    });
    const json = await result.json();
    console.log(json);
};

// <-----------PUT: update en bestaande taak met de PUT method ----->
// <------PUT: update een bestaande taak de property done of niet done--->

const putData = async (id, data) => {
    const idToUpdate = apiUrl + id;
    const result = await fetch (idToUpdate, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const json = await result.json();
    console.log(json); 
} 

