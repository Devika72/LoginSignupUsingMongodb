# LoginSignup
> login and signup page

# loginsignup 
> login and signup 

# dfghjk
> jhgfjhgkjj

# heading
> 1.erty
  2.qwert
  3.erwe

Setup Instructions

        1.Clone the repository to your local machine.
    2.Install Maven and Java if not already installed.
    3.Run the following command to start the server: mvn spring-boot:run
    4.Open a web browser and go to http://localhost:8080/ to access the insurance management platform.
   
    or
    
    run the springboot main application from the project `src/main/java/com/insuremyteam/insuranceplatform/InsuranceplatformApplication.java
    
Domain Models

       The following domain models were created for the application:
    
     create database tables from file create-database-tables.sql

     1.`Client`: Represents a client with properties such as name, date of birth, address, and contact information.
     2.`InsurancePolicy`:Represents an insurance policy with properties like policy number, type, coverage amount, premium, start date, and end date. Each policy                                should be associated with a client.
     3.`Claim`: Represents an insurance claim with properties like claim number, description, claim date, and claim status. Each claim should be associated with an                    insurance policy.
     
     
     
