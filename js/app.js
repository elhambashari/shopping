const searchInput = document.getElementById('search-input')
const products = document.querySelectorAll('.product-item')

const searchHandler = (event) =>{
  const	searchvalue = event.target.value.toLowerCase().trim();
  products.forEach(product =>{
	const productName = product.children[1].innerText.toLowerCase();
	if(productName.includes(searchvalue)){
		product.style.display ='block';
	}
	else{
		product.style.display ='none';
	}
})

}


searchInput.addEventListener('keyup' ,searchHandler);


	
