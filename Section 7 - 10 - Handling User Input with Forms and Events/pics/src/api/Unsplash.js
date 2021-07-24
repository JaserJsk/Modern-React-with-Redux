import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID rSRWhEY153bOrcXhxq9ac3s9dHSjkBlj8jdQjNhPu54'
    }
 });