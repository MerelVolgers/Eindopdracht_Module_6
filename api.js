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



// const data = {description: "buy avocado's", done:false};


const postData = async () => { 
    const result = await fetch (apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json"
        }
    });
    const json = await result.json();
    console.log(json);
};

// postData();

getData();


const deleteDataById = async (id) => {
    const result = await fetch (`apiUrl${id}`, {
        method: "DELETE",
    });
    const json = await result.json();
    console.log(json);
};

deleteDataById("55ff5d6e15d6b2b00170547d5");

getData();