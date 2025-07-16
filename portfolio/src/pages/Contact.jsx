// import { useState } from "react";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (data.success) {
//         toast.success("✅ Message sent!");
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         toast.error("❌ " + data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("❌ Failed to send. Try again later.");
//     }

//     setLoading(false);
//   };

//   return (
//     <motion.section
//       className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-blue-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <Toaster position="top-right" />
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
//         <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">
//           📩 Contact Me
//         </h2>
//         <p className="text-center text-gray-600 mb-8">
//           Fill out the form and I’ll get back to you shortly.
//         </p>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={form.message}
//             onChange={handleChange}
//             rows="5"
//             required
//             className="p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <motion.button
//             type="submit"
//             whileTap={{ scale: 0.95 }}
//             disabled={loading}
//             className={`px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </motion.button>
//         </form>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", honey: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.honey !== "") {
      toast.error("Spam detected.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://your-backend-url.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "", honey: "" });
      } else {
        toast.error(data.message || "❌ Failed to send message.");
      }
    } catch (err) {
      toast.error("❌ Server error. Try again later.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Toaster position="top-right" />

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">📩 Contact Me</h2>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form and I’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Honeypot field to prevent spam */}
          <input
            type="text"
            name="honey"
            value={form.honey}
            onChange={handleChange}
            style={{ display: "none" }}
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            className="p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className={`px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
