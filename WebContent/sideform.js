/**
 *  Script JS permettant l'affichage de la partie gauche, même après un "scroll"
 */

function scroll_item(id)
{
	//	On calcule la position de base de l'élément
	if(typeof(tab) == 'undefined')
		tab = new Array;
	
	if(typeof(tab[id]) == 'undefined')
	{
		pos = $('#'+id).position();
		tab[id]	= pos.top;
	}
	
	//	On calcule ensuite la position du "scroll"
	var screenpos =	window.pageYOffset;
	
	// On calcule la hauteur du "divprincipal"
	var divprincipalheight;
	var obj = document.getElementById('divprincipal');

	if(obj.offsetHeight)
		divprincipalheight = obj.offsetHeight;
	
	else if(obj.style.pixelHeight)
		divprincipalheight = obj.style.pixelHeight;
	
	$('#'+id).css('position', 'relative');
	
	//	Si le "scroll" est supérieur à la position initiale de l'élément, on décale celui-ci, sinon on le remet à sa position initiale
	if(screenpos > tab[id])
	{
		$('#'+id).css('top', screenpos+'px');
		$('#'+id).css('max-height', divprincipalheight+'px');
	}
	
	else
		$('#'+id).css('top', '0px');
}