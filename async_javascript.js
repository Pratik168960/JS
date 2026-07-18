// JAVASCRIPT
// -> synchronous (one by one code execution)
// -> single threaded (everything is executed in single thread)
// this is default js behavior


// Exectuion context
// execute one line of code at a time
// each operation waits for the last one to complete before executing


// Blocking code vs Non blocking code
// blocking code -> block the flow of program -> read file sync
// non blocking code -> does not block execution -> read file async

// reading a file is one of the most perfect example of blocking code
// because file cannot read a program to read a file we have to give
// the context to the kernel then kernel goes to access the file and
// read whatever data required and execution is again given to the program
// then the operation is done kernel do not wait for us till kernel is doing 
// its work program do not execute 