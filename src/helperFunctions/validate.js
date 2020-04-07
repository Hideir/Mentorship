function validate(fieldValue) {

    // CHeck if email
    if (/\@/.test(fieldValue)) {
        // Validate email address
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue)) {
            return (true)
        }
        console.log("You have entered an invalid email address!");
        return (false)
    } else {
        // Validate username
        var stripped = fieldValue.replace(/[\(\)\.\-\ ]/g, '');
    }
}
module.exports ={
    validate,
}