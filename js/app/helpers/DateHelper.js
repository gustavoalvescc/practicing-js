class DateHelper{
  constructor(){
    throw new Error("DateHelper is a static class");
  }
  static textToDate(text){
    if(text){
      if ((/\d{4}-\d{2}-\d{2}/).test(text)){
        let sA = text.split("-").map((v, i) => (i == 1) ? v-1 : v);
        return new Date(...sA);
      }else{
        throw new Error("Invalid date format. It should be yyyy-mm-dd");
      }
    }else{
      return new Date();
    }
  }
  static dateToText(date){
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }
}