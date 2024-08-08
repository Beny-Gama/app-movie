import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import whiteFavoriteIcon from './whiteFavoriteIcon.png'
import redFavoriteIcon from './redFavoriteIcon.png'
import { useFavoriteContest } from '../../contexts/Favorites';

function Card({ id }) {

    const { Favorite, addFavorite } = useFavoriteContest()

    const isFavorite = Favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? redFavoriteIcon : whiteFavoriteIcon

    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa"
                className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img 
                    src={icone}
                    alt="Ícone"
                    onClick={() => addFavorite({id})}
                />
                
            </figure>
        </section>
    );
}

export default Card;