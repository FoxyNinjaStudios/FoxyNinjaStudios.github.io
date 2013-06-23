var data2;
var currentDealList;
var lastLoadedDeal = 0;
var doListReset = true;

function getTheDeal(guid)
{
//  $(".jspPane")[0].style.top = "0px";
  var url = "../../../../../../";
  url = url + "getTheDeal";
  url = url + "?guid=" + guid;
  var callback = getTheDeal_CB;
  loadFile(url, callback);
}

function getTheDeal_CB(data)
{
  dealData = JSON.parse(data);
  getElementObject("messagesPluginTitle").innerHTML = decodeURIComponent(dealData.title);
  getElementObject("messagesPluginContent").innerHTML = decodeURIComponent(dealData.post);
//  setTimeout('$("#messagesPluginCWW").jScrollPane({"contentWidth":"0px", "horizontalDragMinWidth": "10000px"})', 500);
  new iScroll("messagesPluginCWW");
}
function loadTheDeals(divID, type, begin, count)
{
  currentDealList = divID;
  var url = "../../../../../../";
  url = url + "getDeals";
  url = url + "?type=" + type;
  url = url + "&begin=" + begin;
  url = url + "&count=" + count;
  var callback = dateChanged_CB;
  loadFile(url, callback);
  data2 = url;

}

var data1;
var newMsgs;

function dateChanged_CB(data)
{
  if(doListReset){
    var el = document.getElementById(currentDealList);
    while( el.hasChildNodes() ){
          el.removeChild(el.lastChild);
    }
    
    lastLoadedDeal = 0;
  }

  if (data === "[]"){
    return;
  }

  newMsgs = new Array();

  var messages = JSON.parse(data);

  var Parent = getElementObject(currentDealList)
  var msgKeys = Object.keys(messages);

  if(msgKeys.length < 10){
    getElementStyleObject(currentDealList + "Load").display = "none";
  }
  lastLoadedDeal = lastLoadedDeal + msgKeys.length;

  for (var i = 0; i < msgKeys.length; i++){
    var NewNode = document.createElement("div");
    NewNode.id = currentDealList + messages[msgKeys[i]].guid;
    NewNode.className = "aMessage"; 
    NewNode.innerHTML = "<p>" + decodeURIComponent(messages[msgKeys[i]].title) +"</p> <em>" + messages[msgKeys[i]].date + "</em>";
    Parent.appendChild(NewNode);
    newMsgs[newMsgs.length] = currentDealList + messages[msgKeys[i]].guid;
  }
  setTimeout("dateChanged_CB2()", 500);
  
  return;
}


function dateChanged_CB2()
{
 if(currentDealList == "msgListAll"){ 
  scrolls["aliciasDeals-allDeals"].refresh();
 }
 else if(currentDealList == "msgListRec"){ 
  scrolls["aliciasDeals-recDeals"].refresh();
 }
 else if(currentDealList == "msgListAZ"){ 
  scrolls["aliciasDeals-azDeals"].refresh();
 }
  for (var j = 0; j < newMsgs.length; j++){
    console.log(newMsgs[j]);
    FNS.addButtonElement(newMsgs[j], dealSelected);
  }
}

function makeZoom(canvasID)
{
  scrolls[canvasID].destroy();
  scrolls[canvasID] = null;
	scrolls[canvasID] = new iScroll(canvasID, {/*vScroll:true, hScroll: true,*/ vScrollbar:false, hScrollbar: false});
}

function dealSelected(event)
{
  var guid = event.target.id.split(currentDealList)[1].split("__")[0];
  getTheDeal(guid);
  messagesPlugin.show();
}

var newWindow;

function closeNewWindow()
{
  if(newWindow){
    newWindow.close();
    newWindow = null;
  } 
}
