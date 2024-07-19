import profilePic from './assets/profilePic.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' alt='profile picture' src={profilePic}/>
            <h2 className='card-tittle'>Moises Code</h2>
            <p className='card-text'>I studie ITC and play elden ring</p>
        </div>
    );
}

export default Card