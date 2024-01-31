window.addEventListener('load', insertHeader);
window.addEventListener('load', insertFooter);

function insertHeader() { 
    var content = `
    <div class="header">
        <div id="columnone">
            <a href="/index.html" style="text-decoration:none;"> <h1> ZM Reviews </h1></a>
        </div>

        <div id="columntwo">
            <ul>
                <ul id="navmenu">
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/reviews.html">Reviews</a></li>
                    <li><a href="/imagegallery.html">Favourite Shots</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/feedback.html">Contact</a></li>
                    <li><a href="/assignment.html">Assignment</a></li>

                </ul>
            </ul>
        </div>

        <div id="columnthree">
            <a href="https://www.instagram.com/z_morehouse" target=”_blank><i
                    class="fa-brands fa-instagram fa-lg"></i></a>
            <a href="https://www.twitter.com/zoobzx" target=”_blank><i class="fa-brands fa-twitter fa-lg"></i></a>
        </div>
    </div>`;

    document.getElementById('globalheader').innerHTML = content; 
}

function insertFooter() { 
    var content = `
    <div class="footer">
        <div id="column">
            <h3> Get in touch </h3>
            <ul id="contact">
                <li><a href="mailto:zacmorehouselogin@gmail.com" target=”_blank>
                        <div id="contactlistitem"><i class="fa-solid fa-envelope fa-lg"></i>
                            <p> zacmorehouselogin@gmail.com </p>
                        </div>
                    </a></li>
                <li><a href="https://instagram.com/z_morehouse" target=”_blank>
                        <div id="contactlistitem"><i class="fa-brands fa-instagram fa-lg"></i>
                            <p> @z_morehouse </p>
                        </div>
                    </a></li>
                <li><a href="https://twitter.com/zoobzx" target=”_blank>
                        <div id="contactlistitem"><i class="fa-brands fa-twitter fa-lg"> </i>
                            <p> @zoobzx </p>
                        </div>
                    </a></li>
            </ul>
        </div>
        <div id="column">
            <h3> Quick links </h3>
            <ul id="sitemap">
                <li><a href="/sitemap.html"> Sitemap Page </a></li>
                <li><a href="/sourcelog.html"> Sourcelog Page </a></li>
                <li><a href="/imagemap.html"> Image Map Page </a></li>
                <li><a href="/storyboard.html"> Storyboard Page </a></li>
            </ul>

        </div>
        <div id="column">
            <a href="/index.html" style="text-decoration:none !important;"> <h2> ZM Reviews </h3></a>
        </div>
    </div> `;

    document.getElementById('globalfooter').innerHTML = content; 
}

