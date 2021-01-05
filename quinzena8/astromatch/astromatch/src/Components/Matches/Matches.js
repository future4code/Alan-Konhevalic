import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MatchesList from './MatchesList'

export default function Matches() {
    const [matches, setMatches] = useState([])
    
    
    useEffect(()=> {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/matches')
        .then(response => {
            setMatches(response.data.matches)
        })
        .catch(err => alert(err))
    }, [])

    return <div>
         {matches.map((match)=>{
             return <MatchesList matches={match}/>
         })}
         
    </div>
}