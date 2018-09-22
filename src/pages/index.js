import React from 'react'
import { graphql } from 'gatsby'

import Header from '../components/header'

export default ({ data }) => (
	<div>
		<Header title={data.site.siteMetadata.title} />
		{data.site.siteMetadata.description}
	</div>
)

export const query = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`