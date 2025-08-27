import React from 'react';

const SaaqLogo: React.FC = () => (
  <img src="images/logo.png" alt="Société de l'assurance automobile du Québec" className="w-48" />
);

const Header: React.FC = () => {
  return (
    <header id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <SaaqLogo />
        </div>
        <div className="w-full md:w-2/4 text-center mb-4 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black uppercase tracking-wider">
            Le Fiasco SAAQclic
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            Chronique d'une catastrophe numérique annoncée.
          </p>
        </div>
        <nav className="w-full md:w-1/4 flex justify-center md:justify-end space-x-6 text-black font-bold">
          <a href="#home" className="hover:underline">ACCUEIL</a>
          <a href="#gallery" className="hover:underline">GALERIE D'HORREUR</a>
          <a href="#about" className="hover:underline">À PROPOS</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
