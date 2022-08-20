import { arc } from 'd3';

export const FaceContainer = ({ children, width, height, centerX, centerY }) => {
	return (
		<svg width={width} height={height}>
			<g transform={`translate(${centerX},${centerY})`}>
				{children}
			</g>
		</svg>
	)
}
// viewBox={`0 0 ${ width } ${ height }

export const BackgroundCircle = ({ radius, strokeWidth }) => (
	<circle r={radius} fill="yellow" stroke="black" strokeWidth={strokeWidth} />
);

export const Eye = ({ cx, cy, r }) => {
	return <circle cx={cx} cy={cy} r={r} />
}

export const MouthArc = ({ mouthRadius, mouthWidth }) => {
	const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthRadius + mouthWidth)
		.startAngle(Math.PI / 2)
		.endAngle((Math.PI * 3) / 2);

	return <path d={mouthArc()} />
}
