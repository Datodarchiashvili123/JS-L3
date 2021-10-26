function getMovie(name) {
  return fetch(`http://www.omdbapi.com/?t=${name}&apikey=6697a63c`)
        .then(obj=>obj.json());
}

const getCountry = (name) =>
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((res) => res.json())
    .then((data) => data && data.length && data[0]);



// Task 1
//   1. დაწერეთ ფუნქცია, რომელსაც გადავცემთ ფილმის სახელს და გვეტყვის რამდენი  წლის წინ გამოვიდა ეს ფილმი.
function getYear(movieName) {
  const date = new Date();
  let year = date.getFullYear();
  let movie = getMovie(movieName);

  movie.then((movie) => console.log('ფილმი გამოვიდა ', year - movie.Year, ' წლის წინ.' ));
}

getYear("Avatar");

//Task 2
//   2. დაწერეთ ფუნქცია, რომელსაც გადავცემთ ფილმის სახელს და დაგვიბრუნებს ამ  ფილმის მსახიობების სახელების მასივს (გვარების გარეშე)
async function getNames(movieName){
    let movie = await getMovie(movieName);
    let splited =  movie.Actors.split(', ').map(element => (element.split(' ')[0]));
    return splited;   
};

getNames("Avatar").then(firstNames => console.log(firstNames));

//   3. დაწერეთ ფუნქცია, რომელიც დააბრუნებს იმ ქვეყნის ვალუტას, საიდანაც თქვენი  ერთერთი საყვარელი ფილმია. (თუ რამდენიმე ქვეყანაა ფილმზე მითითებული,  ავიღოთ პირველი)
async function getCurrencies(movieName){
    let movie = await getMovie(movieName);
    let country = await getCountry(movie.Country)
    return country.currencies;
}

getCurrencies('Avatar')
 .then(curr => console.log('Task 3. Currencie ', curr));

//   4. დაწერეთ ფუნქცია, რომელსაც გადავცემთ 3 ფილმის სახელს, და გვეტყვის ჯამში რამდენი საათი და რამდენი წუთია ყველა ფილმის ხანგრძლივობა ერთად.

async function getFullTime(firstMovie, secondMovie, thirdMovie){
   let movie1 = await getMovie(firstMovie).then(res => res.Runtime.split(' ')[0]);
   let movie2 = await getMovie(secondMovie).then(res => res.Runtime.split(' ')[0]);
   let movie3 = await getMovie(thirdMovie).then(res => res.Runtime.split(' ')[0]);
   let sum = +movie1 + +movie2 + +movie3;
   let hour = Math.floor((sum / 60));
   let minutes = sum % 60;
    
        console.log('Task 4', hour + ' საათი და ' + minutes.toString() + ' წუთი ');
}

getFullTime('Avatar', 'Transformers', 'The day after tomorrow');


//   5. დაწერეთ ფუნქცია, რომელსაც გადავცემთ 3 ფილმის სახელს, და დაგვიბრუნებს იმ ქვეყნების მოსახლეობების ჯამს, საიდანაც ეს ფილმებია. (თუ რამდენიმე ქვეყანაა ფილმზე მითითებული, ავიღოთ პირველი)

async function getPopulation(first, second, third){
    let firstMovie = await getMovie(first);
    let First = await getCountry(firstMovie.Country).then(res=>res.population);
    let secondMovie = await getMovie(second);
    let Second = await getCountry(secondMovie.Country).then(res=>res.population);
    let thirdMovie = await getMovie(third);
    let Third = await getCountry(thirdMovie.Country).then(res=>res.population);
    let sum = First + Second + Third;
    return sum;
}

getPopulation('Avatar', 'Alma', 'Yarasa')
 .then(sum => console.log('5 Task: population',sum));