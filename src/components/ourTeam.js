import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function ourTwam() {
    return (

<OwlCarousel className='owl-theme' loop margin={10} nav>
            <div className="item service-item">
          <div className="author">
            <i>
              <img
                src="assets/images/yousefWA.png"
                alt="Second Author"
              />
            </i>
          </div>
          <div className="testimonial-content">
            <h4>Yousef Abdulwahab </h4>
            <p></p>
            <span> Data Analytics Engineer </span>
          </div>
        </div>
        <div className="item service-item">
          <div className="author">
            <i>
              <img
                src="assets/images/tag1337.png"
                alt="Author Third"
              />
            </i>
          </div>
          <div className="testimonial-content">
            <h4>Yousef Sarkar</h4>
            <p></p>
            <span> Software Developer </span>
          </div>
        </div>

        <div className="item service-item">
          <div className="author">
            <i>
              <img src="assets/images/mhcto.png" alt="Author One" />
            </i>
          </div>
          <div className="testimonial-content">
            <h4>Mohammed Alrammah </h4>
            <p> </p>
            <span> CTO </span>
          </div>
        </div>

        <div className="item service-item">
          <div className="author">
            <i>
              <img src="assets/images/Kamel.png" alt="Author Third" />
            </i>
          </div>
          <div className="testimonial-content">
            <h4> Kamel Taher</h4>
            <p> </p>
            <span> Ai Engineer </span>
          </div>
        </div>

        <div className="item service-item">
          <div className="author">
            <i>
              <img src="assets/images/404.png" alt="Author Third" />
            </i>
          </div>
          <div className="testimonial-content">
            <h4> Abed Altalhi </h4>
            <p></p>
            <span> Cyber Security Engineer </span>
          </div>
        </div>
        </OwlCarousel>

      );
}

export default ourTwam;