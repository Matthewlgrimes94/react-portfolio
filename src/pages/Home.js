import React from 'react'
import Navbar from "../components/Navbar"
import ParallaxComponent from "../components/ParallaxComponent";
import flock from "../images/flock-of-birds-917494.jpg";
import forest from "../images/forest-under-clouds-1287075.jpg"
import { ParallaxProvider } from 'react-scroll-parallax';
import HomeIntro from "../components/HomeIntro";
import MainCard from "../components/MainCard";
import Footer from "../components/Footer";


export default function Home() {
    return (
        <div>
            
            <ParallaxProvider>
                <Navbar page={"home"}/>
                <ParallaxComponent src={flock} height={"400px"} />
                <div className="container-fluid">
                    <main>
                        <HomeIntro />
                        <div className="row center">
                            <MainCard
                                title={"Github"}
                                href={"https://github.com/Matthewlgrimes94"}
                                description={"Check out my github"}
                                icon={"fab fa-4x fa-github"} />
                            <MainCard
                                title={"Linkedin"}
                                href={"https://www.linkedin.com/in/matthew-grimes-4b6911194/"}
                                description={"Check out my linkedin"}
                                icon={"fab fa-4x fa-linkedin"} />
                            <MainCard
                                title={"Portfolio"}
                                href={"/portfolio"}
                                description={"Check out my Portfolio"}
                                icon={"fa fa-4x fa-book"} />
                            <MainCard
                                title={"Contact"}
                                href={"/contact"}
                                description={"Send me an email"}
                                icon={"fas fa-4x fa-file-signature"} />
                        </div>
                        <ParallaxComponent src={forest} height={"500px"} />
                    </main>
                </div>
                <Footer />
            </ParallaxProvider >
        </div >
    )
}
