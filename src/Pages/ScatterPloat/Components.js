

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
			<g className="tick" transform={`translate(0, ${yScale(tick)})`}>
				<line x2={innerWidth} />
				<text
					key={tick}
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

		data.map((d, i) => (
			<circle
				key={i}
				className="mark"
				cx={xScale(xValue(d))}
				cy={yScale(yValue(d))}
				r={circleRadius}
			>
				<title>{tooltipFormat(xValue(d))}</title>
			</circle>
		))

	)
}