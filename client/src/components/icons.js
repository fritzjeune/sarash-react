import React from 'react';


const UserLogo = () => {
    return (
        <svg className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 24 24" width="24" height="24" preserveAspectRatio="xMinYMin">
            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2zM5.91 16.876a8.033 8.033 0 0 1-1.58-1.232 5.57 5.57 0 0 1 2.204-1.574 1 1 0 1 1 .733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 0 0-1.41-.964 1 1 0 1 1 .712-1.868 5.65 5.65 0 0 1 2.284 1.607 8.032 8.032 0 0 1-1.586 1.225z"/>
        </svg>
    )
}

const HamburgerIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    // { console.log(props)}
    return (
        <svg {...rootDOMAttributes} className="icon__icon hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -7 24 24" width="24" height="24" preserveAspectRatio="xMinYMin">
            <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"/>
        </svg>
    )
}

const CartIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (
        <svg {...rootDOMAttributes} className="icon__icon hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -7 24 24" width="24" height="24" preserveAspectRatio="xMinYMin">
            <path d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z"/>
        </svg>
    )
}

const ViewsIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (
        <svg {...rootDOMAttributes} className="icon__icon hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -7 24 24" width="24" height="24" preserveAspectRatio="xMinYMin">
            <path d="M3.636 7.208L10 13.572l6.364-6.364a3 3 0 1 0-4.243-4.243L10 5.086l-2.121-2.12a3 3 0 0 0-4.243 4.242zM9.293 1.55l.707.707.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0l-7.071-7.07a5 5 0 1 1 7.07-7.071z"/>
        </svg>
    )
}

const LikeIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (
        <svg {...rootDOMAttributes} className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 24 24" width="24" height="24" preserveAspectRatio="xMinYMin">
            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2zM5.91 16.876a8.033 8.033 0 0 1-1.58-1.232 5.57 5.57 0 0 1 2.204-1.574 1 1 0 1 1 .733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 0 0-1.41-.964 1 1 0 1 1 .712-1.868 5.65 5.65 0 0 1 2.284 1.607 8.032 8.032 0 0 1-1.586 1.225z"/>
        </svg>
    )
}

const ShareIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (

        <svg {...rootDOMAttributes} className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 24 24" width="24" height="24" preserveAspectRatio="xMinYMin">
            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2zM5.91 16.876a8.033 8.033 0 0 1-1.58-1.232 5.57 5.57 0 0 1 2.204-1.574 1 1 0 1 1 .733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 0 0-1.41-.964 1 1 0 1 1 .712-1.868 5.65 5.65 0 0 1 2.284 1.607 8.032 8.032 0 0 1-1.586 1.225z"/>
        </svg>

    )
}
const InstagramIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (
        <svg {...rootDOMAttributes} className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 30 30" preserveAspectRatio="xMinYMin">
            <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"/>
            <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"/>
            <circle cx="15.156" cy="4.858" r="1.237"/>
        </svg>
    )
}
const FacebookIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (

            <svg {...rootDOMAttributes} className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 30 30" preserveAspectRatio="xMinYMin">
                <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"/>
            </svg>

    )
}
const YoutubeIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (

            <svg {...rootDOMAttributes} className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 30 30" preserveAspectRatio="xMinYMin">
                <path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.219.219 0 0 1-.314-.196V4.35c0-.161.173-.266.318-.193l5.458 2.735a.216.216 0 0 1-.005.389z"/>
            </svg>

    )
}
const TwitterIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (

            <svg {...rootDOMAttributes} className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 30 30" preserveAspectRatio="xMinYMin">
                <path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"/>
            </svg>

    )
}
const LinkedinIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (

            <svg {...rootDOMAttributes} className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 30 30" preserveAspectRatio="xMinYMin">
                <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"/>
            </svg>

    )
}
const PinterstIcon = ({prop1, prop2, ...rootDOMAttributes}) => {
    return (

            <svg {...rootDOMAttributes} className="icon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -6 30 30" preserveAspectRatio="xMinYMin">
                <path d="M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705-.563-4.12.829-7.215 1.475-10.5-1.102-1.91.133-5.755 2.457-4.808 2.86 1.166-2.477 7.102 1.106 7.844 3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44.59 4.416-1.823 9.2-6.142 8.855-1.171-.093-1.663-.69-2.58-1.265z"/>
            </svg>

    )
}


export { UserLogo, HamburgerIcon, CartIcon, LikeIcon, ShareIcon, InstagramIcon, FacebookIcon, TwitterIcon, PinterstIcon, LinkedinIcon, YoutubeIcon, ViewsIcon };

