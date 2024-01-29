const form = $('#devops-job-description-generator-form')
let data ={
  website_link: "",
  company_details: "",
  job_title: "DevOps Engineer",
  location_work: "",
  brief_role_description: "",
  role_orientation: "",
  type_employment: "",
  key_responsabilities: [],
  required_skills: [],
  nice_to_have_skills: [],
  years_experience_required: "",
  education_level: "",
  certification: "",
  company_culture_perks: [],
}
const valoresSeleccionados = [];
const valoresSeleccionados2 = [];
const valoresSeleccionados3 = [];
const valoresSeleccionados4 = [];
const gruposCheckbox = document.querySelectorAll('.grupo-checkbox');
const handleChange = (e) =>{
  data={
    ...data,
    [e.target.name]: e.target.value
  }   
console.log(data)
} 
const handleCheck = (e) =>{
console.log(e.target.className)
  if(e.target.className.includes('chekey')){
    if (e.target.checked) {
      valoresSeleccionados.push(e.target.name);
    } else {
        const index = valoresSeleccionados.indexOf(e.target.name);
        if (index !== -1) {
            valoresSeleccionados.splice(index, 1);
        }
    }
    data={
      ...data,
      key_responsabilities: valoresSeleccionados
    }
  }else if(e.target.className.includes('chenice')){
    if (e.target.checked) {
      valoresSeleccionados3.push(e.target.name);
    } else {
        const index = valoresSeleccionados3.indexOf(e.target.name);
        if (index !== -1) {
            valoresSeleccionados3.splice(index, 1);
        }
    }
    data={
      ...data,
      nice_to_have_skills: valoresSeleccionados3
    }
  }else if(e.target.className.includes('checompany')){
    if (e.target.checked) {
      valoresSeleccionados4.push(e.target.name);
    } else {
        const index = valoresSeleccionados4.indexOf(e.target.name);
        if (index !== -1) {
            valoresSeleccionados4.splice(index, 1);
        }
    }
    data={
      ...data,
      company_culture_perks: valoresSeleccionados4
    }
  }
  
console.log(data)

function handleError(error) {
console.log(error);
}
function embedProjects(res) {
console.log(res);
const input_company_details = document.getElementById('company_details')
input_company_details.value= res.data.company_description
data={
    ...data,
    company_details: res.data.company_description
  }
}
const fetchCompanyDescription = (website_link) => {
let data = { website_link: website_link };
const request = window.fetch('https://teilur-recruting-rest.azurewebsites.net/api/get_company_description/', {
  method: "POST",
  headers: {
    "Authorization": "Apikey xnx3VII807w8FtEPkNWXis8KjPUXP92y65V3CZmGaXjE1CVK9HZh5tQuuQtdY8wVHJMLTfSej3gsZ8wCf7AS8NFoYw9EyOkPVWvj5jXxU1ZZHUQhWgEMSOLXhuUsp4oG",
    "Content-Type": "application/json",
    },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(embedProjects)
  .catch(handleError);
};
$('#website_link-2').change(handleChange)
$('#company_details').change(handleChange)
$('#job_title-3').change(handleChange)
$('#location_work').change(handleChange)
$('#brief_role_description').change(handleChange)
$('#role_orientation-3').change(handleChange)
$('#type_employment').change(handleChange)
$('[type=checkbox]').click(handleCheck)
$('#yrs').change(handleChange)
$('#education_level').change(handleChange)
$('#certification').change(handleChange)
$('#submit').click(function(){
let website_link = $('#website-link-djd').val()
fetchCompanyDescription(website_link)
})
$('#reset_company').click(()=>{
const input_company_details = document.getElementById('company_details')
input_company_details.value= ''
})
$('#slider-brief').click(()=>{
const input_brief_role_description = document.getElementById('brief_role_description')
input_brief_role_description.value= ''
})
document.getElementById('yrs').addEventListener("change", (event) => {
document.getElementById('fv').textContent= event.target.value
});
$('form').submit(function(e){
     e.preventDefault();
const formData = form.serializeArray();
const formValues = {};
formData.forEach(field => {
formValues[field.name] = field.value.trim();
console.log(formValues);
});
})}

//Script modificado para capturar texto y generar PDF 

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#download-pdf').addEventListener('click', function () {
    const downloadButton = this;
    const originalButtonText = downloadButton.textContent;
    downloadButton.textContent = 'Generando...';

    const element = document.querySelector('#Job-Description');
    const contentToCapture = element ? element.value : '';

    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.text(contentToCapture, 10, 10);
    pdf.save('attributes-results.pdf');

    downloadButton.textContent = originalButtonText;
  });
});
