import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { ClassNames } from '@emotion/react';

const circleRadius = 30;
const initialMousePosition = { x: 0, y: 0 }
const xOffset = 10;
const yOffset = 150.0125;



export const FollowCursor = () => {
	const boxRef = useRef(null);
	const [mousePosition, setMousePosition] = useState(initialMousePosition)
	const [windowSize, setWindowSize] = useState({ width: 400, height: 400 })

	useEffect(() => {
		const windowWidth = boxRef.current.clientWidth;
		const windowHeight = boxRef.current.clientHeight;
		setWindowSize({ width: windowWidth, height: windowHeight })
		setMousePosition({ x: windowWidth / 2, y: windowHeight / 2 })
	}, [])

	const handleMouseMove = useCallback((event) => {
		const { pageX, pageY } = event;
		setMousePosition((prev) => {
			return { ...prev, x: pageX - xOffset, y: pageY - yOffset }
		})


	}, [setMousePosition])

	return (
		<>
			<Typography textAlign={'center'} variant="h3">Move Your Cursor Inside Box</Typography>
			<Box ref={boxRef} sx={{ height: `calc(100vh - ${yOffset}px)`, border: '1px solid', margin: `0 ${xOffset}px` }} onMouseMove={handleMouseMove}>
				<svg viewBox={`0 0 ${windowSize.width} ${windowSize.height}`} className='grid-bg'>
					<circle
						className='svg-circle-hover'
						cx={mousePosition.x}
						cy={mousePosition.y}
						r={circleRadius}
					/>
				</svg>
			</Box>
		</>
	)
}