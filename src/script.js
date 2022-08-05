let apiUrl = "https://hakki-api.herokuapp.com/professores";

const bg_goodColor = "#baffb8";
const bg_neutralColor = "#fff2b8";
const bg_chaoticColor = "#ffb8b8";
const bg_noDataColor = "#caddfc";

const nota_goodColor = '#4bff33';
const nota_neutralColor = '#ffad33';
const nota_chaoticColor = '#ff3333';

let bg_qualidade = "";
let bg_facilitacao = "";
let bg_media = "";

let resolvedData;

async function getData(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => {
    console.log(err);
  })
  return response.json();
}

const data = getData(apiUrl);
data.then(function (data) {
  let nomes = [];
  let notasQualidade = [];
  let notasFacilitacao = [];
  let medias = [];

  for(let i = 0; i < data.length; i++){
    nomes.push(data[i].nome);
    notasQualidade.push(data[i].mediaQualidade);
    notasFacilitacao.push(data[i].mediaFacilitacao);
    medias.push((data[i].mediaQualidade + data[i].mediaFacilitacao)/2);
  }

  const html = document.querySelectorAll("td"); 
  for (let i = 0; i < html.length; i++) {
    for (let j = 0; j < nomes.length; j++) {
      if (html[i].innerText.includes(nomes[j])) {
        console.log(nomes[j]);
        html[i].style.fontSize = "10px";
        if (notasQualidade[j] == null || notasFacilitacao[j] == null || medias[j] == null) {
          html[i].innerHTML = html[i].innerHTML.replace(nomes[j], nomes[j] + "<a target='_blank' rel='noopener noreferrer' href='https://hakki.vercel.app/docente/" + slugName(nomes[j]) +
          "'>" + " - O Docente não possui nenhuma avaliação cadastrada. Clique aqui para cadastrar. </a>");
          html[i].style.backgroundColor = bg_noDataColor;
        } else {
          if (medias[j] >= 7) html[i].style.backgroundColor = bg_goodColor;
          else if (medias[j] >= 5) html[i].style.backgroundColor = bg_neutralColor;
          else html[i].style.backgroundColor = bg_chaoticColor;
  
          if(notasQualidade[j] >= 7) bg_qualidade = nota_goodColor;
          else if(notasQualidade[j] >= 5) bg_qualidade = nota_neutralColor;
          else bg_qualidade = nota_chaoticColor;
  
          if(notasFacilitacao[j] >= 7) bg_facilitacao = nota_goodColor;
          else if(notasFacilitacao[j] >= 5) bg_facilitacao = nota_neutralColor;
          else bg_facilitacao = nota_chaoticColor;
  
          if(medias[j] >= 7) bg_media = nota_goodColor;
          else if(medias[j] >= 5) bg_media = nota_neutralColor;
          else bg_media = nota_chaoticColor;
  
          html[i].innerHTML = html[i].innerHTML.replace(nomes[j], "<a target='_blank' rel='noopener noreferrer' href='https://hakki.vercel.app/docente/" + slugName(nomes[j]) +
            "'>" + nomes[j] + "<div style='display: inline-flex';><p title='Qualidade' style='background-color:"+ bg_qualidade +"; border: 1px solid"+ bg_qualidade +"; border-radius: 2px; padding: 2px; width: 28px; text-align:center; margin-left: 10px'>" + notasQualidade[j].toFixed(1) + "</p>"
            + "<p title='Facilidade' style='background-color:"+ bg_facilitacao +"; border: 1px solid"+ bg_facilitacao +"; border-radius: 2px; padding: 2px; width: 28px; text-align:center; margin-left: 5px'>" + notasFacilitacao[j].toFixed(1) + "</p>"
            + "<p title='Média' style='background-color:"+ bg_media +"; border: 1px solid"+ bg_media +"; border-radius: 2px; padding: 2px; width: 28px; text-align:center; margin-left: 5px'>" + medias[j].toFixed(1) + "</p></div></a>");
          
        }
      }
    }
  }
});

function slugName(nome) {
  return nome.toLowerCase().replace(/ /g, "-");
}
