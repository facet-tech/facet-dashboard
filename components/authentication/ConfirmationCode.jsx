import { Auth } from "aws-amplify";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { authState as authStateConstant, color, snackbar } from '../../shared/constant';
import Alert from '@material-ui/lab/Alert';
import { useSnackbar } from 'notistack';
import FacetFormContainer from "../../shared/components/FacetFormContainer";
import FacetLink from "../../shared/components/FacetLink";
import FacetLabel from "../../shared/components/FacetLabel";
import FacetInput from "../../shared/components/FacetInput";
import FacetFormError from "../../shared/components/FacetFormError";
import FacetButton from "../../shared/components/FacetButton";
import MarginTop from "../../shared/components/MarginTop";
import { getOrCreateWorkspace } from "../../services/facetApiService";
import AppContext from "../../context/AppContext";

export default () => {
    const { enqueueSnackbar } = useSnackbar();
    const { authObject } = React.useContext(AppContext);
    const { setCurrAuthState } = React.useContext(AppContext);
    const { register, errors, handleSubmit, watch } = useForm({});
    const [serverError, setServerError] = useState(undefined);
    const [submitting, setSubmitting] = useState(false);

    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async data => {
        try {
            setSubmitting(true);
            const { confirmationCode } = data;
            await Auth.confirmSignUp(authObject.email, confirmationCode);
            setCurrAuthState(authStateConstant.signedIn);
            setSubmitting(false);
        } catch (error) {
            setServerError(error.message);
            setSubmitting(false);
        }
    };

    const resendConfirmationCode = async () => {
        try {
            await Auth.resendSignUp(authObject.email);
            enqueueSnackbar({
                message: `Confirmation code has been sent in your email.`,
                variant: snackbar.success.text
            });
        } catch (e) {
            console.log('[ERROR]', e);
        }
    }

    return (
        <>
            <FacetFormContainer>
                <h3 style={{ color: color.ice }}>Authorization Key</h3>
                <MarginTop value='.5rem' />
                <FacetLabel text="An authorization key was sent to your email." />
                <form onSubmit={e => e.preventDefault()}>
                    <br />
                    <FacetLabel />
                    <br />
                    <FacetInput
                        id="confirmationCode"
                        name="confirmationCode"
                        aria-invalid={errors.email ? "true" : "false"}
                        inputRef={register({
                            required: "required"
                        })}
                    />
                    {errors.email && <FacetFormError text="errors.confirmationCode.message" role="alert" />}
                    <MarginTop value='.5rem' />
                    <FacetButton disabled={submitting} text="CONFIRM" style={{ width: "100%" }} variant="contained" color="primary" type="submit" onClick={handleSubmit(onSubmit)} />
                </form>
                <br />
                {serverError && <Alert severity="error">{serverError}</Alert>}
                <br />
                <div style={{ textAlign: 'center' }}>
                    <b>
                        <FacetLink text="Sign in" color={color.electricB} onClick={() => setCurrAuthState(authStateConstant.signingIn)} />
                    </b>
                </div>
            </FacetFormContainer>
        </ >
    );
}