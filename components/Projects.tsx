"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Video } from "lucide-react";

/**
 * Projects component
 *
 * demoVideo in each project can be either:
 *  - a relative or absolute MP4 path: "/videos/demo1.mp4" or "https://.../demo.mp4"
 *  - a YouTube link: "https://www.youtube.com/watch?v=VIDEO_ID" or "https://youtu.be/VIDEO_ID"
 *
 * The component will auto-detect and render an <iframe> for YouTube, or <video> for MP4.
 */

const projects = [
   {
  title: "Emotion Detection using EEG",
  description: "A deep learning based system that classifies human emotional states from EEG signals using signal preprocessing, feature extraction, and trial-level prediction.",
  tags: [ "PyTorch", "EEG", "Deep Learning"],
  image: "/eeg.png",
  github: "https://github.com/Mathuja991/EmotionDetection_EEG", // add your repo link
  demo: "#",   // optional demo link
  demoVideo: "", // add if you have one
},
  {
  title: "ECG Heart Disease Classification",
  description: "A deep learning based system that detects and classifies heart diseases from ECG signals using signal preprocessing, feature extraction, and patient-level prediction.",
  tags: ["PyTorch", "ECG", "Deep Learning"],
  image: "/ecg.png",
  github: "https://github.com/Mathuja991/ECG-Signal-Classification",
  demo: "#",
  demoVideo: "",
},

  {
    title: "Hall Booking System",
    description:
      "A fully functional online booking system built with React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js"],
    image: "/proj1.png",
    github: "https://github.com/Mathuja991/HotelBooking/tree/demo",
    demo: "https://hotel-booking-g56n.vercel.app/",
    demoVideo: "/video/hallbook.mp4", // <-- replace
  },
  {
  title: "Mathavam Software Solution",
  description:
    "A full-stack web application developed for autism child care management, featuring child profile tracking, therapy progress monitoring, daily activity management, and secure role-based access.",
  tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind"],
  image: "/mat.png",
  github: "https://github.com/tharakasaranga/MathavamSystem", // replace with your actual repo link
  demo: "#",  // add live link if available
  demoVideo: "", 
},

  {
    title: "Industrial Diary Management System",
    description:
      "A team-based web application developed using PHP and MySQL to manage industrial training diaries. The system allows students to submit weekly diaries, mentors and staff to review and provide feedback, and admins to manage users with role-based access and an improved UI.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "HTML", "CSS", "Team Project"],
    image: "/itr.png", // screenshot of dashboard or main UI
    github: "https://lnkd.in/gfXU-bnd",
    demo: "https://youtu.be/95HJ-dp0v-o", // no deployed live URL
    demoVideo: "https://youtu.be/95HJ-dp0v-o", // local demo video in public/videos/
  },


];

const isYouTubeUrl = (url: string) => {
  if (!url) return false;
  return /youtube\.com|youtu\.be/.test(url);
};

const extractYouTubeEmbed = (url: string) => {
  // handle youtube.com/watch?v= and youtu.be/ links
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1); // id
    }
    if (u.searchParams.get("v")) {
      return u.searchParams.get("v");
    }
    // fallback: try last part
    return u.pathname.split("/").pop();
  } catch {
    return null;
  }
};

const Projects = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(""); // url or empty
  const [isCurrentYouTube, setIsCurrentYouTube] = useState(false);

  const openVideo = (videoUrl: string) => {
    if (!videoUrl) return;
    setCurrentVideo(videoUrl);
    setIsCurrentYouTube(isYouTubeUrl(videoUrl));
    setIsVideoOpen(true);
  };

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
    setCurrentVideo("");
    setIsCurrentYouTube(false);
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVideoOpen) {
        closeVideo();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVideoOpen, closeVideo]);

  // disable scroll when modal open
  useEffect(() => {
    if (isVideoOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isVideoOpen]);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one was a unique
            challenge that helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-dark-lighter rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all group"
            >
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="z-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-900">
                    {project.title} Image
                  </div>
                )}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>

                  {/* If demoVideo exists, show button that opens modal */}
                  {project.demoVideo ? (
                    <button
                      onClick={() => openVideo(project.demoVideo)}
                      className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors"
                      title="Watch Demo"
                      aria-label={`Watch demo video for ${project.title}`}
                    >
                      <Video size={20} />
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeVideo}
            aria-hidden="true"
          />

          {/* modal content */}
          <motion.div
            className="relative z-10 max-w-4xl w-full mx-4 sm:mx-6"
            initial={{ scale: 0.95, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#0f1724] rounded-xl p-4 sm:p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold">Demo Video</h4>
                <button
                  onClick={closeVideo}
                  aria-label="Close video"
                  className="text-gray-300 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4">
                {isCurrentYouTube ? (
                  (() => {
                    const id = extractYouTubeEmbed(currentVideo);
                    const embed = id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
                    return embed ? (
                      <div className="aspect-video w-full">
                        <iframe
                          src={embed}
                          title="YouTube demo"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-md border-0"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-400">Couldn&apos;t load YouTube video.</p>
                    );
                  })()
                ) : (
                  <div className="w-full">
                    <video
                      controls
                      autoPlay
                      className="w-full h-auto rounded-md"
                    // For cross-browser, browsers may block autoplay with sound; we still try autoplay.
                    >
                      <source src={currentVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
