if (!confirm(`Чи хочете Ви почитати новини?`)) {
  setTimeout(() => {
    window.location.href = "https://www.ukr.net/";
  }, 20000);
}
else window.location.href = "https://www.ukr.net/";


