import React from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'
import './App.css'

const Traits = (props) => {
    
    return(
        <div>
            <h2 className="item-header">Trait {''}
            <Popup inverted hideOnScroll size="tiny" position="top right" content="randomise" trigger={
            <Button size="large" onClick={props.randomise1} icon>
            <Icon name='refresh' />
            </Button>} />
            </h2>
             <Popup basic header={props.character} position="bottom left" content= {props.definition} trigger={<h2>{props.character}</h2>} />
        </div>
    )
}

export default Traits