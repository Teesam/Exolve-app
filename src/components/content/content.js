import './content.css';

const Content = ({ userReposData }) => {
    return (
        <div className = 'Content' >
            <div className = 'Repo-holder-top'>
                <div className = 'Input-holder'>
                    <input type = 'checkbox' className = 'Content-checkbox' />
                </div>
                <div className = 'Down-arrow-holder'></div>
                <div className = 'Name-holder'>
                    <p>NAME</p>
                </div>
                <div className = 'Description-holder'>
                    <p>DESCRIPTION</p>
                </div>
                <div className = 'Issues-holder'>
                    <p>OPEN_ISSUES</p>
                </div>
                <div className = 'Stargazer-holder'>
                    <p>HOMEPAGE URL/STARGAZERS_COUNT</p>
                </div>
                <div className = 'Fork-holder'>
                    <p>FORK</p>
                </div>
                <div className = 'Options-holder'></div>
            </div>
            {
                userReposData.length > 0 && userReposData.map( repo => {
                    return  <div className = 'Repo-holder' key = { repo.id }>
                                <div className = 'Input-holder'>
                                    <input type = 'checkbox' className = 'Content-checkbox' />
                                </div>
                                <div className = 'Repo-down-arrow-holder'>
                                    <i id = 'repo-down-arrow-icon' className = 'fas fa-chevron-down'></i>
                                </div>
                                <div className = 'Name-holder'>
                                    <p>{ repo.name }</p>
                                </div>
                                <div className = 'Description-holder'>
                                    <p>{ repo.description ? repo.description : 'N/A' }</p>
                                </div>
                                
                                    { 
                                        repo.open_issues === 0 ? 
                                        <div className = 'Issues-holder'>
                                            <p className = 'No-issues'>No issue</p>
                                        </div> 
                                        : 
                                        <div className = 'Issues-holder'>
                                            <p className = 'Issues'>{repo.open_issues + ' ' + 'issues' + ' ' + 'found' }</p>
                                        </div> 
                                    }
                                    
                           
                                <div className = 'Stargazer-holder'>
                                    <div className = 'Stargazers-dot'></div>                                    <p className = 'Stargazers'>{ `${repo.open_issues}` + ' ' + 'unique' + ' ' + 'entries' }</p>
                                </div>
                                
                                <div className = 'Fork-holder'>
                                    <p>N/A</p>
                                </div>
                                <div className = 'Options-holder'>
                                    <div className = 'Options'>
                                        <div className = 'Option-1'></div>
                                        <div className = 'Option-2'></div>
                                        <div className = 'Option-2'></div>
                                    </div>
                                </div>
                            </div>
                })
            }
        </div>
    )
}

export default Content;
