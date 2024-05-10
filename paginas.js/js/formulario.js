let cuadrito = document.querySelector('#cuadrooo2')
console.log(cuadrito)

function ingresanombre(){
    if(nombre.value){
        let nombre = document.querySelector('#nombre').value
        console.log(nombre)
        let item = document.createElement('li')
        item.append(nombre)
        let lista = document.querySelector('#lista')
       
        lista.append(item)



        let btneliminar = document.createElement('button')
        
        btneliminar.textContent = 'Eliminar'
        item.append(btneliminar)


        btneliminar.addEventListener('click', eliminaruser)
                    

    }else{
        alert('el campo de nombre esta vacio')
    }
}

function eliminaruser(e){
    let eliminar = e.target.parentNode
    eliminar.remove()
}



