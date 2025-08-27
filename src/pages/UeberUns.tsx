import { CheckCircle, Users, Shield, Calculator } from "lucide-react";

const UeberUns = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Über SwissPats
          </h1>
        </div>
      </section>

      {/* Firmenbeschreibung */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              SwissPats ist eine Premium-Beratungsfirma für die berufliche Integration in der Schweiz.
            </p>
            <p className="text-lg text-gray-700">
              Unsere Mission ist es, deutschen Professionals den Einstieg in die Schweizer Arbeitswelt zu erleichtern.
            </p>
          </div>
        </div>
      </section>

      {/* Dienstleistungen */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Unsere Dienstleistungen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Karriere- & Gehaltsberatung</h3>
              <p className="text-gray-600">
                Professionelle Beratung für Ihre Karriereplanung und Gehaltsverhandlungen in der Schweiz.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Relocation & Visa-Service</h3>
              <p className="text-gray-600">
                Umfassende Unterstützung bei Ihrem Umzug in die Schweiz und allen Visa-Angelegenheiten.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Versicherungs- & Steueroptimierung</h3>
              <p className="text-gray-600">
                Optimierung Ihrer Versicherungen und Steuern für maximale finanzielle Effizienz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Werte & Vertrauen */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Unsere Werte</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4" />
                <span className="text-lg text-gray-700">Transparenz</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4" />
                <span className="text-lg text-gray-700">Schweizer Präzision</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4" />
                <span className="text-lg text-gray-700">Individuelle Betreuung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Impressum */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Impressum</h2>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold">SwissPats GmbH</p>
              <p>Musterstraße 12</p>
              <p>8000 Zürich, Schweiz</p>
              <p className="mt-4">
                E-Mail: <a href="mailto:kontakt@swisspats.ch" className="text-blue-600 hover:underline">kontakt@swisspats.ch</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UeberUns;