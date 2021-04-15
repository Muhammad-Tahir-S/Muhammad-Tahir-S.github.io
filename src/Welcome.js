import React from "react"
import { Button} from 'semantic-ui-react'
import { useSpring, animated } from 'react-spring';



function Header (props){

    const fadeIn1 = useSpring({
        config: { duration: 1000 },
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 1000
    })
    
    const fadeIn2 = useSpring({
        config: { duration: 1000 },
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 5500
    })

    const fadeUp = useSpring({
        config: { duration: 2000 },
        from: {transform: 'translate(0, 70%)'},
        to: {transform: 'trnslate(0, 30%)'},
        delay: 3000
    })
    return(
        <div>
        <section className="welcome">
        <animated.div style={fadeUp}>
            <div className="logo">
                <animated.h1 className="welcome" style={fadeIn1}>MT's WRITING <br />PROMPT</animated.h1>         
            </div>
            <br/>
            <animated.p style={fadeIn2} className="welcome">
                <h4 className="welcome" id="welcome">
                Ready to generate your writing prompt? Here's how it works:
                </h4>

                <ul className="welcome-text">
                    <li>Trait: A trait you may attribute to any character.</li>
                    <li>Setting: The location of a major scene.</li>
                    <li>Action: Defining action committed by the protagonist.</li>
                    <br />
                    <li>Definitions: Hover over prompt for popup definitions.</li>
                </ul>
            <div className="random-btn">
            <Button size="large" onClick={()=>props.clicked()}>BEGIN</Button>

            </div> 
            </animated.p>

        </animated.div>
        </section>
        </div>
    )
}

export default Header