
import './Post.css';
import pic from './test.jpg'
export default function Post() {
  return (
    <div className='Post'>
      <img className='post-img' src={pic}  alt="" />
      
      <div className="post-info">
          <div className="postCats">
            <span className="postcat">Life</span>
            <span className="postcat">Music</span>

          </div>
          <span className="post-title">life hacks</span>
          <hr></hr>

          <p className="post-des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquid. Obcaecati architecto debitis dolorum cupiditate of
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cupiditate soluta, est provident repellendus officia cumque facere accusantium nisi ratione dolorum vel consequuntur, aperiam dolor. Perferendis exercitationem iure voluptates unde.
          </p>

          <span className="post-date">date</span>

      </div>
      
    </div>
  )
}
