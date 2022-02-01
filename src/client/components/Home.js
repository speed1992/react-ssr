import React from "react";

const Home = () => {
    return (
        <div>
            <div>I am the VERY VERY BEST Home Component</div>
            <button onClick={() => {
                const msg = "Hi there!";
                console.log(msg)
            }}>Press Me!</button>
        </div>
    )
}

export default Home;