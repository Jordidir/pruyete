var sel;
sel=$(document);
sel.ready(inicializarEventos);

function inicializarEventos(){
	var sel;
	sel=$(".celda");
	sel.mouseover(inColor1);
	var sel;
	sel=$(".celda");
	sel.mouseout(offColor1);
	var sel;
	sel=$(".celda:first-child");
	sel.mouseover(inColor2);
	var sel;
	sel=$(".celda:first-child");
	sel.mouseout(offColor2);
	var sel;
	sel=$(".cuadro");
	sel.focus(texto);
	var sel;
	sel=$(".celdaPapelera");
	sel.mouseover(inColor3);
	var sel;
	sel=$(".celdaPapelera");
	sel.mouseout(offColor3);
}

function inColor1(){
	$(this).css("background-color", "#FFE900");
}
function offColor1(){
	$(this).css("background-color", "#d2e0f7");
}

function inColor2(){
	$(this).css("background-color", "#F3B900");
}
function offColor2(){
	$(this).css("background-color", "#AAC2E3");
}
function texto(){
	$(this).attr("value", "Rellene el campo");
}
function inColor3(){
	$(this).css("background-color", "red");
}
function offColor3(){
	$(this).css("background-color", "#d2e0f7");
}