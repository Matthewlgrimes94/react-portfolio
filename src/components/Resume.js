import React from 'react'
import resume from "../resume/Resume_2020.odt"

export default function Resume() {
    return (
        <div className="row center-align marT">
      <div className="col s12">
        <a href={resume} className="btn-large waves-effect waves-light cyan lighten-3">
          <h5>My resume</h5>
        </a>
      </div>
    </div>
    )
}
