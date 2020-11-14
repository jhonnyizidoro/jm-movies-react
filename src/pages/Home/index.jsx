import React from 'react'
import recentMovies from '../../util/recent.json'

import SearchForm from '../../components/SearchForm'
import Grid from '../../components/Grid'
import GridItem from '../../components/GridItem'

const HomePage = () => (
	<>
		<SearchForm />
		<Grid title="Pesquisas recentes">
			{
				recentMovies.map(({ imdbID: id, Title: title, Poster: poster, Year: year, Plot: plot }) => (
					<GridItem
						title={title}
						poster={poster}
						year={year}
						plot={plot}
						key={id}
						id={id}
					/>
				))
			}
		</Grid>
	</>
)

export default HomePage