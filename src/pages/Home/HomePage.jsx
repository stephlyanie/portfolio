function HomePage() {
    const projectList = [
        {
          id: 1,
          role: "Product Manager and Designer",
          name: "SFU Centre for Dialogue",
          company: "SFU Morris J. Wosk Centre for Dialogue",
          year: "2024",
          urlText: "sfu.ca/dialogue",
          url: "https://www.sfu.ca/dialogue.html",
        },
        {
            id: 2,
            role: "Creator",
            name: "Challenge Accepted",
            company: "BrainStation Capstone",
            year: "2023",
            urlText: "github.com/stephlyanie/challenge-accepted-gui",
            url: "https://github.com/stephlyanie/challenge-accepted-gui",
        },
        {
            id: 3,
            role: "Web Designer",
            name: "Maple Counselling",
            company: "Freelance",
            year: "2021",
            urlText: "maplecounselling.ca",
            url: "https://www.maplecounselling.ca/",
        }
    ]

    return (
        <section className="home">
            <section className="home__hero">
                <img />
                <p>
                    I’m Stephanie — designer and developer with project management and writing acumen.
                </p>
            </section>
            <section className="home__work">
                <h2>Recent Work</h2>
                <div>
                {projectList.map((project) => (
                    <div key={project.id}>
                        <h3>{project.role} | {project.name}</h3>
                        <p>{project.year}, {project.company} <a href={project.url} target="_blank">&#123;{project.urlText}&#125;</a></p>
                    </div>
                ))}
                </div>
            </section>
        </section>
    )
};

export default HomePage;
