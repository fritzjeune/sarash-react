import React , { Component } from "react";
import Links from "../links";
import SocialMedias from "./social-medias";

class Footer extends Component {

    state = {
        links : Links
    }
    

    render( ) {
        console.log(this.state.links)
        return <footer>
            <div>
                <ul className="">
                    {this.state.links.map(link => {  
                        return <li className="" key={link.key}>
                            <a className="">{link.link}</a>
                        </li>  
                        // if (link.sublinks) {
                        //     return (
                        //         <li className="nav-lin nav-link-out" key={link.key}>
                        //             <span className="nav-a-link exp-links">{link.link}</span>
                        //             <ul className="sublinks">
                        //                 {link.sublinks.map(sublink => {
                        //                 return (
                                            
                        //                         <li className="nav-sub-link" key={sublink.key}>
                        //                             <a className="nav-a-link">{sublink.link}</a>
                        //                         </li>
                        //                     )
                        //                 })}
                        //             </ul>
                        //         </li>)
                        //     } else { 
                        //         return <li className="nav-sub-link" key={link.key}>
                        //             <a className="nav-a-link">{link.link}</a>
                        //         </li> 
                        //     }
                        })
                    }
                </ul> 
                <SocialMedias />
            </div>
            <h6 class="copyr">&copy;Copyright 2021 All right reserved. Made by Smath Cadet and Team.</h6>
        </footer>
    }
}


export default Footer;