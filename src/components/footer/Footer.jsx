import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="developers">
            <a className="developers__name" href="https://www.linkedin.com/in/javieremanuelhuebra/" target="_blank">Javier Huebra<span className="material-symbols-outlined">
                arrow_outward
                </span></a>
            <a className="developers__name" href="https://www.linkedin.com/in/matias-spirilis/" target="_blank">Matias Spirilis<span className="material-symbols-outlined">
                arrow_outward
                </span></a>
        </div>
        <div className="developers">
            <a className="developers__name" href="https://www.linkedin.com/in/rolando-ramon-duarte-93116b17a/" target="_blank">Rolando Duarte<span className="material-symbols-outlined">
                arrow_outward
                </span></a>
            <a className="developers__name" href="https://www.linkedin.com/in/sebadalessandro/" target="_blank">Sebastián D'Alessandro<span className="material-symbols-outlined">
                arrow_outward
                </span></a>
        </div>
    </footer>
  )
}

export default Footer