// Requirements
// 1. Create and use at least two pieces of custom middleware.
// 2. Create and use error-handling middleware.
// 3. Use at least 3 different data categories (e.g., users, posts, or comments).
// 4. Utilize reasonable data structuring practices.
// 5. Create GET routes for all data that should be exposed to the client.
// 6. Create POST routes for data, as appropriate. At least one data category
// should allow for client creation via a POST request.
// 7. Create PATCH or PUT routes for data, as appropriate. At least one data
// category should allow for client manipulation via a PATCH or PUT request.
// 8. Create DELETE routes for data, as appropriate. At least one data category
// should allow for client deletion via a DELETE request.
// 9. Include query parameters for data filtering, where appropriate. At least one
// data category should allow for additional filtering through the use of query parameters.
// Note: DO NOT use API keys; this makes it more difficult for instructors to grade finished
// projects efficiently.
// 10. Utilize route parameters, where appropriate.
// 11. Adhere to the guiding principles of REST.
// 12. Create and render at least one view using a view template and template
// engine. This can be a custom template engine or a third-party engine. If you are
// stuck on how to approach this, think about ways you could render the current state
// of your API's data for easy viewing.
// 13. Use simple CSS to style the rendered views. Note: This is not a test of design;
// it is a test of serving static files using Express. The CSS can be very simple.
// 14. Include a form within a rendered view that allows for interaction with your RESTful API.
// 15. Utilize reasonable code organization practices.
// * I will go in and add CSS styles etc. (front end) work to app once back-end is up and working.
// *** Just work on POST requests on forms - HTML does NOT support patch or delete
// ** Do not show API

//-------------------------------------
// 1. create server.mjs file
// 2. npm init -y - creates package.json
// 3. correct package.json
// 4. npm i express - download express
// 5. import express at top of page
// 6. Initialize express into a variable
// 7. Listen to express(app) at the BOTTOM of the page

//---------------------------------------
/*
import express from 'express';
import bodyParser from 'body-parser';
import express from 'express';
import bodyParser from 'body-parser';
*/

// Initialize Express:
//  const app = express();
//  let PORT = 3000;

// routes
// listener
// middleware - custom
// middleware - error handling
// query params
// form - view template, template engine
// interactive form on render



//------------------------- CSS / HTML ------------------------
// CSS
/*
@import url(https://fonts.googleapis.com/css?family=Griffy:regular);

body {
    background-color: #0e0d0d;
    opacity: 80%;
    margin: 0;
    padding: 0;
}

/* customizable snowflake styling */
/*
/*
.snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Serif;
    text-shadow: 0 0 1px #000;
}

@-webkit-keyframes snowflakes-fall {
    0% {
        top: -10%;
    }

    100% {
        top: 100%;
    }
}

@-webkit-keyframes snowflakes-shake {
    0% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
    }

    50% {
        -webkit-transform: translateX(80px);
        transform: translateX(80px);
    }

    100% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
    }
}

@keyframes snowflakes-fall {
    0% {
        top: -10%;
    }

    100% {
        top: 100%;
    }
}

@keyframes snowflakes-shake {
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(80px);
    }

    100% {
        transform: translateX(0px);
    }
}

.snowflake {
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
}

.snowflake:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s;
}

.snowflake:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s;
}

.snowflake:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, .5s;
    animation-delay: 6s, .5s;
}

.snowflake:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s;
}

.snowflake:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s;
}

.snowflake:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s;
}

.snowflake:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s;
}

.snowflake:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2s, 1s;
    animation-delay: 2s, 1s
}

.snowflake:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s;
}

.snowflake:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1s;
    animation-delay: 3s, 1s;
}

.snowflake:nth-of-type(10)

/* Demo Purpose Only*/
/*
.demo {
    font-family: 'Raleway', sans-serif;
    color: #fff;
    display: block;
    margin: 0 auto;
    padding: 15px 0;
    text-align: center;
}

.demo a {
    font-family: 'Raleway', sans-serif;
    color: #e1a707;
}

.snowflake img {
    height: 40px;
    bottom: 0;
    display: block;
}
    main {
        padding: 16px;
    }

    /* -------------Main------------------ */
    /* ---------------------------------- */


    /* ---------------------------------- */
    /* -------------Landing-------------- */
    /*
    .image-container {
        width: 60%;
        margin: auto;
        padding-right: 50px;
        border: 2px solid #4e4944;
        box-shadow: 0 0 40px rgba(254, 233, 40, 0.2);
    }

    .image-container img {
        width: 100%;
    }

    /* -------------Landing--------------- */
    /* ---------------------------------- */


    /* ----------------------------------- */
    /* -------------Nav Bar--------------- */
    /*
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
        border-right: 2px solid #b8d14b;
    }

    li:last-child {
        border-right: none;
    }

    li a {
        display: block;
        color: #ff9b3e;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active) {
        background-color: #75108b;
    }

    .active {
        text-decoration-color: #75108b;
    }

    a {
        color: #fdf7f7;
        text-decoration: none
    }

    a:hover {
        color: hwb(303 51% 12%);
    }

    nav {
        background-color: #ffa500;
        border-bottom: 5px solid rgb(171, 26, 161);
        padding: 16px;
        padding-left: 15px;
    }

    nav a {
        color: 0a0a09f7;
    }

    nav a:hover {
        color: yellow;
    }

    /*------------- Nav Bar -------------*/
    /* --------------------------------- */


    /*--------------------------------- */
    /* -------------Grid--------------- */
    /*
    img {
        width: 100%;
    }

    /* .......Landing page/title/Spooky Little Developer's Monster Creations .......*/
