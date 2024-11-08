import './style.css'
import { Header } from './components/Header'
import { Services } from './components/Services'
import { FavoriteDishes } from './components/FavoriteDishes'
import { Footer } from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faPhone, faMapMarkerAlt, faClock, faLeaf, 
  faUtensils, faCalendarAlt, faBars, faEnvelope 
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons'

library.add(
  faPhone, faMapMarkerAlt, faClock, faLeaf, 
  faUtensils, faCalendarAlt, faBars, faEnvelope,
  faFacebook, faInstagram, faSnapchat
)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header}
  <main>
    <!-- Hero Section -->
    <section class="hero-section flex items-center justify-center text-center text-white">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Bienvenue au Restaurant Marrakech</h1>
        <p class="text-xl md:text-2xl mb-8">Discover the Authentic Taste of Morocco in Narbonne</p>
        <a href="#menu" class="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-secondary transition-colors duration-300">
          Découvrir Notre Menu
        </a>
      </div>
    </section>

    ${Services}
    ${FavoriteDishes}

    <!-- Contact Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Contactez-Nous</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <i class="fas fa-map-marker-alt text-primary text-2xl"></i>
                <span>7 place du forum, 11100 Narbonne</span>
              </div>
              <div class="flex items-center space-x-4">
                <i class="fas fa-phone text-primary text-2xl"></i>
                <a href="tel:+33400000000" class="hover:text-primary">+33 4 00 00 00 00</a>
              </div>
              <div class="flex items-center space-x-4">
                <i class="fas fa-envelope text-primary text-2xl"></i>
                <a href="mailto:contact@restaurantmarrakech.fr" class="hover:text-primary">contact@restaurantmarrakech.fr</a>
              </div>
              <div class="flex space-x-6 pt-4">
                <a href="https://facebook.com/restaurantmarrakech" class="social-icon">
                  <i class="fab fa-facebook text-3xl"></i>
                </a>
                <a href="https://instagram.com/restaurantmarrakech" class="social-icon">
                  <i class="fab fa-instagram text-3xl"></i>
                </a>
                <a href="https://snapchat.com/add/restmarrakech" class="social-icon">
                  <i class="fab fa-snapchat text-3xl"></i>
                </a>
              </div>
            </div>
            <div class="h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.6983612065766!2d3.0419!3d43.1839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1ac5e5c6b8e6d%3A0x5c6b8e6d!2s7%20Pl.%20du%20Forum%2C%2011100%20Narbonne!5e0!3m2!1sen!2sfr!4v1635959123456!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${Footer}

  <script>
    document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu')
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden')
      }
    })
  </script>
`