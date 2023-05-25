function cuenta()
{
    var valorTicket= 200
    var valor1=document.getElementById("valor1").value;
     
    var select=document.getElementById("porcentaje")
    var select_activo=select.options[select.selectedIndex].value
    var result=0
    switch(select_activo){
        case "1":
             result=valor1 * (valorTicket * 0.8)
            break
        case "2" :
              result=valor1 * (valorTicket * 0.5)
            break
        case "3" :
                result=valor1 * (valorTicket * 0.15)
            break        
    }
    var total = valorTicket* valor1 - result
    document.getElementById("total_pagar").innerHTML=`<div class="alert alert-primary" role="alert"><h3>total a pagar $ ${total} </h3></div>`
    }