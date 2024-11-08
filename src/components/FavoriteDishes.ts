export const FavoriteDishes = `
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Nos Plats Préférés</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="favorite-dish-card group">
          <div class="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&w=800&q=80" alt="Couscous Royal" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p class="text-white">Notre couscous signature aux légumes frais, agneau tendre, merguez épicées et poulet mariné</p>
            </div>
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-bold mb-2">Couscous Royal</h3>
            <div class="flex justify-between items-center">
              <p class="text-primary font-semibold text-xl">22€</p>
              <button class="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300">Commander</button>
            </div>
          </div>
        </div>
        <div class="favorite-dish-card group">
          <div class="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80" alt="Tajine d'Agneau" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p class="text-white">Tajine d'agneau aux pruneaux et amandes, mijoté pendant des heures avec nos épices maison</p>
            </div>
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-bold mb-2">Tajine d'Agneau</h3>
            <div class="flex justify-between items-center">
              <p class="text-primary font-semibold text-xl">24€</p>
              <button class="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300">Commander</button>
            </div>
          </div>
        </div>
        <div class="favorite-dish-card group">
          <div class="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?auto=format&fit=crop&w=800&q=80" alt="Pastilla au Poulet" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p class="text-white">Pastilla croustillante au poulet et aux amandes, parfumée à la cannelle et au sucre glace</p>
            </div>
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-bold mb-2">Pastilla au Poulet</h3>
            <div class="flex justify-between items-center">
              <p class="text-primary font-semibold text-xl">20€</p>
              <button class="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300">Commander</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`