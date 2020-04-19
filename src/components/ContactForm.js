import React from 'react'

export default function ContactForm() {
    return (
        <main>
            <div className={"container-fluid bottom"}>
                <div className="row form-row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="message" className="materialize-textarea"></textarea>
                                <label for="textarea1">Message</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <a href=" " className="btn send-btn">Send Email</a>
                    </form>
                </div>
            </div>
        </main>
    )
}
