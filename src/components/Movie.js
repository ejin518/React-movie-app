import {
  Link
} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}) {
    return <div className={styles.movie}>
    <img className={styles.movie__img} src={coverImg} alt={title}/>
    <div className={styles.movie__title}>
      <h2>{title}</h2>
    </div>
    <h3 className={styles.movie__year}>{year}</h3>
    <p>{summary.length > 230 ? `${summary.slice(0, 235)}...` : summary}</p>
    <ul className={styles.movie__genres}>
      {genres.map(g => <li key={g}>{g}</li>)}
    </ul>
    <div>
    <button className={styles.movie__button}><Link to={`/movie/${id}`}>See More</Link></button>
    </div>
  </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;