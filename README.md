# Firebase Data Access Before Load Error

This repository demonstrates a common error when using the Firebase SDK: attempting to access data from a document snapshot before the data has finished loading.  The solution involves using `.then()` to ensure the data is available before accessing it.

## Bug
The `firebaseBug.js` file showcases the problematic code. It attempts to access the document's data immediately after calling `get()`, leading to undefined values or errors.

## Solution
The `firebaseBugSolution.js` file shows the corrected code, using promises to handle asynchronous operations. This approach correctly waits for the data to load before trying to access it.