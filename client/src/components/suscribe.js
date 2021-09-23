import React, { Component } from "react";

class Suscribe extends Component {
    // Add function to make Api Call when someone suscribe to our newsletter 
    // And reset the input field

    render () {
        return <div className="news-suscript">
            <form action="post">
                <h3 className="news-invite">Dont wanna miss mews about new collections? please suscribe to our newsletter.</h3>
                <input type="text" name="email" id="email" placeholder="Email"/>
                <button className="my-btn">suscribe</button>
            </form>
        </div>
    }
}

export default Suscribe;