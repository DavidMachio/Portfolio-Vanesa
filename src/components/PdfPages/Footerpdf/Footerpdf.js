

import './Footerpdf.css'


export const printFooterPdf = (parent) => {
    const footer = document.createElement('footer')
    footer.className = 'footerpdf'

    footer.innerHTML = `
    <a class='descargar' href="Portfolio_Vanesa.pdf" download="Portfolio_Vanesa.pdf">Download CV</a>
    <div class='contenedorFooter'>
    <div>
    <img class='imgcientifica' src='/cientifica.png' alt=''>
    <h2 class='nombreFooter'>Vanesa Madan</h2>
    </div>
    

    <div class='info'>
    <h4>E-mail: vmadanr@gmail.com</h4>
    <h4>Mobile: 07474993188</h4>
    <h4>Cambridge 2024</h4>
    </div>
    </div>
    
    `

    parent.append(footer)
}