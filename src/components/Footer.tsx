import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Light background */}
      <div className="bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column - Logo & Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SP</span>
                </div>
                <span className="text-xl font-bold text-gray-900">SwissPats</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                SwissPats unterstützt deutsche Fachkräfte und Expats beim erfolgreichen Start in der Schweiz. 
                Von Potenzialanalysen bis hin zu persönlichen Beratungen – wir helfen, Chancen zu erkennen 
                und den Weg in die Schweiz klar zu planen.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-600"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-600"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-600"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Middle Column - Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Potenzialanalyse
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Persönliche Beratung
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Standort- & Karriereberatung
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Relocation Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Expat Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary" />
                  <a href="tel:+41791234567" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    +41 79 123 45 67
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary" />
                  <a href="mailto:info@swisspats.de" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    info@swisspats.de
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-gray-600 text-sm">Zürich, Schweiz</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-gray-500 text-sm">
                © 2024 SwissPats. Alle Rechte vorbehalten.
              </p>
              
              {/* Legal Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
                  Datenschutz
                </a>
                <span className="text-gray-300">|</span>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
                  Impressum
                </a>
                <span className="text-gray-300">|</span>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
                  Cookie-Richtlinie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;