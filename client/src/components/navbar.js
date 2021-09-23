import React, { useState } from 'react';
import Links from "../links";


const Navbar = ({props, ...rootDOMAttributes}) => {

    const [state, setState] = useState({links : Links});
    const navState = useState({links : Links, openSubNav : false})

    const prop1 = {...rootDOMAttributes};
    const active = prop1.open.active;
    let openSubNav = false;

    const toggleNavArc = () => {
        console.log("fired")
        openSubNav = !openSubNav;
    }


    return (
        <ul {...rootDOMAttributes}>   
            {state.links.map(link => {   
                if (link.sublinks) {
                    return (
                        <li className={active ? 'nav-lin nav-link-in' : 'nav-lin nav-link-out'} key={link.key}>
                            <span className="nav-a-link exp-links" onClick={toggleNavArc}>{link.link}</span>
                            <ul className={ openSubNav ? "sublinks open-sublinks" : "sublinks"}>
                                {link.sublinks.map(sublink => {
                                return (
                                        <li className="nav-sub-link" key={sublink.key}>
                                            <a className="nav-a-link">{sublink.link}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>)
                    } else { 
                        return <li className={active ? 'nav-lin nav-link-in' : 'nav-lin nav-link-out'} key={link.key}>
                            <a className="nav-a-link">{link.link}</a>
                        </li> 
                        // className="nav-sub-link"
                    }
                })
            }
        </ul>
    )
}

export default Navbar;