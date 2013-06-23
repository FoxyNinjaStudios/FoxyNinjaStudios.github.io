function fnswebmainMenuinit()
{      
	mainMenuButtons.list = App.mainmenubuttons;
	for (i = 0; i < App.mainmenubuttons.length; i++){
		FNS.addButtonElement(App.mainmenubuttons[i],mainMenuButtons.selected); 
	}
	FNS.addTapElement("maincanvasImage",maincanvasImageClicked); 
}

function maincanvasImageClicked()
{
	if(ENV.screen.smallscreenon){ return; }
	Canvas.showOneCanvasOnly(App.mainMenuFlair);
	getElementStyleObject("headerWrapper").display = "none";
	
	for(var i=0; i< App.mainmenubuttons.length; i++){ 
		mainMenuButtons.__removeSelectedStyle(App.mainmenubuttons[i]);			   
	}
	
	getElementObject("appHeaderTitle").innerHTML = "";
}



var data4;

var mainMenuButtons = {
	list: [],
	getTargetCanvas:function(currentButton){
		for(var i=0; i < App.canvases.length; i++){
			if(App.canvases[i] === App.maincanvas){continue;}
			if(Canvas.connections[App.canvases[i]] === currentButton){
				//console.log(Canvas.connections[App.canvases[i]] + " : " + currentButton)
				return App.canvases[i];
			}
		}
		return null;
	},
	__addSelectedStyle: function(divID){
		var t = getElementStyleObject(divID);
    t.backgroundColor = "rgb(113,178,56)";
    t.backgroundImage = "url(images/glass.png)";
		t.color = "black"; 
    t.boxShadow = "black 1px 1px 5px;";
	}, 

	__removeSelectedStyle: function(divID){   
		var t = getElementStyleObject(divID);
		t.backgroundColor = ""; 
		t.backgroundImage = ""; 
		t.color = ""; 
    t.boxShadow = "";
	},  

	selected: function(event){
		setTimeout('getElementStyleObject("headerWrapper").display = "block"', 300);
		
		var i;
		var buttonClicked = event.target.id.split("__")[0];
        data4 = buttonClicked;
		
    var canvasID = mainMenuButtons.getTargetCanvas(buttonClicked);
		Canvas.showOneCanvasOnly(canvasID);
				
		if(ENV.screen.smallscreenon){  
			getElementStyleObject("maincanvasWrapper").marginLeft = "-700px";
			getElementStyleObject("homeButton").display = "block";
		}
		else{
			for(i=0; i< App.mainmenubuttons.length; i++){ 
				if(App.mainmenubuttons[i] === buttonClicked){
				   mainMenuButtons.__addSelectedStyle(App.mainmenubuttons[i]);
				}   
				else{ 
					mainMenuButtons.__removeSelectedStyle(App.mainmenubuttons[i]);			   
				}
			}
		}

    //scrolls[canvasID].zoom(0,0,1,0);

    setTimeout(canvasID.split("-")[1] + "Active()", 100);
	}
}

var currentCat;

function handleAllDealsLoad()
{
  
}

var assetPath = "";

function handleImageAssets(category)
{
  document.getElementById(category + 'Image').style.backgroundImage = "url(" + assetPath + category + ".png"  + ")";
}

var data0;
function handleRemindersScreen_CB(data)
{
  var t = JSON.parse(data);
  data0 = t;
  document.getElementById('remindersImage').style.backgroundImage = "url(" + t[0].message + ")";
}


function handleCalendarScreen()
{
  var category = "calendar";
  var url = "../";
  url = url + "getSessionInfo";
  url = url + "?category=" + category;
  var callback = handleCalendarScreen_CB;
  loadFile(url, callback);
}

function handleCalendarScreen_CB(data)
{
  var t = JSON.parse(data);
  data0 = t;
  document.getElementById('calendarImage').style.backgroundImage = "url(" + t[0].message + ")";
}

function handleScheduleScreen()
{
  var category = "schedule";
  var url = "../";
  url = url + "getSessionInfo";
  url = url + "?category=" + category;
  var callback = handleScheduleScreen_CB;
  loadFile(url, callback);
}

function handleScheduleScreen_CB(data)
{
  var t = JSON.parse(data);
  data0 = t;
  document.getElementById('scheduleImage').style.backgroundImage = "url(" + t[0].message + ")";
}
