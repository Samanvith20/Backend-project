class ApiError extends Error
  // By extending Error, this class inherits properties and behaviors of the standard error object.
    {
        constructor(statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
        )
        {
       super(message);
       // Calls the constructor of the parent Error class and sets the error message
       this.statusCode = statusCode;
       this.message = message;
       this.errors = errors;
       this.data=null;
    }
}
 export default ApiError;
 //  constructor is used to initialize object properties and perform setup tasks. 
 //Role: Represents and handles errors in a standardized way.