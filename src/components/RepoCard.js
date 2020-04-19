import React from 'react'

export default function RepoCard(props) {
    console.log(props.repoList)

    let array = props.repoList.map(repo => {
            return (
                <div className="col s12 m6" key={repo.id}>
                <div className="repoItem z-depth-2 repoCard">
                    <i className="medium material-icons repoIcon">brightness_high</i>
                    <div className="center-align">
                        <h4>{repo.name}</h4>
                        <hr />
                        <a href={repo.html_url}><button className="waves-effect waves-light btn mar cyan lighten-3">{repo.name} Link</button></a>
                    </div>
                </div>
            </div>
            )})

    return (
        [array]
    )
}
