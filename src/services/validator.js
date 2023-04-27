export class ValidatorService {
    static min(inputValue, min){
        if(inputValue.length < min){
            return `Can't be less than ${min}`;
        }
    }

    static max(inputValue, max){
        if(inputValue.length > max){
            return `Can't be greater than ${max}`;
        }
    }
}