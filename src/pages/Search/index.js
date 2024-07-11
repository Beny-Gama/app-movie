import style from './Search.module.css';
import Footer from '../../components/Footer'; 
import Header from '../../components/Header';
import Container from '../../components/Container';

import videos from '../../json/videos.json';
import SearchVideoList from '../../components/SeatchList';

function Search() {
    return (
        <>
        <Header />
        <Container>
        <section className={style.search}>
            <h2>Perguisar</h2>
            
            <SearchVideoList videos={videos}/>
        </section>
        </Container>
        <Footer />
        </>
    );
}

export default Search;
