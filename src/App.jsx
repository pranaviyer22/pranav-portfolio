import "./App.css";
import iplImage from "./assets/ipl-dashboard.png";
import llmImage from "./assets/llm-assistant.png";
import heroImage from "./assets/hero.png";

function App() {
  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "Pandas",
    "Plotly",
    "Streamlit",
    "GitHub",
    "LLMs",
    "EDA",
  ];

  return (
    <main>
      <nav className="navbar">
        <h2>Pranav Iyer</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-btn" href="/Pranav_Iyer_Resume.pdf" target="_blank">
          Resume
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left">
          <p className="eyebrow">Data Analyst • AI Enthusiast • Dashboard Builder</p>

          <h1>
            Hi, I’m <br />
            <span>Pranav Iyer</span>
          </h1>

          <p className="hero-text">
            I build dashboards, analytics apps, and AI-powered tools that turn raw
            data into clear business insights.
          </p>
        </div>

        <div className="hero-right">
          <div className="photo-space">
            <img src={heroImage} alt="Pranav Iyer" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="focus-strip">
        <div>
          <strong>2+</strong>
          <span>Projects Built</span>
        </div>
        <div>
          <strong>AI</strong>
          <span>Analytics Focus</span>
        </div>
        <div>
          <strong>BI</strong>
          <span>Dashboards</span>
        </div>
        <div>
          <strong>Live</strong>
          <span>Deployments</span>
        </div>
      </section>

      <section className="section" id="about">
        <p className="eyebrow">About Me</p>
        <h2>Building practical analytics projects with clean storytelling.</h2>
        <p>
          I’m a B.Tech CSE AI student at Parul University, focused on Python-based
          data analysis, SQL, Power BI dashboards, Streamlit apps, and AI-powered
          analytics workflows.
        </p>
      </section>

      <section className="section" id="skills">
        <p className="eyebrow">Skills</p>
        <h2>Tools I work with</h2>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="eyebrow">Projects</p>
        <h2>Featured Work</h2>

        <div className="projects">
          <article className="project-card">
            <img src={iplImage} alt="IPL Analytics Dashboard" />
            <div>
              <p className="project-type">Sports Analytics</p>
              <h3>IPL Cricket Analytics Dashboard</h3>
              <p>
                Power BI + Streamlit analytics project covering batting, bowling,
                venue intelligence, strategy analysis, and phase-wise insights.
              </p>
              <div className="links">
                <a
                  href="https://ipl-cricket-analytics-ueoqvw7szskkdrvzt8xqbm.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
                <a
                  href="https://github.com/pranaviyer22/IPL-Cricket-Analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img src={llmImage} alt="LLM Data Analysis Assistant" />
            <div>
              <p className="project-type">AI + Analytics</p>
              <h3>LLM-Powered Data Analysis Assistant</h3>
              <p>
                AI-powered assistant for dataset analysis, insight generation, and
                natural language analytics workflows.
              </p>
              <div className="links">
                <a
                  href="https://github.com/pranaviyer22/LLM-Powered-Data-Analysis-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="certifications">
        <p className="eyebrow">Certifications</p>
        <h2>Learning & Professional Credentials</h2>

        <div className="certification-grid">
          <div className="simple-card">
            <h3>TiECon Vadodara 2025 Business Executive Internship Certificate</h3>
            <p>
              Recognized for contributions as a Business Executive Intern,
              supporting startup ecosystem initiatives, stakeholder engagement,
              event operations, and entrepreneurship-focused activities at
              TiECon Vadodara 2025.
            </p>
            <a
              href="https://drive.google.com/file/d/1J5k5uIpw1rFOby3l8_JYFws7PySABUid/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>

          <div className="simple-card">
            <h3>Professional Certificate in Data Analytics & Business Intelligence</h3>
            <p>
              Completed comprehensive training in Python, SQL, Excel, Power BI,
              Data Visualization, Exploratory Data Analysis, and business-focused
              analytical workflows for data-driven decision making.
            </p>
            <a
              href="https://drive.google.com/file/d/1GXuApfUXxBMU5RvhLiP55l3RuxTUqz_X/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <p className="eyebrow">Experience</p>
        <h2>Professional Experience</h2>
        <div className="simple-card">
          <h3>Business Development Intern</h3>
          <p>
            Gained exposure to communication, client interaction, teamwork, and
            business workflows.
          </p>
          <a
            href="https://drive.google.com/file/d/1J5k5uIpw1rFOby3l8_JYFws7PySABUid/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>
      </section>

      <section className="section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect</h2>
        <p>Email: pranaviyeroff22@gmail.com</p>
        <p>Location: Vadodara, Gujarat</p>
      </section>

      <footer className="footer">
        <p>© 2026 Pranav Iyer. Built with React.</p>

        <div>
          <a href="https://github.com/pranaviyer22" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pranav-iyer-145b67367/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:pranaviyeroff22@gmail.com">Email</a>
        </div>
      </footer>
    </main>
  );
}

export default App;