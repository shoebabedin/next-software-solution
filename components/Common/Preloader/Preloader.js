import React from 'react';
// import "./preloader.css";

const Preloader = () => {
    return (
        <div id="preloader">
            <div id="container" className="container-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                    <div className="txt-loading">
                        <span preloader-text="L" className="characters">L</span>
                        <span preloader-text="O" className="characters">O</span>
                        <span preloader-text="A" className="characters">A</span>
                        <span preloader-text="D" className="characters">D</span>
                        <span preloader-text="I" className="characters">I</span>
                        <span preloader-text="N" className="characters">N</span>
                        <span preloader-text="G" className="characters">G</span>
                    </div>
                </div>
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        </div>
    );
};

export default Preloader;