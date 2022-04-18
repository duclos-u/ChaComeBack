import Cha from '../../images/cha-picture.png'
import PanopliLogo from '../../images/panopli-logo.svg';
import './styles.sass';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="header">
        <div>jeveuxretournerchezpanopli.com</div>
      </div>
      <div className="hero-main-content-wrapper">
        <div className="hero-text-div">
          <div className="hero-hello">Hello, moi c’est</div>
          <div className="hero-name">Charlène</div>
          <div className="hero-name hero-name-last">Huynh.</div>
          <div className="hero-job">
            Je suis actuellement graphiste chez
            <div className="hero-panopli-logo">
              <img src={PanopliLogo} />
            </div>
          </div>
        </div>
        <img className="hero-illustration" src={Cha} />
      </div>
    </section>
  )
}
