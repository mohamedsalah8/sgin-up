import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import './steps.css'
export default function Steps({progress}) {
    return(
        <div className="steps">
            <div className="progress" progress={progress}></div>
            <div className={`icon ${progress == 0 ? "current" : progress > 0 && "done"}`}>
                <PermIdentityIcon/>
            </div>  
            <div className={`icon ${progress == 1 ? "current" : progress > 1 && "done"}`}>
                <ApartmentIcon/>
            </div>  
            <div className={`icon ${progress == 2 ? "current" : progress > 2 && "done"}`}>
                <PermMediaIcon/>
            </div>  
            <div className={`icon ${progress == 3 ? "current" : progress > 3 && "done"}`}>
                <VerifiedUserOutlinedIcon/>
            </div>  
        </div>
    )
}