import React from "react";
import './404.css'

const Screen404 = () => {
    return (
        <div>
            <h1>404 Error Page</h1>
            <section className="error-container">
                <span className="four">
                    <span className="screen-reader-text">4</span>
                </span>
                <span className="zero">
                    <span className="screen-reader-text">0</span>
                </span>
                <span className="four">
                    <span className="screen-reader-text">4</span>
                </span>
            </section>
            <hr />
        </div>
    );
};

export default Screen404;
