class DateHelper{
  constructor(){
    throw new Error("DateHelper is a static class");
  }
  static textToDate(text){
    if(text){
      if ((/\d{4}-\d{2}-\d{2}/).test(text)){
        let sA = text.split("-").map((v, i) => (i == 1) ? parseInt(v-1) : parseInt(v));
        return new Date(...sA);
      }else{
        throw new Error("Invalid date format. It should be yyyy-mm-dd");
      }
    }else{
      return new Date();
    }
  }
  static dateToText(date){
    let realMonth = date.getMonth() + 1;
    let day = (date.getDate() < 10) ? ("0"+date.getDate()) : date.getDate();
    let month = (realMonth < 10) ? ("0"+realMonth) : realMonth;
    return `${day}/${month}/${date.getFullYear()}`;
  }
}