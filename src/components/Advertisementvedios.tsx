"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react"; // play icon
import videos from "@/data/advertisementvedios"; // Import JSON file

const AdvertisementVideos = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section
      id="advertisement"
      className="py-20 bg-gradient-to-b from-[#0a1a2f] to-[#12294a] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-orange-400"
        >
          Advertisement Videos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Explore some of our impactful advertising campaigns designed to
          captivate audiences and deliver results.
        </motion.p>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#112037] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all border border-orange-400/20"
            >
              {/* Video Section */}
              <div className="relative w-full h-56 group">
                {video.url.endsWith(".mp4") ? (
                  <>
                    {playingIndex === index ? (
                      <video
                        controls
                        autoPlay
                        className="w-full h-full object-cover rounded-t-2xl"
                      >
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div
                        className="w-full h-full bg-[#0a1a2f] flex items-center justify-center cursor-pointer relative"
                        onClick={() => setPlayingIndex(index)}
                      >
                        {/* Optional: use a thumbnail if your JSON has one */}
                        {video.thumbnail ? (
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a1a2f] to-[#12294a]">
                            <span className="text-gray-400">Preview</span>
                          </div>
                        )}

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-orange-500 p-4 rounded-full shadow-lg transform group-hover:scale-110 transition">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-sm">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisementVideos;
