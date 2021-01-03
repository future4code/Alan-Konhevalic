import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import axios from 'axios'

const CandidateItem = (props) => {
    const decideCandidate = (approve) => {
        const body = {
            approve: approve
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips/${props.tripId}/candidates/${props.candidate.id}/decide`, body, {
            headers: { 
            auth: window.localStorage.getItem('token')
            }
        })
    }

    const approveCandidate = () => {
        decideCandidate(true)
    }
    const rejectCandidate = () => {
        decideCandidate(false)
    }

    return <ListItem>
                <ListItemText primary={props.candidate.name}/>
                <ListItemSecondaryAction>
                    <IconButton>
                        <ThumbUpIcon onClick={approveCandidate} />
                    </IconButton>
                    <IconButton >
                        <ThumbDownIcon onClick={rejectCandidate}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
   
}

export default CandidateItem