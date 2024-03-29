import React, { useRef, useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import { authState as authStateConstant, color, storage, LoginTypes } from '../../shared/constant';
import Alert from '@material-ui/lab/Alert';
import FacetLink from "../../shared/components/FacetLink";
import FacetLabel from "../../shared/components/FacetLabel";
import FacetInput from "../../shared/components/FacetInput";
import FacetButton from "../../shared/components/FacetButton";
import FacetFormContainer from "../../shared/components/FacetFormContainer";
import FacetFormError from "../../shared/components/FacetFormError";
import MarginTop from "../../shared/components/MarginTop";
import AppContext from "../../context/AppContext";
import FacetLabeledDivider from "../../shared/components/FacetLabeledDivider";
import GoogleButton from "../GoogleButton";


export default () => {

  const { authObject, setAuthObject } = useContext(AppContext);
  const { register, errors, handleSubmit, watch } = useForm({});
  const { setCurrAuthState } = useContext(AppContext);
  const [serverError, setServerError] = useState(undefined);
  const [submitting, setSubmitting] = useState(false);

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async data => {
    try {
      setSubmitting(true);
      const { email, password } = data;
      setAuthObject({
        ...authObject,
        email
      });
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        }
      });
      setCurrAuthState(authStateConstant.confirmingSignup);
      setSubmitting(false);
    } catch (error) {
      setServerError(error.message);
      setSubmitting(false);
    }
  };

  return (
    <>

      <FacetFormContainer>
        <h3 style={{ color: color.ice }}>Sign up</h3>
        <form onSubmit={e => e.preventDefault()}>
          <FacetLabel text="First name" htmlFor="fname" />
          <MarginTop value='.5rem' />
          <FacetInput
            id="name"
            name="name"
            aria-invalid={errors.name ? "true" : "false"}
            inputRef={register({
              required: "required",
            })}
          />
          {errors.name && <FacetFormError role="alert" text={errors.name.message} />}
          <br />
          <br />
          <FacetLabel text="Last name" htmlFor="sname" />
          <MarginTop value='.5rem' />
          <FacetInput
            id="lastName"
            name="lastName"
            aria-invalid={errors.lastName ? "true" : "false"}
            inputRef={register({
              required: "required",
            })}
          />
          {errors.lastName && <FacetFormError text={errors.lastName.message} role="alert" />}
          <br />
          <br />
          <FacetLabel text="Email" htmlFor="email"></FacetLabel>
          <MarginTop value='.5rem' />
          <FacetInput
            id="email"
            name="email"
            aria-invalid={errors.email ? "true" : "false"}
            inputRef={register({
              required: 'Please specify an email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}

            inputRef={register({
              required: 'Please specify an email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            type="email"
            value={authObject?.email}
            onChange={(e) => setAuthObject({
              ...authObject,
              email: e.target.value
            })}
            type="email"
          />
          {errors.email && <FacetFormError role="alert" text={errors.email.message} />}
          <br />
          <br />
          <FacetLabel text="Password" />
          <MarginTop value='.5rem' />
          <FacetInput
            name="password"
            type="password"
            aria-invalid={errors.password ? "true" : "false"}
            inputRef={register({
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            })}
            onChange={(e) => {
              setAuthObject({
                ...authObject,
                password: e.target.value
              });
            }}
          />
          {errors.password && <FacetFormError text={errors.password.message} />}
          <br />
          <br />
          <FacetLabel text="Repeat password" />
          <MarginTop value='.5rem' />
          <FacetInput
            name="password_repeat"
            type="password"
            inputRef={register({
              validate: value =>
                value === password.current || "The passwords do not match"
            })}
          />
          {errors.password_repeat && <FacetFormError text={errors.password_repeat.message} />}
          <br />
          <br />
          <FacetButton disabled={submitting} text="REGISTER" variant="contained" color="primary" type="submit" onClick={handleSubmit(onSubmit)} />
        </form>
        <br />
        {serverError && <Alert severity="error">{serverError}</Alert>}
        <br />
        <div style={{ textAlign: 'center' }}>
          <b><FacetLink fontSize="medium" text="Sign in" color={color.electricB} onClick={() => setCurrAuthState(authStateConstant.signingIn)} /></b>
        </div>
        <div style={{
          textAlign: 'center'
        }}>
          <br />
          <FacetLabeledDivider />
          <GoogleButton />
        </div>
      </FacetFormContainer>
    </ >
  );
}
