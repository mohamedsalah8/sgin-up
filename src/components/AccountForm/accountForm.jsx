import './accountForm.css'
import PrimaryInput from "../input/input";
import Select from "../select/select";
import PhoneInput from "../phoneInput/phoneInput";
export default function AccountForm(props) {
 
        
    return(
        <div className="accountForm">
            <div className="flex gap-3 max-[900px]:flex-wrap">
                <PrimaryInput onChange={e => props.updateFields({ fullName: e.target.value })} errorMessage={props.errors}  valid={{ required: "Please enter your full name"}}  className={"w-1/2 max-[900px]:w-full"} register={props.register} id={"fullName"} name={"fullName"} required={true} placeholder={"Enter your full name"} label={"Full NAME"} type={"text"} isShrink={true} isFullWidth={true}  />
                <PrimaryInput onChange={e => props.updateFields({ email: e.target.value })} errorMessage={props.errors} valid={{ required: "Please enter your email" ,
                 pattern : {
                    value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
                    message: "invalid email address"
                }}
            } className={"w-1/2"} register={props.register} id={"email"} name={"email"} placeholder={"Enter your busiiness email"} label={"BUSINESS Email"} type={"email"} />
            </div>
            <div className="flex gap-2 items-start">
               <Select onChange={e => props.updateFields({ countryAccount: e.target.value })} name={"country"}id={"country"} placeholder="select your country" errorMessage={props.errors} label="COUNTRY" register={props.register} valid={{require:"please select your country"}}>
                   <option value="eg">Egypt</option>
               </Select>
               <PhoneInput onChange={e => props.updateFields({ phoneNumberAccount: e.target.value })} errorMessage={props.errors} register={props.register} valid={{required : "Please enter your phone number" , 
                maxLength : {
                    value : 11 ,
                    message: "invaild mobile number" 
                },
                minLength : {
                    value : 11 ,
                    message: "invaild mobile number" 
                }
            }} name={"phoneNumber"} label={"PHONE NUMBER"} placeholder={"Enter your phone Number"}/>
            </div>
                <PrimaryInput onChange={e => props.updateFields({ password: e.target.value })} errorMessage={props.errors}  valid={{ required: "Please enter your password" ,
                    minLength : {
                        value : 8 ,
                        message : "your password must be more than or equal 8 chracters"
                    }
            }}  className={"w-full"} register={props.register} id={"passwordAccount"} name={"password"} placeholder={"Enter your password"} label={"PASSWORD"} type={"password"} />
                <PrimaryInput onChange={e => props.updateFields({ confirmPassword: e.target.value })} errorMessage={props.errors}  valid={{ required: "Please enter your password" ,
                    validate: (val) => {
                        if (props.watch('password') !== val) {
                        return "Your passwords don't match";
                        }
                    }
                }}  className={"w-full"} register={props.register} id={"ConfirmPasswordAccount"} name={"ConfirmPassword"} placeholder={"Enter your Repeat password"} label={"REPEAT PASSWORD"} type={"password"} />
    </div>
    )
}