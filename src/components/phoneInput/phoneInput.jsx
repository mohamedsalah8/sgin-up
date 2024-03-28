import './phoneINput.css'

export default function PhoneInput({errorMessage ,name , id , placeholder , label , register , valid }) {
    
    return (
  <div className={`flex flex-col w-full mb-2`}>
    <div className={`phoneInput flex items-center ${errorMessage?.[name]?.message && "error"}`}>
            <p className='border border-[#ccc] p-3 rounded-md'>+20</p>
            <div className="input w-full">
                <label htmlFor={id}>{label}</label>
                <input type="tel" name={name} id={id} placeholder={placeholder} {...register(name , valid)}/>
            </div>
        </div>
        {
            errorMessage && 
        <p className="text-[#ff5f59] font-bold text-xs ml-2">{errorMessage?.[name]?.message}</p>
        }
  </div>
    )
}