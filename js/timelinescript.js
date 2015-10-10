var ref = new Firebase('https://themetaproject.firebaseio.com');

	//var para = document.createElement("p");
	//var node = document.createTextNode("This is new.");
	//para.appendChild(node);
	//var element = document.getElementById("div1");
	//element.appendChild(para);

ref.on("value", function(snapshot) {
	document.getElementById("timeline").innerHTML = "";
	var wholeval = snapshot.val();
	  var url= window.location.href;
      var projectname =url.slice(url.indexOf('id=')+3);
	
  var name = snapshot.child(projectname + '/name').val();
  var events = snapshot.child(projectname +'/Events').val();
   for (var key in events) {
   	var obj = events[key];
   	var Stamp = obj.Stamp;
   	var content = obj.content
   	var date = obj.date;
   	var notes = obj.notes
   	if (notes == undefined) {
		notes = 'none';
	}
   	console.log(Stamp, content, date);
   	var timelinenode = "<li class='tl-node'>\
			<div class='tl-stamp'>"+ Stamp +" </div>\
			<div class='tl-content'>"+ content +"</div>\
			<div id='" + name + "' class='tl-stamp notes'>"+ notes +" </div>\
		</li>"
	$('#timeline').append(timelinenode);
   	
   }
  document.getElementById("title").innerHTML = "[" + name + "]";
  document.getElementById("prjtitle").innerHTML = "[" + name + "] Timeline";


}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  alert('Something firebase realted Broke, start praying to the demo gods');
});

ref.on("child_added", function(snapshot) {
	document.getElementById("timeline").innerHTML = "";
	var wholeval = snapshot.val();
	  var url= window.location.href;
      var projectname =url.slice(url.indexOf('id=')+3);
	
  var name = snapshot.child(projectname + '/name').val();
  var events = snapshot.child(projectname +'/Events').val();
   for (var key in events) {
   	var obj = events[key];
   	var Stamp = obj.Stamp;
   	var content = obj.content
   	var date = obj.date;
   	var notes = obj.notes
   	if (notes == undefined) {
		notes = 'none';
	}
   	console.log(Stamp, content, date);
   	var timelinenode = "<li class='tl-node'>\
			<div class='tl-stamp'>"+ Stamp +" </div>\
			<div class='tl-content'>"+ content +"</div>\
			<div id='" + name + "' class='tl-stamp notes'>"+ notes +" </div>\
		</li>"
	$('#timeline').append(timelinenode);
   	
   }
  document.getElementById("title").innerHTML = "[" + name + "]";
  document.getElementById("prjtitle").innerHTML = "[" + name + "] Timeline";


}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  alert('Something firebase realted Broke, start praying to the demo gods');
});
