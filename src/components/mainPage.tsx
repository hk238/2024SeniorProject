import '../styles/mainPage.css';
import miniModelImg from '../assets/miniModel.png';
import heonjaeImg from '../assets/HeonjaeKwon_headShot.jpg';
import jadenImg from '../assets/Jaden_headshot.jpg';

const MainPage: React.FC = () => {
  return (
    <div className="main-page-container">
      <div className="main-page-content">
        <header className="main-header">
          <h1>Cognitive model of Introverted Students in class</h1>
          <div className="project-info">
            <div className="info-item">
              <span className="info-label">Authors:</span>
              <span className="info-value">Daniel Kwon, Jaden Brookens</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date:</span>
              <span className="info-value">2024 Calvin Senior Project</span>
            </div>
            <div className="info-item">
              <span className="info-label">Advisor:</span>
              <span className="info-value">Eric Araújo</span>
            </div>
          </div>
        </header>

        <section className="content-section">
          <div className="section-content left">
            <div className="text-content">
              <h3>Background and Problem</h3>
              <p>
                Our project seeks to tackle the significant issue of untapped potential in classroom discussions caused by the hesitation of introverted students to participate using a computational modeling strategy. Introversion, while a natural personality trait, can lead to a loss of valuable insights and perspectives that would otherwise contribute to a richer learning environment. By examining why introverts tend to shy away from answering questions and how this impacts overall classroom dynamics, we aim to understand the root causes of their reluctance.
              </p>
              <p>
                Failing to hear from half the class limits the diversity of thought, which negatively affects the quality of education for everyone. Our goal is to identify strategies to encourage introverts to share their thoughts more freely, recognizing that their unique viewpoints are crucial for well-rounded discussions. By understanding the interaction patterns of introverted students, we can develop solutions to help them engage more effectively, thus unlocking the full potential of every student and enhancing the collective learning experience.
              </p>
            </div>
            <div className="image-content">
              <img 
                src = {miniModelImg}
                alt="Project Background" 
                className="section-image" 
              />
            </div>
          </div>

          <div className="section-content right">
            <div className="image-content">
              <img 
                src={heonjaeImg} 
                alt="Heonjae Kwon" 
                className="section-image" 
              />
            </div>
            <div className="text-content">
              <h3>Heonjae Kwon</h3>
              <p>Bachelor of Computer Science (BCS) senior at Calvin university</p>
              <ul>
                <li>CS 106: Introduction to Scientific Computation (Python)</li>
                <li>CS 300: Agent base Modeling</li>
                <li>CS 344: Machine Learning</li>
                <li>PSYC 151: Introductory Psychology: Perspectives on The Self</li>
                <li>PSYC 201: Developmental Psychology: Lifespan</li>
              </ul>
            </div>
          </div>

          <div className="section-content left">
            <div className="text-content">
              <h3>Jaden Brookens</h3>
              <p>Computer Science Plus (BS)</p>
              <ul>
                <li>CS 108: Introduction to Computing (python)</li>
                <li>CS 300b: Agent Based Modeling</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={jadenImg} alt="Jaden Brookens" className="section-image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;


