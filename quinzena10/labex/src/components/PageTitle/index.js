import React from 'react'
import Typography from '@material-ui/core/Typography'

const PageTitle = (props) => {
    return <Typography variant="h1" component="h2" align={'center'}> {props.title} </Typography>
}

export default PageTitle