import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import DetailTripContainer from './styles'
import CandidatesList from './CandidatesList'
import TripInfo from './TripInfoCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {useProtectedPage} from '../../hooks/useProtectedPage'

const TripDetailPage = () => {
    const [trip, setTrip] = useState()
    const params = useParams()
    
    useProtectedPage()

    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trip/${params.tripId}`,
            {headers: {
                auth: window.localStorage.getItem('token')
            }}
        )
        .then((response)=>setTrip(response.data.trip))
        .catch((err) => console.log(err))
    }, [])

    return <div>
        <PageTitle title={'Detalhe de viagens'} />

            {trip && <DetailTripContainer>
                <TripInfo info={trip} />
                <CandidatesList candidates={trip.candidates} tripId={params.tripId}/>
            </DetailTripContainer>}
            

    </div>
}
export default TripDetailPage