function fnswebaboutFNSinit()
{
  FNS.addButtonElement("fnsEmail", fnsEmail);
  setTimeout('getElementObject("promoteBrand").src = "resources/apps/fnsweb/images/promoteBrand.png";', 100);
}

function fnsEmail()
{
  newWindow = window.open("mailto:contact@foxyninjastudios.com");
  setTimeout(closeNewWindow, 1200);
}


