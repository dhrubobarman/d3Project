import { Typography, Box, LinearProgress, Container } from '@mui/material';
import { scaleBand, scaleLinear, max, format } from 'd3';
import { useData } from './useData';
import { AxisLeft, AxisBottom, Marks } from './Components';
import './styles.css'



const width = 960;
const height = 500;
const margin = { top: 20, bottom: 65, left: 220, right: 30 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.bottom;
const xAxisOffset = 50;

const siFormat = format('.2s');
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B')



export const BarChart = () => {
	const data = useData()

	if (!data) {
		return <>
			<Typography textAlign={"center"} variant="h3">World Population Bar Chart</Typography>
			<Box sx={{ maxWidth: '600px', margin: '60px auto 0' }}>
				<LinearProgress />
			</Box>
		</>
	}

	const yValue = d => d.Country;
	const xValue = d => d.Population;

	const yScale = scaleBand()
		.domain(data.map(yValue))
		.range([0, innerHeight])
		.paddingInner(0.15);

	const xScale = scaleLinear()
		.domain([0, max(data, xValue)])
		.range([0, innerWidth]);

	return (
		<Container>
			<Typography textAlign={"center"} variant="h3">World Population Bar Chart</Typography>
			<Box mt={3}>
				<svg viewBox={`0 0 ${width} ${height}`}>
					<g transform={`translate(${margin.left}, ${margin.top})`}>
						<text
							className='axix-label'
							y={innerHeight + xAxisOffset}
							x={innerWidth / 2}
							textAnchor='middle'>Population</text>
						<AxisBottom
							xScale={xScale}
							innerHeight={innerHeight}
							tickFormat={xAxisTickFormat} />
						<AxisLeft yScale={yScale} />
						<Marks
							yScale={yScale}
							xScale={xScale}
							data={data}
							yValue={yValue}
							xValue={xValue}
							tooltipFormat={xAxisTickFormat}
						/>
					</g>
				</svg>
			</Box>


		</Container >
	)
}