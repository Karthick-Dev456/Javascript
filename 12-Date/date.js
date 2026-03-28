// JavaScript Date Object Examples

// 1. Creating a new Date (Current date and time)
const now = new Date();
console.log("Current Date:", now);

// 2. Getting individual components
console.log("Full Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date (Day of month):", now.getDate());
console.log("Day of week (0-6):", now.getDay());

// 3. Formatting Dates
console.log("To Date String:", now.toDateString());
console.log("To Locale Date String:", now.toLocaleDateString());