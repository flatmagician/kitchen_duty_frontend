const axios = require('axios')
const moment = require('moment')

// const backend_url = "http://127.0.0.1:5000"
const backend_url = "https://kitchen-duty-backend.herokuapp.com"

export async function get_date(query) {
    return axios.post(`${backend_url}/get_date`, query)
}

export async function insert_date(query) {
    return axios.post(`${backend_url}/insert_date`, query)
}

export async function remove_date(query) {
    return axios.post(`${backend_url}/remove_date`, query)
}

export function moment_to_query(moment) {
    const date = moment.format('YYYY MM DD').split(" ")
    console.log(date)
    return {
        year: Number(date[0]),
        month: Number(date[1]),
        day: Number(date[2])
    }
}

export function get_days_in_month(year, month) {
    console.log("getting days in month" + month)
    let arrDays = [];
    let day = 1
    while (day <= 31) {
        let current = moment(`${year}-${month}`).date(day);
        const query = moment_to_query(current)
        let result = get_date(query)
        arrDays.push(result);
        day++;
    }

    return arrDays;
}


export function current_date() {
    return moment()
}