import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {styled} from '@material-ui/core/styles';
import {Formik, Form, Field, ErrorMessage} from 'formik';


const MainContainer = styled(Paper)({
  padding: '20px',
  margin: '20px 0 0 0'
})

const SearchBar = styled(TextField)({
  width: '100%'
})

const SearchComponent = () => {
  return (
    <MainContainer elevation={2}>
      <Formik
        initialValues={{city: "", zip: ""}}
        onSubmit={(values, actions) => {
          console.log(values.city)
        }}
      >
        <Form>
          <Field type="text" name="city" placeholder="Enter a city..." as={SearchBar} />
        </Form>
      </Formik>
    </MainContainer>
  )
}

export default SearchComponent;
