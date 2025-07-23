import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("");
    try {
      const resp = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await resp.json();
      setResult(data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setResult("Submission failed, try again later.");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome to Vilas Javdekar Developers</h1>
        <p>Find Your Perfect Home in Pune</p>
      </header>

      <section className="why">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Trusted Developer: 40 years' experience in Pune.</li>
          <li>Quality &amp; Innovation: Modern, sustainable designs.</li>
          <li>RERA Registered: Transparency &amp; peace of mind.</li>
          <li>Timely Delivery: Projects delivered as promised.</li>
        </ul>
      </section>

      <section className="amenities">
        <h2>Lifestyle Amenities</h2>
        <ul>
          <li>Fitness Centers &amp; Gymnasiums</li>
          <li>Swimming Pools</li>
          <li>Landscaped Gardens</li>
          <li>Children’s Play Areas</li>
          <li>Sports Courts</li>
          <li>Senior Citizen Sit-outs</li>
          <li>Multipurpose Halls</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Project Locations</h2>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Notable Projects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wakad</td>
              <td>Yashwin Supernova, YashONE Eternitee</td>
            </tr>
            <tr>
              <td>Kharadi</td>
              <td>VJ Sure Kharadi, Yashwin Enchante</td>
            </tr>
            <tr>
              <td>Hinjewadi</td>
              <td>Yashwin Hinjewadi, Yashwin Urbo Centro</td>
            </tr>
            <tr>
              <td>Baner</td>
              <td>VJ Happiness Street, Palladio Balewadi</td>
            </tr>
            <tr>
              <td>Wagholi</td>
              <td>VJ Wagholi New Launch</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="eco">
        <h2>Eco-Friendly Features</h2>
        <ul>
          <li>Rainwater Harvesting</li>
          <li>Solar Power Systems</li>
          <li>Waste Management</li>
          <li>Green Building Certifications</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
          /><br />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
          /><br />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
          /><br />
          <button type="submit">Send</button>
        </form>
        <div className="result">{result}</div>
      </section>

      <footer>
        <small>
          Images are for representation only. Verify all information with the developer. &copy; {new Date().getFullYear()}
        </small>
      </footer>
    </div>
  );
}

export default App;
