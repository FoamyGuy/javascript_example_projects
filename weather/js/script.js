/*
    This example makes an ajax request to a yahoo API that uses the YQL (Yahoo Query Language) technology.
    YQL is a platform that exposes public data in easy to consume formats (JSON in our case) using a syntax similar to SQL to lookup any particular piece of data.
    
    In this example we are using it to pull weather data from Yahoos API, but it can be used to access many other types of data as well.
    
    One of the benifits to YQL is that it is served using a header that allows cross origin requests to be completed by default this is turned off, they had to specifically enable it.
    
    You can learn more about YQL and it's other uses here: https://developer.yahoo.com/yql/
    
    The YQL syntax itself is beyond the scope of this class, it just happens to make a nice example for showing ajax techniques
*/


// decoded YQL query: select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="overland park, ks")&format=json&env=store://datatables.org/alltableswithkeys
$.ajax({
  url:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22overland%20park%2C%20ks%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', success: function(json_weather){
      /*
        The function named "$" is the jquery function. It is capable of doing many different things. In this case we are using it for 2 reasons: 
            - create new elements and put text into them
            - append the created elements inside the #main div
      */
        
        // create a new <h1> element add the title to it, and append it to the #main div 
        $('<h1>').text(json_weather.query.results.channel.title ).appendTo('#main');
        // create a new <h2> element add the date label to it, and append it to the #main div 
        $('<h2>').text('Date: ').appendTo('#main');
        // append a text node into the #main div with the date from the weather data object
        $('#main').append(json_weather.query.results.channel.item.condition.date);
        // create a new <h2> element add the temperature label, and append it to the #main div 
        $('<h2>').text('Temperature: ').appendTo('#main');
        // append a text node into the #main div with the temperature from the weather data object
        $('#main').append(json_weather.query.results.channel.item.condition.temp);
        // create a new <h2> element add the temperature label, and append it to the #main div 
        $('<h2>').text('Wind Chill: ').appendTo('#main');
        // append a text node into the #main div with the wind chill from the weather data object
        $('#main').append(json_weather.query.results.channel.wind.chill);
  }
});


