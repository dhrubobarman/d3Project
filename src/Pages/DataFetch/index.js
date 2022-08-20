import React, { useEffect, useState } from 'react'
import { Typography, Box, LinearProgress, Container } from '@mui/material';
import * as d3 from 'd3';
import { message } from '../../Components/helperComponents';

const csvUrl = 'https://gist.githubusercontent.com/dhrubobarman/5692e915924296b7b503551f6662b58e/raw/cssNamedColor.csv'



export const DataFetch = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetchText(csvUrl)
	}, [])

	const fetchText = async (url) => {
		const response = await fetch(url);
		const text = await response.text();
		const data = d3.csvParse(text)
		setData(data);
	}

	return (
		<Container>
			<Typography textAlign={'center'} variant="h3">Data Fetching</Typography>
			{!data ?
				(
					<Box sx={{ maxWidth: '600px', margin: '60px auto 0' }}>
						<LinearProgress />
					</Box>
				) : (
					<>
						<Typography variant="h4" component="pre" mt={3}>
							{message(data)}
						</Typography>
					</>

				)
			}
		</Container>
	)
}