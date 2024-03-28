import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './addImage.css'
import { useState } from 'react';
export default function AddImage({register}) {

    const [selectedImage , setSelectedImage] = useState("")

    function handleImage(image) {
        setSelectedImage(URL.createObjectURL(image.target.files[0]));

    }

    return (
        <div className="addImage">
            
            {
                selectedImage ?
                <div className="image relative">
                    <span className='absolute cursor-pointer bg-red-600 text-white right-0 w-[35px] h-[35px] rounded-full flex justify-center items-center' onClick={()=>{setSelectedImage("")}}>X</span>
                    <img src={selectedImage} alt="" />
                </div>
                    :
                    <div className="icon">
                       <PhotoSizeSelectActualOutlinedIcon/>
                        <div className="addIcon">
                        <AddOutlinedIcon/>
                    </div>
                 <input type="file" name='logo'  accept='image/*' {...register("logo")} onChange={handleImage}/>
            </div>
            }
            <p>Only images with a size lower than 500KB are allowed</p>
        </div>
    )
}