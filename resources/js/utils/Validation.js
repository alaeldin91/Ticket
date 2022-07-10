export default class  Validations{
    constructor(){
        this.message= {}

    }
    getMessage(field){
        if(this.message[field]){
            return this.message[field][0];
        }
        }
        setMessage(message){
            this.message=message

        }
        empty(){
            this.message
        }


}