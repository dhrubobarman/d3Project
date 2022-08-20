import { Typography, Box, LinearProgress, Container } from '@mui/material';
import { scaleTime, scaleLinear, extent, timeFormat } from 'd3';
import { useData } from './useData';
import { AxisLeft, AxisBottom, Marks } from './Components';
import './styles.css'

const pageHeading = "Stylized Line Chart"


const width = 960;
const height = 500;
const margin = { top: 20, bottom: 65, left: 90, right: 30 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.bottom;
const xAxisLableOffset = 50;
const yAxisLableOffset = 40;





export const LineChart = () => {
	const data = useData()

	if (!data) {
		return <>
			<Typography textAlign={'center'} variant="h3">{pageHeading}</Typography>
			<Box sx={{ maxWidth: '600px', margin: '60px auto 0' }}>
				<LinearProgress />
			</Box>
		</>
	}

	const xAxisLable = 'Time';
	const yAxisLable = 'Temperature';

	const xValue = d => d.timestamp;
	const yValue = d => d.temperature;

	const xAxisTickFormat = timeFormat('%a');

	const xScale = scaleTime()
		.domain(extent(data, xValue))
		.range([0, innerWidth])
		.nice();

	const yScale = scaleLinear()
		.domain(extent(data, yValue))
		.range([innerHeight, 0])
		.nice();


	return (
		<Container>
			<Typography textAlign={'center'} variant="h3">{pageHeading}</Typography>
			<Box mt={3}>
				<svg viewBox={`0 0 ${width} ${height}`}>
					<g transform={`translate(${margin.left}, ${margin.top})`}>
						<text
							className='axix-label'
							y={innerHeight + xAxisLableOffset}
							x={innerWidth / 2}
							textAnchor='middle'>{xAxisLable}</text>
						<text
							className='axix-label'
							textAnchor='middle'
							transform={`translate(${-yAxisLableOffset},${innerHeight / 2}), rotate(-90) `}
						>{yAxisLable}</text>
						<AxisBottom
							xScale={xScale}
							innerHeight={innerHeight}
							tickFormat={xAxisTickFormat}
							tickOffset={7}
						/>
						<AxisLeft yScale={yScale}
							innerWidth={innerWidth}
							tickOffset={7}
						/>
						<Marks
							yScale={yScale}
							xScale={xScale}
							data={data}
							yValue={yValue}
							xValue={xValue}
							tooltipFormat={xAxisTickFormat}
							circleRadius={5}
						/>
					</g>
				</svg>
			</Box>


		</Container >
	)
}