import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {styled} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const MainContainer = styled(Paper)({
  padding: '20px',
  margin: '20px 0 0 0'
})

const FullWidthGridItem = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '1px solid #bfbfbf'
})

const FullWidthGridItemNoBorder = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
})

const WeatherDisplay = props => {
  return (
    <MainContainer elevation={2}>
      <Grid container spacing={3}>
        <FullWidthGridItemNoBorder item xs={12}>
          <Typography variant="h2" component="h2">{props.weatherData.name}</Typography>
          <Typography variant="h2" component="h2">{`${props.weatherData.main.temp}°F`}</Typography>
        </FullWidthGridItemNoBorder>
        <FullWidthGridItem item xs={12}>
          <Typography variant="h4" component="h4">Min</Typography>
          <Typography variant="h4" component="h4">{`${props.weatherData.main.temp_min}°F`}</Typography>
        </FullWidthGridItem>
        <FullWidthGridItem item xs={12}>
          <Typography variant="h4" component="h4">Max</Typography>
          <Typography variant="h4" component="h4">{`${props.weatherData.main.temp_max}°F`}</Typography>
        </FullWidthGridItem>
        <FullWidthGridItem item xs={12}>
          <Typography variant="h4" component="h4">Pressure</Typography>
          <Typography variant="h4" component="h4">{`${props.weatherData.main.pressure}`}</Typography>
        </FullWidthGridItem>
      </Grid>
    </MainContainer>
  )
}

export default WeatherDisplay;