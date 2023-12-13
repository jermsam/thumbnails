import {component$, useSignal, useTask$} from '@builder.io/qwik';
import {isServer} from '@builder.io/qwik/build'
import {routeLoader$} from '@builder.io/qwik-city';
import client from '../../api/feathersClient'


export default component$( () => {
  const thumbnail = useSignal<string>('')
  
useTask$(async ()=>{
  const {thumbnailUrl} = await client.service('thumbnails').get('http://localhost:5173');
  thumbnail.value = thumbnailUrl;
})
  
  return (
    <>
      <div style={'display: flex; flex-wrap: wrap; background-color:white;'}>
        <div style={'width: 150px; height: 150px; margin: 10px; overflow: hidden; border: 1px solid #ccc; border-radius: 5px;'}>
          <img style={'width: 100%; height: 100%; object-fit: cover;'} src={thumbnail.value} alt="Thumbnail 1" />
        </div>
    
        <div style="width: 150px; height: 150px; margin: 10px; overflow: hidden; border: 1px solid #ccc; border-radius: 5px;">
          <img style="width: 100%; height: 100%; object-fit: cover;" src="https://placekitten.com/151/150" alt="Thumbnail 2"/>
        </div>
      </div>
    </>
   
  );
});
