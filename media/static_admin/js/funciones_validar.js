function validar_numeros(e) { 
    e= (window.event)? event : e;
	tecla= (e.keyCode)? e.keyCode: e.which;
	if (tecla==8 || tecla==9 || tecla==16 || (tecla>=35 && tecla<=40) || tecla==46) return true; 
	patron =/[0-9]/;
	te = String.fromCharCode(tecla);
    return patron.test(te); 
} 

function validar_numeros_coma(e) { 
    e= (window.event)? event : e;
	tecla= (e.keyCode)? e.keyCode: e.which;
	 if (tecla==8 || tecla==9 || tecla==16 || (tecla>=35 && tecla<=40) || tecla==46) return true; 
	patron =/[0-9, ]/;
	te = String.fromCharCode(tecla);
    return patron.test(te); 
} 

function validar_fecha(e) { 
    tecla = (document.all) ? e.keyCode : e.which; 
     if (tecla==8 || tecla==9 || tecla==16 || (tecla>=35 && tecla<=40) || tecla==46) return true; 
		//patron =/\d/; 
		patron = /[0-9\/]/i;
		te = String.fromCharCode(tecla); 
		return patron.test(te); 
} 

// VALIDAR SOLO LETRAS
function letras(e) { 
    e= (window.event)? event : e;
	tecla= (e.keyCode)? e.keyCode: e.which;
     if (tecla==8 || tecla==9 || tecla==16 || tecla==32 || (tecla>=35 && tecla<=40) || tecla==46) return true;  
	      patron =/^[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/; 
	//patron =/[A-Za-zñÑ\s\á,é,í,ó,ú]/; 
    te = String.fromCharCode(tecla); 
    return patron.test(te); 
} 

// VALIDAR SOLO LETRAS MUROS
function letrasm(e) { 
	   key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = "abcdefgABCDEFG";
       especiales = [8,9,16,32,37,39,46];

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
} 
// VALIDAR SOLO LETRAS TECHOS
function letrast(e) { 
	   key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase(); 
       letras = "abcdefghABCDEFGH";
       especiales = [8,9,16,32,37,39,46];

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
} 
// VALIDAR SOLO LETRAS PISOS
function letrasp(e) { 
	   key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = "abcdefghiABCDEFGHI";
       especiales = [8,9,16,32,37,39,46];

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
} 




// VALIDAR TODO LETRA MINUSCULAS
function validar_minus(solicitar){
var index;
var tmpStr;
var tmpChar;
var preString;
var postString;
var strlen;
tmpStr = solicitar.value.toLowerCase();
strLen = tmpStr.length;
if (tecla==8 || tecla==9 || tecla==16 || (tecla>=35 && tecla<=40) || tecla==46) return true; 
if (strLen > 0)
{
for (index = 0; index < strLen; index++)
{
if (index == 0)
{
tmpChar = tmpStr.substring(0,1).toLowerCase();
postString = tmpStr.substring(1,strLen);
tmpStr = tmpChar + postString;
}
else
{
tmpChar = tmpStr.substring(index, index+1);
if (tmpChar == " " && index < (strLen-1))
{
tmpChar = tmpStr.substring(index+1, index+2).toLowerCase();
preString = tmpStr.substring(0, index+1);
postString = tmpStr.substring(index+2,strLen);
tmpStr = preString + tmpChar + postString;
}
}
}
}
solicitar.value = tmpStr;
}


// VALIDAR PRIMERA LETRA MAYUSCULA 
function validar_mayus(solicitar){
var index;
var tmpStr;
var tmpChar;
var preString;
var postString;
var strlen;
tmpStr = solicitar.value.toLowerCase();
strLen = tmpStr.length;
if (strLen > 0)
{
for (index = 0; index < strLen; index++)
{
if (index == 0)
{
tmpChar = tmpStr.substring(0,1).toUpperCase();
postString = tmpStr.substring(1,strLen);
tmpStr = tmpChar + postString;
}
else
{
tmpChar = tmpStr.substring(index, index+1);
if (tmpChar == " " && index < (strLen-1))
{
tmpChar = tmpStr.substring(index+1, index+2).toUpperCase();
preString = tmpStr.substring(0, index+1);
postString = tmpStr.substring(index+2,strLen);
tmpStr = preString + tmpChar + postString;
}
}
}
}
solicitar.value = tmpStr;
}


// VALIDAR TODO LETRA MAYUSCULAS
function validar_todo_mayus(solicitar){
var index;
var tmpStr;
var tmpChar;
var preString;
var postString;
var strlen;
tmpStr = solicitar.value.toUpperCase();
strLen = tmpStr.length;
if (strLen > 0)
{
for (index = 0; index < strLen; index++)
{
if (index == 0)
{
tmpChar = tmpStr.substring(0,1).toUpperCase();
postString = tmpStr.substring(1,strLen);
tmpStr = tmpChar + postString;
}
else
{
tmpChar = tmpStr.substring(index, index+1);
if (tmpChar == " " && index < (strLen-1))
{
tmpChar = tmpStr.substring(index+1, index+2).toUpperCase();
preString = tmpStr.substring(0, index+1);
postString = tmpStr.substring(index+2,strLen);
tmpStr = preString + tmpChar + postString;
}
}
}
}
solicitar.value = tmpStr;
}


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& LLENAR CEROS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function rellenar_2(quien,que){
	if(que=="" || que.length<1)
	{
	}
	else
	{
		cadcero='';
		for(i=0;i<(2-que.length);i++)
		{
			cadcero+='0';
		}
			quien.value=cadcero+que;
	}
}

function rellenar_3(quien,que){
if(que=="" || que.length<1)
	{
	}
	else
	{
		cadcero='';
		for(i=0;i<(3-que.length);i++)
		{
			cadcero+='0';
		}
		quien.value=cadcero+que;
	}
}

function rellenar_4(quien,que){
if(que=="" || que.length<1)
	{
	}
	else
	{
		cadcero='';
		for(i=0;i<(4-que.length);i++)
		{
			cadcero+='0';
		}
		quien.value=cadcero+que;
	}
}

function rellenar_6(quien,que){
if(que=="" || que.length<1)
	{
	}
	else
	{
		cadcero='';
		for(i=0;i<(6-que.length);i++)
		{
			cadcero+='0';
		}
		quien.value=cadcero+que;
	}

}

function rellenar_7(quien,que){
if(que=="" || que.length<1)
	{
	}
	else
	{
		cadcero='';
		for(i=0;i<(7-que.length);i++)
		{
			cadcero+='0';
		}
		quien.value=cadcero+que;
	}
}


