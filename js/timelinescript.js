var ref = new Firebase('https://themetaproject.firebaseio.com');
var eventnum = 0;
var z = 0;
function addevent(eventnum, projectname) {
	var newtimelinenode =  "<li id="+ Event + eventnum +" class='tl-node'>\
			<div class='tl-stamp'> A Date </div>\
			<div class='tl-stamp'> A Time </div>\
			<div class='tl-content'> A Title</div>\
			<div id='" + name + "' class='tl-stamp notes'> Some Notes </div>\
		</li>"
		eventnum = eventnum + 1;
		$('#timeline').append(newtimelinenode);
		document.getElementById("timeline").contentEditable = true;
		console.log(eventnum);
		var eventnumref = ref.child(projectname + '/Eventnum');
		eventnumref.update({
  		"Eventnum": eventnum
		});
}
function upload() {

}

ref.on("value", function(snapshot) {
	document.getElementById("timeline").innerHTML = "";
	var wholeval = snapshot.val();
	  var url= window.location.href;
      var projectname =url.slice(url.indexOf('id=')+3);
	
  var name = snapshot.child(projectname + '/name').val();
  var events = snapshot.child(projectname +'/Events').val();
  var githublink = snapshot.child(projectname + "/github").val();
  var trellolink = snapshot.child(projectname + "/trello").val();
  var slacklink = snapshot.child(projectname + "/slack").val();
  if (z = 1) { 
  document.getElementById("links").innerHTML = "";
  }
  var links = '<div id="links"><a href="'+ githublink +'" style="margin-right: 50px;">The Git</a> <a href="'+ trellolink +'" style="margin-right: 50px;">Trello</a><a href="'+ slacklink +'">Slack</a></div>';
  document.getElementById("links").innerHTML = links;

  var z = z + 1;
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
			<div class='tl-stamp'>"+ date +" </div>\
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
  var githublink = snapshot.child(projectname + "/github").val();
  var trellolink = snapshot.child(projectname + "/trello").val();
  var slacklink = snapshot.child(projectname + "/slack").val();
 if (z = 1){ 
  document.getElementById("links").innerHTML = "";
} 
  var links = '<div id="links"><a href="'+ githublink +'" style="margin-right: 50px;">The Git</a> <a href="'+ trellolink +'" style="margin-right: 50px;">Trello</a><a href="'+ slacklink +'">Slack</a></div>';
  document.getElementById("links").innerHTML = links;

  var z = z + 1;
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
			<div class='tl-stamp'>"+ date +" </div>\
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