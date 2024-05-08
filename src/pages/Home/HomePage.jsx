// Styles
import "./HomePage.scss";

function HomePage() {
    const projectList = [
        {
          id: 1,
          role: "Product Manager and Designer",
          name: "SFU Centre for Dialogue Website Redesign",
          company: "SFU Morris J. Wosk Centre for Dialogue",
          year: "2024",
          urlText: "sfu.ca/dialogue",
          url: "https://www.sfu.ca/dialogue.html",
          imgURL: require("../../assets/images/portfolio-tb-sfu-website.png"),
          topSkills: "HTML | Product Management | UI Design",
          skills: ["HTML", "Graphic Design", "Product Management", "Project Management", "Web Design"]
        },
        {
            id: 2,
            role: "Creator",
            name: "Challenge Accepted App",
            company: "BrainStation Capstone",
            year: "2023",
            urlText: "github.com/stephlyanie/challenge-accepted-gui",
            url: "https://github.com/stephlyanie/challenge-accepted-gui",
            imgURL: require("../../assets/images/portfolio-tb-ca-website.png"),
            topSkills: "mySQL | Javascript | React",
            skills: ["Figma", "mySQL", "JavaScript", "React", "UI Development"]
        },
        {
            id: 3,
            role: "Web Designer",
            name: "Maple Counselling Website",
            company: "Freelance",
            year: "2021",
            urlText: "maplecounselling.ca",
            url: "https://www.maplecounselling.ca/",
            imgURL: require("../../assets/images/portfolio-tb-mc-website.png"),
            topSkills: "CSS | HTML | WordPress",
            skills: ["CSS", "HTML", "Product Management", "Web Design", "WordPress"]
        },
        {
            id: 4,
            role: "Project Manager and Designer",
            name: "Being Safe, Being Me",
            company: "SARAVYC at UBC",
            year: "2019",
            urlText: "saravyc.ubc.ca/ctyhs2019/",
            url: "https://www.saravyc.ubc.ca/ctyhs2019/",
            imgURL: require("../../assets/images/portfolio-tb-ctyhs-website.png"),
            topSkills: "CSS | HTML | WordPress",
            skills: ["CSS", "HTML", "Graphic Design", "Marketing Strategy", "Project Management", "Web Design", "WordPress"]
        },
        {
            id: 5,
            role: "Project Manager and Designer",
            name: "Out at Home",
            company: "SARAVYC at UBC",
            year: "2019",
            urlText: "saravyc.ubc.ca/outathome/",
            url: "https://www.saravyc.ubc.ca/outathome/",
            imgURL: require("../../assets/images/portfolio-tb-oah-website.png"),
            topSkills: "CSS | HTML | WordPress",
            skills: ["CSS", "HTML", "Graphic Design", "Marketing Strategy", "Project Management", "Web Design", "WordPress"]
        }
    ]

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
                {projectList.map((project) => (
                    <div key={project.id} className="work__project">
                        <img src={project.imgURL} className="work__project-img" />
                        {/* <img src={require("../../assets/images/portfolio-tb-sfu-website.png")} className="work__project-img" /> */}
                        <div>
                            <h3 className="work__project-title">{project.name}</h3>
                            <p className="work__project-skills">{project.topSkills}</p><br></br>
                            <a href={project.url} target="_blank" className="work__project-btn">Learn More</a>
                        </div>
                    </div>
                ))}
                </div>
            </section>
        </section>
    )
};

export default HomePage;
