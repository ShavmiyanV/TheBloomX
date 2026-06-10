// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="bg-[#B7CBCE] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold">
              BloomX Clinic
            </h3>

            <p className="mt-4 text-gray-700">
              Professional healthcare services with
              experienced doctors and easy appointment
              booking.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Doctors</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <p>+94 77 123 4567</p>
            <p>info@bloomx.com</p>
            <p>Colombo, Sri Lanka</p>
          </div>

        </div>

      </div>

      <div className="border-t text-center py-4">
        © 2026 BloomX Clinic. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;