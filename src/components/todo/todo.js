import './todo.css';
import { useState } from 'react';
import Modal from '../modal/modal';
import { connect } from 'react-redux';

const Todo = ({ todos, dispatch }) => {


    const [ modalSwitch, setModalSwitch ] = useState(false);
    const [ title, setTitle ] = useState('');

    let gmt = new Date();
    let day = gmt.getDay();
    let date = gmt.getDate();
    let month = gmt.getMonth();
    let year = gmt.getFullYear();
    let todoList = todos;

    return(
        <div className = 'Todo'>
            <div>
                <div id = 'gmt-holder'>
                    <div id = 'date-holder'>
                        <h1 id = 'date'>{ date }</h1>
                        <div id = 'date-join'>
                            <p>{ month === 0 ? 'JAN' : ''}</p>
                            <p>{ month === 1 ? 'FEB' : ''}</p>
                            <p>{ month === 2 ? 'MAR' : ''}</p>
                            <p>{ month === 3 ? 'APR' : ''}</p>
                            <p>{ month === 4 ? 'MAY' : ''}</p>
                            <p>{ month === 5 ? 'JUN' : ''}</p>
                            <p>{ month === 6 ? 'JUL' : ''}</p>
                            <p>{ month === 7 ? 'AUG' : ''}</p>
                            <p>{ month === 8 ? 'SEP' : ''}</p>
                            <p>{ month === 9 ? 'OCT' : ''}</p>
                            <p>{ month === 10 ? 'NOV' : ''}</p>
                            <p>{ month === 11 ? 'DEC' : ''}</p>
                            <p id = 'year'>{ year }</p>
                        </div>
                    </div>
                    <h2>{ day === 1  ? 'Monday' : '' }</h2>
                    <h2>{ day === 2  ? 'Tuesday' : '' }</h2>
                    <h2>{ day === 3  ? 'Wednesday' : '' }</h2>
                    <h2>{ day === 4  ? 'Thursday' : '' }</h2>
                    <h2>{ day === 5  ? 'Friday' : '' }</h2>
                    <h2>{ day === 6  ? 'Saturday' : '' }</h2>
                    <h2>{ day === 0  ? 'Sunday' : '' }</h2>
                </div>
            </div>
            <div id = 'todo-holder'>
                <div>
                    {
                        todoList.length > 0 ?
                            todoList.map( todo => {
                            return  <div 
                                        onClick = { (e) => {
                                        
                                        dispatch({ type: 'TOGGLE_RESOLVED', payload: { id: todo.id } })
                                        }}
                                        className =  'Individual-todo'
                                        key = { todo.id }
                                     >
                                        <p className ={ `Todo-title ${todo.resolved && 'todo-resolved'}`}>{ todo.title }</p>
                                        
                                            <i 
                                                className = {` ${todo.resolved ? 'fas fa-check-circle Checked': 'far fa-circle Circle'}`}
                                            ></i>
                                        
                                    </div>
                        })
                        : ''
                    }
                </div>
                <div id = 'add-todo-holder'>
                    <i onClick = { () => {
                        setModalSwitch(true);
                    }
                    } id = 'add-todo' className = 'fas fa-plus'></i>
                </div>
            </div>

            {
                modalSwitch ?

                <Modal>
                    <div id = 'modal-top-holder'>
                        <h1>New Todo</h1>
                        <p>Please write content of todo in input below!</p>
                    </div>
                    <div id = 'modal-bottom-holder'>
                        <input
                            onChange = { (e) => {
                                setTitle(e.target.value);
                            }}
                        type = 'text' id = 'modal-input' placeholder = 'Enter title here' />
                        <div id = 'modal-buttons-holder'>
                            <button onClick = { () => setModalSwitch(false) } id = 'modal-cancel'>Cancel</button>
                            <button
                                onClick = { () => {
                                    dispatch({ type: 'ADD_TODO', payload: { title: title }});
                                    setModalSwitch(false);
                                }}
                            
                            id = 'modal-add'>Add</button>
                        </div>
                    </div>
                </Modal>

                : ''
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        todos: state.todoList
    }
}

export default connect(mapStateToProps)(Todo);