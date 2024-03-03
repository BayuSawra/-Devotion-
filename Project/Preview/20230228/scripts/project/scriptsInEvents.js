


const scriptsInEvents = {

	async Main_Event22_Act1(runtime, localVars)
	{
		const c3ArrayFile = JSON.parse(localVars.source);
		let result = {};
		
		for (let i = 1; i < c3ArrayFile.data[0].length; i++) {
		    let id = c3ArrayFile.data[0][i][0];
		    if (id && !result[id]) {
		        result[id] = [];
		    }
		
		    let obj = {};
		    for (let j = 0; j < c3ArrayFile.data.length; j++) {
		        let key = c3ArrayFile.data[j][0][0];
		        let value = c3ArrayFile.data[j][i][0];
		        if (value !== "") {
		            obj[key] = value;
		        }
		    }
		
		    if (id && Object.keys(obj).length > 0) {
		        result[id].push(obj);
		    }
		}
		
		runtime.setReturnValue(JSON.stringify(result));
	},

	async Main_Event30_Act1(runtime, localVars)
	{
		runtime.callFunction(...localVars["function"].split(",").map(e => e.trim()))
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

