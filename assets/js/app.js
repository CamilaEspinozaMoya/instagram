
const boton = document.getElementById('btn');
boton.addEventListener('click', () => { /*Es igual a function ()*/
    let comments = document.getElementById('comment').value;
    document.getElementById('comment').value = '';
    const cont = document.getElementById('cont');
    const newComments = document.createElement('div');
    
    const chck = document.createElement('input');
    chck.type = 'checkbox';
    
    const heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'heart');
    
    const trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    
    const contenedorElemento = document.createElement('p');
    let textNewComment = document.createTextNode(comments);
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(chck);
    newComments.appendChild(heart);
    newComments.appendChild(trash);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);

    heart.addEventListener('click', ()=> {
        heart.classList.toggle('red');
    })
    trash.addEventListener('click', ()=> {
        cont.removeChild(newComments);
    })
    chck.addEventListener('click', ()=> {
        contenedorElemento.classList.toggle('strike-out');//linea horizontal sobre el texto
    })
}) 

/*}”

  //validar que el textarea tenga un comentario
  if(comments.length === 0 || comments === null){
    alert ('Debes ingresar un mensaje');
    return false;
  }

  //crear un checkbox
  const chck = document.createElement('input');
  chck.type = 'checkbox';

  //crear icono corazon
  const heart = document.createElement("i");
  heart.classList.add('fas', 'fa-heart', 'heart');

  //crear icono basura
  const trash = document.createElement("i");
  trash.classList.add('fas', 'fa-trash', 'trash');

  //nodos de texto del textarea
  let textNewComment = document.createTextNode(comments);

  const contenedorElemento = document.createElement ('p');
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(chck);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
})
*/


