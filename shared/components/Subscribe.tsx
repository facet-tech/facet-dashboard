import FacetButton, { primaryBtnColor, primaryGrayBtnColor } from "./FacetButton";
import FacetInput from "./FacetInput";
import styled from 'styled-components';
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { color, snackbar } from "../constant";
import FacetFormError from "./FacetFormError";
import {Input} from "@material-ui/core";

const MainForm = styled.form`
    text-align: center;
    display: grid;
    grid-template-columns: 30% 20%;
    grid-gap: 2%;
    justify-content: center;
    align-items: center;

    @media (max-width: 720px) {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 15%;
        align-items: center;
        justify-content: center;
    }
`

const CoreDiv = styled.div`
    margin: 2rem;
`;

export const mainColor = {
    color: color.black,
    backgroundColor: color.white,
};

export default function StayUpdated() {
    const { enqueueSnackbar } = useSnackbar();
    const { register, errors, handleSubmit, watch } = useForm({})
    const [submitting, setSubmitting] = useState(false)
    const [email, setEmail] = useState('')
    const [isCurrentUser, setIsCurrentUser] = useState(false)

    const reset = () => {
        setEmail('')
        setIsCurrentUser(false)
    }

    const onSubmit = async data => {
        if (data.email != "") {
            fetch('https://api.facet.run/notification', {
                method: 'POST',
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => console.log(data));
            try {
                enqueueSnackbar({
                    message: 'Thank you!  We will get back with you soon.',
                    variant: snackbar.success.text
                });
                reset();
            } catch (error) {
                enqueueSnackbar({
                    message: 'Apologies. Something went wrong.',
                    variant: snackbar.error.text
                });
                setSubmitting(false)
            }
        }
    };

    return (
        <CoreDiv>
            <MainForm onSubmit={(e) => e.preventDefault()}>
                <div>
                    <Input /* A hidden element to send the "subject" (purpose) of the notification to API.  Don't delete. */ style={{display: "none"}} value="Subscribe Request" name={"subject"} inputRef={register()}/>
                    <FacetInput extraStyle={{ maxWidth: "30rem" }} value={email} onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="email"
                        /* The name attribute is the json key sent to the API. Don't change unless the API is updated.*/
                        name="contact"
                        inputRef={register({
                            required: 'Please specify an email',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Entered value does not match email format',
                            },
                        })}
                        // @ts-ignore
                        colorStyle={mainColor}
                    />
                    {errors && errors.email && <FacetFormError text={errors.email.message}>
                    </FacetFormError>}
                </div>
                <div >
                    <FacetButton style={{ maxWidth: "30rem" }} colorButtonStyle={primaryBtnColor} onClick={handleSubmit(onSubmit)} text="Subscribe" />
                </div>
            </MainForm>
        </CoreDiv>
    )
}