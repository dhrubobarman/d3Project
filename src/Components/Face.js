import { FaceContainer, BackgroundCircle, Eye, MouthArc } from './SvgComp'

export const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthWidth,
    mouthRadius
}) => {
    return (
        <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
            <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
            <Eye cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
            <Eye cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
            <MouthArc mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
        </FaceContainer>
    )
}