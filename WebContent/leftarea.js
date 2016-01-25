/**
 *  Script JS permettant l'affichage de la partie gauche, même après un "scroll"
 */

function scroll_item(id)
{
	// On vérifie si l'écran a une largeur >= à 1200px ...
	var largeurecran = screen.width;
	
	if(largeurecran >= 1200)        // ... car sinon, la zone de gauche est automatiquement "togglée" en haut à droite de la page
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
		var leftpos = screenpos - 280;
		
		//$('#'+id).css('position', 'relative');
	
		//	Si le "scroll" est supérieur à la position initiale de l'élément, on décale celui-ci, sinon on le remet à sa position initiale
		if(screenpos > tab[id])
		{
			$('#'+id).css('top', leftpos+'px');
		}
	
		else
			$('#'+id).css('top', '0px');
    }
	
	else
		$('#'+id).css('top', '0px');
}