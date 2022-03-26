export const numberWithCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatDate = dateValue => new Date(dateValue).toLocaleDateString('en-US')