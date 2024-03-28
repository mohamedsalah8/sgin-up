import '../input/input.css'
export default function Select (props) {
 
    return (
         <div className={`flex flex-col w-full ${props.className} mb-2`}>
            <div className={`input select ${props.errorMessage?.[props.name]?.message && "error"}`}>
                    <label htmlFor={props.id}>{props.label}</label>
                    <select   required name={props.name} id={props.id} {...props.register(props.name)} onChange={props.onChange}>
                        <option value="">{props.placeholder}</option>
                        {props.children}
                    </select>
            </div>
                {
                    props.errorMessage &&
                    <p className="text-[#ff5f59] font-bold text-xs ml-2">{props.errorMessage?.[props.name]?.message}</p>
                }
            </div>
        )
}