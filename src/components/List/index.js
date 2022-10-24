import './style.css'
import ProTypes from 'prop-types'
function List(props) {
    return(
        <div className='card'>
          <div className='card-left'>
            <div className='image'><img src={props.img} alt=''></img></div>
        </div>
          <div className='card-right'>
            <h4>{props.title}</h4>
            <p>{props.artists}</p>
            <p>{props.remaintime}</p>
        </div>

    </div>
    
    )
}
export default List

List.prototype = {
  img: ProTypes.string.isRequired,
  title: ProTypes.string,
  artists: ProTypes.string,
  remaintime: ProTypes.string
}