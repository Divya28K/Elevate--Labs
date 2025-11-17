Books REST API (Node.js + Express)
A simple REST API to manage a list of books using Node.js and Express, with full CRUD operations. Data is stored in memory (no database).

🚀 Features

• Get all books
• Get a book by index
• Add a new book
• Update a book
• Delete a book
• Test all endpoints using Postman

🛠️ Tools Used

• Node.js
• Express.js
• VS Code
• Postman

📦 Installation & Setup

1️⃣ Install dependencies
• npm install

2️⃣ Start the server
• node server.js

Server will run at:
http://localhost:3000

📮 Postman Testing

1️⃣ Test: Get all books

Open Postman

Select GET

Enter:
http://localhost:3000/books

Click Send
✔ You will see a list of books (or an empty list if none added)

2️⃣ Test: Add a new book

Select POST

Enter:

http://localhost:3000/books


Go to Body → raw → JSON

Add this:

{
  "title": "My First Book",
  "author": "Divya"
}


Click Send
✔ The new book will be added.

3️⃣ Test: Get a book by index

Select GET

Enter:

http://localhost:3000/books/0


Click Send
✔ Shows the book at index 0.

4️⃣ Test: Update a book

Select PUT

Enter:

http://localhost:3000/books/0


Go to Body → raw → JSON

Add:

{
  "title": "Updated Book",
  "author": "Updated Author",
  "name": "Divya"
}

Click Send
✔ Book at index 0 gets updated.

5️⃣ Test: Delete a book

Select DELETE

Enter:

http://localhost:3000/books/0

Click Send
✔ Book at index 0 gets deleted.