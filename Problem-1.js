function calculateMoney(ticketSale) {
    let security = 500;
    let lunch = 50 * 8;
    let ticket = 120;

    if(ticketSale >= 0 && typeof ticketSale == "number"){
        let income = ticket * ticketSale - (lunch+security);
        return income;
    }else{
        return "Invalid Number";
    }
}

