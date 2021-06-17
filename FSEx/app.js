const fs = require("fs");

// Dosya oluşturma
fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf8", async (err) => {
  if (err) console.log(err);
  console.log("Success");
});

// Veri okunuyor
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

// Veri güncelleniyor
fs.appendFile("employees.json", '{"name": "Employee 2 Name", "salary": 3000}', "utf8", (err) => {
  if (err) console.log(err);
  console.log("Data upgraded.");
});

// Dosya Siliniyor
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log('example.json dosyası silindi');
  });
