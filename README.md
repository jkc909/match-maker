# matchMaker
User Interface for Streamlined Data Review

## User Story
Using product data I scraped from two online retailers, I generated a list of potential match pairs between the two data sets. My fuzzy matching algorithm is not perfect, so I need humans to review match suggestions to confirm whether or not they are valid. In other words, I want to find the same product sold by two retailers so I can do pricing/data analytics. The purpose of matchMaker app is to streamline the match review process. 

matchMaker is the perfect user interface for quickly reviewing large amounts of product match data.

## App Description
The main feature of the app is the match review page. Users are presented with two tiles containing product data. The tile on the left is the base product, the tile on the right contains five potential matches for that product. In both tiles, users can click tabs to reveal more data points, click links to the original product pages, click to magnify image, and submit comments with their review. In the right-hand tile, users can cycle through five sets of product data dynamically. On the their profile page, users can review their current projects, previous submissions, and manager feedback. This app is designed to allow users to swiftly review data and make fast decisions about match suggestions.

This app was built with a Ruby on Rails back end and a React front end. 

Check out my other repo dataFetch for more info on how I acquired and generated the data for this app! https://github.com/jkc909/dataFetch

## Dependencies
  
 > Ruby- 2.4.5
 
## Installation
 > bundle install
 
 > bundle exec rake db:create
 
 > bundle exec rake db:migrate
 
 > bundle exec rake db:seed
 
 > yarn run install

Then start your Rails server and Yarn server and you're good to go!
