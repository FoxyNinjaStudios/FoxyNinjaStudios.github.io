function fnswebpeopleinit()
{
  FNS.addButtonElement("tejaswiEmail", tejaswiEmail);
  FNS.addButtonElement("tejaswiTwitter", tejaswiTwitter);
  FNS.addButtonElement("arianaEmail", arianaEmail);
  FNS.addButtonElement("arianaTwitter", arianaTwitter);
  FNS.addButtonElement("warrenEmail", warrenEmail);
  FNS.addButtonElement("karliEmail", karliEmail);
  FNS.addButtonElement("karliWebsite", karliWebsite);

  setTimeout('getElementObject("tejaswiPhoto").src = "resources/apps/fnsweb/images/tejaswiPhoto.png";', 100);
  setTimeout('getElementObject("arianaPhoto").src = "resources/apps/fnsweb/images/arianaPhoto.png";', 100);
  setTimeout('getElementObject("warrenPhoto").src = "resources/apps/fnsweb/images/warrenPhoto.png";', 100);
  setTimeout('getElementObject("karliPhoto").src = "resources/apps/fnsweb/images/karliPhoto.png";', 100);

}



function tejaswiEmail()
{
  newWindow = window.open("mailto:tejaswi@foxyninjastudios.com");
  setTimeout(closeNewWindow, 1200);
}

function tejaswiTwitter()
{
  window.open("https://twitter.com/tejaswigowda");
}

function arianaEmail()
{
  newWindow = window.open("mailto:ariana@foxyninjastudios.com");
  setTimeout(closeNewWindow, 1200);
}

function arianaTwitter()
{
  window.open("https://twitter.com/arig");
}

function warrenEmail()
{
  newWindow = window.open("mailto:warren@foxyninjastudios.com");
  setTimeout(closeNewWindow, 1200);
}

function karliEmail()
{
  newWindow = window.open("mailto:karli@foxyninjastudios.com");
  setTimeout(closeNewWindow, 1200);
}

function karliWebsite()
{
  window.open("http://karlifoss.carbonmade.com");
}

function allDealsActive()
{
  getElementStyleObject("msgListAllLoad").display = "block";
  doListReset = true;
  loadTheDeals("msgListAll", "all", 0, 10);
}

function msgListAllLoad()
{
  doListReset = false;
  loadTheDeals("msgListAll", "all", lastLoadedDeal, 10);
}
