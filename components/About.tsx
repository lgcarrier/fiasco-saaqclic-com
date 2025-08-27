
import React from 'react';

const About: React.FC = () => {
  return (
    <footer id="about" className="text-center py-12 mt-12 border-t border-gray-300">
      <h2 className="text-3xl font-bold text-black mb-4">À propos de ce chef-d'œuvre</h2>
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Cette galerie est un hommage satirique au lancement de la plateforme SAAQclic, un événement qui restera à jamais gravé dans le coeur et les journaux d'erreurs des Québécois. Chaque image est un témoignage de l'expérience collective de frustration numérique, des longs temps d'attente et de la question universelle : « As-tu essayé de le fermer pis de le rouvrir? ».
      </p>
      <div id="contact" className="mt-8">
        <p className="text-gray-600">
          Pour les plaintes, compliments ou rapports de bogues concernant ce site (qui fonctionne probablement mieux), contactez-nous dans vos rêves.
        </p>
        <p className="text-xs text-gray-500 mt-4">
          Toutes les images sont à des fins satiriques seulement. S'il vous plaît, ne nous poursuivez pas. On est probablement encore en train d'attendre dans la file d'attente virtuelle.
        </p>
      </div>
        </footer>
  );
};

export default About;
