const normalizeDigits = value => {
    if(value.toString().length < 2){
      return '0' + value;
    }else if(value.toString().length < 1 || value.toString() == '0' || Number(value) == 0){
        return "00";
    }
    return value;
}

export default normalizeDigits;