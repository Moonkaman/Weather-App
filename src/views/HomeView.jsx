import React from 'react'
import Typography from '@material-ui/core/Typography';
import {styled} from '@material-ui/core/styles';

// Components
import SearchComponent from '../components/SearchComponent';
import WeatherDisplay from '../components/WeatherDisplay'

const TitleText = styled(Typography)({
  textAlign: 'center'
})

const HomeView = props => {

  let display

  if (props.weatherData.hasOwnProperty('name')) {
    display = <WeatherDisplay weatherData={props.weatherData} />
  }

  return (
    <div>
      <Typography variant="h1" component="h1">Weathr</Typography>
      <SearchComponent />
      {display}
    </div>
  )
}

export default HomeView;
