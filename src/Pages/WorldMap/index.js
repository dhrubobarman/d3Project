import { Typography, Box, LinearProgress, Container } from '@mui/material';
// import { scaleTime, scaleLinear, extent, timeFormat } from 'd3';
import { useData } from './useData';
import { Marks } from './Components';
import './styles.css'

const pageHeading = "World Map"


const width = 960;
const height = 500;





export const WorldMap = () => {
	const data = useData()

	if (!data) {
		return <>
			<Typography textAlign={'center'} variant="h3">{pageHeading}</Typography>
			<Box sx={{ maxWidth: '600px', margin: '60px auto 0' }}>
				<LinearProgress />
			</Box>
		</>
	}



	return (
		<Container>
			<Typography textAlign={'center'} variant="h3">{pageHeading}</Typography>
			<Box mt={3}>
				<svg viewBox={`0 0 ${width} ${height}`}>
					<Marks
						data={data}
					/>
				</svg>
			</Box>


		</Container >
	)
}