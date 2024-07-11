import VideoList from '../VideoList';
import styles from './SearchList.module.css'
import videos from '../../json/videos.json'
import { useState } from 'react';

//filtrado videos por categoria ou titulo
function filtervideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState()
    const foundVideos = filtervideos(videos, searchText)


    return (
        <section className={styles.container}>
            <input 
                type='search'
                placeholder='Pesguisar...'
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />

        <VideoList videos={foundVideos} />
        </section>
    );
}

export default SearchVideoList;