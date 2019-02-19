import React from "react";
import * as ReactBootstrap from 'react-bootstrap';


const IMAGES =
    [{
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/snow_moab_tent.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/snow_moab_tent.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Moab - February 2018"
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/lake_tahoe_august2017.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/lake_tahoe_august2017.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        caption: "Lake Tahoe - August 2017"
    },

    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/portland_august_2018.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/portland_august_2018.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]


const Home = () => (
    <div className="page-container">
        <ReactBootstrap.Carousel>
            <ReactBootstrap.Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES[2].src}
                    alt="First slide"
                />
                <ReactBootstrap.Carousel.Caption>
                <h3>Portland - August 2018</h3>
                    
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
            <ReactBootstrap.Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES[1].src}
                    alt="Third slide"
                />

                <ReactBootstrap.Carousel.Caption>
                    <h3>Lake Tahoe - August 2017</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
            <ReactBootstrap.Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES[0].src}
                    alt="Third slide"
                />

                <ReactBootstrap.Carousel.Caption>
                <h3>Moab - February 2018</h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
        </ReactBootstrap.Carousel>
    </div >

);

export default Home;