import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const results = []
    const sections = [
      { id: 'about', title: 'About Me', content: 'PhD student Computer Science data science machine learning telecommunications' },
      { id: 'education', title: 'Education', content: 'PhD Computer Science NJIT Masters Business Administration IBA University Dhaka Bachelor Electrical Electronic Engineering BUET' },
      { id: 'experience', title: 'Experience', content: 'Graduate Teaching Assistant Data Science Specialist Robi Axiata Data Science Intern Fujitsu Research Lab Optimization Engineer Huawei Technologies' },
      { id: 'publications', title: 'Publications', content: 'Bayesian Reinforcement Learning Framework Online Index Tuning Scalable Optimization Graph Pattern Queries Summary Graphs LiteSelect Lightweight Adaptive Learning Algorithm' },
      { id: 'projects', title: 'Projects', content: 'Ship Delay Prediction System WALLET Payment Network Course Q&A Crewmate Manager Dog Data Dashboard Collaborative Task Deployment' },
      { id: 'technical skills', title: 'Technical Skills', content: 'Python C++ JavaScript SQL TensorFlow PyTorch Keras Scikit-learn Pandas NumPy MySQL PostgreSQL MongoDB React Vite Node.js Express AWS Docker Git' }
    ]

    sections.forEach(section => {
      const searchText = `${section.title} ${section.content}`.toLowerCase()
      if (searchText.includes(query.toLowerCase())) {
        results.push(section)
      }
    })

    setSearchResults(results)
  }

  const handleSearchResultClick = (sectionId) => {
    scrollToSection(sectionId)
    setShowSearch(false)
    setSearchQuery('')
    setSearchResults([])
  }

  // Close search modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSearch && !event.target.closest('.search-container')) {
        setShowSearch(false)
        setSearchQuery('')
        setSearchResults([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showSearch])

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Md Rakibul Hasan</h2>
          </div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button></li>
            <li><button onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button></li>
            <li><button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button></li>
            <li><button onClick={() => scrollToSection('publications')} className={activeSection === 'publications' ? 'active' : ''}>Publications</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button></li>
            <li><button onClick={() => scrollToSection('technical skills')} className={activeSection === 'technical skills' ? 'active' : ''}>Technical Skills</button></li>
          </ul>
          <div className="nav-search">
            <i className="search-icon" onClick={() => setShowSearch(true)}>🔍</i>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {showSearch && (
        <div className="search-overlay">
          <div className="search-container">
            <div className="search-header">
              <h3>Search Portfolio</h3>
              <button className="close-search" onClick={() => setShowSearch(false)}>✕</button>
            </div>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search for skills, experience, projects..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input"
                autoFocus
              />
            </div>
            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="search-result-item"
                    onClick={() => handleSearchResultClick(result.id)}
                  >
                    <h4>{result.title}</h4>
                    <p>{result.content.substring(0, 100)}...</p>
                  </div>
                ))
              ) : searchQuery && (
                <div className="no-results">
                  <p>No results found for "{searchQuery}"</p>
                  <p>Try searching for: Python, Machine Learning, Data Science, React, etc.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="main-container">
        {/* Left Profile Section */}
        <div className="profile-section">
          <div className="profile-content">
            <div className="profile-image-container">
              <div className="profile-image">
                <img 
                  src={`${import.meta.env.BASE_URL}profile-headshot.jpg`}
                  alt="Md Rakibul Hasan" 
                  className="profile-photo"
                  style={{ boxShadow: 'none', border: 'none', background: 'none' }}
                />
  
              </div>
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Md Rakibul Hasan</h1>
              <p className="profile-title">PhD Candidate in Computer Science</p>
              <p className="profile-institution">New Jersey Institute of Technology</p>
            </div>
            <div className="social-links">
              <a href="mailto:mrhkrony@gmail.com" className="social-link" aria-label="Gmail">
                <svg width="22" height="22" viewBox="0 0 48 48" fill="none" style={{ display: 'block' }}>
                  <rect width="48" height="48" rx="8" fill="#fff"/>
                  <path d="M6 14.5V33a2.5 2.5 0 0 0 2.5 2.5h31A2.5 2.5 0 0 0 42 33V14.5l-18 13-18-13Z" fill="#EA4335"/>
                  <path d="M42 14.5V33a2.5 2.5 0 0 1-2.5 2.5h-31A2.5 2.5 0 0 1 6 33V14.5l18 13 18-13Z" fill="#fff"/>
                  <path d="M6 14.5V15l18 13 18-13v-.5A2.5 2.5 0 0 0 39.5 12h-31A2.5 2.5 0 0 0 6 14.5Z" fill="#4285F4"/>
                  <path d="M42 14.5V33a2.5 2.5 0 0 1-2.5 2.5h-31A2.5 2.5 0 0 1 6 33V14.5" stroke="#34A853" strokeWidth="2"/>
                  <path d="M6 14.5 24 27.5 42 14.5" stroke="#FBBC05" strokeWidth="2"/>
                </svg>
              </a>
              <a href="https://github.com/ronypy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.42-.012 2.75 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ronypy/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                </svg>
              </a>
              <a href="https://scholar.google.com/citations?user=tKwidqYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Google Scholar">
                <svg width="22" height="22" viewBox="0 0 48 48" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M24 4C14.1 4 6 12.1 6 22c0 5.2 2.2 9.9 5.7 13.2l-5.7 5.7 2.8 2.8 5.7-5.7C18.1 41.8 21 43 24 43s5.9-1.2 8.5-3.1l5.7 5.7 2.8-2.8-5.7-5.7C39.8 31.9 42 27.2 42 22c0-9.9-8.1-18-18-18zm0 35c-9.4 0-17-7.6-17-17S14.6 5 24 5s17 7.6 17 17-7.6 17-17 17zm0-30c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 24c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"/>
                </svg>
        </a>
      </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="content-section">
          {/* About Me Section */}
          <section id="about" className="content-block">
            <h2>About Me</h2>
            {/* 
            <!--
            <p>
              I am a PhD student in Computer Science at New Jersey Institute of Technology (NJIT) 
              with a strong background in data science, machine learning, and telecommunications. 
              With over 5 years of experience in data analysis and predictive modeling, I specialize 
              in developing innovative solutions for complex business problems.
            </p>

              
            <p>
              My research focuses on scalable optimization algorithms, graph pattern queries, 
              and Bayesian reinforcement learning frameworks. I have published papers at 
              prestigious conferences, and have extensive experience in both academic and 
              industry settings.
            </p>
            -->
            */}

            <p>
            I am a PhD candidate in Computer Science at New Jersey Institute of Technology (NJIT) with a strong background in database, data science, machine learning, and telecommunications. With over 7 years of academic and industry experience, I specialize in applying advanced analytics, predictive modeling, and scalable optimization algorithms to solve complex business and research problems.
            </p>
            <p> 
              My research focuses on graph pattern queries, Bayesian reinforcement learning, and big data–driven optimization, with several publications at prestigious conferences. Skilled in Python, SQL, and cloud platforms, I develop scalable, data-driven solutions that transform raw data into actionable insights, bridging the gap between academic innovation and real-world impact.
            </p>            
            <p> 
            <strong>I am actively seeking full-time positions as a Software Engineer, Data Scientist, or Machine Learning Engineer.</strong>
            </p>

              <h3><strong>Research Interests:</strong></h3> Machine Learning & Deep Learning, Data Science & Analytics, Database Optimization, Big Data Processing, and Scalable Algorithms.
            
              <a
                href={`${import.meta.env.BASE_URL}Resume_Hasan_Intern.pdf`}
                download
                className="download-cv-btn"
              >
                📄 Download CV
              </a>
          </section>



          {/* Education Section */}
          <section id="education" className="content-block">
            <h2>Education</h2>
            <div className="education-item">
              <span className="education-icon">🎓</span>
              <div className="education-details">
                <h3>PhD in Computer Science</h3>
                <p>New Jersey Institute of Technology (NJIT)</p>
                <p className="education-year">2021 - Present</p>
              </div>
            </div>
            <div className="education-item">
              <span className="education-icon">🎓</span>
              <div className="education-details">
                <h3>Masters in Business Administration (Valedictorian, Gold Medalist)</h3>
                <p>Institute of Business Administration (IBA), University of Dhaka, Bangladesh</p>
                <p className="education-year">2020 - 2021</p>
              </div>
            </div>
            <div className="education-item">
              <span className="education-icon">🎓</span>
              <div className="education-details">
                <h3>Bachelor of Science in Electrical & Electronic Engineering</h3>
                <p>Bangladesh University of Engineering and Technology (BUET)</p>
                <p className="education-year">2008 - 2013</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="content-block">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>Graduate Teaching Assistant</h3>
              <p className="experience-institution">New Jersey Institute of Technology (NJIT)</p>
              <p className="experience-year">September 2021 - Present</p>
              <ul>
                <li>Taught Python, C++ Collaborated with professors to develop course materials, including lectures, programming assignments, and projects for Data Structure & Algorithm, Computer Science II C++, and Database Design courses.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Data Science Specialist</h3>
              <p className="experience-institution">Robi Axiata Limited, Bangladesh</p>
              <p className="experience-year">September 2016 - August 2021</p>
              <ul>
                <li> Wrangled over 12TB of network data stored in HDFS using Hive SQL, transforming raw datasets into structured formats to power interactive dashboards, which resulted in an 11% improvement in network KPIs including latency, throughput, and packet loss.</li>
                <li> Responsible for leading monthly and quarterly performance reviews, analyzing data variances, and providing business strategies for corrective measures, which resulted in a 12% improvement in regional KPIs performance.</li>
                <li> Boosted regional telecommunication revenue by optimizing predictive models (Prophet, Gradient Boosting, Random Forest) and developing an Automated Machine Learning (AML) tool, achieving acceptable RMSE thresholds.</li>
                <li> Identified 7,000 high-potential sites for optimal LTE coverage in Bangladesh by developing and deploying a machine learning system with Clustering model, significantly enhancing network performance and customer satisfaction.</li>
                <li> Prevented daily 8% 4G mobile data traffic loss by successfully forecasting user movement towards certain regions during the COVID-19 pandemic using LSTM and the Hidden Markov Model (HMM).</li>
                <li> Built predictive models for geographic, demographic, and customer interest segmentation, improving regional campaign efficiency by 16% and increasing Binge platform sign-ups by 21% through personalized promotions and discounts.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Data Science Intern</h3>
              <p className="experience-institution">Fujitsu Research Lab, Japan</p>
              <p className="experience-year">September 2019 - December 2019</p>
              <ul>
                <li> Processed and analyzed digital marketing data using Community Detection algorithms and Ensemble methods, increasing customer ad engagement and conversion rates by 3.6%.</li>
                <li> Accurately predicted a car manufacturer's monthly demand with a 95% confidence level by analyzing previous sales data, government data, and other related data using LSTM, SARIMA, Facebook Prophet, and Naive Bayes algorithms.</li>  
                <li> Analyzed POS data to identify purchasing trends and formulate strategies using Gradient Boosting, Eclat, and Apriori algorithms, increasing daily sales by 2.1% in convenience stores.</li>
                <li> Optimized power usage by reducing peak demand 12% & improving forecast accuracy 18% using clustering to profile user types.</li>
                
              </ul>
            </div>
            <div className="experience-item">
              <h3>Optimization Engineer</h3>
              <p className="experience-institution">Huawei Technologies Limited, Bangladesh</p>
              <p className="experience-year">January 2014 - August 2016</p>
              <ul>
                <li> Performed KPI tracking, worst-cell analysis, and system optimization, identifying key trends and developing strategies to enhance 7% performance KPI and network resource allocation efficiency in densely populated areas.</li>
                <li> Designed and maintained 14 macro-based KPI dashboards, enabling real-time data-driven optimization and decision-making.</li>
                <li> Analyzed 5-7 minutes of HTTPS network traffic logs (including trace files and Wireshark captures) to resolve VIP customer complaints and enhance user experience.</li> 
              </ul>
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="content-block">
            <h2>Publications</h2>
            <div className="publication-item">
              <h3>A Bayesian Reinforcement Learning Framework for Online Index Tuning</h3>
              <p className="publication-conference">Conference: International Conference on Big Data Analytics and Knowledge Discovery (2025)</p>
              
              <a href="https://doi.org/10.1007/978-3-032-02215-8_21" target="_blank" rel="noopener noreferrer" className="publication-link">
                🔗 View Publication
              </a>
            </div>
            <div className="publication-item">
              <h3>Scalable Optimization of Graph Pattern Queries Using Summary Graphs</h3>
              <p className="publication-conference">Conference: International Conference on Web Information Systems Engineering (2025)</p>
              <a href="https://doi.org/10.1007/978-981-96-0567-5_29" target="_blank" rel="noopener noreferrer" className="publication-link">
                🔗 View Publication
              </a>
            </div>
            <div className="publication-item">
              <h3>LiteSelect: A Lightweight Adaptive Learning Algorithm for Online Index Selection</h3>
              <p className="publication-conference">Conference: International Conference on Big Data Analytics and Knowledge Discovery (2024)</p>
              <a href="https://doi.org/10.1007/978-3-031-68323-7_1" target="_blank" rel="noopener noreferrer" className="publication-link">
                🔗 View Publication
              </a>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="content-block">
            <h2>Projects</h2>
            <div className="project-item">
              <h3>Ship Delay Prediction System</h3>
              <p> Developed and deployed a machine learning model to predict delays for ships, enhancing the efficiency of scheduling and planning using Python and Scikit-learn.</p>
            </div>
            <div className="project-item">
              <h3>WALLET Payment Network</h3>
              <p>Developed and deployed WALLET, a database system application like Venmo and Zelle, facilitating electronic money transfers between individuals using MySQL and Python.</p>
            </div>
            <div className="project-item">
              <h3>Course Q&A</h3>
              <p>Designed and implemented a full-stack Q&A platform with React + Vite frontend and Node.js/Express + PostgreSQL backend, supporting image uploads, upvotes, comments, and dynamic sorting</p>
            </div>
            <div className="project-item">
              <h3>Crewmate Manager</h3>
              <p>Developed a React + Supabase web app with full CRUD functionality, enabling creation, editing, and deletion of crewmates with customizable attributes</p>
            </div>
            <div className="project-item">
              <h3>Dog Data Dashboard</h3>
              <p>Built an interactive React dashboard with dynamic routing, detail pages, reusable sidebar navigation, and data-driven charts (using fetched API data) to visualize multiple aspects of the dataset.</p>
            </div>
            <div className="project-item">
              <h3>Collaborative Task Deployment</h3>
              <p>Implemented deployment strategies for collaborative tasks on crowdsourcing platforms, adapting to dynamic workforce availability using Python</p>
            </div>

          </section>

          {/* Teaching Section */}
          <section id="technical skills" className="content-block">
            <h2>Technical Skills</h2>
            <div className="teaching-item">
              <h3>Programming Languages</h3>
              <p>C/C++; Javascript; Python; SQL</p>
              <h3>Machine Learning Frameworks</h3>
              <p>TensorFlow; PyTorch; Keras; Scikit-learn; Pandas; NumPy</p>
              <h3>Database Management Systems</h3>
              <p>MySQL; PostgreSQL; MongoDB</p>
              <h3>Data Analysis</h3>
              <p>Data Preprocessing; Data Visualization; Statistical Modeling, A/B testing</p>
              <h3>Data Visualization</h3>
              <p>Matplotlib; Tableau</p>
              <h3>Frontend</h3>
              <p>React; Vite; JavaScript (ES6+); HTML5; CSS3; TailwindCSS</p>
              <h3>Backend/Tools</h3>
              <p>Node.js; Express; PostgreSQL; Git; VS Code</p>
              <h3>Cloud Computing</h3>
              <p>AWS; Docker</p>
              <h3>Version Control</h3>
              <p>Git; GitHub</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
