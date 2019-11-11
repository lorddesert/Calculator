
/* seria,guardamos el "output" en un string,y que luego mostramos en la calculadora,usando una matriz de strings ,tienen que ser numeros!*/
/* transformo el string en int usando parseInt,y luego hago la operacion,y devuelvo el resultado,en principio,luego muestro la operacion
    Y EL RESULTADO.*/

/* el output es un sting solo,para facilitar el mensaje*/

/* FUNCIONA CON DEFAULTVALUE!
function inputNumber(event)
{
   console.log(event);
   if(event.target.defaultValue == "1")
        output = "1";

    console.log(output);
}*/
/* se podria mejorar el codigo poniendo las definiciones de eventos en funciones dentro de la funcion principal? SI lo hice.*/
/* limpiar RES antes de mostrar el resultado de nuevo */

var input = document.getElementById("text");
var output1 = new Array(1);
var output2 = new Array(1);
var num1,num2;
var opRes;
var res;
let click = false

let asideBox = document.getElementById("aside-box")
let asideListBox = document.getElementById("aside-list-box")

asideBox.addEventListener("click", asideClick)

let aside = document.getElementById("aside")
/* operation */
var op = false;


var botons =
{
    option : [
    boton1 = document.getElementById("btn-1"),
    boton2 = document.getElementById("btn-2"),
    boton3 = document.getElementById("btn-3"),
    boton4 = document.getElementById("btn-4"),
    boton5 = document.getElementById("btn-5"),
    boton6 = document.getElementById("btn-6"),
    boton7 = document.getElementById("btn-7"),
    boton8 = document.getElementById("btn-8"),
    boton9 = document.getElementById("btn-9"),
    boton0 = document.getElementById("btn-0")
    ],

    prepareButtons()
    {
        for(I = 0; I < 10; I++)
            botons.option[I] = document.addEventListener("click", inputNumber)
    }
}

var operators =
{
    option: [
        botonEqual = document.getElementById("btn-="),
        botonMenos = document.getElementById("btn--"),
        botonMas = document.getElementById("btn-+"),
        botonPor = document.getElementById("btn-x"),
        botonDiv = document.getElementById("btn-/")
        ],

    prepareOperators()
    {
        let I;
        for(I = 0; I < 5; I++)
            operators.option[I] = document.addEventListener("click", operator)
    }
}

var clsBtn = document.getElementById("btn-cls")

botons.prepareButtons();
operators.prepareOperators();


function inputNumber(event)
{
   console.log(event);
   if(event.target.defaultValue == "1")
       {
        if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
       }
    else if(event.target.defaultValue == "2")
        {
            if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
        }
        else if(event.target.defaultValue == "3")
        {
            if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
        }
        else if(event.target.defaultValue == "4")
        {
            if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
        }
        else if(event.target.defaultValue == "5")
        {
            if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
        }
        else if(event.target.defaultValue == "6")
        {
            if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
        }
        else if(event.target.defaultValue == "7")
        {
            if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
        }
        else if(event.target.defaultValue == "8")
        {
            if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
        }
        else if(event.target.defaultValue == "9")
        {
            if(op)
            {
                output2 += parseInt(event.target.defaultValue);
                input.innerText = (output1) + output2;
            }
        else
            {
                output1 += parseInt(event.target.defaultValue);
                input.innerText = output1;
            }
        }
    else if(event.target.defaultValue == "0")
            {
                if(op)
                {
                    output2 += parseInt(event.target.defaultValue);
                    input.innerText = (output1) + output2;
                }
                else
                {
                    output1 += parseInt(event.target.defaultValue);
                    input.innerText = output1;
                }
            }

            console.log(opRes);
        }

function operator(event)
{
    if(event.target.defaultValue == "+")
    {
        op = true;
        input.innerText = output1 + event.target.defaultValue;
        output2 = event.target.defaultValue;
        opRes = event.target.defaultValue;
    }
    else if(event.target.defaultValue == "-")
    {
        op = true;
        input.innerText = output1 + event.target.defaultValue;
        output2 = event.target.defaultValue;
        opRes = event.target.defaultValue;
    }

    else if(event.target.defaultValue == "*")
    {
        op = true;
        input.innerText = (output1 += event.target.defaultValue);
        opRes = event.target.defaultValue;
    }
    else if(event.target.defaultValue == "/")
    {
        op = true;
        input.innerText = (output1 += event.target.defaultValue);
        opRes = event.target.defaultValue;
    }
    else if(event.target.defaultValue == "=")
    {
        calculate();
    }
    else if(event.target.defaultValue == "C")
        {
            output1 = [];
            output2 = [];
            input.innerText = 0;
            op = false;
            opRes = undefined;
            console.log(op, opRes);
        }
}

function calculate()
{
    if(opRes == "+")
    {
        res = (parseInt(output1) + parseInt(output2));
        input.innerText = res;
    }
    else if(opRes == "-")
    {
        res = (parseInt(output1) + parseInt(output2));
        input.innerText = res;
    }
    else if(opRes == "/")
    {
        res = (parseInt(output1) / parseInt(output2));
        input.innerText = res;
    }
    else if(opRes == "*")
    {
        res = (parseInt(output1) * parseInt(output2));
        input.innerText = res;
    }
}

function asideClick(event)
{
    console.log(event);

    if(!click)
    {
        event.target.offsetParent.firstElementChild.style.background = "#ba5a31"
        aside.style.transform = 'rotate(180deg)'
        asideBox.style.background = "#ba5a31"
        asideListBox.style.background = "#ba5a31"
        asideListBox.style.display = "block"
        click = true
        // mostrar aside
    }

    else if(click)
    {
        event.target.offsetParent.firstElementChild.style.background = "#7fefbd"
        aside.style.transform = 'rotate(0deg)'
        asideBox.style.background = ""
        asideListBox.style.display = "none"
        asideListBox.style.background = "#7fefbd"
        click = false
        // ocultar aside
    }

}
