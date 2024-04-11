

import './Footerpdf.css'


export const printFooterPdf = (parent) => {
    const footer = document.createElement('footer')
    footer.className = 'footerpdf'

    footer.innerHTML = `
    <div class="botones">
    <a class='descargar' href="CV_Vanesa_Madan.pdf" download="CV_Vanesa_Madan.pdf">Download CV</a>
    <a class='descargar' href="https://drive.google.com/file/d/1iQ5e1uki2Fgtym7DqTrhFVn0qELEcHnu/view?usp=drivesdk" target="_blank">Download Portfolio</a>
    </div>

    <div class='contenedorFooter'>
    <div>
    <img class='imgcientifica' src='/cientifica.png' alt=''>
    <h2 class='nombreFooter'>Vanesa Madan</h2>
    </div>
    

    <div class='info'>
    <h4>E-mail: vmadanr@gmail.com</h4>
    <h4>Cambridge 2024</h4>
    </div>
    </div>
    
    `

    parent.append(footer)
}