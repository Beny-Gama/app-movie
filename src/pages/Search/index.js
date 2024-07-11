import style from './Search.module.css';
import Footer from '../../components/Footer'; 
import Header from '../../components/Header';
import Container from '../../components/Container';
import VideoList from '../../components/VideoList';
import videos from '../../json/videos.json';

function Search() {
    return (
        <>
        <Header />
        <Container>
        <section className={style.search}>
            <h2>Perguisar</h2>
            
            <VideoList videos={videos}/>
        </section>
        </Container>
        <Footer />
        </>
    );
}

export default Search;
