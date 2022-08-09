<p align = "center">
<img width="170" src="https://github.com/julioCROS/Hakki-Extension/blob/main/images/hakki_title.png"></br>
<a href="https://chrome.google.com/webstore/detail/hakki/cfeknhlenfklocphhgfgnjagagdfpdkc?hl=pt-br"><img width="200" src="https://github.com/julioCROS/Hakki-Extension/blob/main/images/extension.png"></a>
</p>

## Baixando a extensão
> A extensão foi testada e usada no **Google Chrome**, **Opera GX** e **Microsoft Edge**. Logo, o passo a passo abaixo pode ser seguido por qualquer um desses três navegadores. Para o navegador Mozila Firefox, você pode tentar seguir [este tutorial](https://olhardigital.com.br/2018/04/02/dicas-e-tutoriais/como-instalar-extensoes-do-navegador-chrome-no-firefox/) ensinando a instalar extensões da Chrome Web Store no Firefox.

**1.** Entre na [página da extensão da Chrome Web Store](https://chrome.google.com/webstore/detail/hakki/cfeknhlenfklocphhgfgnjagagdfpdkc?hl=pt-br). </br>
**2.** Clique em **`Usar no Chrome`** (mesmo estando um dos outros dois navegadores apontados acima). </br>
**3.** Pronto, a extensão está pronta para o uso.

</br>
</br>

## Utilizando a extensão
**1.** Acesse a página de [matriculas do SIGAA](https://sig.cefetmg.br/sigaa/graduacao/matricula/turmas_curriculo.jsf#) ou a página de [consulta de turmas](https://sig.cefetmg.br/sigaa/portais/discente/discente.jsf). </br>

> Caso esteja na página de consulta de turmas, realize a consulta das turmas antes de ligar a extensão.

**2.** Em uma das páginas apontadas acima, quando a página estiver totalmente carregada, ligue a extensão clicando sobre o switch slider. </br>
**3.** O script será então injetado na página, mostrando respectivamente 3 notas ao lado do nome dos docentes: **Qualidade**, **Facilidade** e **Média** (entre Qualidade e Facilidade). 

> Caso o docente não possua nenhuma avaliação, ao lado de seu nome, irá conter um texto informando-o(a) disso, e clicando sobre o texto, você abrirá uma nova aba que irá te redirecionar para a página do docente no sistema web, para que você possa cadastrar uma avaliação. Caso o nome do docente não esteja cadastrado no sistema, nenhuma das duas coisas descritas anteriormente aparecerá. </br>

Ao clicar na logo da extensão **`Hakki/학기`**, uma nova aba irá abrir, redirecionada ao sistema web de cadastro de nomes e avaliações. </br>
Além disso ao clicar no ícone **`?`**, você será redirecionado(a) para está página/tutorial. <br/>

Por fim, caso queira cadastrar um novo nome e/ou avaliação no sistema, utilize o [**guia presente na página do sistema web**](https://github.com/julioCROS/Hakki-Web).

</br>
</br>

## Contribuindo com o projeto

**1.** Primeiro, clone este projeto no diretório de sua preferência:
```bash
git clone https://github.com/julioCROS/Hakki-Extension/
```

**2.** Agora, para ver a extensão funcionando, você deve carrega-la em seu browser. 
> - [Carregando extensões no Google Chrome.](https://support.google.com/chrome/a/answer/2714278?hl=pt-BR#:~:text=Acesse%20chrome%3A%2F%2Fextensions%2F.,pasta%20do%20app%20ou%20extensão.)\
> O processo para carregar a extensão em outros browsers (como Opera), é bastante semelhante ao processo feito no Chrome.

Com a extensão carregada, agora você é capaz de editar o projeto a sua vontade, desde elaborar novos scripts, modificar a lógica existente nos scripts, entre muitas outras coisas. Caso queira subir para este repositório algumas de suas novas funcionalidades, abra um [Pull Request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

>Caso queira contribuir com o projeto, é interessante você passar pelos outros dois projetos ligado ao Sistema Hakki:
> - [**Hakki Web**](https://github.com/julioCROS/Hakki-Web) - Interface Web para se comunicar com a API ([**Hakki API**](https://github.com/julioCROS/Hakki-API)), cadastrando novos professores e avaliações, além de ser possivel acessar as avaliações enviadas para cada um dos professores cadastrados.
> - [**Hakki API**](https://github.com/julioCROS/Hakki-API) - API criada para armazenar os dados (professores e suas avaliações) enviadas a partir do site ([**Hakki Web**](https://github.com/julioCROS/Hakki-Web/)).
