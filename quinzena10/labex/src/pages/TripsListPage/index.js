import React from 'react'
import PageTitle from '../../components/PageTitle'
import TripListContainer from './styles'
import {Button, List, ListItem, ListItemText} from '@material-ui/core/'
import { useTripsList } from '../../hooks/useTripsList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {useProtectedPage} from '../../hooks/useProtectedPage'


const TripsListPage = () => {
    const trips = useTripsList()
    useProtectedPage()

    return <TripListContainer>
        <PageTitle title={'Lista de Viagens'} />
        <Link to={'/criar-viagem'}>
            <Button variant="contained" color="primary" type={'submit'}>Criar viagem</Button>
        </Link>

        <List component="nav">
            {trips.map( (trip) => {
                return <Link to={`/detalhes-viagem/${trip.id}`}>
                    <ListItem button>
                        <ListItemText primary={trip.name} />
                    </ListItem>
                </Link>
            } )}
        </List>

    </TripListContainer>
}
export default TripsListPage