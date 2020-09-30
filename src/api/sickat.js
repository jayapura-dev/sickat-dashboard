import axios from 'axios';

//const token = '886b7981670d4301a8a8aaadb3709084';

export default axios.create({
    baseURL: 'https://sickat.jayapurakab.go.id/api'
    //headers: {
        //'api_sickat': token
    //}
});