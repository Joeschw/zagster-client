// $(updategraph)
$(updateView)
// $(updateView2)
    // a memory location that never changes
    // Always capitalized
    const BASE_URL = "https://zagster-service.herokuapp.com"
    
    var my_data17 = []

    // $ = JQuery command, wait until webpage is loaded and then call the function whose name is in the parantheses.
    // or use call function ...
    // $(greeter)
    
    // add(2,3);
  


    // function add(num1, num2){
    //   answer = num1 + num2;
    //   console.log("The answer is: " + answer);
    //   return answer;
    // }

    // function greeter(name) {
    //   alert("welcome to " + name + "data visualization")
    // }

    // greeter("Joe Schwarz's ")
  


    // var person = {name: "Joe", age: 9000, car: {model: "Subaru", year: 2001} }
    // console.log ("My name is " + person.name)
    // console.log ("My age is " + person.age)
    // console.log ("My car model is " + person.car.model)

    // if (person.age > 8999){
    //   alert("IT'S OVER 9000!!!!")
    // }

    // var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
    // var year_list = data[2016]
    // console.log('year list is ' + year_list)

    // console.log(year_list[0][9])
    // console.log(year_list[1][10])
    // console.log(year_list[2][11])
    // console.log(year_list[3][12])


    function updateView() {
      

      $.when ($.getJSON(BASE_URL + "/rides/count/per_month", peryear),).then(updategraph);
    } 

    // function updateView2() {
    //   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    // }
  
    // function updateRideCount(data) {
    //   numberOfRides = data.count
    //   $("h2#rideCount").html(numberOfRides)
    //   console.log(data)
      
    // }

    // function updateView() {
    //   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    // }
    
    function updateRideCount(data) {
      numberOfRides = data.count
      $("h2#rideCount").html(numberOfRides)
      console.log(numberOfRides);
    }
   
    function peryear(data) {
      var data2017 = data[2017]

      console.log(data2017[0][1])
      my_data17.push(data2017[0][1])
      console.log(data2017[1][2])
      my_data17.push(data2017[1][2])
      console.log(data2017[2][3])
      my_data17.push(data2017[2][3])
      console.log(data2017[3][4])
      my_data17.push(data2017[3][4])
      console.log(data2017[4][5])
      my_data17.push(data2017[4][5])
      console.log(data2017[5][6])
      my_data17.push(data2017[5][6])
      console.log(data2017[6][7])
      my_data17.push(data2017[6][7])
      console.log(data2017[7][8])
      my_data17.push(data2017[7][8])
      console.log(data2017[8][9])
      my_data17.push(data2017[8][9])
      console.log(data2017[9][10])
      my_data17.push(data2017[9][10])
      console.log(data2017[10][11])
      my_data17.push(data2017[10][11])
      console.log(data2017[11][12])
      my_data17.push(data2017[11][12])
      console.log("this is my data" + my_data17)
    }


    function updategraph() {
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
              label: 'Rides per month 2017',
              backgroundColor: '#ff6600',
              borderColor: '#ff6600',
              // data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 451, 452]
              data: my_data17
          }]
      },

      // Configuration options go here
      options: {}
  });
}