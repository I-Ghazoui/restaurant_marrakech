export const Footer = `
  <footer class="bg-secondary text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <img src="/logo-white.svg" alt="Restaurant Marrakech" class="h-12 w-auto mb-4">
          <p class="text-gray-300">Une expérience culinaire authentique marocaine au cœur de Narbonne.</p>
        </div>
        <div>
          <h3 class="text-xl font-display font-bold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><a href="/" class="hover:text-primary transition-colors">Accueil</a></li>
            <li><a href="/menu" class="hover:text-primary transition-colors">Menu</a></li>
            <li><a href="/about" class="hover:text-primary transition-colors">À Propos</a></li>
            <li><a href="/contact" class="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-display font-bold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li><i class="fas fa-map-marker-alt mr-2"></i>7 place du forum, 11100 Narbonne</li>
            <li><i class="fas fa-phone mr-2"></i>+33 4 00 00 00 00</li>
            <li><i class="fas fa-envelope mr-2"></i>contact@restaurantmarrakech.fr</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-display font-bold mb-4">Suivez-nous</h3>
          <div class="flex space-x-4">
            <a href="https://facebook.com/restaurantmarrakech" class="text-2xl hover:text-primary transition-colors">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com/restaurantmarrakech" class="text-2xl hover:text-primary transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://snapchat.com/add/restmarrakech" class="text-2xl hover:text-primary transition-colors">
              <i class="fab fa-snapchat"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; ${new Date().getFullYear()} Restaurant Marrakech. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
`