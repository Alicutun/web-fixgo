import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../sass/pages/movieDetail.scss";
import StarRating from "../components/subcomponents/StarRating.jsx";
import Feedback from "../components/subcomponents/Feedback";
import Booking from "../components/subcomponents/Booking";
import axios from "axios";

const MovieDetail = () => {
   function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [ mnth, day,date.getFullYear()].join("/");
  }
  const [description, setDescription] = useState(true);
  // const [payment, setPayment] = useState(false);
  // call lấy data movie detail theo id
  const [movie, setMovie] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/${name}`
      );
      setMovie(data);
    };
    fetchMovie();
  }, [name]);
  console.log(movie);

  return (
    // bấm thả xuống description
    <div className="detail">
      <div className="main">
        <div className="title">Movie Details</div>
        <div className="detailmovie">
          <div className="info">
            <img src={movie.image} alt="" />
            <div className="info-text">
              <div className="name">{movie.name}</div>
              <div className="rate">
                <StarRating rating={movie.rate} />
                <div className="rating">{movie.rate}/10</div>
              </div>
              <div className="text">
                <b>Director:</b> {movie.director} <br />
                <b>Cast:</b> {movie.cast} <br />
                <b>Genre:</b> {movie.genre} <br />
                <b>Release time:</b> {convert(movie.releaseTime)} <br />
                <b>Running time:</b> {movie.runningTime} minutes
                <br />
                <b>Language:</b> {movie.language} <br />
              </div>
            </div>
          </div>
          <div className="video_ytb">
            <iframe
              width="480"
              height="270"
              src={movie.linkReview}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="description">
          <div className="btn_description">
            Description &nbsp;
            <i
              onClick={() => setDescription(!description)}
              className="fa-solid fa-caret-down"
            ></i>
          </div>
          {description && <p>&emsp; &emsp; {movie.describe}</p>}
        </div>
        <div className="title">Booking</div>
        {/* <Booking idMovie={movie._id} nameMovie={movie.name} />
         */}
        <Booking idMovie={movie._id} nameMovie={movie.name} />
        <div className="title">Feedback</div>
        <Feedback
          idMovie={movie._id}
          rate={movie.rate}
          nameMovie={movie.name}
        />
      </div>
    </div>
  );
};

export default MovieDetail;
