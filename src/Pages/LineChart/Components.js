import { line, curveNatural } from 'd3';

export const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) => {
	return (
		xScale.ticks().map((tick) => (
			<g className="tick" key={tick} transform={`translate(${xScale(tick)}, 0)`}>
				<line
					y2={innerHeight}
				/>
				<text y={innerHeight + tickOffset} dy='0.75em' style={{ textAnchor: 'middle' }}>{tickFormat(tick)}</text>
			</g>
		))
	)
}

export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) => {
	return (
		yScale.ticks().map((tick) => (
			<g key={tick} className="tick" transform={`translate(0, ${yScale(tick)})`}>
				<line x2={innerWidth} />
				<text

					style={{ textAnchor: 'end' }}
					dy='.32em'
					x={`-${tickOffset}`}
				>{tick}</text>
			</g>
		))
	)
}

export const Marks = ({ yScale, xScale, data, yValue, xValue, tooltipFormat, circleRadius = 10 }) => {
	return (
		<g className="mark">
			<path
				d={line()
					.x(d => xScale(xValue(d)))
					.y(d => yScale(yValue(d)))
					.curve(curveNatural)(data)
				}

			/>
			{
				data.map((d, i) => (
					<circle
						className='cirles-hover'
						key={i}
						cx={xScale(xValue(d))}
						cy={yScale(yValue(d))}
						r={circleRadius}
					>
						<title>{Math.floor(yValue(d))}°C</title>
					</circle>
				))
			}
		</g>

	)
}