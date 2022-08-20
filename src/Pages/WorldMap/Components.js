import { geoPath, geoNaturalEarth1, geoGraticule } from 'd3';

const projection = geoNaturalEarth1();
const path = geoPath(projection)
const gradicule = geoGraticule();

export const Marks = ({ data: { lands, interiors } }) => {
	return (
		<g className="mark">
			<path
				className='sphere'
				d={path({ type: 'Sphere' })}
			/>
			<path className='gradicule' d={path(gradicule())} />
			{lands.features.map((feature, i) => (
				<path
					key={i}
					className='lands'
					d={path(feature)}
				/>
			))}

			<path
				className='interior'
				d={path(interiors)}
			/>
		</g>

	)
}