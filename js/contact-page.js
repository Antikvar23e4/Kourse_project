// Создаем новый объект XMLHttpRequest
var xhttp = new XMLHttpRequest();
// Открываем файл footer.xml
xhttp.open("GET", "./contacts.xml", true);
// Когда файл загружен
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Заменяем пустой футер данными из XML файла
    document.getElementById("contact").innerHTML = this.responseText;
  }
};
// Загружаем файл
xhttp.send()