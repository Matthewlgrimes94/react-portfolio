import React from 'react'

export default function MainCard(props) {
    return (
        <div className="col s12 m3">
            <div className="card z-depth-3 hover">
                <a className="card-link" target="_blank" rel="noopener noreferrer" href={props.href}>
                    <div className="card-content">
                        <span className="card-title">{props.title}</span>
                        <p>{props.description}</p>
                    </div>
                    <div className="card-action center">
                        <i className={props.icon} style={{ color: "black" }} id="github-icon"></i>
                    </div>
                </a>
            </div>
        </div>
    )
}
