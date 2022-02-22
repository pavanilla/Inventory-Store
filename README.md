# Inventory Store - Server Code

# About

 This is a prototype repository for the server component of the Inventory Store. The system allows the stocks across the Inventory store. Stock is shown for the User and the Inventory status of the stores and their store data. Data is stored in mongoDB database.

# serve side technologies
1.Node.js
  

# Assumptions 
  1. Data base schema is designed in the view of write operations rather than read operation . so prefered using Reference Data Models (Normalization).
  2. Repaired, Damaged, Ready are intrinsically belong together. from the first point assumption we frequently need to query all the three of collections on their own,so we should       normalize the data into three separate collections,
  3. In the case of stores and User relationship. there exist a pattern of one-to-many relationship.
  4. And between the bags and Inventory status. there exist a pattern of one-to-many relationship


# Installing Instructions 

  ## Node.js
  You will need Node.js. If you don't have it installed already, you can find an installer for your operating system [here](https://nodejs.org/en/).
  The node installer will also install npm. This project is currently using Node 7.12.1
  
  Once you have Node installed, clone the repo into a directory of your choice. Then run npm install from within the newly created project directory. This will download and         install all the dependencies listed in the package.json file.
     
      $ npm install
      
  ## MongoDB
  To install MongoDB, follow the instructions in the [MongoDB Manual](https://docs.mongodb.com/manual/) You will also need to create a data/db directory within the project     directory. The MongoDB data directory COULD be located anywhere, however the startup script start_mongodb.sh assumes there is a ./data/db directory within the current project directory. After installing MongoDB, execute the startup script.
  
      $ ./start_mongodb.sh
      
 # starting the project
   
   ## To start node,run the following command:
       $ npm start
   ## you should see:
       Server listening on port 5000
   ## naviagate to http://localhost:5000
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  




  
