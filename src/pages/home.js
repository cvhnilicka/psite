import React from "react";
import * as ReactBootstrap from 'react-bootstrap';


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
        tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]


const Home = () => (
    <div className="page-container">
        <ReactBootstrap.Carousel>
            <ReactBootstrap.Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES[0].src}
                    alt="First slide"
                />
                <ReactBootstrap.Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
            <ReactBootstrap.Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES[1].src}
                    alt="Third slide"
                />

                <ReactBootstrap.Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
            <ReactBootstrap.Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMAGES[2].src}
                    alt="Third slide"
                />

                <ReactBootstrap.Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
        </ReactBootstrap.Carousel>
    </div >

);

export default Home;