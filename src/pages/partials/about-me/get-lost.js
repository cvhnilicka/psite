import React from "react";
import Gallery from 'react-grid-gallery';

// Images to use for the gallery
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

export default GetLost;