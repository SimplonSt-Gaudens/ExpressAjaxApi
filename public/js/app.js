$(document).ready(function(){
	$("#send").click(function(){
		var cp = $('#cp').val()
		var city = $('#city').val()
		$.ajax({
			type:"GET",
			url: "/data/geo/"+cp+"/"+city,
			dataType: "json",
			success: function(data){
				var address = data.results[0].formatted_address;
				var cityName = data.results[0].address_components[1].long_name;
				var location = data.results[0].geometry.location;
				$("#app").html("Adresse : "+ address +"<br /> latitude : " + location.lat + " longitude : " + location.lng + "<br /> <a href='https://www.google.com/maps/@"+ location.lat +","+ location.lng +",10z?hl=fr'>"+cityName+"</a>")
			},
			error: function(){
				console.log('err');
			}
		})
	})
})