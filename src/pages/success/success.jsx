import img from '../../assets/Untitled.png'

export default function Success() {
    return(
         <div className="form success text-center bg-white">
            <img src={img} alt="mail img" className='m-auto' />
            <p>
                <span className='text-[18px] font-bold'>Congratz, you successfully your account.</span>
                <br />
                we just send you a confirmation email
                <br />
                please check your E-mail
            </p>

            <p>
                Didn't receive it?
                <br />
                Check your Spam folder or <a href="#" className='text-[#ff5f59] underline'>Resnd Email</a>
            </p>
         </div>
    )
}