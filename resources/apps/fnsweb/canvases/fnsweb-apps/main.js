function fnswebappsinit()
{
	FNS.addButtonElement("playNow",playNow);
	FNS.addButtonElement("iOSMHDW",iOSMHDW);
	FNS.addButtonElement("androidMHDW",androidMHDW);
	FNS.addButtonElement("chromeMHDW",chromeMHDW);
	FNS.addButtonElement("goSolarApp",goSolarApp);
	FNS.addButtonElement("learnMoreERC",learnMoreERC);
	FNS.addButtonElement("iOSERCDW",iOSERCDW);
	FNS.addButtonElement("androidERCDW",androidERCDW);

  setTimeout('getElementObject("marbleHopSH").src = "resources/apps/fnsweb/images/marbleHopSH.png";', 100);
  setTimeout('getElementObject("npeSH").src = "resources/apps/fnsweb/images/npeSH.png";', 100);
  setTimeout('getElementObject("ercSH").src = "resources/apps/fnsweb/images/ercSH.png";', 100);
}

function playNow()
{
  window.open("http://foxy.ninja.jit.su/marbleHop/marbleHop.html");
}

function iOSMHDW()
{
  window.open("https://itunes.apple.com/us/app/marble-hop/id417600742");
}

function androidMHDW()
{
  window.open("https://play.google.com/store/apps/details?id=com.FNS.marbleHop");
}

function iOSERCDW()
{
  window.open("https://itunes.apple.com/us/app/er-cares/id542649506");
}

function androidERCDW()
{
  window.open("https://play.google.com/store/apps/details?id=com.FNS.ercares");
}

function chromeMHDW()
{
  window.open("https://chrome.google.com/webstore/detail/marble-hop-pro/lagnbahfchokmglcdnnmbbkkdboaegla");
}

function goSolarApp()
{
  window.open("http://isave.naturalpowerandenergy.com/");
}

function learnMoreERC()
{
  window.open("http://ercares.com/");
}
