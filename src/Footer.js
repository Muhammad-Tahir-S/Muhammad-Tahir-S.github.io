import React from "react"
import { useSpring, animated } from 'react-spring';


function Footer() {
    const fadeIn = useSpring({
        config: { duration: 1000 },
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 1000
    })
    return (
        <animated.div style={fadeIn}>
            <ul className="welcome-text">
                <li>Trait: A trait you may attribute to any character.</li>
                <li>Setting: The location of a major scene.</li>
                <li>Action: Defining action committed by the protagonist.</li>
                <br />
                <li>Definitions: Hover over prompt for popup definitions.</li>
            </ul>        
        </animated.div>
    )
}

export default Footer