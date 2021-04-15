import React from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'

const Settings = (props) => {
   
    return(
        <div>
            <h2 className="item-header">Setting {''}
            <Popup inverted position="top right" size="tiny" content="randomise" trigger={
                <Button size="large" onClick={props.randomise2} icon>
            <Icon name='refresh' />
            </Button>
            } />

            
            </h2>
             <Popup basic header={props.setting} position="bottom left" content= {props.definition} trigger={<h2>{props.setting}</h2>} />
        </div>
    )
}

export default Settings