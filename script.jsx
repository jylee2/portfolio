//React component
class MainReactComponent extends React.Component {
    // Render
    render() {
        return (
            <div>
                <div id="navbar">
                    <a href="#projects">Projects</a>
                    <a href="#home">
                        <i class="fa fa-home" aria-hidden="true"></i>
                    </a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="customBgText">
                    Tasmania <i class="fa fa-copyright" aria-hidden="true"></i> 2016 Jun
                </div>
            
                <section id="home" className="customDivCenter customHomeSection">
                    <h1 id="home-title">Hello, I am a Web Developer.</h1>
                    <p id="home-description">Jun Yi Lee, PhD</p>
                </section>
            
                <section id="projects" className="customDivCenter customProjectsSection">
                    <h1 id="projects-h1">Portfolio</h1>
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
                                <a className="card text-center customCardShadow" href="https://jylee2.github.io/fcc-random-quote-machine/" target="_blank">
                                <img className="card-img-top" src="https://scontent.fkul4-4.fna.fbcdn.net/v/t1.0-9/132308650_10158205611775892_1525069901662786222_n.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=2-msl-3H7KMAX-pSa-o&_nc_ht=scontent.fkul4-4.fna&oh=f44bae0a84e003ddf5cdab25e654900f&oe=6005C882" alt="random-quote-generator"/>
                                <div className="card-body customDivCenter customCardText">
                                    <p className="card-title">Random Quote Machine</p>
                                </div>
                                </a>
                                <a className="card text-center customCardShadow" href="https://jylee2.github.io/drum-machine/" target="_blank">
                                <img className="card-img-top" src="https://scontent.fkul4-4.fna.fbcdn.net/v/t1.0-9/132552820_10158205671735892_2367045891760795688_n.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=ZUTB0WRDMisAX9Ik0Zb&_nc_ht=scontent.fkul4-4.fna&oh=662af0254c9672e196e710c787382645&oe=6008E9F1" alt="drum-machine"/>
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
            
                <section id="contact" className="customDivCenter customContactSection">
                    <h1>Profiles and Contact</h1>
                    <div>
                        <a href="https://linkedin.com/in/leejunyi" target="_blank" >
                             <button className="btn btn-lg btn-block customContactBtn"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</button>
                        </a>
                        <a href="mailto:jylee.blog@gmail.com" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fa fa-envelope" aria-hidden="true"></i> Email</button>
                        </a>
                        <a href="https://www.freecodecamp.org/jylee" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fab fa-free-code-camp"></i> freeCodeCamp</button>
                        </a>
                        <a href="https://github.com/jylee2" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fab fa-github" aria-hidden="true"></i> GitHub</button>
                        </a>
                        <a href="https://www.youtube.com/channel/UCgZgJ73743xLn5ZzijlM6_g" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fab fa-youtube" aria-hidden="true"></i> YouTube</button>
                        </a>
                        <a href="https://scholar.google.com/citations?user=k6YhcbUAAAAJ&hl=en" target="_blank" >
                            <button className="btn btn-lg btn-block customContactBtn"><i class="fa fa-book" aria-hidden="true"></i> Google Scholar</button>
                        </a>
                    </div>
                </section>
            
                <footer className="customDivCenter customFooterSection bg-dark">
                    <p><i class="fa fa-copyright" aria-hidden="true"></i> 2020 Jun</p>
                </footer>
            </div>
        );
    }
};
ReactDOM.render(<MainReactComponent/>, document.getElementById("react-div"))