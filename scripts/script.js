$(document).ready(function() {
    $('.js-example-basic-multiple').select2({
        width : 'resolve'
    });    
    $.get("http://starlord.hackerearth.com/movieslisting", function(data, status)
    {
        data = JSON.stringify(data);
        data = JSON.parse(data);
        $.each(data, function(i ,v1)
        {
            var str = "<div class='card col-md-3 col-lg-3 col-sm-5 col-xs-10' style='color:white;margin:3%;background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);'><div class='card-header' style='color:black'>"+data[i].language+"</div><div class='card-body'><i class='material-icons'style='color:black'> theaters</i><h5 class='card-title' style='color:#0d47a1'>"+data[i].movie_title+"</h5><p class='card-text'>By "+data[i].director_name+" featuring "+data[i].actor_1_name+" and "+data[i].actor_2_name+" and released in the year "+data[i].title_year+"</p><a href='"+data[0].movie_imdb_link+"' class='btn btn-primary'style='background: #f5de50;color: black'>Go to IMDb</a></div></div>";
            $("#app").append(str);
        });
    });
    $(".sortByCountry").on("change", function(){
        var values = $(this).val();
        filterCountry(values);

    });
});
function filterCountry(value)
{
    $("#app").empty();
        $.get("http://starlord.hackerearth.com/movieslisting", function(data, status)
        {
            data = JSON.stringify(data);
            data = JSON.parse(data);
            var temp = value.length;
            t2 = 0;
            while(t2 < temp)
            {
                $.each(data, function(i ,v1)
                {
                    var temp2 = Object.values(data[i].country);
                    var str = value[t2].toUpperCase();
                    var counter = 0;
                    for(var i =0;i<(temp2.length);i++)
                    {
                        var f1 = (temp2[i].toUpperCase());
                        if(f1 == str[i])
                        {
                            counter++;
                        }
                    }
                    if(counter == str.length)
                    {
                        var str1 = "<div class='card col-md-3 col-lg-3 col-sm-5 col-xs-10' style='color:white;margin:3%;background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);'><div class='card-header' style='color:black'>"+v1.language+"</div><div class='card-body'><i class='material-icons'style='color:black'> theaters</i><h5 class='card-title' style='color:#0d47a1'>"+v1.movie_title+"</h5><p class='card-text'>By "+v1.director_name+" featuring "+v1.actor_1_name+" and "+v1.actor_2_name+" and released in the year "+v1.title_year+"</p><a href='"+v1.movie_imdb_link+"' class='btn btn-primary'style='background: #f5de50;color: black'>Go to IMDb</a></div></div>";
                        $("#app").append(str1);                               
                    }
                });
                t2++;
            }            
        });    
}
function GetSortOrder(prop) 
{  
    return function(a, b) 
    {  
        if (a[prop] > b[prop]) 
        {  
            return 1;  
        } else if (a[prop] < b[prop]) 
        {  
            return -1;  
        }  
    return 0;  
    }  
} 
function sortByYear()
{
    $("#app").empty();
    $.get("http://starlord.hackerearth.com/movieslisting", function(data, status){
        data = JSON.stringify(data);
        data = JSON.parse(data);
        var temp = $("#sortByYear").is(":checked");
        if(temp == true)
        {
            data.sort(GetSortOrder("title_year"));
                    for (var i in data) 
                    {  
                        var str = "<div class='card col-md-3 col-lg-3 col-sm-5 col-xs-10' style='color:white;margin:3%;background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);'><div class='card-header' style='color:black'>"+data[i].language+"</div><div class='card-body'><i class='material-icons'style='color:black'> theaters</i><h5 class='card-title' style='color:#0d47a1'>"+data[i].movie_title+"</h5><p class='card-text'>By "+data[i].director_name+" featuring "+data[i].actor_1_name+" and "+data[i].actor_2_name+" and released in the year "+data[i].title_year+"</p><a href='"+data[0].movie_imdb_link+"' class='btn btn-primary'style='background: #f5de50;color: black'>Go to IMDb</a></div></div>";
                        $("#app").append(str); 
                    } 
        }
        else{
            $("#app").empty();
            $.each(data, function(i ,v1){
                    var str = "<div class='card col-md-3 col-lg-3 col-sm-5 col-xs-10' style='color:white;margin:3%;background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);'><div class='card-header' style='color:black'>"+data[i].language+"</div><div class='card-body'><i class='material-icons'style='color:black'> theaters</i><h5 class='card-title' style='color:#0d47a1'>"+data[i].movie_title+"</h5><p class='card-text'>By "+data[i].director_name+" featuring "+data[i].actor_1_name+" and "+data[i].actor_2_name+" and released in the year "+data[i].title_year+"</p><a href='"+data[0].movie_imdb_link+"' class='btn btn-primary'style='background: #f5de50;color: black'>Go to IMDb</a></div></div>";
                    $("#app").append(str);
                    });
        }
    });
}          
function movieSearch()
                {
                    var movieName = $("#searchField").val();                    
                    $("#app").empty();                                
                    $.get("http://starlord.hackerearth.com/movieslisting", function(data, status){
                        data = JSON.stringify(data);
                        data = JSON.parse(data);
                        $.each(data, function(i ,v1)
                        {
                            var temp2 = Object.values(data[i].movie_title);
                            var str = movieName.toUpperCase();
                            var counter = 0;
                            for(var i =0;i<(temp2.length-1);i++)
                            {
                                var f1 = (temp2[i].toUpperCase());
                                if(f1 == str[i])
                                {
                                    counter++;
                                }
                            }
                            if(counter == str.length)
                            {
                                var str1 = "<div class='card col-md-3 col-lg-3 col-sm-5 col-xs-10' style='color:white;margin:3%;background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);'><div class='card-header' style='color:black'>"+v1.language+"</div><div class='card-body'><i class='material-icons'style='color:black'> theaters</i><h5 class='card-title' style='color:#0d47a1'>"+v1.movie_title+"</h5><p class='card-text'>By "+v1.director_name+" featuring "+v1.actor_1_name+" and "+v1.actor_2_name+" and released in the year "+v1.title_year+"</p><a href='"+v1.movie_imdb_link+"' class='btn btn-primary'style='background: #f5de50;color: black'>Go to IMDb</a></div></div>";
                                $("#app").append(str1);                               
                            }
                        });
                    });
                }
