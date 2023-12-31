// // 1.Get all the countries from Asia continent /region using Filter function
 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true);
 request.send();
 request.onload = function(){
     var data = request.response;
    
   var result = JSON.parse(data);
    var res =result.filter((ele)=>ele.region==="Asia")
     console.log("countries from Asia continent:")
   res.map((ele)=>console.log(ele.name.common))   
}
// 2. Get all the countries with a population of less than 2 lakhs using Filter functionvar request = new XMLHttpRequest();
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    var data1 = request1.response;
    
    var result1 = JSON.parse(data1);
    var res1 =result1.filter((x)=>x.population<200000)
    console.log("countries with a population of less than 2 lakhs:")
    res1.map((x)=>console.log(x.name.common))   
}

// 3.Print the following details name, capital, flag, using forEach function
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload = function(){
    var data2 = request2.response;
    
    var result2 = JSON.parse(data2);
    var res2 =result2.forEach((y)=>console.log(`country name:${y.name.common} capital:${y.capital} Flag:${y.flag} `))
    
}

// 4.Print the total population of countries using reduce function

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload = function(){
    var data4 = request3.response;
    
    var result4 = JSON.parse(data4);
    var res4 =result4.reduce((acc,cv)=>{
      return acc+cv.population
    },0)
    console.log(`Total population of countries:${res4}`)
}

// 5.Print the country that uses US dollars as currency.
var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true);
request4.send();
request4.onload = function(){
    var data3 = request4.response;
    
    var result3 = JSON.parse(data3);
    var res3 =result3.filter((item)=>item?.currencies?.USD?.name === "United States dollar").map((value)=>value.name)
    res3.map((ele)=>console.log(ele.common)) 
    

}

