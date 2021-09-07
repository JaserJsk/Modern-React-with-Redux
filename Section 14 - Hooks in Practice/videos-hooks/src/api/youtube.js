import Axios from 'axios';

const KEY = 'AIzaSyB48wcW85pYVVjgk8QbLnTx35ZDr9bWPsM';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});