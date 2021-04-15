import React from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'


function Actions (props) {
   
    return(
        <div>
            <h2 className="item-header">Action {''}
            <Popup inverted hideOnScroll size="tiny" position="top right" content="randomise" trigger={
                <Button size="large" onClick={props.randomise3} icon>
            <Icon name='refresh' />
            </Button>
            } />
            </h2>
             <Popup basic header={props.verb} position="bottom right" content= {props.definition} trigger={<h2>{props.verb}</h2>} />
        </div>
    )
}

export default Actions