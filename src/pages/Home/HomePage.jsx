// Styles
import "./HomePage.scss";
import {projectList} from "../../api/projectsAPI"

function HomePage() {

    return (
        <section className="home">
            <section className="hero">
                <img src={require("../../assets/images/handwriting-hi.png")} className="hero__img" />
                <p className="hero__intro">
                    I’m Stephanie — <br></br>
                    <span className="hero__intro--bold">designer</span> and <span className="hero__intro--bold">developer</span> <br></br>
                    with project management <br></br>
                    and writing acumen.
                </p>
            </section>
            <section className="work">
                <h2 className="work__title">Recent Work</h2>
                <div className="work__projects-container">
                {projectList.map((projectList) => (
                    <div key={projectList.id} className="work__project">
                        <img src={projectList.imgURL} className="work__project-img" />
                        {/* <img src={require("../../assets/images/portfolio-tb-sfu-website.png")} className="work__project-img" /> */}
                        <div>
                            <h3 className="work__project-title">{projectList.name}</h3>
                            <p className="work__project-skills">{projectList.topSkills}</p><br></br>
                            <a href={projectList.url} target="_blank" className="work__project-btn">Learn More</a>
                        </div>
                    </div>
                ))}
                </div>
            </section>
        </section>
    )
};

export default HomePage;
