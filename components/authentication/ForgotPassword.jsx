import { Auth } from "aws-amplify";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { authState as authStateConstant, color } from '../../shared/constant';
import { Input, InputLabel, Button, Link } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FacetFormContainer from "../../shared/components/FacetFormContainer";
import FacetInput from "../../shared/components/FacetInput";
import FacetLabel from "../../shared/components/FacetLabel";
import FacetButton from "../../shared/components/FacetButton";
import FacetLink from "../../shared/components/FacetLink";
import FacetFormError from "../../shared/components/FacetFormError";
import AppContext from "../../shared/components/AppContext";

export default () => {
    const { setCurrAuthState } = React.useContext(AppContext);
    const { authObject, setAuthObject } = React.useContext(AppContext);
    const { register, errors, handleSubmit } = useForm({});
    const [serverError, setServerError] = useState(undefined);
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async data => {

        try {
            setSubmitting(true);
            const { email } = data;
            const confirmSignUpResponse = await Auth.forgotPassword(email);
            setCurrAuthState(authStateConstant.onPasswordReset);
        } catch (error) {
            setServerError(error.message);
            setSubmitting(false);
        }
    };

    return (
        <>
            <FacetFormContainer>
                <form onSubmit={e => e.preventDefault()}>
                    <FacetLabel text="EMAIL" htmlFor="email" />
                    <FacetInput
                        id="email"
                        name="email"
                        aria-invalid={errors.email ? "true" : "false"}
                        inputRef={register({
                            required: "Please specify an email",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}
                        onChange={(e) => setAuthObject({
                            ...authObject,
                            email: e.target.value
                        })}
                        type="email"
                    />
                    {errors.email && <FacetFormError text={errors.email.message} role="alert" />}
                </form>
                <br />
                {serverError && <Alert severity="error">{serverError}</Alert>}
                <br />
                <div>
                    <FacetButton disabled={submitting} text="Confirm email" style={{ width: "100%" }} variant="contained" color="primary" type="submit" onClick={handleSubmit(onSubmit)} />
                </div>
                <div>
                    <br />
                    <b>
                        <FacetLink text="Login" color={color.electricB} onClick={() => setCurrAuthState(authStateConstant.signingIn)} />
                    </b>
                </div>
            </FacetFormContainer>
        </ >
    );
}