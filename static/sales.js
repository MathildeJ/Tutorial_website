<script type="text/javascript">
var request_logs = new XMLHttpRequest();

request_logs.open('GET', 'https://api.surfly.com/v2/logs/?api_key=ec006650588b4726ac397ab5e56c033a');

request_logs.onreadystatechange = function () {
  if (this.readyState === 4) {
    var str = this.responseText;
    var array = str.split('{');

    for(var i =0; i<array.length;i++){
	var element = array[i];
	var index = element.indexOf("details");
	var line = element.substring(index+10, element.length-3);
	line = line.replace('\/"',"");
	if(window.__surfly){
		if(line=="Sales complete"){
			var index_ag = element.indexOf("agent_id");
			var index_created = element.indexOf("created");
			var id = element.substring(index_ag+11, index_created-2);
			if(agents.indexOf(id)===-1){
				agents.push(id);
				count.push(1);
			}else{
				for(var j=0; j<agents.length;j++){
					if(agents[j]==id){
						count[j]+=1;
					}
				}
			}

			//count +=1;
			//console.log(count);
		}
	}
    }
  }
};

document.write(agents);
document.write(count);


request_logs.send();
</script>
