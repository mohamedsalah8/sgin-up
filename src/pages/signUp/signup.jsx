import { Button, Stack } from "@mui/material";
import AccountForm from "../../components/AccountForm/accountForm";
import { useMultistepForm } from "../../hooks/useMutliStepForm";
import AddImage from "../../components/AddImage/addImage";
import AddressForm from "../../components/AddressForm/AddressForm";
import ConfirmForm from "../../components/confirm/confirm";
import Steps from "../../components/steps/Steps";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

 const navigate = useNavigate();

 const [data, setData] = useState()
  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        } = useForm()
    const {  currentStepIndex , step ,isFirstStep  ,
    back , next} = useMultistepForm([<AccountForm register={register}  updateFields={updateFields} watch={watch} errors={errors}/> ,  
    <AddressForm  updateFields={updateFields} register={register} watch={watch}  errors={errors} /> , 
    <AddImage  register={register} />, 
    <ConfirmForm/>])

    function uploadData() {
        try {
            fetch("http://localhost:3000/" , {
                method:"POST" ,
                mode: 'no-cors',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    password : watch("password") ,
                    confirmPassword : watch("ConfirmPassword"),
                    fullName : watch("fullName") ,
                    bussinessEmail : watch("email") ,
                    country : watch("country"),
                    phoneNumber : watch("phoneNumber"),
                    companyName: watch("companyName"),
                    city: watch("city"),
                    logo : watch("logo")
                })
            }).then(()=>{
                navigate("/success")
            })
        } catch (_err) {

        }
    }
       

    
    return (
        <div className="signup">
            <Steps progress={currentStepIndex}/>
            <form className="form">
                {step}
            </form>
            <div className="actions">
                {
                    isFirstStep && 
                    <a>Back to login</a>
                    
                }
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} >
                {
                    !isFirstStep &&
                <Button variant="contained" sx={{
                        padding:"10px 90px"
                }}
                color="inherit"
                onClick={back}
                >Back</Button>
                }
                    <Button variant="contained" sx={{
                        padding:"10px 90px"
                }}
                type="submit"
                onClick={handleSubmit((e)=>{
                    if(currentStepIndex == 3 ){
                        uploadData()
                    }
                    next()
                })}
                >
                    {
                        currentStepIndex == 3 ?
                        "Confirm" :
                        "Next"
                    }
                </Button>
            </Stack>
            </div>
        </div>
    )
}   