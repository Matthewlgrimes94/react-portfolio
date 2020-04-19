import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Navbar page={"contact"} />
            <ContactForm />
            <Footer />
        </div>
    )
}
