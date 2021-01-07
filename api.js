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


// const data = {description: "clean room", done:false};


const postData = async (data) => { 
    // const data = createNewItem;
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

// getData();


const deleteDataById = async (id) => {
    const idToRemove = apiUrl + id;
    const result = await fetch (idToRemove, {
        method: "DELETE",
    });
    const json = await result.json();
    console.log(json);
};

// deleteDataById("5ff5de205d6b2b0017054860");

// getData();
