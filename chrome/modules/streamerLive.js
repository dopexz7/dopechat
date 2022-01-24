const storage = chrome.storage.local;
const obj = {};


export function addLeftBarStreamer() {
	var mainContainer = document.querySelectorAll('.j83agx80.cbu4d94t.l9j0dhe7.jgljxmt5.be9z9djy')[0];
	var sideBar = document.createElement('div');
	sideBar.className = 'streamer-live-sidebar';

	var sidebarContent = document.createElement('div');
	sidebarContent.className = 'sidebar-content';

	var toggleSidebar = document.createElement('div');
	toggleSidebar.className = 'sidebar-togglebtn';
	var sidebaron = false;
	toggleSidebar.addEventListener('click', function(){
		if (sidebaron !== false) {
			toggleSidebar.style.transform = 'rotate(0deg)';
			sideBar.style.transform = 'translateX(-90%)';
			sidebarContent.style.opacity = '0';
			sideBar.style.background = 'transparent'; /// rgba(24, 24, 27, 0.9)
			sideBar.style.backdropFilter = 'none'; //blur(6px);
			sidebaron = false;
 
		} else {
			toggleSidebar.style.transform = 'rotate(180deg)';
			sideBar.style.background = 'rgba(24, 24, 27, 0.9)'; 
			sideBar.style.backdropFilter = 'blur(6px)'; 
			sideBar.style.transform = 'translateX(0)';
			sidebarContent.style.opacity = '1';
			sidebaron = true;
		}
	});
	sideBar.appendChild(toggleSidebar);

	// function addedElements(){
	// 	storage.get(function(items) {
	//     if (Object.keys(items).length > 0 && items.sideBarAdded) {
	//     	var upp_arr = items.sideBarAdded.map(value => value.toUpperCase());
	//     	if(upp_arr.includes(inputValue.toUpperCase()) !== true) {
	//     		items.sideBarAdded.push(inputValue);
	//     	}
	        
	//     }
	// 	});
	//  	storage.get('sideBarAdded', function(result){
	// 		if(result.sideBarAdded) {
	//  			for (var i=0; i<result.sideBarAdded.lenght) {

	//  			}
	//  		}
	//  	})
	//  }





	///append a close button to current adding element






	
	// // Create a "close" button and append it to each list item
	// var myNodelist = document.getElementsByTagName("LI");
	
	// for (var i = 0; i < myNodelist.length; i++) {
	// 	//console.log(myNodelist[i])
	// 	//if(myNodelist[i].classList.contains('slide')) {
	// 		var span = document.createElement("SPAN");
	//   var txt = document.createTextNode("\u00D7");
	//   span.className = "close";
	//   span.appendChild(txt);
	//   myNodelist[i].appendChild(span);
	// 	//}
	  
	// }

	// Click on a close button to hide the current list item
	var close = document.getElementsByClassName("close");
	for (var i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	  }
	}
	function newElement(newor) {
		if (newor === 'new') {
			var li = document.createElement("li");
			li.className = 'slide';

			var inputValue = document.getElementById("myInput").value;
			li.id = inputValue;
			var divValue = document.createElement('div');
			storage.get(function(items) {
			    if (Object.keys(items).length > 0 && items.sideBarAdded) {
			    	var upp_arr = items.sideBarAdded.map(value => value.toUpperCase());
			    	if(upp_arr.includes(inputValue.toUpperCase()) !== true) {
			    		items.sideBarAdded.push(inputValue);
			    	}
			        // The data array already exists, add to it the new server and nickname
			        
			    } else {
			        // The data array doesn't exist yet, create it
			        items.sideBarAdded = [inputValue];
			    }

			    // Now save the updated items using set
			    storage.set(items);
			});
	  
	  
	  
	    
		  var t = document.createTextNode(inputValue);
		  divValue.appendChild(t);

		  divValue.addEventListener('click',function(){
		  	window.open("https://www.facebook.com/gaming/" + li.id);
		  })
		  li.appendChild(divValue);
		  
		  
		  var ulid = document.getElementsByClassName('positioned');
		  //li.id = 'position-' + (ulid.length + 1);
		  
		  if (inputValue === '') {
		    alert("You must type something!");
		  } else {
		    document.getElementById("myUL").appendChild(li);
		  }
		  document.getElementById("myInput").value = "";



		  var span = document.createElement("SPAN");
		  var txt = document.createTextNode("\u00D7");
		  span.className = "close";
		  span.appendChild(txt);
		  span.addEventListener('click', function(){
		  	var div = this.parentElement;
		  	div.style.display = 'none';
		  storage.get(function(items) {	
		  	
		  	for(var i=0; i<items.sideBarAdded.length; i++) {
		  		if(div.id === items.sideBarAdded[i]) {
		  			var arr= [];
				  	arr['sideBarAdded'] = items.sideBarAdded;
				  	//console.log(arr);
				  	const index = arr['sideBarAdded'].indexOf(items.sideBarAdded[i]);
					if (index > -1) {
					  arr['sideBarAdded'].splice(index, 1);
					  //console.log(arr);
					  items.sideBarAdded = arr['sideBarAdded'];
					  storage.set(items)
					}
		  		}
		  	}
		  	
			
			
		  });	
		  });
		  li.appendChild(span);
		  

		  
		} else {	
			storage.get(function(items) {
			    if (Object.keys(items).length > 0 && items.sideBarAdded) {
			    	for(var j=0; j<items.sideBarAdded.length; j++) {
			    		var li = document.createElement("li");
						li.className = 'slide';
						li.id = items.sideBarAdded[j];
						var inputValue = items.sideBarAdded[j];
						var divValue = document.createElement('div');
					    var t = document.createTextNode(inputValue);
						divValue.appendChild(t);
						divValue.id = 'streamer-live-name';
						li.appendChild(divValue); 
						var span = document.createElement("SPAN");
					  	var txt = document.createTextNode("\u00D7");
					  	span.className = "close";
					  	span.appendChild(txt);
					  	span.addEventListener('click', function(){
						  	var div = this.parentElement;
						  	div.style.display = 'none';
						  	for(var i=0; i<items.sideBarAdded.length; i++) {
						  		if(div.id === items.sideBarAdded[i]) {
						  			var arr= [];
								  	arr['sideBarAdded'] = items.sideBarAdded;
								  	//console.log(arr);
								  	const index = arr['sideBarAdded'].indexOf(items.sideBarAdded[i]);
									if (index > -1) {
									  arr['sideBarAdded'].splice(index, 1);
									  //console.log(arr);
									  items.sideBarAdded = arr['sideBarAdded'];
									  storage.set(items)
									}
						  		}
						  	}
					  	});
					  	li.appendChild(span);
				    	document.getElementById("myUL").appendChild(li);
				    	
				    	
			    	}
				    
			  

			       
				} 

			});
			
				
				
			
			
		}
		
		setTimeout(function(){
			var slides = document.getElementById('myUL');
			Array.prototype.forEach.call(slides.children, child => {
				Array.prototype.forEach.call(child.children, childx => {
					if (childx.id === 'streamer-live-name') {
						childx.addEventListener('click', event => {
		            	window.open("https://www.facebook.com/gaming/" + child.id);
		            });
					}
		            
        		});
	            // child.addEventListener('click', event => {
	            // 	window.open("https://www.facebook.com/gaming/" + child.id);
	            // });
        	});
			// for(var i=0; i<slides.length; i++) {
			// 	slides[i].onclick = function() {
			// 		console.log(slides)
			// 	}
			// 	// slides[i].addEventListener('click', function(){
			// 	// 	console.log(slides[i])
			// 	// });
			// 	// slides[i].onclick = function() {
					
			// 	// 	// window.open("https://www.facebook.com/gaming/" + slides[i].textContent);
			// 	// }
			// }
				
		},1000)
			
		  
	}


	sidebarContent.innerHTML = '<div id="myDIV" class="header"><input type="inputStreamer" autocomplete="off" id="myInput" placeholder="Full streamer name..."><span id="addNewEl" class="addBtn">Add</span></div><ul id="myUL" class="slides"></ul>'
	newElement('curr');

	// var sidebarRamee = document.createElement('div');
	// sidebarRamee.className = 'streamer-live-ramee';
	// var rameeimgsrc = chrome.runtime.getURL('pages/images/ramee.png');
	// var rameeimg= document.createElement('img');
	// rameeimg.src = rameeimgsrc;
	// sidebarRamee.appendChild(rameeimg);
	// sidebarRamee.innerHTML = 'Ramee';
	// var sidebarRated = document.createElement('div');
	// sidebarRated.className = 'streamer-live-rated';
	// sidebarRated.innerHTML = 'Rated'
	
	// sidebarContent.appendChild(sidebarRamee);
	// sidebarContent.appendChild(sidebarRated);
	sideBar.appendChild(sidebarContent);
	mainContainer.appendChild(sideBar);

	document.getElementById('addNewEl').addEventListener('click', function(){
	   newElement('new');
	});


}
