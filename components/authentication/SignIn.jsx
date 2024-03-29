import { Auth } from 'aws-amplify';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {
  authState as authStateConstant, api as apiConstant, color,
} from '../../shared/constant';
import AppContext from '../../context/AppContext';
import FacetInput from '../../shared/components/FacetInput';
import FacetLabel from '../../shared/components/FacetLabel';
import FacetButton from '../../shared/components/FacetButton';
import FacetLink from '../../shared/components/FacetLink';
import FacetFormError from '../../shared/components/FacetFormError';
import FacetFormContainer from '../../shared/components/FacetFormContainer';
import MarginTop from '../../shared/components/MarginTop';
import { getOrCreateWorkspace } from '../../services/facetApiService';
import GoogleButton from '../GoogleButton';
import FacetLabeledDivider from '../../shared/components/FacetLabeledDivider';
import styled from 'styled-components';

const CenterContainer = styled.div`
    text-align: center;
`

export default () => {
  const { setCurrAuthState } = React.useContext(AppContext);
  const { register, errors, handleSubmit, watch } = useForm({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(undefined);

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data) => {
    setSubmitting(true);
    const { email, password } = data;
    try {
      await Auth.signIn(email, password);
      setCurrAuthState(authStateConstant.signedIn);
      await getOrCreateWorkspace(email);
      setSubmitting(false);
    } catch (error) {
      console.log('[ERROR]][SignIn]', error);
      if (error.code === 'UserNotConfirmedException') {
        setAuthObject({
          ...authObject,
          email,
          password
        });
        setCurrAuthState(authStateConstant.confirmingSignup);
      } else {
        setServerError(error.message);
      }
      setSubmitting(false);
    }
  };

  return (
    <>
      <FacetFormContainer>
        <h3 style={{ color: color.ice }}>Login</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <FacetLabel htmlFor="email" text="Email"></FacetLabel>
          <MarginTop value='.5rem' />
          <FacetInput
            id="email"
            name="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            inputRef={register({
              required: 'Please specify an email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            type="email"
          />
          <br />
          {errors.email && <FacetFormError role="alert" text={errors.email.message}></FacetFormError>}
          <br />
          <FacetLabel text="Password" />
          <MarginTop value='.5rem' />
          <FacetInput
            name="password"
            type="password"
            inputRef={register({
              required: 'Please specify a password',
            })}
          />
          <br />
          {errors.password && <FacetFormError role="alert" text={errors.password.message}></FacetFormError>}
          <br />
          <div>
            <FacetButton disabled={submitting} style={{ width: '100%' }} variant="contained" color="primary" type="submit" onClick={handleSubmit(onSubmit)} text="Login"></FacetButton>
          </div>
          <br />
          <CenterContainer>
            <div>
              <FacetLink underline='hover' text='RESET PASSWORD' onClick={() => setCurrAuthState(authStateConstant.onForgotPassword)} />
            </div>
            <br />
            <Typography>
              <b>
                <FacetLabel width="100%" text='Not registered? ' />
                <FacetLink color={color.electricB} text='Sign up.' href="#" onClick={() => { setCurrAuthState(authStateConstant.signingUp) }} />
              </b>
              <br />
              <div style={{
                textAlign: 'center'
              }}>
                <br />
                <FacetLabeledDivider />
                <GoogleButton />
              </div>
              <br />
              <FacetLabel width="100%" text="By logging into Facet you agree to the terms of use" />
              <FacetLabel width="100%" text="and conditions of you and the privacy policy." />
            </Typography>
          </CenterContainer>
        </form>
        {serverError && <Alert severity="error">{serverError}</Alert>}
        <br />
      </FacetFormContainer>
    </>
  );
};
