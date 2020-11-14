import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import FormInput from '../FormInput'

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

import {
	SearchFormWrapper,
	SearchFormTitle,
	SearchFormElement,
} from './styles'

const SearchForm = ({ history }) => {

	const [search, setSearch] = useState(null)

	const handleSubmit = event => {
		event.preventDefault()
		history.push(`/movie/${search}`)
	}

	return (
		<SearchFormWrapper>
			<SearchFormTitle>Pesquise informações sobre suas series e filmes favoritos</SearchFormTitle>
			<SearchFormElement onSubmit={handleSubmit}>
				<FormInput
					placeholder="Pesquise pelo título"
					icon={SearchIcon}
					type="search"
					onChange={({ target: { value } }) => setSearch(value)}
				/>
			</SearchFormElement>
		</SearchFormWrapper>
	)
}

export default withRouter(SearchForm)