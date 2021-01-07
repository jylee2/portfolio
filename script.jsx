//React component
class App extends React.Component {
    // Render
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark customNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">
                                <i className="fa fa-home" aria-hidden="true"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="customBgText">
                    Tasmania <i class="fa fa-copyright" aria-hidden="true"></i> 2016 Jun
                </div>
            
                <section id="home" className="container customDivCenter customHomeSection">
                    <h1 id="home-title">Hello, I am a Web Developer.</h1>
                    <p id="home-description">Jun Yi Lee, PhD</p>
                </section>
            
                <section id="projects" className="customDivCenter customProjectsSection">
                    <h1 id="work" className="classSectionHeader">Work</h1>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="card-deck classProjectContainer">
                                <a className="card text-center customCardShadow classCardSize" href="https://jylee2.github.io/login-page/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul3-2.fna.fbcdn.net/v/t1.0-9/134413511_10158235656415892_517781070568791571_n.jpg?_nc_cat=105&ccb=2&_nc_sid=0debeb&_nc_ohc=KxHvYBDm_oAAX-7afZa&_nc_ht=scontent.fkul3-2.fna&oh=9024e883588777f5a257ef62d8b08375&oe=601A2146" alt="login-page"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">Responsive Login Page</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <h1 id="personal-projects" className="classSectionHeader classPersonalProjects">Personal Projects</h1>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="card-deck">
                                <a className="card text-center customCardShadow" href="https://jylee2.github.io/javascript-calculator/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul4-3.fna.fbcdn.net/v/t1.0-9/131432257_10158205611795892_2889220676811119589_n.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=rZXH0nlmDd4AX-oTzci&_nc_oc=AQnloTvw7glSRE-jigeG-_krt41vhPZL4nS_ZLweKRfAI-91MSW3gDJCW9DgbIt65Ww&_nc_ht=scontent.fkul4-3.fna&oh=15ad87b63385ba305deff43b5797bf86&oe=6007DA8E" alt="calculator"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">JavaScript Calculator</p>
                                    </div>
                                </a>
                                <a className="card text-center customCardShadow" href="https://jylee2.github.io/25-5-clock/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul4-2.fna.fbcdn.net/v/t1.0-9/131761165_10158205611805892_8675711744864238880_n.jpg?_nc_cat=105&ccb=2&_nc_sid=0debeb&_nc_ohc=wXd3BpxMpo8AX8b5v8u&_nc_ht=scontent.fkul4-2.fna&oh=ecceb9bc9c78fb21f2e9596d4057e4f8&oe=6006671A" alt="pomodoro-clock"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">Pomodoro Clock</p>
                                    </div>
                                </a>
                                <a className="card text-center customCardShadow" href="https://jylee2.github.io/choropleth-map/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul4-3.fna.fbcdn.net/v/t1.0-9/131672010_10158205611895892_5220015581143874202_n.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=40IuiaSPiYgAX_JGC3R&_nc_ht=scontent.fkul4-3.fna&oh=3a208c9705e1c40f50831f95b25d4bc9&oe=600724B6" alt="choropleth-map"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">Choropleth Map</p>
                                    </div>
                                </a>
                            </div>
                            <br/>
                            <div className="card-deck">
                                <a className="card text-center customCardShadow" href="https://url.jylee3.repl.co/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul3-4.fna.fbcdn.net/v/t1.0-9/134934980_10158240782930892_443643754042458013_n.jpg?_nc_cat=110&ccb=2&_nc_sid=0debeb&_nc_ohc=ZsE1wgEy8KEAX_EMhej&_nc_ht=scontent.fkul3-4.fna&oh=11f19b6d3d77c77adf1e7094b87a09ec&oe=601A9FC7" alt="url-shortener"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">URL Shortener Microservice</p>
                                    </div>
                                </a>
                                <a className="card text-center customCardShadow" href="https://exercise-tracker-project.jylee3.repl.co/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul4-2.fna.fbcdn.net/v/t1.0-9/133509988_10158224166260892_4427338236374963706_n.jpg?_nc_cat=104&ccb=2&_nc_sid=0debeb&_nc_ohc=JuaIUCFjE4UAX9i1uMQ&_nc_ht=scontent.fkul4-2.fna&oh=096be123b1c9a4cc3bbb935fa45e24ed&oe=6012F25F" alt="exercise-tracker"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">Exercise Tracker</p>
                                    </div>
                                </a>
                                <a className="card text-center customCardShadow" href="https://file-metadata.jylee3.repl.co/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul4-3.fna.fbcdn.net/v/t1.0-9/133289518_10158224166275892_3950579675764366296_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=ZhYNQYCYYFgAX899OIA&_nc_ht=scontent.fkul4-3.fna&oh=0b57cd8aeab42ee912a241b03eec3b70&oe=60112C83" alt="file-metadata-microservice"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">File Metadata Microservice</p>
                                    </div>
                                </a>
                            </div>
                            <br/>
                            <div className="card-deck">
                                <a className="card text-center customCardShadow" href="https://jylee2.github.io/fcc-random-quote-machine/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul4-4.fna.fbcdn.net/v/t1.0-9/132308650_10158205611775892_1525069901662786222_n.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=2-msl-3H7KMAX-pSa-o&_nc_ht=scontent.fkul4-4.fna&oh=f44bae0a84e003ddf5cdab25e654900f&oe=6005C882" alt="random-quote-generator"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">Random Quote Machine</p>
                                    </div>
                                </a>
                                <a className="card text-center customCardShadow" href="https://jylee2.github.io/drum-machine/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul4-3.fna.fbcdn.net/v/t1.0-9/132325285_10158212320775892_1353193816898006335_n.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=AioN_G36SSIAX9DL8LG&_nc_ht=scontent.fkul4-3.fna&oh=1fa9737009e319879be35e3ae4dac5a7&oe=600C866F" alt="drum-machine"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">Drum Machine</p>
                                    </div>
                                </a>
                                <a className="card text-center customCardShadow" href="https://jylee2.github.io/scatterplot-graph/" target="_blank">
                                    <img className="card-img-top" src="https://scontent.fkul4-2.fna.fbcdn.net/v/t1.0-9/131578947_10158205671750892_2203151998922210138_o.jpg?_nc_cat=108&ccb=2&_nc_sid=0debeb&_nc_ohc=zBJWoOygtTcAX-OXZAM&_nc_ht=scontent.fkul4-2.fna&oh=b94c91d0026624028e775e37b3e81893&oe=60076660" alt="scatterplot"/>
                                    <div className="card-body customDivCenter customCardText">
                                        <p className="card-title">Scatterplot Graph</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </section>

