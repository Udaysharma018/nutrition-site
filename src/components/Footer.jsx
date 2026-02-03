export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-white text-xl mb-4">Mansi Sahai</h3>
          <p className="text-sm">
            Empowering individuals and families through personalized nutrition
            guidance and compassionate lactation support.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Weight Management</li>
            <li>Prenatal Nutrition</li>
            <li>Lactation Support</li>
            <li>Lifestyle Nutrition</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-16">
        © {new Date().getFullYear()} Mansi Sahai. All rights reserved.
      </div>
    </footer>
  );
}
