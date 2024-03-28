import mailImg from '../../assets/Untitled.png'
import './confirm.css'
export default function ConfirmForm() {
    return (
        <div className="confirmForm">
            <img src={mailImg} alt="mail img" />
            <p>We will send a message for this e-mail</p>
            <p>example@exapmle.com</p>
        </div>
    )
}