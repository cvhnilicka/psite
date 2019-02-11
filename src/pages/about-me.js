import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Gallery from 'react-grid-gallery';


class AboutMe extends Component {


    render() {
        return (
            <Router>
            <Route path="/about" component={Topics} />
            </Router>
        );
    }
}

class Topic extends Component {



    constructor(props) {
        super(props);

        this.state = {
            contentMap: {
                'climbing': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Dui ut ornare lectus sit amet. Pulvinar proin gravida hendrerit lectus. Nisl suscipit adipiscing bibendum est ultricies. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Odio eu feugiat pretium nibh ipsum consequat nisl. Viverra vitae congue eu consequat ac felis. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Tincidunt eget nullam non nisi est. At erat pellentesque adipiscing commodo elit. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Nunc sed blandit libero volutpat sed cras ornare. Etiam erat velit scelerisque in dictum non consectetur a erat. Faucibus interdum posuere lorem ipsum dolor sit amet.",
                'camping': "Volutpat odio facilisis mauris sit amet massa vitae. Ultrices in iaculis nunc sed augue lacus. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Odio ut sem nulla pharetra diam sit amet nisl. Arcu cursus euismod quis viverra nibh cras. Sed libero enim sed faucibus turpis in eu mi bibendum. Faucibus pulvinar elementum integer enim neque. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Tortor at risus viverra adipiscing at in tellus integer feugiat. Pellentesque massa placerat duis ultricies lacus sed. Elit at imperdiet dui accumsan sit amet nulla. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Ultrices dui sapien eget mi proin sed libero. Condimentum id venenatis a condimentum vitae.",
                'get-lost': "Malesuada fames ac turpis egestas sed. Nunc mattis enim ut tellus elementum sagittis vitae et leo. In iaculis nunc sed augue lacus viverra vitae congue. Tincidunt dui ut ornare lectus sit amet. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Suspendisse potenti nullam ac tortor. Orci dapibus ultrices in iaculis nunc sed augue lacus. Egestas sed tempus urna et pharetra pharetra massa. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Vulputate mi sit amet mauris commodo. Ornare aenean euismod elementum nisi quis."
            },
            animate: false,
        }
    }

    componentDidMount() {
        requestAnimationFrame(() => {
      // Firefox will sometimes merge changes that happened here
      requestAnimationFrame(() => {
        this.setState({animate: true});
    });
});
    }

    render() {

        const topicId = this.props.match.params.topicId;
        const index = this.state.contentMap[this.props.match.params.topicId].substr(0,1);
        if (topicId === 'get-lost') {
            return (

                <div className="content">
                <ReactCSSTransitionGroup
                transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={100}
              transitionAppear={true}
              transitionAppearTimeout={500}>
                <GetLost/>
                </ReactCSSTransitionGroup>
                </div>
    
    
            );
        } else {
        return (

            <div className="content">
            <ReactCSSTransitionGroup
            transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={100}
          transitionAppear={true}
          transitionAppearTimeout={500}>
            <h3 key={topicId}>{topicId}</h3>
            <p key={index}>{this.state.contentMap[this.props.match.params.topicId]}</p>
            </ReactCSSTransitionGroup>
            </div>


        );
        }
    }
}

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]


const Topics = ({ match }) => (
    <div className="page-container">
    <div className="side-bar">
    <h2>Beyond the code</h2>
    <ul>
    <li>
    <Link className='side-bar-link' to={`${match.url}/climbing`}>Climbing</Link>
    </li>
    <li>
    <Link className='side-bar-link' to={`${match.url}/camping`}>Camping</Link>
    </li>
    <li>
    <Link className='side-bar-link' to={`${match.url}/get-lost`}>Getting Lost</Link>
    </li>
    </ul>
    </div>
    <hr className="vertical-line"/>
    <div className="content-box">
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
    exact
    path={match.url}
    render={() => <h3>Please select a topic.</h3>}
    />
    </div>
    </div>


);


const GetLost = () => (
    <div>
    <h1>Getting Lost</h1>
        <h5>Not all who wander are lost</h5>
        <p>Shortly after I graduated in December of 2017, I hit the road to live out of my car and travel West.
            At the time, this had been my fourth 'road trip', but it was my first solo, long-term, one way trip.
            It was during this trip that I truly fell in love with the open road, solitude, and the great landscapes
            are available to us.
        </p>
        <p>
            To cite Yvon Chouinard, a role model of mine, "The word adventure has gotten overused. For me, when everything goes wrong -- that's when adventure starts"
        </p>
        <p>
            This quote has always stuck out to me, even though I didn't begin to better understand it till this previous road trip. About a week and a half into the
            trip as I was leaving Jacksonhole Wyoming, a pipe in my engine's coolant system rusted through and I limped into Grand Junction, Colorado (~120 miles short
            of Moab, my original destination). I was gloomy given my current situation, however, I had some slush money set aside for an emergency like this. I got a hotel
            room for the night and called my mechanic back home for advice. The following morning, as per his instructions, I brought my car into a local mechanic shop (Dare to Care)
            and within another day, the car was purring like normal and I was given the green light to hit the road.
        </p>
        <p>
            Pulling into Moab with my energy restored, I stopped at a local grocery store to stock up. I had packed up the car with plenty of supplies as the next week
            was to be spent sleeping along the Colorado River some number of miles outside of town. As I turned the key to finally head out into the bush, the engine reved,
            turned over, and then sputtered out. I was stuck at a local grocery store with week's worth of supplies in a car that wouldn't start. Fast forward 6 hours, and I am standing in
            a small mechanic shop on the outskirts of Moab, Utah, being told that it would take ~2 weeks and $2K to fix my car as I had blown my head gasket (an unfortunate side affect of the coolant breaking).
            I was devasted, and for lack of a better word, I was lost...
        </p>
        <p>
            I'll leave the rest of the trip for those who were there or truly want to hear about it, but I will say that it changed who I am and how I want to live.
            I know that I have not climbed K2, backpacked Patagonia, or even visted many other countries. But I'm ok with that. I don't want to do those things yet. I think that
            so many people believe you need to have a destination to have a grand adventure. But the truth is most people don't even treat those "Big Adventures" properly. During that trip, I learned how to
            be comfortable with myself, how to trust others, and most importantly, how to begin to deal with life -- cause its not always going to be how you planned it -- sometimes you need to be lost.
         </p>
         {/* <Gallery enableImageSelection={false} images={IMAGES}/> */}
         </div>
);



export default AboutMe;
