import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const products = [
    { id: 'A1', name: 'מוצר A1', imageUrl: '/images/pexels-fwstudio-33348-163993.jpg' },
    { id: 'A2', name: 'מוצר A2', imageUrl: '/images/pexels-laura-tancredi-7078687.jpg' },
    { id: 'A3', name: 'מוצר A3', imageUrl: '/images/pexels-padrinan-194096.jpg' },
    { id: 'A4', name: 'מוצר A4', imageUrl: '/images/pexels-piyapong89-5623225.jpg' },
    { id: 'A5', name: 'מוצר A5', imageUrl: '/images/pexels-steve-17988415.jpg' },
    { id: 'A6', name: 'מוצר A6', imageUrl: '/images/pexels-fwstudio-33348-163993.jpg' },
    { id: 'A7', name: 'מוצר A7', imageUrl: '/images/pexels-laura-tancredi-7078687.jpg' },
    { id: 'A8', name: 'מוצר A8', imageUrl: '/images/pexels-padrinan-194096.jpg' },
    { id: 'A9', name: 'מוצר A9', imageUrl: '/images/pexels-piyapong89-5623225.jpg' },
    { id: 'A10', name: 'מוצר A10', imageUrl: '/images/pexels-steve-17988415.jpg' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Head Line */}
      <header className="bg-gray-900 text-white py-4">
        <h1 className="text-center text-3xl font-bold">דף הבית</h1>
      </header>

      {/* View Products */}
      <main className="flex-grow container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">המוצרים שלנו</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700">תיאור קצר של המוצר.</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Contact */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">צור קשר</h2>
          <p>יהודה עמר</p>
          <p>טלפון: 058-6643661</p>
          <p>מייל: YA@gmail.com</p>
          <div className="mt-4">
            <a
              href="https://wa.me/972586643661?text=שלום,%20ראיתי%20את%20האתר%20שלך%20ורוצה%20לשוחח"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-white w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
