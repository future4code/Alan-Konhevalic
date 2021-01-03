import React from 'react'
import DetailTripContainer from './styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TripInfoItem from './TripInfoItem'

const TripInfo = (props) => {
  const {name, planet, description, date, durationInDays, } = props.info
    return <DetailTripContainer>
       <Card >
       <CardContent >
        <Typography color="textSecondary" variant={'h5'}>
          Informações da Viagem
        </Typography>
        <TripInfoItem infoName={'Nome'} info={name}/>
        <TripInfoItem infoName={'Planeta'} info={planet}/>
        <TripInfoItem infoName={'Data'} info={date}/>
        <TripInfoItem infoName={'Descrição'} info={description}/>
        <TripInfoItem infoName={'Duração em dias'} info={durationInDays}/>
      </CardContent>
       </Card>
        
        

    </DetailTripContainer>
}
export default TripInfo