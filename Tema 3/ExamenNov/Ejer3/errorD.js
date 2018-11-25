{
    function MyError(message) {
        this.name = 'MyError';
        this.message = message || 'Por defecto mensaje';
        this.stack = (new Error()).stack;
    }
    MyError.prototype = Object.create(Error.prototype);
    MyError.prototype.constructor = MyError;

    try {
        throw new MyError();
    } catch (e) {
        console.log(e.name);     // 'MyError'
        console.log(e.message);  // 'Default Message'
    }

    try {
        throw new MyError('Nuevo mensajeeeee');
    } catch (e) {
        console.log(e.name);     // 'MyError'
        console.log(e.message);  // 'custom message'
    }

    document.getElementById("refAtras").addEventListener("click", atras);
    
    function atras(event) {
        event.preventDefault();
        history.back();
    }
}