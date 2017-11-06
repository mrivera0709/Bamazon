//Set up dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Bamazon', 
});

//connect to the mysql database and 
connection.connect();

// pull the information from the Products database to display to the user


// Create a table for the information from the mysql database to be placed


// Loop through each item in the mysql database and pushes that information into a new rotablew in the 


// A purchase function allowing users to buy a listed item


// Creates prompts to be visible through inquirer


// Process responses to the prompts above


// Turn responses into variables


// Push variables from above to the productPurchased array


// Connects to the mysql database and selects the item the user selected above based on the item id number entered


// If the stock quantity available is less than the amount that the user wanted to purchase then the user will be alerted that the product is out of stock


// Otherwise if the stock amount available is more than or equal to the amount being asked for then the purchase is continued and the user is alerted of what 
// items are being purchased, how much one item is and what the total amount is


// Create the variable SaleTotal that contains the total amount the user is paying for this total puchase


// Connect to the mysql database Departments and updates the saleTotal for the id of the item purchased


// Variable to contain the newly updated stock quantity of the item purchased


// Connects to the mysql database products and updates the stock quantity for the item puchased


// End Connection