import './profile.css';
import ProfileIcon from '../asset/profile-icon.png';

const Profile = ({ userInfo }) => {
    return (
        <div className = 'Profile'>
            <div id = 'profile-top'>
                <img id = 'profile-icon' src = { ProfileIcon } alt = 'A logo' />
                <h2>Profile Information</h2>
            </div>
            <div>
                <div className = 'Profile-info-holder'>
                    <i className = 'fas fa-phone'></i>
                    <p>{ userInfo.phone ? userInfo.phone: 'N/A'}</p>
                </div>
                <div className = 'Profile-info-holder'>
                    <i className = 'fas fa-envelope'></i>
                    <p>{ userInfo.email ? userInfo.email: 'N/A'}</p>
                </div>
                <div className = 'Profile-info-holder'>
                    <i className = 'fas fa-map-marker-alt'></i>
                    <p>{ userInfo.phone ? userInfo.phone: 'N/A'}</p>
                </div>
                <div className = 'Profile-info-holder'>
                    <i className = 'fas fa-fingerprint'></i>
                    <p>{ userInfo.phone ? userInfo.phone: 'N/A'}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
