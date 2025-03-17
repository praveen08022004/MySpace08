import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter basename="/MySpace08">
  <Routes>
    {/* Your routes */}
  </Routes>
</BrowserRouter>


const skills = [
  { name: 'HTML', percentage: 90, icon: 'fab fa-html5' },
  { name: 'CSS', percentage: 85, icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', percentage: 80, icon: 'fab fa-js' },
  { name: 'React.js', percentage: 75, icon: 'fab fa-react' },
  { name: 'Python', percentage: 70, icon: 'fab fa-python' },
  { name: 'Flask', percentage: 65, icon: 'fas fa-flask' },
  { name: 'MySQL', percentage: 60, icon: 'fas fa-database' },
];




const App = () => {
  const [activeNav, setActiveNav] = useState('about');
  const [typingText, setTypingText] = useState('');
  const fullText = 'I am a Frontend Developer | React.js Enthusiast | Python Programmer';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (section) => {
    setActiveNav(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${formData.get('email')}&body=${formData.get('message')}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <nav>
        {['about', 'skills', 'projects', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={activeNav === section ? 'active' : ''}
            onClick={() => handleNavClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      <header>
        <div className="name-card">
        <h1>A S Praveen Kumar</h1>
        </div>
        <p className="typing">{typingText}</p>
      </header>

      <section id="about">
        <p className="description">
        Hey there! I'm Praveen, a BCA 6th semester student, passionate about Full Stack Development with skills in Python, HTML, CSS, JavaScript, MySQL, and React.js.
I've built projects like an E-commerce platform and a Grocery Management System while continuously learning Django and Flask for backend development.
I specialize in creating responsive and interactive web applications with clean code and smooth UI/UX.
My strengths lie in problem-solving, attention to detail, and quick learning, and I'm currently preparing for Wipro's technical interviews.
I aim to become a Full Stack Developer, building scalable and efficient web applications.
Check out my resume below and feel free to connect with me!
        </p>
        <div className="download-cv">
        <a href="/praveen Resume.pdf" download="praveen Resume.pdf">Download CV</a>

        </div>

      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <div className="skill-container">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p>{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
  <h2>My Projects</h2>
  <div className="project-card">
  <div className="project-details">
<img src="/praveenportfoliio/images/bg.jpg" alt="Profile" className="project-image" />
    <div>
      <h3>Grocessory Management System</h3>
      <p className="project-description">
         Developed a full-stack Grocessory Management System using python and flask , it includes a dashboard for tracking orders with filtering .
      </p>
    </div>
  </div>
</div>


  <div className="project-card">
  <div className="project-details">
<img src="/praveenportfoliio/images/bg.jpg" alt="Profile" className="project-image" />
    <h3>Online Store</h3>
    <p>Developed a dynamic e-commerce platform using PHP, integrating MySQL for efficientdatabase management of products, users, and orders. Implemented secure userauthentication, session handling, and input validation to enhance security. Optimizedbackend performance through caching techniques and query optimization..</p>
  </div>
  </div>
</section>


      <section id="contact">
        <h2>Contact Me</h2>
        <form 
action="https://formsubmit.co/a.s.praveen2004@gmail.com"
  method="post" 
  encType="text/plain"
>
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
  <button type="submit">Send</button>
</form>

        <div className="social-icons">
          <a href="https://wa.me/9515618291" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/praveen.gowd_08?igsh=MXBxOTB0MnpvcmxpZA==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/a-s-praveen-kumar" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/praveen08022004" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <footer>
        <p>© 2025 A S Praveen Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
