import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1>{this.props.bannerText || 'Default Banner Text'}</h1>
            </div>
        );
    }
}

export default Banner;


// import React, { Component } from 'react';
// import './Banner.css';

// class Banner extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             bannerText: 'Default Banner Text',
//             showTooltip: false,
//             clicked: false // New state to handle click animation
//         };
//     }

//     handleBannerClick = () => {
//         // Toggle the 'clicked' class to trigger the animation
//         this.setState({ clicked: true }, () => {
//             setTimeout(() => this.setState({ clicked: false }), 500); // Remove the class after the animation
//         });
//     }

//     handleTextChange = (event) => {
//         this.setState({ bannerText: event.target.value });
//     }

//     toggleTooltip = () => {
//         this.setState({ showTooltip: !this.state.showTooltip });
//     }

//     render() {
//         // Add the 'clicked' class when the banner is clicked
//         const bannerClasses = `Banner ${this.state.clicked ? 'clicked' : ''}`;
//         return (
//             <div className={bannerClasses} onClick={this.handleBannerClick} onMouseEnter={this.toggleTooltip} onMouseLeave={this.toggleTooltip}>
//                 <h1>{this.state.bannerText}</h1>
//                 {this.state.showTooltip && <span className="Tooltip">Click to do something</span>}
//                 <input type="text" value={this.state.bannerText} onChange={this.handleTextChange} placeholder="Change banner text" />
//             </div>
//         );
//     }
// }

// export default Banner;
