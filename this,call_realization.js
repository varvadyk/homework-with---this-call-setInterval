const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//all country
const country_ukr = ukraine;
const country_latv = latvia;
const country_litv = litva;

   function getMyTaxes(salary){
       return this.tax * salary; 
   }
   document.writeln(`<p>  Function #1 - Tax in the country is : ${getMyTaxes.call(country_ukr, 10000)}</p>`);


   function getMiddleTaxes(){
      return this.tax * this.middleSalary;
  }
  document.writeln(`<p>  Function #2 :</p>`);
  document.writeln(`<p> Such taxes are paid on average by IT professionals in Ukraine : ${getMiddleTaxes.call(country_ukr)}</p>`);
  document.writeln(`<p> Such taxes are paid  on average by IT professionals in Latvia : ${getMiddleTaxes.call(country_latv)}</p>`);
  document.writeln(`<p> Such taxes are paid on average by IT professionals in Litva : ${getMiddleTaxes.call(country_litv)}</p>`);


  function getTotalTaxes(){
      return this.tax * this.middleSalary * this.vacancies
  }
  document.writeln(`<p>  Function #3 :</p>`);
  document.writeln(`<p> The total amount of taxes paid by IT professionals  in Ukraine : ${getTotalTaxes.call(country_ukr)}</p>`);
  document.writeln(`<p> The total amount of taxes paid by IT professionals in Latvia : ${getTotalTaxes.call(country_latv)}</p>`);
  document.writeln(`<p> The total amount of taxes paid by IT professionals in Litva : ${getTotalTaxes.call(country_litv)}</p>`);


  document.writeln(`<p>  Function #4 : in console </p>`);
  function getMySalary(country){
    setInterval(() => {
      const min = 1500;
      const max = 2000;
      const salary = Math.floor(Math.random() * (max - min + 1)) + min;
      const taxes = country.tax;
      const profit = salary - taxes;
    
  console.log( 
  {
      salary,
      taxes,
      profit

  });
      },10000);
  } 
getMySalary(country_ukr);
 