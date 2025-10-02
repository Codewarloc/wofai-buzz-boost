"use client";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "5 Advertising Trends for 2025",
      desc: "Stay ahead with these powerful ad trends shaping the industry.",
      date: "Sept 2025"
    },
    {
      title: "Why Video Ads Dominate Social Media",
      desc: "Video marketing is the future — here’s why.",
      date: "Aug 2025"
    },
    {
      title: "The Power of Influencer Marketing",
      desc: "How influencers can drive massive brand awareness.",
      date: "July 2025"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-[#12294a] to-[#0a1a2f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-orange-400 text-center mb-12"
        >
          Blog & Insights
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#112037] p-6 rounded-2xl shadow-lg border border-orange-400/20 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-orange-400">{post.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{post.date}</p>
              <p className="text-gray-300 mt-4">{post.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
