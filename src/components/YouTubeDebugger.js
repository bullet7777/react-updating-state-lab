// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleClick = () => {

        this.setState(
            {
                ...this.state, settings: {
                    ...this.state.settings, bitrate: 12


                }
            }
        )


    }

    anotherClick = () => {

        this.setState({
            ...this.state, settings: {
                ...this.state.settings,video:{
                    ...this.state.settings.video, resolution: "720p"
                }}
            
        })
    }


    render() {
console.log(this.state)
        return (
            <div>
                <button className='bitrate' onClick={this.handleClick} ></button>
                <button className='resolution' onClick={this.anotherClick}></button>
                
            </div>

        )

    }
}
