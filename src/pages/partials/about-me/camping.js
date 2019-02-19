import React from "react";
import Gallery from 'react-grid-gallery';

const IMAGES =
    [{
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/big_sur_day.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/big_sur_day.jpg",
        caption: "Big Sur - Spring 2018"
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/big_sur_sunset.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/big_sur_sunset.jpg",
        caption: "Big Sur - Sunset Spring 2018"
    },

    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/jtree_sunset.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/jtree_sunset.jpg",
        caption: "Joshua Tree - Spring 2018 - Sunset"

    },
    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/the_boys_elk_mt.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/the_boys_elk_mt.jpg",
        caption: "The Boys at Elk Mountain - Spring 2018"
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/the_boys_elk_mt_climb.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/the_boys_elk_mt_climb.jpg",
        caption: "The Boys climbing at Elk Mountain - Spring 2018"
    },

    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/yellowstone_winter.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/yellowstone_winter.jpg",
        caption: "Yellowstone - February 2018"

    },
    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/dad_beach_sunset.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/dad_beach_sunset.jpg",
        caption: "Dad taking in the sunset - Fall 2018"
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/dad_tea_fire.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/dad_tea_fire.jpg",
        caption: "Dad enjoying some Tea - Fall 2018"
    },
    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/john_beach_tall_grass.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/john_beach_tall_grass.jpg",
        caption: "John wading through the tall grass - Ecola State Park - Spring 2018"
    },

    {
        src: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/the_boys_ecola.jpg",
        thumbnail: "https://s3-us-west-2.amazonaws.com/cormickhnilicka/camping/the_boys_ecola.jpg",
        caption: "The boys - Ecola State Park - February 2018"

    }]


const Camping = () => (
    <div>
        <h1>Camping</h1>
        <p>
            Camping has always been a very big part of my life. Growing up in a small Wisconsin town, I had plenty of access
            to the outdoors and practically spent more time in the woods behind my house then inside my actual house. Much like
            climbing, camping offers me an environment to be fully immersed in.
         </p>
         <p>
             Growing up, I had the luxury of rural Wisconsin to explore. This meant plenty of hiking, biking, and boating in the summer,
             followed by snowshoeing, cross-country skiing, and sledding in the winter. As I have gotten older, I have only gained access 
             to many more landscapes. It was in college that my friends and I began our backpacking/roadtripping phase that we are all 
             currently still it. 
         </p>
         <p>
             I had taken a job out west towards the end of college and six of my friends decided to take an extended spring break to drive out with me. 
             During this trip we explored seven different national parks and not once stayed in a hotel/motel. We realized how easy it was travel 
             if you didn't mind driving or sleeping outside! From then on, any chance I have gotten alone or with friends, I try to spend it outside 
             enjoying everything this beautiful country has to offer. 
        </p>
        <p>
            Below are some photos from these trips. Feel free to check them out! But remember, I am a computer scientist, not a photographer. 
        </p>

        <Gallery enableImageSelection={false} images={IMAGES}/>
    </div>
);

export default Camping;