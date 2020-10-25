/*Fila
    FIFO: Primeiro que entra e o primeiro que sai*/
    let cursor = 0
    let first = null
    let last = null
    
    
    function main () {
    
        for (let x = 0; x < 10; x++) {
            insert(x+2, x)
        }
    }
    
    
    function insert (value, index) {
    
        if(index === 0){
            const node = {
                data: value,
                next: first
            }
    
            first = node
            cursor++
            return;
        }
    
    
        if(index > -1 && index < cursor){
    
            const node = {
                data: value,
                next: first
            }
        
           let anterior = null
           let atual = first
    
           let aux = 0
           while(aux++ < index){
               anterior = atual
               atual = atual.next()
           }
    
           anterior.next = node
           node.prox = current
    
           cursor++
    
        }
        else {
            console.log("valor invalido....")
        }
    } 
    
    function remove (index) {
    
        if(index === 0){
    
            if(first !== null){
                const saida = first
                first = first.next
    
                if(cursor > 0) 
                    cursor--
                return saida.data 
            }
        }
    
        if(index > -1  && index < cursor){
    
            const atual = first
            const anterior = null
            const aux = 0
    
            while(aux++ < index){
                anterior = atual
                atual = atual.next
            }
    
            anterior.next = atual.next
            cursor--
    
        }
        else {
            console.log("valor invalido")
        }
        
    }
    
    
    function listAll() {
    }
    
    
    main()