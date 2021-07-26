import './body.css';
import Nav from '../nav/nav';
import Breakout from '../breakout/breakout';
import Todo from '../todo/todo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from '../profile/profile';
import Card from '../card/card';
import Content from '../content/content';
import Loading from '../loading/loading';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Body = ({ username }) => {

    let history = useHistory();

    const [ userInfo, setUserInfo ] = useState({});
    const [ userReposData, setUserReposData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);


    useEffect( () => {
        
        const getUserInformation = async () => {
            try{
                const response = await axios.get(`https://api.github.com/users/${username}`)
                setUserInfo(response.data);
            }catch(error){
                console.log(error);
                history.push('/', {
                    errorMessage: 'Invalid github username. Please make sure you pass github username in sign up',
                    username
                })       
             }
        }

        const getUserRepos = async () => {
            try{
                const response = await axios.get(`https://api.github.com/users/${username}/repos?type=all&sort=updated`)
                setUserReposData(response.data);
                setIsLoading(true);
            }catch(error){
                console.log(error)
            }
        }

        getUserInformation();
        getUserRepos();

    }, [])


    return(
        <div className = 'Body'>
            <Nav userInfo = { userInfo } />
            <Breakout />
            <div id = 'content'>
                <div id = 'side-nav-holder'>
                    <Profile userInfo = { userInfo } />
                    <Todo />
                </div>
                <div id = 'main-body'>
                    <div id = 'cards-holder'>
                        <Card
                            title = 'Public repos'
                            figure = { userInfo.public_repos }
                        />
                        <Card
                            title = 'Public gist'
                            figure = { userInfo.public_gists }
                        />
                        <Card
                            title = 'Followers'
                            figure = { userInfo.followers }
                        />
                        <Card
                            title = 'Following'
                            figure = { userInfo.following }
                        />
                    </div>
                    <div>
                        <Content userReposData = { userReposData } />
                    </div>
                </div>
            </div>
            {
                !isLoading ?
                <Loading />
                : ''
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        username: state.user
    }
}

export default connect(mapStateToProps)(Body);