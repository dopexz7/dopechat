var obj = {};
var storage = chrome.storage.local;
export function automaticallyUpdatingEmoteSets() {
	setInterval ((function () {
    
    try { 

        const rameeEmotes = fetch("https://dopexz7.github.io/emotes/ramee.json?r=")
          .then((response) => response.json())
          .then((user) => {
            return user;
        });

        const ratedEmotes = fetch("https://dopexz7.github.io/emotes/rated.json?r=")
          .then((response) => response.json())
          .then((user) => {
            return user;
        });

        const vaderEmotes = fetch("https://dopexz7.github.io/emotes/vader.json?r=")
          .then((response) => response.json())
          .then((user) => {
            return user;
        });

        async function dopeFunction() {
            // ramee - 1 rated - 2 vader - 3

            let resultx = await rameeEmotes;
            obj.currentRameeSet = resultx;
            let result2 = await ratedEmotes;
            obj.currentRatedSet = result2;
            let result3 = await vaderEmotes;
            obj.currentVaderSet = result3;
            storage.set(obj);
            storage.get(['SETS', 'SET'], function(result) {
                var x = result.SETS;
                //var array = result.SET;
                var newArr;
                if (x !== undefined) {
                    if (x.includes(1) && x.includes(2) && x.includes(3)) { // if 1,2 and 3
                    newArr = resultx.concat(result2, result3);
                    newArr = newArr.filter((item,index)=>{
                        return (newArr.indexOf(item) == index);
                    });  
                } else if(x.includes(1) && x.includes(2) && x.includes(3) !== true) { // if 1 and 2, but not 3
                    newArr = resultx.concat(result2);
                    newArr = newArr.filter((item,index)=>{
                        return (newArr.indexOf(item) == index);
                    });  
                } else if(x.includes(1) && x.includes(3) && x.includes(2) !== true) { // if 1 and 3, but not 2
                    newArr = resultx.concat(result3);
                    newArr = newArr.filter((item,index)=>{
                        return (newArr.indexOf(item) == index);
                    });  
                } else if(x.includes(2) && x.includes(3) && x.includes(2) !== true) { // if 2 and 3, but not 1
                    newArr = result2.concat(result3);
                    newArr = newArr.filter((item,index)=>{
                        return (newArr.indexOf(item) == index);
                    });  
                } else if(x.includes(1) || x.includes(2) || x.includes(3)) {
                    if(x.includes(1) && x.includes(2) !== true && x.includes(3) !== true) {
                        newArr = resultx;
                    } else if(x.includes(2) && x.includes(1) !== true && x.includes(3) !== true) {
                        newArr = result2;
                    } else if(x.includes(3) && x.includes(2) !== true && x.includes(1) !== true) {
                        newArr = result3;
                    }
                }
                obj.SET = newArr;
                obj.setDate = new Date().toLocaleString('en-US');
                storage.set(obj);
                //setswap(); //refreshes emotes
                }
            });
        }





        var emotes;

        storage.get(['currentRameeSet', 'currentRatedSet', 'currentVaderSet'], function(result) {
           jQuery.getJSON("https://dopexz7.github.io/emotes/ramee.json?r=" + Math.random(), function(response) {
                emotes = response;
                if(result.currentRameeSet !== emotes) {
                    dopeFunction();
                    //setswap(); //use changed emote set
                }
    
            });
           jQuery.getJSON("https://dopexz7.github.io/emotes/rated.json?r=" + Math.random(), function(response) {
                emotes = response;
                if(result.currentRatedSet !== emotes) {
                    dopeFunction();
                    //setswap(); //use changed emote set
                }

            });
           jQuery.getJSON("https://dopexz7.github.io/emotes/vader.json?r=" + Math.random(), function(response) {
                emotes = response;
                if(result.currentVaderSet !== emotes) {
                    dopeFunction();
                    //setswap(); //use changed emote set
                }

            });
        });
        
    } catch(e){
    console.log(e);
    }                   
    }), 600000);

}