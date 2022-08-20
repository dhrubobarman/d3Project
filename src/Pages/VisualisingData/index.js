import { useEffect, useState } from 'react'
import { Typography, Box, LinearProgress, Container } from '@mui/material';
import { arc, csvParse, pie } from 'd3';


const csvUrl = 'https://gist.githubusercontent.com/dhrubobarman/5692e915924296b7b503551f6662b58e/raw/cssNamedColor.csv'

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;



const pieArc = arc()
	.innerRadius(0)
	.outerRadius(width);

const colorPie = pie().value(1);



export const VisualisingData = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetchText(csvUrl)

	}, [])

	const fetchText = async (url) => {
		const response = await fetch(url);
		const text = await response.text();
		const data = csvParse(text)
		setData(data);
	}

	return (
		<Container>
			<Typography textAlign={'center'} variant="h3">Visualising Data With React and d3</Typography>
			{!data ?
				(
					<Box sx={{ maxWidth: '600px', margin: '60px auto 0' }}>
						<LinearProgress />
					</Box>
				) : (
					<>
						<Box mt={3}>
							<svg viewBox={`0 0 ${width} ${height}`}>
								<g transform={`translate(${centerX},${centerY})`}>
									{colorPie(data).map(d => (
										<path fill={d.data['RGB hex value']} d={pieArc(d)} />
									))}
								</g>
							</svg>
						</Box>
						<Box mt={3}>
							{data.map(d => (
								<Box key={d['Keyword']} sx={{ backgroundColor: d['RGB hex value'], width: '100%', height: 3 }}></Box>
							))}
						</Box>
					</>

				)
			}
		</Container>
	)
}