fetch('https://mira-apii.onrender.com/')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        var container = document.getElementById('MySliderContainer');
         for (let i = 0; i < json.length; i++) {
        console.log(json[i].Name)
            var content = `
            <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6" >
                    <div class="testimonial-content">
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>${json[i].Name}</h3>
                      <h4>${json[i].Job}</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="assets/img/testimonials/testimonials-1.jpg" class="img-fluid testimonial-img" alt="">
                  </div>
                </div>
              </div>`;
          console.log(content)
           var sliderentry = document.createElement('div') ;
           sliderentry.className = "swiper-slide";
           sliderentry.innerHTML=content;
           container.appendChild(sliderentry);
         }
      })
        