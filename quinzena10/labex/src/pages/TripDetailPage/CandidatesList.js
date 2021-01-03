import React from 'react'
import DetailTripContainer from './styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import CandidateItem from './CandidateItem'

const CandidatesList = (props) => {
    return <DetailTripContainer>
       <Card>
       <CardContent >
            <Typography color="textSecondary" variant={'h5'} gutterBottom>
            Informações do candidato
            </Typography>
            <List >
                {props.candidates.map((candidate)=>{
                    return <CandidateItem candidate={candidate} tripId={props.tripId}/>
                })}
            </List>
      </CardContent>
       </Card>
        
        

    </DetailTripContainer>
}
export default CandidatesList