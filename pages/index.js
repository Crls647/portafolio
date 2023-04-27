import Layout from "../components/Layout"
import Link from 'next/link'
import { skills, experiences, projects } from "../profile"

const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="Carlos_Yucra.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Carlos Yucra</h1>
              <h3>Junior Developer</h3>
              <p>Estudiante actual de la carrera de Ing. de Sistemas en la universisdad Autonoma Tomas Frias
                con mayor interes en el desarrollo de software y diseño web.  
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>

      </div>

    </header>
    {/**second seccion */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {
              skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}>
                    </div>

                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experiencia</h1>

            <ul>
              {
                experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>{from}-{to}</h5>
                    <p>{description}
                    </p>
                  </li>
                ))
              }
            </ul>

            <Link legacyBehavior href="/experiences">
              <a className="btn btn-light">
                Ver más
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/**Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>
            {
              projects.map(({ name, description, image }, i) => (
                <div className="col-md-4 py-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#!"> ver mas</a>

                  </div>
                </div>
              ))
            }
          </div>
          <div className="text-center mt-4">
            <Link legacyBehavior href="/portfolio">
                <a className="btn btn-outline-light"> Mas Proyectos</a>
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  </Layout>
)

export default Index