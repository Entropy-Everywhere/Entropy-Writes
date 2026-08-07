/* == Templates == */

fetch("/site/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
});

fetch("/site/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
});

fetch("/site/site-notice.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sitenotice").innerHTML = data;
});

fetch("/site/sidebar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sidenav").innerHTML = data;
});