/*
    h1 {
        text-align: center;
        color: #e30cd4;
        font-family: 'Griffy', cursive;
        font-size: 50px;
        font-weight: 100;
    }

    /* ...............details/about/This is Halloween ...............................*/

    /*
    h2 {
        text-align: center;
        color: #6de30c;
        font-family: 'Griffy', cursive;
        font-size: 30px;
        font-weight: 100;
    }

    /* ...............details/about/grid-container...............................*/
    /*
    .grid-container {
        display: grid;
        margin: 15px;
        padding: 25px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    /* ..........details/about/grid-items/animation............................... */
    /*
    .grid-item {
        transition: all 0.01s linear;
        margin: 35px;
        padding: 15px;
        border: 4px solid #b8d14b;
        border-radius: 20px;
        box-shadow: 10px 4px #e286f7c9;
        position: relative;
    }

    /* ..........detailsThis is Halloween grid-item1...............................*/
    /*
    .grid-item1 {
        transition: all 0.01s linear;
        margin: 35px;
        padding: 15px;
        border: 4px solid #b8d14b;
        border-radius: 20px;
        box-shadow: 10px 4px #e286f7c9;
        position: relative;
        color: #0aa021;
    }

    /* ..........details/about/grid-item2, box & forms................................*/
    /*
    .grid-item2 {
        transition: all 0.01s linear;
        margin: 35px;
        padding: 15px;
        border: 4px solid #b8d14b;
        border-radius: 20px;
        box-shadow: 10px 4px #e286f7c9;
        position: auto;
        color: #ee2bc0;
    }

    /* ............grid hover- details/about & index...................................*/
    /*
    .grid-item:hover {
        top: 8px;
        left: 2px;
        box-shadow: 15px 15px #f8a408b3;
    }

    /* -------------Grid---------------- */
    /*-----------------------------------*/


    /*..................................*/
    /* -----------NBC gif--------------- */
    /*
    .image-container {
        // will have to tinker more with grid to fix
        display: grid;
        align-items: right;
    }

    .details-img {
        margin-right: 10px;
    }

    /* -----------NBC gif--------------- */
    /*..................................*/


    /* --------------------------------- */
    /* -------------Table--------------- */
    /*
    .table-container {
        background-color: #ffffff;
        border: 3px solid #0aa021;
        border-radius: 5px;
        padding: 5px;
        font-size: large;
    }

    .details-img {
        width: 100%;
        border: 5px solid hsl(330, 2%, 22%);
        border-radius: 5px;
    }

    div {
        padding-left: 50px;
    }

    thead {
        font-size: larger;
        color: rgb(214, 210, 210);
        padding: 10px;
        text-wrap: normal;
    }

    tbody tr:nth-child(even) {
        background-color: #f8a408b3;
    }

    tbody tr:nth-child(odd) {
        background-color: #fc09dcca;
    }

    /* -------------Table---------------- */
    /* --------------------------------- */


    /* --------------------------------- */
    /* -------------Footer--------------- */
    /*
    footer {
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 16px;
        padding-right: 16px;
        text-align: left;
        color: #111010;
        background-color: #ffd900b3;
        opacity: 95%;
        font-family: Griffy, cursive;
        font-weight: 250;
        font-size: smaller;
        border-top: 2px solid rgb(171, 26, 161);
    }

    /* -------------Footer--------------- */
    /* --------------------------------- */


    //--------------------------
    // Landing Page HTML
    /*
    <!DOCTYPE html>
<html>
<!---............... Landing Page ..................-->

<head>
    <title>Spooky Little Developer's Monster Creations</title>
    <link rel="stylesheet" href="styles.css">
    <div class="snowflakes">
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
        <div class="snowflake">
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" />
        </div>
    </div>
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a class="active" href="landing.html">Home</a></li>
                <li><a href="index.html">Creations</a></li>
                <li><a href="details.html">About</a></li>
                <li style="float:right"><a href="details.html">Something Wicked This Way Comes...</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h1>Spooky Little Developer's Monster Creations</h1>
        <div class="image-container">
            <img src="/Users/jenniferdunsmore/Library/Mobile Documents/com~apple~CloudDocs/Downloads/Designer.png">
        </div>
    </main>
    <footer>
        Made with angst by a struggling bootcamp student
    </footer>
</body>
//---------------------------------


