
const cookieValueContainer = document.getElementById('cookieValue');
const clearCookieButton = document.getElementById('clearCookie');
const setCookieButton = document.getElementById('setCookie');


const cookieName = 'someSessionCookie';

function displayCookie() {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(cookieName + '='));
    cookieValueContainer.textContent = cookieValue ? cookieValue.split('=')[1] : 'No cookie set';
}
displayCookie();

clearCookieButton.addEventListener('click', () => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; secure; SameSite=Strict`;
  displayCookie();
});

setCookieButton.addEventListener('click', () => {
    const cookieValue = Math.random().toString(36).substring(2, 15);
    document.cookie = `${cookieName}=${cookieValue}; path=/; secure; SameSite=Strict`;
    displayCookie();
});
