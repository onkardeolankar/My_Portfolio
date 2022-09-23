import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Projects = () => {
	return (
		<>
			<div className="project-details">
				<h2>Projects</h2>
				<hr />
				<div className="project-items">
					<div>
						<Card sx={{ maxWidth: 350 }}>
							<CardMedia
								component="img"
								height="350"
								image="https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
								alt="pokemon"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Pokemon_App
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Fetches the data from the pokemon api with its respective
									factors required.
								</Typography>
								<a
									href="https://pokedex-api-nine.vercel.app/"
									className="project-link"
								>
									Link
								</a>
							</CardContent>
						</Card>
					</div>
					<div>
						<Card sx={{ maxWidth: 350 }}>
							<CardMedia
								component="img"
								height="350"
								image="https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?b=1&k=20&m=1191001701&s=612x612&w=0&h=cL3uI5lZY3rjg7nb-58Y92qHDbxTTtYfsSchO74O9m8="
								alt="movie_app"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Movie App
								</Typography>
								<Typography variant="body2" color="text.secondary">
                                Created an app which uses useState and other react hooks features with backend involved as NodeJs.
								</Typography>
								<a
									href="https://movie-appdeploy.vercel.app/"
									className="project-link"
								>
									Link
								</a>
							</CardContent>
						</Card>
					</div>
					<div>
						<Card sx={{ maxWidth: 350 }}>
							<CardMedia
								component="img"
								height="350"
								image="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg"
								alt="personal_portfolio"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Portfolio
								</Typography>
								<Typography variant="body2" color="text.secondary">
                                Created an app which uses useState and other react hooks features with backend involved as NodeJs.
								</Typography>
								<a
									href="https://myportfolio-onkar.vercel.app/"
									className="project-link"
								>
									Link
								</a>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
