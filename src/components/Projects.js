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
								image="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg"
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
								image="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg"
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
									href="https://onkard-portfolio.vercel.app/"
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
