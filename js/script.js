function onlyNumberKey(evt) {
              
            // Only ASCII character in that range allowed
            var ASCIICode = (evt.which) ? evt.which : evt.keyCode
            if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
                return false;
            return true;
        }
		
function potrdi(){
Swal.fire({
  icon: 'success',
  title: 'Success!',
  text: 'You have submited the form!',
  showConfirmButton: false,
  timer: 1300
}).then((result) => {
    window.location.reload(true);
  });
}

document.getElementById("wrapper").addEventListener("submit", (e) => {
  e.preventDefault();
  potrdi();
  
});