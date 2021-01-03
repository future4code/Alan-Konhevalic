import {useState, useEffect} from 'react'
import axios from 'axios'

export const useTripsList = () => {
    const [trips, setTrips] = useState([])

    //requisição com base na renderização, e faer isso logo que a tela carrega, usa-se o useEffect.
    //O array vazio faz com que nao sera executado novamente o useEffect
    useEffect( () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips')
            .then((response) => setTrips(response.data.trips)) //setTrips atualiza o valor da variavel trips com o valor escolhido
            .catch((err) => console.log(err))
    }, [] )
    
    return trips
}