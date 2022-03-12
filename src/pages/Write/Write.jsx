import './Write.css'
import pic from "../../components/Header/2.jpg"

export default function Write() {
  return (
    <div className='write' >

     <img src={pic} alt="" className='Img' />   
        
    <form className='writeform'>
     
     <div className="write-form-group">
        
        <label className='Add-icon' htmlFor="file-input">
        <i className=" fa-solid fa-circle-plus"></i>
        </label>
        <input type="file"  id="file-input" style={{display:"none"}}/>
        <input type="text" placeholder='Title' className='write-input' autoFocus={true} />

     </div>

     <div className="write-form-group">

        <textarea placeholder='Add your story' type="text" className='write-input write-text' ></textarea>

     </div>

     <button className='write-submit' >publish </button>

    </form>


    </div>
  )
}
