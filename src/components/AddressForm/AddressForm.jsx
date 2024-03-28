import PrimaryInput from "../input/input";
import './addressForm.css'
import Select from "../select/select";
import PhoneInput from "../phoneInput/phoneInput";
import CompanyInput from "../companyInput/companyInput";
export default function AddressForm(props) {
    
  return (
        <>
          <div>
            <CompanyInput  onChange={e => props.updateFields({ companyName: e.target.value })} errorMessage={props.errors} valid={{ required: "Please enter your company name"}}  className={"w-1/2"} register={props.register} id={"companyName"} name={"companyName"} required={true} placeholder={"Enter your Company name"} label={"COMPANY NAME"} type={"text"} />
            <PrimaryInput  onChange={e => props.updateFields({ address: e.target.value })} errorMessage={props.errors}  valid={{ required: "Please enter your address"}}  className={"w-1/2"} register={props.register} id={"address"} name={"address"} required={true} placeholder={"Enter your address"} label={"ADDRESS"} type={"text"} />
            <PrimaryInput   onChange={e => props.updateFields({ companyEmail: e.target.value })} errorMessage={props.errors} valid={{ required: "Please enter your email" ,
                 pattern : {
                    value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
                    message: "invalid email address"
                }}
            } className={"w-1/2"} register={props.register} id={"email"} name={"email"} placeholder={"Enter your busiiness email"} label={"BUSINESS Email"} type={"email"} />
            <div className="flex">
                <Select onChange={e => props.updateFields({ country: e.target.value })} name={"country"}id={"country"} placeholder="select your country" errorMessage={props.errors} label="COUNTRY" register={props.register} valid={{require:"please select your country"}}>
                   <option value="eg">Egypt</option>
               </Select>
               <Select  onChange={e => props.updateFields({ city: e.target.value })} name={"city"}id={"city"} placeholder="select your city" errorMessage={props.errors} label="CITY" register={props.register} valid={{require:"please select your country"}}>
                   <option value="cairo">Cairo</option>
               </Select>
            </div>
             <div className="flex gap-2 items-start max-[900px]:flex-wrap">
               <PhoneInput  onChange={e => props.updateFields({ phoneNumber: e.target.value })} errorMessage={props.errors} register={props.register} valid={{required : "Please enter your phone number" , 
                maxLength : {
                    value : 11 ,
                    message: "invaild mobile number" 
                },
                minLength : {
                    value : 11 ,
                    message: "invaild mobile number" 
                }
            }} name={"phoneNumber"} label={"PHONE NUMBER"} placeholder={"Enter your phone Number"}/>
               <PhoneInput onChange={e => props.updateFields({ phoneNumber: e.target.value })} errorMessage={props.errors} register={props.register} valid={{required : "Please enter your phone number" , 
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
    </div>
        </>

    )
}