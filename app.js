//selectting 
 const title = document.querySelector('#title');
 const author = document.querySelector('#author');
 const year = document.querySelector('#year');
 const btn = document.querySelector('.btn');
 const bookList = document.querySelector('#book-list');

 btn.addEventListener('click',function(e){
     e.preventDefault();
    if(title.value == '' && author.value == '' && year.value == ''){
        alert("Please Enter Data On Form");
    }else{
        const newRow = document.createElement('tr');
        
        // ===== book title name =======
        const newtitle = document.createElement('th');
        newtitle.innerHTML = title.value;
        //append title on row
        newRow.appendChild(newtitle);
         //===== book author name =====
          const newauthor = document.createElement('th');
          newauthor.innerHTML = author.value;
          //append title on row
          newRow.appendChild(newauthor);
          //===== book yearname name =====
          const pYear = document.createElement('th');
          pYear.innerHTML = year.value;
          //append title on row
          newRow.appendChild(pYear);


          // newrow apppended on book-list

          bookList.appendChild(newRow);
    }
 })