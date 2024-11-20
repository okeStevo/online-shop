To start working on this project,you can simply download the propject or clone it, then you can do the following

1 - open the terminal and run npm install to install all nessecary dependencies
2 - replate the MONGODB_URL with the url you get when you create a mongodb database or you can test locally with mongo db cli (offline) and everyting will be just fine
    and then evrything works fine

  to enble an admin user who can upload product, delete product and  has access to all products;
      simply go into your database and then into the user document you wsh to make n admin,
      you cannow set a property called isAdmin, you can set it to true to enable the user as anadmin.