                <section id="skills" className="bg-dark customDivCenter customSkillsSection">
                    <h1 className="classSectionHeader">Skills</h1>
                    <div className="classSkillsList">
                        HTML &middot; CSS &middot; JavaScript &middot; Bootstrap &middot; React.js &middot; D3.js &middot; Node.js &middot; MongoDB
                    </div>
                    <div className="classSkillsList">
                        Research &middot; Computational Fluid Dynamics &middot; Communication
                    </div>
                </section>
            
                <section id="contact" className="customDivCenter customContactSection">
                    <h1 className="classSectionHeader">Profiles and Contact</h1>
                    <div className="row customContactItems">
                        <a href="https://linkedin.com/in/leejunyi" target="_blank" >
                             <button className="btn btn-lg btn-block customContactBtn"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</button>
                        </a>
                        <a href="mailto:jylee.blog@gmail.com" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fa fa-envelope" aria-hidden="true"></i> Email</button>
                        </a>
                        <a href="https://github.com/jylee2" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fab fa-github" aria-hidden="true"></i> GitHub</button>
                        </a>
                        <a href="https://www.freecodecamp.org/jylee" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fab fa-free-code-camp"></i> freeCodeCamp</button>
                        </a>
                    </div>
                    <div className="row customContactItems">
                        <a href="https://scholar.google.com/citations?user=k6YhcbUAAAAJ&hl=en" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fa fa-book" aria-hidden="true"></i> Google Scholar</button>
                        </a>
                        <a href="https://www.youtube.com/channel/UCgZgJ73743xLn5ZzijlM6_g" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fab fa-youtube" aria-hidden="true"></i> YouTube</button>
                        </a>
                        <a href="https://jyleeblogging.wordpress.com/" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fa fa-bold" aria-hidden="true"></i> Blog</button>
                        </a>
                    </div>
                </section>
            
                <footer className="customDivCenter customFooterSection bg-dark">
                    <p><i class="fa fa-copyright" aria-hidden="true"></i> <span id="footer-date"></span> Jun</p>
                </footer>
            </div>
        );
    }
};
ReactDOM.render(<App/>, document.getElementById("react"))

const setFooterDate = () => {
    const currentYear = new Date().getFullYear();
    //console.log(`The year is ${currentYear}`);
    document.getElementById("footer-date").innerHTML = currentYear;
};
setFooterDate();