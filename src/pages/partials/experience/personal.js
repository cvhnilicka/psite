import React from "react";

const Personal = () => (
    <div className="edge-fade">
        <div className="info-block">
            <ul>

                {/* BEGIN:  RaspberryPi Server */}
                <li>
                    <div className="project-container">
                        <h3>RaspberryPiServer</h3>
                        <a target="_blank" href="https://github.com/cvhnilicka/RaspberryPiServer">Repo</a>
                        <p>A simple socket server running in my house to keep a live report of smart light usage as well as current load on the network. </p>
                    </div>
                </li>
                {/* END:  RaspberryPi Server  */}


                {/* BEGIN:  Coffeescript Server */}
                <li>
                    <div className="project-container">
                        <h3>Coffeescript Chat Server</h3>
                        <a target="_blank" href="https://github.com/cvhnilicka/chatRoomCoffee">Repo</a>
                        <p>A simple socket server written with Coffeescript that provides a live chat environment. </p>
                    </div>
                </li>
                {/* END:  Coffeescript Server  */}

                {/* BEGIN:  Coffeescript Server */}
                <li>
                    <div className="project-container">
                        <h3>Mail Room Logistics</h3>
                        <a target="_blank" href="https://github.com/cvhnilicka/MailRoomLogistics">Repo</a>
                        <p>The beginning of an Android application for my university's tech department to use in their mailroom for logistics </p>
                    </div>
                </li>
                {/* END:  Coffeescript Server  */}

                {/* BEGIN:  Wine Perceptron */}
                <li>
                    <div className="project-container">
                        <h3>Wine Perceptron</h3>
                        <a target="_blank" href="https://github.com/cvhnilicka/wine-perceptron">Repo</a>
                        <p>Perceptron written in Java to categorize wine</p>
                    </div>
                </li>
                {/* END:  Wine Perceptron  */}

                {/* BEGIN: Appointment Application */}
                <li>
                    <div className="project-container">
                        <h3>Appointment Application</h3>
                        <a target="_blank" href="https://github.com/cvhnilicka/Appointment-verison1">Repo</a>
                        <p>An application to set up appointments with our Tech Department</p>
                    </div>
                </li>
                {/* END: Appointment Application  */}

                {/* BEGIN: Personal AI */}
                <li>
                    <div className="project-container">
                        <h3>Personal AI</h3>
                        <a target="_blank" href="https://github.com/cvhnilicka/PersonalAI">PersonalAI</a>
                        <a target="_blank" href="https://github.com/cvhnilicka/lil_bill">Lil Bill</a>
                        <p>A couple of attempts messing around with building an  'ai' assistent.</p>
                    </div>
                </li>
                {/* END: Personal AI  */}

            </ul>
            <br />
        </div>
    </div>
);


export default Personal;