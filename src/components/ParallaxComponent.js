import React, { Component } from 'react'
import {ParallaxBanner} from "react-scroll-parallax";
 
export default class ParallaxComponent extends Component {
    render() {
        return (
            <ParallaxBanner
                className="parallax1"
                layers={[
                    {
                        image: this.props.src,
                        amount: 0.5,
                    }
                ]}
                style={{
                    height: this.props.height,
                }}
            >
            </ParallaxBanner>
        )
    }
}
