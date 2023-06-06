import React, { useState, useEffect } from "react";
import "../sass/pages/home.scss";
import axios from "axios";
import Carousel from "t-a-e-3d-carousel-reactjs";
import { BASE_URL } from "../constants";
import { ListMovies, SkeletonListMovie, TopStory } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
	const [listMovie, setListMovie] = useState([]);

	useEffect(() => {
		const fetchMovie = async () => {
			let res = await axios.get(`${BASE_URL}/api/movies`);
			try {
				setListMovie(res?.data);
			} catch (err) {
				toast.err(err.message, { autoClose: 2000 });
			}
		};
		fetchMovie();
	}, []);

	const image = [
		{
			title: "trainsformers",
			url: "https://bloganchoi.com/wp-content/uploads/2020/07/phim-robot-hanh-dong-hay-nhat.jpg",
		},
		{
			title: "Dungeons & Dragons: Thief's Honor ",
			url: "https://www.themoviedb.org/t/p/w500_and_h282_face/oblUNeHlwV3VsjB5ITMlco5ZSOF.jpg",
		},
		{
			title: "Legendary Fist 3 (2023)",
			url: "https://www.themoviedb.org/t/p/w500_and_h282_face/1AOZAcGgJuS85iec4xvqCAnIDrN.jpg",
		},
		{
			title: "Guardians of the Galaxy 3 (2023)",
			url: "https://www.themoviedb.org/t/p/original/51vreLbrGwzAg4WRCHgitWz6Naw.jpg",
		},

		{
			title: "Super Mario Brothers (2023)",
			url: "https://www.themoviedb.org/t/p/w500_and_h282_face/2klQ1z1fcHGgQPevbEQdkCnzyuS.jpg",
		},
		{
			title: "Knocking In The Wooden House (2023)",
			url: "https://www.themoviedb.org/t/p/w500_and_h282_face/1dubuCInk9DM9JBjiItBGkkkZx0.jpg",
		},
		{
			title: "Covenant (2023)",
			url: "https://www.themoviedb.org/t/p/w500_and_h282_face/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
		},

		// {
		// 	title: "black panther",
		// 	url: "https://kyty.vn/wp-content/uploads/2021/06/black-panther-744x419-1.png",
		// },

		// {
		// 	title: " decibel",
		// 	url: "https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/t/h/thumb-decibel.jpg",
		// },
		// {
		// 	title: "Avatar 2",
		// 	url: "https://techbiz.vn/attachments/1671172015866-jpeg.153",
		// },
	];

	return (
		<div className='home'>
			<div className='main'>
				<TopStory />
				<Carousel imageList={image} autoPlay={true} interval={1000} />
				<div className='tag_movie'>
					<div className='title'>Now Showing</div>
					{listMovie.length > 0 ? (
						<ListMovies list={listMovie.reverse()} />
					) : (
						<SkeletonListMovie />
					)}
				</div>
				<div className='tag_movie' style={{ marginBottom: "20px" }}>
					<div className='title'>Comming Soon</div>
				</div>
				<ToastContainer />
			</div>
		</div>
	);
};
