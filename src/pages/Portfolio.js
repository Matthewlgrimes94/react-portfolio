import React, { useState, useEffect } from 'react'
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import RepoCard from "../components/RepoCard";
import flock from "../images/flock-of-birds-917494.jpg";
import forest from "../images/forest-under-clouds-1287075.jpg"
import Resume from "../components/Resume";
import ParallaxComponent from '../components/ParallaxComponent';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Portfolio() {
    const [repoList, setRepoList] = useState();

    useEffect(() => fetchRepos(), []);

    function fetchRepos() {
        axios.get("https://api.github.com/users/matthewlgrimes94/repos")
            .then(result => setRepoList(result.data));
    }

    return (
        <div>
            <Navbar page={"portfolio"} />
            <ParallaxProvider>
                <ParallaxComponent src={flock} height={"300px"} />
                <Resume />
                {repoList ? (
                    <div className="container-fluid marT">
                        <div className="row">
                            <RepoCard repoList={repoList} />
                        </div>
                    </div>
                ) : (<h3>No results</h3>)}
                <ParallaxComponent src={forest} height={"100px"} />
            </ParallaxProvider>

            <Footer />
        </div>
    )
}
