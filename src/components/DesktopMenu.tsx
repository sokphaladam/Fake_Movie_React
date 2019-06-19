import React from 'react';

export class DesktopMenu extends React.Component {
    render() {
        return(
            <div className="DesktopMenu">
                <div className="Logo">
                    <img src={require('../img/netflix-logo.png')} alt=""/>
                </div>
                <ul>
                    <li> <span/> TV Shows</li>
                    <li className="active"> <span/> Movies</li>
                    <li> <span/> Recently Added</li>
                    <li> <span/> My List</li>
                </ul>
            </div>
        )
    }
}