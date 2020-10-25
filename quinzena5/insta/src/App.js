import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'konhevalic'}
          fotoUsuario={'https://instagram.fbfh4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/41728106_2059289884134852_641310824282980352_n.jpg?_nc_ht=instagram.fbfh4-1.fna.fbcdn.net&_nc_ohc=kTOpabH72pYAX9-RWqx&oh=a2f35792769a44a7b34cc8505b00ad2b&oe=5FBF6428'}
          fotoPost={'https://instagram.fbfh4-1.fna.fbcdn.net/v/t51.2885-15/e35/42702409_755111114838032_4089787588135228582_n.jpg?_nc_ht=instagram.fbfh4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=UWwUNjHDAqQAX_kiVYS&_nc_tp=18&oh=0c2248cfc83c4dec47000533d2db275a&oe=5FBD93E6'}
        />

        <Post 
          nomeUsuario={'rafaelzntd'}
          fotoUsuario={'https://instagram.fbfh4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119472916_176146844014558_8804997264322605288_n.jpg?_nc_ht=instagram.fbfh4-1.fna.fbcdn.net&_nc_ohc=OJLajn_udCsAX8M7yo7&oh=c81b210bdd0994db987955196fcc2997&oe=5FBF3165'}
          fotoPost={"https://instagram.fbfh4-1.fna.fbcdn.net/v/t51.2885-15/e35/69186320_156311938783987_2929346403114094005_n.jpg?_nc_ht=instagram.fbfh4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=qXRQlcCBBGwAX_wj7Go&_nc_tp=18&oh=589845fcfd22e202a86dffdcc84acca2&oe=5FC0FB5C"}
        />


      </div>
    );
  }
}

export default App;
