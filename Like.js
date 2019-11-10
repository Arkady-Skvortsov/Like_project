let block = document.querySelector('.heart');
        let heart = document.getElementById('h');
        let count = document.getElementById('c');
        let block2 = document.querySelector('.dislike');
        let dizlike = document.getElementById('d');
        let d = document.getElementById('l');
        let heart_item = document.querySelector('.heart-item');
        let dizlike_item = document.querySelector('.dizlike-item');
        
        block2.addEventListener('click', Plus2);
        block.addEventListener('click', Plus);
        block.addEventListener('mouseover', function() {
           heart_item.classList.toggle('anim1');
           heart_item.classList.toggle('anim2');
           heart_item.classList.toggle('anim3');
           heart_item.classList.toggle('anim4');
        });
        block2.addEventListener('mouseover', function() {
           dizlike_item.classList.toggle('d1');
           dizlike_item.classList.toggle('d2');
           dizlike_item.classList.toggle('d3');
           dizlike_item.classList.toggle('d4');
        });

        let like = 1;
        
        function Plus() {
        	count.textContent = like;
            like++;
             
            if(like) { 
               block.classList.toggle('hide');
               heart.classList.toggle('color');
            }

            if(count >= 300) {
            	alert('Image is very populary');
            	return location.reload();
            }
        }
        
        let dislike = 1;

        function Plus2() {
            d.textContent = dislike;
            dislike++;
            
            if(dislike) {
               block2.classList.toggle('b');
               dizlike.classList.toggle('c');
            }
            
            if(dislike >= 300) {
            	alert('Image is very fuck');
            	return location.reload();
            }
        }