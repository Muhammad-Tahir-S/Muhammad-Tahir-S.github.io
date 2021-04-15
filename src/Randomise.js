import React, {useEffect, useState} from "react"
import "semantic-ui-css/semantic.min.css";
import { Grid, Button } from 'semantic-ui-react'

import Settings from "./Settings"
import Actions  from "./Actions"
import CharacterTraits from "./Traits"
import { useSpring, animated } from 'react-spring';





function Randomise () {
    
    // apiCall&randomiseFunctionForCHARACTER TRAITS
    const [charactersArray, setCharactersArray] = useState([])
    const [character, setCharacter] = useState("")
    const [definitionT, setDefinitionT] = useState("")
    const [definitionS, setDefinitionS] = useState("")
    const [definitionV, setDefinitionV] = useState("")

    function handleCharactersClick () {
        const randNum = Math.floor(Math.random() * charactersArray.length)
        const randSetting = charactersArray[randNum]
        setCharacter(randSetting)
    }


    useEffect(() => {
        fetch("https://api.datamuse.com/words?rel_gen=person&topics=nature&topics=occupation")
        .then(res => res.json())
        .then(data => {
            setCharactersArray(data.map(x => x.word))
    })
    }, [])


    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${character}`)
        .then(res => res.json())
        .then(data => {
            data[0].meanings.length > 1 ? 
            setDefinitionT(data[0].meanings[1].definitions.map(x => x.definition)) :   
            data[0].meanings.length === 1 ? 
            setDefinitionT(data[0].meanings[0].definitions.map(x => x.definition)) :  
            setDefinitionT('no definition')   })
        .catch(err => console.log(err))
    
    }, [character])
  
    // apiCall&randomiseFunctionForSETTING
    const [settingsArray, setSettingsArray] = useState([])
    const [setting, setSetting] = useState("")
    
    function handleSettingsClick () {
        const randNum = Math.floor(Math.random() * settingsArray.length)
        const randSetting = settingsArray[randNum]
        setSetting(randSetting)
    }
    
    useEffect(() => {
        fetch("https://api.datamuse.com/words?rel_gen=building&topics=nature&topics=east")
        .then(res => res.json())
        .then(data => {
            setSettingsArray(data.map(x => x.word))
        })
    }, [])
    
    
    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${setting}`)
        .then(res => res.json())
        .then(data => {
            data[0].meanings.length > 1 ? 
            setDefinitionS(data[0].meanings[1].definitions.map(x => x.definition)) :             
            data[0].meanings.length === 1 ? 
            setDefinitionS(data[0].meanings[0].definitions.map(x => x.definition)) :
            
            setDefinitionS('no definition')   })
            .catch(() =>setDefinitionS('no definition')  
            )

        }, [setting])
        
    // }, [setting])
    
    // apiCall&randomiseFunctionForACTION
    const [verbsArray, setVerbsArray] = useState([])
    const [verb, setVerb] = useState("")
    
    function handleVerbsClick () {
        const randNum = Math.floor(Math.random() * verbsArray.length)
        const randVerb = verbsArray[randNum]
        setVerb(randVerb)
    }
    
    useEffect(() => {
        fetch("https://api.datamuse.com/words?rel_gen=do&topics=nature&topics=Verb")
        .then(res => res.json())
        .then(data => {
            setVerbsArray(data.map(x => x.word))
        })
    }, [])

    
  
    

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${verb}`)
        .then(res => res.json())
        .then(data => {
            setDefinitionV(data[0].meanings[0].definitions.map(x => x.definition))

    })
        .catch(() => setDefinitionV('no definition'))
    
    }, [verb])

    function randomiseAll(){
        handleCharactersClick()
        handleSettingsClick()
        handleVerbsClick()
    }
    
    const fadeIn = useSpring({
        config: { duration: 1000 },
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 1000
    })
    
    return (
        <animated.div style={fadeIn}>
            <div className="random-btn">
            <Button inverted size="huge" color="teal" onClick={()=>randomiseAll()}>Randomise All</Button>
            </div>
            <Grid>
                <Grid.Column computer={1} mobile={0}></Grid.Column>
                <Grid.Column computer={14} mobile={16}>
                
            <Grid doubling columns={3} padded>
                <Grid.Column computer={16/3} mobile={5}>
                    <CharacterTraits 
                        randomise1={()=>handleCharactersClick()}
                        character={character}
                        definition={definitionT}
                    />
                </Grid.Column>

                <Grid.Column computer={16/3} mobile={6} >
                    <Settings
                        randomise2={()=>handleSettingsClick()}
                        setting={setting}
                        definition={definitionS}
                    />    
                </Grid.Column>

                <Grid.Column computer={16/3} mobile={5}>
                    <Actions 
                        randomise3={()=>handleVerbsClick()}
                        verb={verb}
                        definition={definitionV}
                    />   
                </Grid.Column>

            </Grid>   
                </Grid.Column>
                <Grid.Column computer={1} mobile={0}> </Grid.Column>
            </Grid>
            
        </animated.div>
    )
}

export default Randomise