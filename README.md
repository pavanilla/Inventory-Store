# Inventory Store - Server Code

# About

 This is a prototype repository for the server component of the Inventory Store. The system allows the stocks across the Inventory store. Stock is shown for the User and the Inventory status of the stores and their store data. Data is stored in mongoDB database.

# Key Technologies for the Inventory store
key technologies include: Node.js and MongoDB, Javascript 

# Assumptions 
  1. Data base schema is designed in the view of write operations rather than read operation . so prefered using Reference Data Models (Normalization).
  2. Repaired, Damaged, Ready are intrinsically belong together. from the first point assumption we frequently need to query all the three of collections on their own,so we should       normalize the data into three separate collections,
  3. In the case of stores and User relationship. there exist a pattern of one-to-many relationship.
  4. And between the bags and Inventory status. there exist a pattern of one-to-many relationship
  
