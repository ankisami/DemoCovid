// API from https://github.com/florianzemma/CoronavirusAPI-France
// source : Ministère des Solidarités et de la Santé


export const GetDataCovid = async (userToken, customerId) => {
    const res = await fetch('https://coronavirusapi-france.now.sh/FranceLiveGlobalData',
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }
    );
    const response = await res.json();
    console.log("API's data =>", response)
    return response;
};