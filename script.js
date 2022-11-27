
 
    var submit=document.getElementById('sub');
    error = document.getElementById('errout')
    submit.addEventListener("click" , showInTable );
    var row = 1;
    var ID = 1 ;
    function showInTable(e){
      e.preventDefault();
      var Nom = document.getElementById('Nom').value;
      var marque = document.getElementById('marque').value;
      var prix = document.getElementById('prix').value;
      var ProdDate = document.getElementById('ProdDate').value;
      var type = document.getElementById('prod-type').value;
      var promo = document.querySelector('input[name="promo"]:checked');
      if(Nom == "" || marque == "" || prix == "" || ProdDate == "" || type == "" || !promo){
        error.innerHTML = "Veuillez remplir tous les champs";
      }else{
        var table = document.getElementById('tb');
        var newRow = table.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        cell1.innerHTML = ID;
        cell2.innerHTML = Nom;
        cell3.innerHTML = marque;
        cell4.innerHTML = prix;
        cell5.innerHTML = ProdDate;
        cell6.innerHTML = type;
        cell7.innerHTML = promo.value;
        cell8.innerHTML = `<button onclick="edit(this)" class="button">Edit</button> <button onclick="del(this)" class="button">Delete</button>`;
        row++;
        ID++;
        error.innerHTML = "";
      }
    }

    function edit(e){
      var row = e.parentNode.parentNode.rowIndex;
      var table = document.getElementById("tb");
      var nom = table.rows[row].cells[1].innerHTML;
      var marque = table.rows[row].cells[2].innerHTML;
      var prix = table.rows[row].cells[3].innerHTML;
      var proDate = table.rows[row].cells[4].innerHTML;
      var type = table.rows[row].cells[5].innerHTML;
      var promo = table.rows[row].cells[6].innerHTML;
      document.getElementById("Nom").value = nom;
      document.getElementById("marque").value = marque;
      document.getElementById("prix").value = prix;
      document.getElementById("ProdDate").value = proDate;
      document.getElementById("prod-type").value = type;
      document.getElementById("Promo").value = promo;
      document.getElementById("sub").value = "Update";
      document.getElementById("sub").onclick = function(){
        table.rows[row].cells[1].innerHTML = document.getElementById("Nom").value;
        table.rows[row].cells[2].innerHTML = document.getElementById("marque").value;
        table.rows[row].cells[3].innerHTML = document.getElementById("prix").value;
        table.rows[row].cells[4].innerHTML = document.getElementById("ProdDate").value;
        table.rows[row].cells[5].innerHTML = document.getElementById("prod-type").value;
        table.rows[row].cells[6].innerHTML = document.getElementById("Promo").value;
        document.getElementById("Nom").value = "";
        document.getElementById("marque").value = "";
        document.getElementById("prix").value = "";
        document.getElementById("ProdDate").value = "";
        document.getElementById("prod-type").value = "";
        document.getElementById("Promo").value = "";
        document.getElementById("sub").value = "Submit";
        document.getElementById("sub").onclick = showInTable;
      }
    }
    function del(e){
      row++;
      ID++;
      var row = e.parentNode.parentNode.rowIndex;
      var table = document.getElementById("tb");
      table.deleteRow(row);
      
    }
    
       // function functionOne(event){
    //   event.preventDefault();
    //   var nom = document.getElementById("Nom").value;
    //   var marque = document.getElementById("marque").value;
    //   var prix = document.getElementById("prix").value;
    //   var proDate = document.getElementById("ProdDate").value;
    //   var type = document.getElementById("prod-type").value;
    //   var promo = document.getElementById("Promo");
    

    //   promo.checked ? promo = "Oui" : promo = "Non";

    //   localStorage.setItem('name', nom);
    //   localStorage.setItem('promo', promo );
    //   localStorage.setItem('marque' ,marque );
    //   localStorage.setItem('prix',prix);
    //   localStorage.setItem('type',type);
    //   localStorage.setItem('ProDate', proDate);
     
    // }