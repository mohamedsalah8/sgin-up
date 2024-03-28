export default function CompanyInput({onChange ,errorMessage ,name , id , placeholder , label , register , valid }) {
    
    
    
    return (
  <div className={`flex flex-col w-full mb-2`}>
    <div className={`phoneInput flex  items-center ${errorMessage?.[name]?.message && "error"}`}>
            <div className="input w-full !rounded-e-md">
                <label htmlFor={id}>{label}</label>
                <input  type="text" name={name} id={id} placeholder={placeholder} {...register(name , valid)}/>
            </div>
            <select className='border border-[#ccc] p-3 rounded-e-md' >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
            </select>
        </div>
        {
            errorMessage && 
        <p className="text-[#ff5f59] font-bold text-xs ml-2">{errorMessage?.[name]?.message}</p>
        }
  </div>
    )
}