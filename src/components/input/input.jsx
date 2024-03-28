import './input.css'
export default function PrimaryInput ({ valid ,label ,register , placeholder  , type  , className  , name , id , errorMessage}) {
    

    return (
            <div className={`flex flex-col w-full ${className} mb-2`}>
            <div className={`input ${errorMessage?.[name]?.message && "error"}`}>
                    <label htmlFor={id}>{label}</label>
                    <input id={id} type={type} {...register(name , valid )}  placeholder={placeholder}/>
            </div>
                {
                    errorMessage &&
                    <p className="text-[#ff5f59] font-bold text-xs ml-2">{errorMessage?.[name]?.message}</p>
                }
            </div>
        )
}