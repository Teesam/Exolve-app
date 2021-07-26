import './username-input.css';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import netlifyIdentity from 'netlify-identity-widget';

const UsernameInput = ({ dispatch, location }) => {

    const [ user, setUser ] = useState({})
    let history = useHistory();

    useEffect(() => {

        netlifyIdentity.on('login', user => {
            netlifyIdentity.close();
            let myUser = user.user_metadata.full_name
            dispatch({ type: 'SET_USER', payload: myUser})
            history.push('/body');
        })
        
        netlifyIdentity.init()
        
    }, [dispatch, history])

    const login = () => {
        netlifyIdentity.open()
    }

    return(
        <div className = 'Username-input'>

            <div id = 'black-top'></div>
            <div id = 'login-holder'>
                <button id = 'login'
                    onClick = { () => {
                        login()
                    }}
                >SIGN UP/LOGIN</button>

                <p>Please enter your github username as your name!</p>

                <p id = 'warning'>{ location?.state?.errorMessage }</p>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        state: state
    };
}

export default connect(mapStateToProps)(UsernameInput);