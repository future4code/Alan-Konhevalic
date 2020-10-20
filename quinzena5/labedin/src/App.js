import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars2.githubusercontent.com/u/62572324?s=460&u=6298a38676ce3155ca553f4270c20c46563ddbf9&v=4" 
          nome="Alan Konhevalic" 
          descricao="Tenho 23 anos, atualmente sou estudante de Engenharia Elétrica na Universidade Tecnológica Federal do Paraná (UTFPR). Tenho muita afinidade por programação e futuramente quero me tornar desenvolvedor Full-Stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0?e=1611187200&v=beta&t=jh9p5JnUiMni-EiO-N1uH4_wXbd4SH19zhwomayFPa0" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        
      </div>

      <div className="page-section-container">
        <h2>CONTATO</h2>
        <CardPequeno
          email="alan.patrick.konhevalic@gmail.com"
          endereco="Manoel Borba Gato, 302 - Curitiba/PR"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      
    </div>
  );
}

export default App;
