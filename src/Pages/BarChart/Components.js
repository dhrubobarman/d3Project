

export const AxisBottom = ({ xScale, innerHeight, tickFormat }) => {
	return (
		xScale.ticks().map((tick) => (
			<g className="tick" key={tick} transform={`translate(${xScale(tick)}, 0)`}>
				<line
					y2={innerHeight}
				/>
				<text y={innerHeight + 3} dy='0.75em' style={{ textAnchor: 'middle' }}>{tickFormat(tick)}</text>
			</g>
		))
	)
}

export const AxisLeft = ({ yScale }) => {
	return (
		yScale.domain().map((tick) => (
			<g className="tick">
				<text
					key={tick}
					style={{ textAnchor: 'end' }}
					dy='.32em'
					x='-3'
					y={yScale(tick) + yScale.bandwidth() / 2}
				>{tick}</text>
			</g>
		))
	)
}

export const Marks = ({ yScale, xScale, data, yValue, xValue, tooltipFormat }) => {
	return (

		data.map((d) => (
			<rect
				className="mark"
				key={yValue(d)}
				y={yScale(yValue(d))}
				width={xScale(xValue(d))}
				height={yScale.bandwidth()}
			>
				<title>{tooltipFormat(xValue(d))}</title>
			</rect>
		))

	)
}