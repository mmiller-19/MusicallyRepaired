import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="Home">
            <h1>Welcome</h1>
            <p>
                Let's get Started!
            </p>
            <Link to="/signup">
                <button className="btn">
                    Sign Up
                </button>
            </Link>
            <Link to="/login">
                <button className="btn">
                    Login
                </button>
            </Link>
        </div>
    )
}