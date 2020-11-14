import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { updateFavorites } from '../../redux/movie/movie.actions'
import { selectFavoriteMovies } from '../../redux/movie/movie.selectors'
import { toggleMovieFromFavorites, movieIsOnFavoriteMovies } from '../../redux/movie/movie.util'

import Loader from '../../components/Loader'
import ImagePlaceholder from '../../assets/images/image-placeholder.png'
import { ReactComponent as LeftArrowIcon } from '../../assets/icons/left-arrow.svg'
import { ReactComponent as StarFilledIcon } from '../../assets/icons/star-filled.svg'
import { ReactComponent as StarOutlinedIcon } from '../../assets/icons/star-outlined.svg'

import {
	MovieContainer,
	MovieReturnLink,
	MovieReturnIcon,
	MovieReturnText,
	MovieWrapper,
	MovieImageWrapper,
	MovieImageWithBlur,
	MovieImage,
	MovieInformationWrapper,
	MovieTitleWrapper,
	MovieTitle,
	MovieSubtitle,
	MovieDescription,
	MovieFavorite,
	MovieFavoriteIcon,
	MovieRatings,
	MovieRating,
	MovieRatingTitle,
	MovieRatingValue,
} from './styles'

const MoviePage = ({ favorites, updateFavorites }) => {
	const [movie, setMovie] = useState(null)
	const { title } = useParams()

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=b3a25190&t=${title}`)
			.then(res => res.json())
			.then(data => setMovie(data))
	}, [title])

	const handleFavorite = event => {
		event.preventDefault()
		const {
			imdbID: id,
			Poster: poster,
			Title: title,
			Year: year,
			Plot: plot,
		} = movie
		updateFavorites(toggleMovieFromFavorites(favorites, {
			id,
			title,
			poster,
			year,
			plot,
		}))
	}

	if (movie && movie.Response !== 'False') {
		const {
			imdbRating,
			imdbVotes,
			imdbID: id,
			Poster: poster,
			Title: title,
			Year: year,
			Production: production,
			Metascore: metaScore,
			Plot: plot,
		} = movie

		return (
			<MovieContainer>
				<MovieReturnLink to="/">
					<MovieReturnIcon>
						<LeftArrowIcon />
					</MovieReturnIcon>
					<MovieReturnText>Pesquisar outro título</MovieReturnText>
				</MovieReturnLink>
				<MovieWrapper>
					<MovieImageWrapper>
						<MovieImageWithBlur
							src={poster !== 'N/A' ? poster : ImagePlaceholder}
							alt={title}
							title={title}
						/>
						<MovieImage
							src={poster !== 'N/A' ? poster : ImagePlaceholder}
							alt={title}
							title={title}
						/>
					</MovieImageWrapper>
					<MovieInformationWrapper>
						<MovieTitleWrapper>
							<MovieTitle>{title}</MovieTitle>
						</MovieTitleWrapper>
						{
							production ?
								<MovieSubtitle>{production}, {year.replace(/–\s*$/, '')}</MovieSubtitle>
								:
								<MovieSubtitle>{year.replace(/–\s*$/, '')}</MovieSubtitle>
						}
						<MovieDescription>{plot}</MovieDescription>
						<MovieFavorite onClick={handleFavorite} title="Adicionar ou remover dos favoritos">
							{
								movieIsOnFavoriteMovies(favorites, id) ?
									(
										<>
											<MovieFavoriteIcon>
												<StarFilledIcon />
											</MovieFavoriteIcon>
											Remover dos favoritos
										</>
									)
									:
									(
										<>
											<MovieFavoriteIcon>
												<StarOutlinedIcon />
											</MovieFavoriteIcon>
											Adicionar aos favoritos
										</>
									)
							}
						</MovieFavorite>
						<MovieRatings>
							<MovieRating>
								<MovieRatingTitle>Meta Score</MovieRatingTitle>
								<MovieRatingValue>{metaScore}</MovieRatingValue>
							</MovieRating>
							<MovieRating>
								<MovieRatingTitle>Nota IMDB</MovieRatingTitle>
								<MovieRatingValue>{imdbRating}</MovieRatingValue>
							</MovieRating>
							<MovieRating>
								<MovieRatingTitle>Votos IMDB</MovieRatingTitle>
								<MovieRatingValue>{imdbVotes}</MovieRatingValue>
							</MovieRating>
						</MovieRatings>
					</MovieInformationWrapper>
				</MovieWrapper>
			</MovieContainer>
		)
	} else if (movie && movie.Response === 'False') {
		return (
			<MovieContainer>
				<MovieReturnLink to="/">
					<MovieReturnIcon>
						<LeftArrowIcon />
					</MovieReturnIcon>
					<MovieReturnText>Pesquisar outro título</MovieReturnText>
				</MovieReturnLink>
				<MovieWrapper>
					<MovieInformationWrapper>
						<MovieTitleWrapper>
							<MovieTitleWrapper>
								<MovieTitle>Oops, nada encontrado.</MovieTitle>
							</MovieTitleWrapper>
							<MovieSubtitle>Sua pesquisa por "{title}" não teve resultados.</MovieSubtitle>
						</MovieTitleWrapper>
					</MovieInformationWrapper>
				</MovieWrapper>
			</MovieContainer>
		)
	} else {
		return <Loader />
	}
}

const mapStateToProps = createStructuredSelector({
	favorites: selectFavoriteMovies,
})

const mapDispatchToProps = dispatch => ({
	updateFavorites: favorites => dispatch(updateFavorites(favorites)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)