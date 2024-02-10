//RegEx to match a master card
// Master card is a 16 digit number beginning with 51-55 or 2221-2720 and might have hyphens(-) or spaces as separators or no separator.
const masterCard = /^((5[1-5]\d{2})|(22[2-9][1-9])|(22[3-9][0-9])|(27[0-2]0)|(2[3-6][0-9][0-9]))(-|\s)?(\d{4})(-|\s)?(\d{4})(-|\s)?(\d{4})$/;
console.log(masterCard.test("2230-1807-3345-7805"));

//Regex to match a verve card
// Verve has 16, 18 and 19, it starts with 506099-506198, 650002-650027, 507865-507964.
const verveCard = /^((506099)|(5061[0-8][0-9])|(50619[0-8])|(65000[2-9])|(65001[0-9])|(65002[0-7])|(50786[5-9])|(5078[7-9][0-9])|(5079[0-5][0-9])|(50796[0-4]))(\d{16})|(\d{18,19})$/;
console.log(verveCard.test("5061030000000000050"));

// Visa has 13 and 16 digits, it starts with 4.
const visaCard = /^4(\d{13})|(\d{16})$/;
console.log(visaCard.test("4263982640269299"));