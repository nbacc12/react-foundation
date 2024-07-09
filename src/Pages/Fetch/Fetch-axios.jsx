//'Axios (3rd Party)' data fetch

import {useState, useEffect} from 'react';
import axios from 'axios';

const Fetch_axios = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            setPhotos(res.data)
        })
        .catch(err => console.error('Data not found', err))
    }, [])

    
    // const photos = [
    //     {
    //       "albumId": 1,
    //       "id": 1,
    //       "title": "accusamus beatae ad facilis cum similique qui sunt",
    //       "url": "https://via.placeholder.com/600/92c952",
    //       "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    //     },
    //     {
    //       "albumId": 1,
    //       "id": 2,
    //       "title": "reprehenderit est deserunt velit ipsam",
    //       "url": "https://via.placeholder.com/600/771796",
    //       "thumbnailUrl": "https://via.placeholder.com/150/771796"
    //     },
    //     {
    //       "albumId": 1,
    //       "id": 3,
    //       "title": "officia porro iure quia iusto qui ipsa ut modi",
    //       "url": "https://via.placeholder.com/600/24f355",
    //       "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    //     }
    // ]

    return(
        <div className='flex flex-col items-center'>
            
            <h3 className='font-bold text-blue-700 m-4'> Example: Photos </h3>

            <div className='flex flex-wrap place-content-center mb-5'>
            {(photos.slice(0, 21)).map(photo => (
                <img key={photo.id} src={photo.url} alt={photo.title} width={200}/>
            ))}
            </div>

        </div>
    )
}

export default Fetch_axios;