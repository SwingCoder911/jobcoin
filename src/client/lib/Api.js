import axios from 'axios';
const validateAddressUrl = '/api/validate/';
const call = (url, method, formData = null) => {
    let options = { url, method };
    if(formData !== null){
        options['data'] = formData;
    }
    return axios(options);
}
export default class Api{
    static ValidateAddress(inputAddress){
        return new Promise((resolve, reject) => {
            let url = `/api/validate/${inputAddress}`;
            call(url, 'GET')
                .then(result => {
                    console.log(result);
                    resolve(result);
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        });        
    }
}