import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {styled} from '@material-ui/core/styles'

const MainContainer = styled(Paper)({
  padding: '20px'
})

const SearchComponent = () => {
  return (
    <MainContainer>
      <Typography component="h2">Weathr</Typography>
    </MainContainer>
  )
}

export default SearchComponent;
