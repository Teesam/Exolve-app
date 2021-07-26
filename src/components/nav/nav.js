import './nav.css';
import Logo from '../asset/logo.png';
import { NavLink } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Nav = ({ userInfo, dispatch }) => {

    let profilePhoto = userInfo.avatar_url;
    let history = useHistory();

    useEffect( () => {

        netlifyIdentity.on('logout', () => {
            dispatch({ type: 'SET_USER', payload: '' });
            history.push('/');
        })

        netlifyIdentity.init();

    }, [dispatch, history])

    const logout = () => {
        netlifyIdentity.logout();
    }

    return(
        <div className = 'Nav'>
            <div id = 'logo-nav-holder'>
                <div id = 'logo-holder'>
                    <img id = 'logo' src = { Logo } alt = 'The logo' />  
                    <h5>FE Engineer Test 1</h5>
                </div>
                <NavLink to = "/" className = 'Nav-item'><i id = 'home-icon' className = 'fas fa-home' ></i>Home</NavLink>
            </div>
            <div id = 'user-info-holder'>
                <i id = 'bell-icon' className = 'fas fa-bell'></i>
                <img id = 'user-photo' src = { profilePhoto } alt = 'User photo' />
                <i id = 'down-arrow-icon' className = 'fas fa-chevron-down'></i>
                <button id = 'logout'
                    onClick = { () => {
                        logout()
                    }}
                >LOGOUT</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Nav);