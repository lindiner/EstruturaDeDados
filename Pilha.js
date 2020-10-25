/* Pilha
    LIFO : Primeira que entra e o ultimo que sai
*/

const stack = [] 
let menory = 0
let cursor = -1

function main(sizeMemory){

    /*Memory passará a ser 20(por exemplo) */
    memory  = sizeMemory

    push(1)
    
}


/* Empurra valor para o topo da pilha */
function push(value){

    if(cursor+1 === memory){
        console.error('A memoria esta cheia')
        return
    }
    /* Incrementaçãoo 
      valor = valor +1 
      valor++  
      valor+=2  
      ++valor 
     */
    cursor++
    stack[cursor] = value 
}

/* Retirada o valor do topo da pilha */
function pop(){

    if(cursor < 0 ){
        log("Memori vazia")
        return
    }
    /*Guarda valor */
    const desenpilhado = stack[cursor]
    stack[cursor] = undefined
    cursor--

    return desenpilhado
}

/* Exibe o topo da pilha*/
function top(){
    console.log("O topo da pilha e : [" + stack[cursor]  + "]")
}

/* Exibe o tamanha ocupado da pilha*/
function size (){
    const memoryOccupied = cursos + 1
    const percentMemoryOccupied = (memoryOccupied * (100/memory))
    console.log('O tamanho  ocupada total da memoria e:' + memoryOccupied + ' de ' + memory + '( ' + percentMemoryOccupied + '%)')
}

main(20)