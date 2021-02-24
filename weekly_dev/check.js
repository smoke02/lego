window.addEventListener('load', 
  function() { 
    var fund = localStorage.getItem("fund");
    var amount = localStorage.getItem("amount");
    var table = document.getElementById("results");
    var math = fund - amount;
    var row = table.insertRow();
    var d = new Date();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = fund;
    cell2.innerHTML = amount;
    cell3.innerHTML = math;
    cell4.innerHTML = d;
    /* testuser  */
  });