}”

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