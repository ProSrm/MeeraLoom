import { Link } from "react-router-dom";
const Home = () => (
  <section className="text-center py-20 bg-gray-100">
    <h1 className="text-4xl font-bold">Welcome to Our IT Solutions</h1>
    <p className="mt-4 text-gray-600">
      Providing cutting-edge technology services for businesses worldwide.
    </p>
    <Link
      to="/services"
      className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg"
    >
      View Services
    </Link>
  </section>
);

export default Home;
