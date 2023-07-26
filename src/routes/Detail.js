import {
    Link
  } from "react-router-dom"; //useParams와 함께 쓰지말고 단독으로 따로 쓸것.
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const [movieInfo, setMovieInfo] = useState({});
    const { chill } = useParams(); //객체분해할당
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${chill}`)).json();
        setMovieInfo(json.data.movie);
        console.log(json);
    }
    console.log(movieInfo);
    useEffect(() => {
       getMovie();
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.movieInfoWrap}>
                <img src={movieInfo.medium_cover_image} />
                <h2>{movieInfo.title}</h2>
                <p>{movieInfo.description_full}</p>
                <ul>
                    <li>Year: {movieInfo.year}</li>
                    <li>Rating : {movieInfo.rating}</li>
                    <li>Runtime : {movieInfo.runtime} min</li>
                    <li>Genres : {movieInfo.genres && movieInfo.genres.length > 1 ? movieInfo.genres.map((g) => <span>/ {g} /</span>) : (movieInfo.genres ? movieInfo.genres.map((g) => <span>{g}</span>) : null)}</li>
                    <li><a href={movieInfo.url}>Download</a></li>
                </ul>
            </div>
            <p className={styles.goBack_btn}><Link to="/">&lt;&lt;Go Back</Link></p> 
        </div>
    )       
}
//&lt;&lt; 웹상에서 << 나온다. 리액트안의 html에서는 &lt;&lt;로 쓸 것
export default Detail;
