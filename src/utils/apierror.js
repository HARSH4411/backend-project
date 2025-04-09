class apierror extends Error {
  constructor(
    message = "internal server error", 
    statusCode
) {
    super(message);
    this.statusCode = statusCode;
    this.data = null
    this.message = message
    this.success = false;
    this.errors = errors

    if (stack){
        this.stack = stack

    }else{
        error.captureStackTrace(this, this.constructor)
    }


}
}
export default apierror;