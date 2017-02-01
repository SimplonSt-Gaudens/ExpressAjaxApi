$(document).ready(function(){
	$("#send").click(function(){
		var city = $('#city').val();
		console.log(city);
		$.ajax({
			type:"GET",
			url: "/data/places/"+city,
			dataType: "json",
			success: function(data){
				console.log(data);
				$("#app").html(data.name+ ' ' + data.main.temp);
			},
			error: function(){
				console.log('err');
			}
		})
	})
})