var ref = new Firebase('https://themetaproject.firebaseio.com');

	//var para = document.createElement("p");
	//var node = document.createTextNode("This is new.");
	//para.appendChild(node);
	//var element = document.getElementById("div1");
	//element.appendChild(para);

ref.on("value", function(snapshot) {
	var wholeval = snapshot.val();
	for (var projectname in wholeval) {
		console.log(projectname);
	
  var name = snapshot.child(projectname + '/name').val();
  var events = snapshot.child(projectname +'/Events').val();
   for (var key in events) {
   	var obj = events[key];
   	var Stamp = obj.Stamp;
   	var content = obj.content
   	var date = obj.date;
   	console.log(Stamp, content, date);
   	var timelinenode = "<li class='tl-node'>\
			<div class='tl-stamp'>"+ date +" </div>\
			<div class='tl-content'>"+ Stamp +"</div>\
			<a class='tl-link' href='#''>View notes</a>\
		</li>"
	$('#timeline').append(timelinenode);

   	
   }
}
  //for(var eventname in events) {
  	//console.log(eventname);

  //}
 // console.log(events.Event1);
  document.getElementById("title").innerHTML = "[" + name + "]";


}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  alert('Something firebase realted Broke, start praying to the demo gods');
});