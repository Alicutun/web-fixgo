import React from "react";
import { Skeleton } from "@mui/material";
import "../../sass/components/listMovie.scss";

export const SkeletonListMovie = () => {
	return (
		<div className='listMovie'>
			{Array.from(Array(5)).map((item, index) => (
				<div key={index} className='itemMovie'>
					<Skeleton />

					<Skeleton variant='rounded' height={304} width={205} />

					<div className='name'>
						<Skeleton />
					</div>
					<div className='genre-rate'>
						<Skeleton />
						<Skeleton />
					</div>
					<div className='btn_buy'>
						<Skeleton />
					</div>
				</div>
			))}
		</div>
	);
};
