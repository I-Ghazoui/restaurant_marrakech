export const Header = `
  <header>
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="/" class="flex items-center space-x-2">
        <img src="/logo.svg" alt="Restaurant Marrakech" class="h-12 w-auto">
        <span class="font-display text-2xl font-bold text-secondary">Restaurant Marrakech</span>
      </a>
      <div class="hidden md:flex items-center space-x-8">
        <a href="/" class="nav-link">Accueil</a>
        <a href="#menu" class="nav-link">Menu</a>
        <a href="#about" class="nav-link">À Propos</a>
        <a href="#contact" class="nav-link">Contact</a>
        <a href="#order" class="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300">Commander</a>
      </div>
      <button class="md:hidden text-secondary" id="mobile-menu-button">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </nav>
    <div class="md:hidden hidden" id="mobile-menu">
      <div class="px-4 py-3 space-y-4">
        <a href="/" class="block nav-link">Accueil</a>
        <a href="#menu" class="block nav-link">Menu</a>
        <a href="#about" class="block nav-link">À Propos</a>
        <a href="#contact" class="block nav-link">Contact</a>
        <a href="#order" class="block bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300 text-center">Commander</a>
      </div>
    </div>
  </header>
`