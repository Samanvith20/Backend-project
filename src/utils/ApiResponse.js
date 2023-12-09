class ApiResponse{
    constructor(
        status, data,message="success",errors
    ){
        this.status=status;
        this.data=data;
        this.message=message;
        this.errors=errors;
    }
}
export default ApiResponse;
// ApiResponse:

//Role: Helps in standardizing the format of responses sent by your API.