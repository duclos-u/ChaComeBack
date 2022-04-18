import PoussinPorte from '../../images/poussinDevantLaporte.png'
import './styles.sass'

export const PoussinDoor = () => {
  return (
    <section className="door-section">
      <div className="door-section-container">
        <h2>Et si ce site était une clé pour rouvrir la porte ?</h2>
        <div className="door-section-content">
          <div className="door-section-illu">
            <img src={PoussinPorte} />
          </div>
          <div className="door-text-wrapper">
            <div className="simple-text">
              Ce poussin ne pouvait se permettre de revenir comme une fleurs. Il lui fallait faire comprendre au Poulailler qu’il le voulait vraiment, que ce choix n’était pas venu de nul part.
            </div>
            <div className="simple-text">
              Ce site est donc la preuve de sa volonté.
              Ce poussin, alias Charlène, était initialement
              une web designer.
              Comment pourrait-elle montrer sa détermination autrement qu’en réalisant un site Internet de toute pièce, spécialement pour l’occasion ?
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}
