//<!-- Asegúrate de incluir solo la biblioteca jsPDF en tu HTML -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>
//Script modificado para capturar texto y generar PDF 

document.querySelector('#download-pdf').addEventListener('click', function () {
    const downloadButton = document.querySelector('#download-pdf');
    const originalButtonText = downloadButton.textContent;
    downloadButton.textContent = 'Generando...';
  
    // Capturando el contenido de texto del elemento
    const contentToCapture = document.querySelector('.Textarea .inputForm').innerText;
  
    // Creando un nuevo documento PDF
    const pdf = new jsPDF();
  
    // Añadiendo el texto al PDF
    pdf.text(contentToCapture, 10, 10);
  
    // Guardando el PDF
    pdf.save('attributes-results.pdf');
  
    // Restaurando el texto original del botón
    downloadButton.textContent = originalButtonText;
  });