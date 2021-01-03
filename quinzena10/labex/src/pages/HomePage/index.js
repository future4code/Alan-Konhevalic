import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PageTitle from '../../components/PageTitle'
import {Button} from '@material-ui/core/'
import {ButtonsContainer} from './styles'


const HomePage = () => {
    return <div>
        <PageTitle title={'Labex'} />
        <ButtonsContainer>
            <Link to={'/login'}>
                <Button variant="contained" color="primary">Área do administrador</Button>
            </Link>
            <Link to={'/inscricao'}>
                <Button variant="contained" color="primary">Candidatar-me</Button>
            </Link>
        </ButtonsContainer>
    </div>
}
export default HomePage