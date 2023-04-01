fetch('https://mira-apii.onrender.com/')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        var container = document.getElementById('MySliderContainer');
         for (let i = 0; i < json.length; i++) {
            var content = `
            <div class="testimonial-content">
            <p>
              <i class="bi bi-quote quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i class="bi bi-quote quote-icon-right"></i>
            </p>
            <h3>${jason[i]}</h3>
            <h4>Ceo &amp; Founder</h4>
            <div class="stars">
              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
          </div>`;
           var sliderentry = document.createElement('div') ;
           sliderentry.className = "swiper-slide";
           sliderentry.innerHTML=content;
           container.appendChild(sliderentry);
         }
      })
        