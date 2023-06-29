
const fetching = async (url, method, body, headers) => {

    const data = {...body};

    const options = {
        method,
        body: JSON.stringify(data),
        headers
    };

    try {

        const request = await fetch(url, { options });
    
        return request;
        
    } catch (error) {

        return error;
        
    };

};


module.exports = { fetching };