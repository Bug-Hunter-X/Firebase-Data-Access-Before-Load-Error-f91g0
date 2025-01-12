The solution involves using promises to handle the asynchronous nature of Firebase data retrieval.  The code should wait for the promise to resolve before accessing the document data. Here's an example of how to fix the bug:

```javascript
db.collection('myCollection').doc('myDoc').get()
.then(doc => {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    // Access properties of doc.data() here, safely
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.log("Error getting document:", error);
});
```
This ensures that the code only attempts to access the data after the `get()` operation completes successfully.