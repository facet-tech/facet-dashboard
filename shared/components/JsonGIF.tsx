import React from 'react'
import Lottie from 'react-lottie';

const JsonGIF = ({ animationData, isStopped = false, isPaused = false, style = {
    borderRadius: undefined,
    overflow: "hidden",
    width: undefined,
    height: undefined,
    boxShadow: undefined
},
    options = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    } }) => {
    const defaultOptions = {
        ...options, animationData
    };

    return <div style={style}>
        <Lottie options={defaultOptions}
            isStopped={isStopped}
            isPaused={isPaused} />
    </div>
}

export default JsonGIF;