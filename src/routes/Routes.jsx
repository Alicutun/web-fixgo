import React from "react";
import { Routes as Rou, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Movie from "../pages/Movie.jsx";
import News from "../pages/News.jsx";
import MovieDetail from "../pages/MovieDetail.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import BookingHistory from "../pages/BookingHistory.jsx";
import Support from "../pages/Support.jsx";
import NotFound from "../components/subcomponents/NotFound.jsx";
const Routes = () => {
  return (
    <Rou>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Movie" element={<Movie />} />
      <Route path="/News" element={<News />} />
      <Route path="/MovieDetail/:name" element={<MovieDetail />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/BookingHistory" element={<BookingHistory />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/NotFound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/NotFound" />} />
    </Rou>
  );
};

export default Routes;
