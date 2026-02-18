import { Section } from './Section'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import laptopRouter from '../../images/laptopRouter.webp'
import bikeshare from '../../images/bikeshare_riding.webp'
import weatherStation from '../../images/WeatherStation.webp'
import Dog_Breed_Identification_Kaggle from '../../images/Dog_Breed_Identification_Kaggle.webp'
import HumanHeart from '../../images/XrayHumanHeart.webp' 

const projects = [
    {
        title: "Wireless Homelab",
        desc: "A Wireless AI Homelab Server",
        tech: ["Proxmox", "Docker", "ssh", "n8n", "Automation"],
        status: "PROTOTYPE"
    },
    {
        title: "BikeShare Case Study",
        desc: "Customers vs Subscribers",
        tech: ["tableau", "SQL", "R"],
        status: "ONLINE"
    },
    {
        title: "Weather Station Analysis",
        desc: "Data Processing Algorithm",
        tech: ["ggplot", "Tidyverse", "Jupyter-NB", "R"],
        status: "OFFLINE"
    },
    {
        title: "End-To-End Dog Vision",
        desc: "Dog breed Identifier",
        tech: ["Google Collab", "TensorFlow", "TF-Hub", "Pandas","Keras", "Kaggle"],
        status: "ONLINE"
    },
    {
        title: "❤️Heart Disease Prediction",
        desc: "Heart Disease Prediction using Machine Learning",
        tech: [ "Scikit-learn", "Pandas","Numpy", "Seaborn", "Kaggle"],
        status: "ONLINE"
    }
]

const blogPosts = [
    {
        title: "Buidling Homelab with no Ethernet",
        date: "2026.01.12",
        link: "https://medium.com/@Datadryft/i-built-an-ai-homelab-here-is-how-it-went-14c502a6d951"
    },
    {
        title: "How to Write a Compelling Case Study: A Step-by-Step Guide (Data Analyst Edition)",
        date: "2024.10.13",
        link: "https://medium.com/@Datadryft/how-to-write-a-compelling-case-study-a-step-by-step-guide-data-analyst-edition-5858fcebe840"
    },
    {
        title: "Front-End Web Development: A Beginner’s Guide to Creating Beautiful and Interactive Websites",
        date: "2023.02.14",
        link: "https://medium.com/@Datadryft/front-end-web-development-a-beginners-guide-to-creating-beautiful-and-interactive-websites-253e1ccd2d49"
    }
]

const socials = [
    { name: "LINKEDIN", url: "https://linkedin.com/in/gabriel-zaldivar-a72146212" },
    { name: "GITHUB", url: "https://github.com/Datadryft" },
    { name: "X / TWITTER", url: "https://X.com/Datadryft" },
    { name: "YOUTUBE", url: "https://youtube.com/@Datadryft" },
    { name: "INSTAGRAM", url: "https://instagram.com/Datadryft" }
]

const projectDetails = {
    "Wireless Homelab": {
        longDesc: "Built an AI homelab and configured a laptop as a temporary router to provide internet access to the server, enabling remote updates, package installs, and automation workflows when no dedicated router was available.",
        image: laptopRouter
    },
    "BikeShare Case Study": {
        longDesc: "Analyzed Bike Share usage to compare one-time customers and monthly subscribers, focusing on demographics, usage frequency, peak times, and average ride length to support targeted marketing decisions.",
        image: bikeshare
    },
    "Weather Station Analysis": {
        longDesc: "Interned at the University of Florida’s Tropical Research and Education Center, working with weather stations for hemp field trials. Maintained and repaired stations, managed data quality, and analyzed multi-site weather data using R. Built algorithms to separate irrigation, rainfall, and fertilization events, and produced visualizations using ggplot2 and tidyverse.",
        image: weatherStation
    },
     "End-To-End Dog Vision": {
        longDesc: "This comprehensive notebook demonstrates the development of an advanced end-to-end multi-class image classification system using cutting-edge deep learning technologies, specifically leveraging TensorFlow 2.0 and TensorFlow Hub. The project tackles the fascinating challenge of automated dog breed identification through computer vision and transfer learning techniques.",
        image: Dog_Breed_Identification_Kaggle
    },
    "❤️Heart Disease Classification": {
        longDesc: "An end-to-end machine learning classification project that predicts whether a patient has heart disease based on clinical attributes. Explores and compares multiple models including Logistic Regression, K-Nearest Neighbors, and Random Forest.",
        image: HumanHeart
    }
}

// Animated container for the grid
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

// Modal animation variants
const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { opacity: 0, scale: 0.8 }
}

export const Overlay = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden pointer-events-auto">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 text-white mix-blend-difference">
                <div className="font-orbitron font-bold text-xl tracking-widest">
                    DATA<span className="text-brand-orange">DRYFT</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 font-mono text-sm">
                    <li onClick={() => scrollToSection('about')} className="hover:text-brand-orange cursor-pointer transition-colors">[ ABOUT ]</li>
                    <li onClick={() => scrollToSection('projects')} className="hover:text-brand-orange cursor-pointer transition-colors">[ PROJECTS ]</li>
                    <li onClick={() => scrollToSection('contact')} className="hover:text-brand-orange cursor-pointer transition-colors">[ CONTACT ]</li>
                </ul>

                {/* Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-20 left-0 w-full bg-black/95 backdrop-blur-md z-40 md:hidden border-b border-brand-orange/30"
                    >
                        <ul className="flex flex-col items-center gap-6 py-8 font-mono text-lg">
                            <li onClick={() => scrollToSection('about')} className="hover:text-brand-orange cursor-pointer transition-colors">[ ABOUT ]</li>
                            <li onClick={() => scrollToSection('projects')} className="hover:text-brand-orange cursor-pointer transition-colors">[ PROJECTS ]</li>
                            <li onClick={() => scrollToSection('contact')} className="hover:text-brand-orange cursor-pointer transition-colors">[ CONTACT ]</li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <Section className="items-center text-center">
                <h1 className="text-4xl md:text-9xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-4 tracking-tighter filter drop-shadow-[0_0_10px_rgba(255,138,0,0.5)]">
                    DATA DRYFT
                </h1>
                <div className="flex flex-col items-center gap-2 font-mono text-brand-orange text-sm md:text-base tracking-widest">
                    <p>SYSTEM STATUS: ONLINE</p>
                    <p>NODES: CONNECTED</p>
                </div>
            </Section>

            {/* About Section */}
            <Section id="about" className="items-center justify-center">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-lg relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50 transform -translate-x-full group-hover:animate-scanline" />

                    <h2 className="text-2xl md:text-4xl font-orbitron mb-6 text-white">IDENTITY_LOG</h2>
                    <p className="font-mono text-gray-300 leading-relaxed mb-6">
                        Specialized in <span className="text-brand-orange">Data Visualization</span> and <span className="text-neon-cyan">Neural Architectures</span>.
                        Building the bridge between raw data and digital synthesis.
                    </p>
                    <div className="flex gap-4 text-xs font-mono text-gray-500">
                        <span>ID: AG-882</span>
                        <span>CLASS: CONSTRUCTOR</span>
                    </div>
                </div>
            </Section>

            {/* Projects Section */}
            <Section id="projects" className="mb-32 md:mb-0">
                <h2 className="text-2xl md:text-4xl font-orbitron mb-12 text-white border-b border-white/20 pb-4 inline-block">
                    PROJECT_DATABASE
                </h2>

                {/* Animated Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            variants={item}
                            key={idx}
                            onClick={() => setSelectedProject(project)}
                            className="bg-white/5 border border-white/10 p-6 hover:border-brand-orange transition-colors duration-300 group cursor-pointer hover:bg-white/10"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-orbitron text-xl text-white group-hover:text-brand-orange transition-colors">{project.title}</h3>
                                <span className={`text-xs font-mono px-2 py-1 border ${project.status === 'ONLINE' ? 'border-green-500 text-green-500' :
                                    project.status === 'PROTOTYPE' ? 'border-yellow-500 text-yellow-500' : 'border-red-500 text-red-500'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>
                            <p className="font-mono text-gray-400 text-sm mb-6 h-12">{project.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            {/* Neural Logs (Blog) Section */}
            <Section>
                <h2 className="text-2xl md:text-4xl font-orbitron mb-12 text-white border-b border-white/20 pb-4 inline-block">
                    NEURAL_LOGS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <a href={post.link} target="_blank" rel="noopener noreferrer" key={index} className="block group">
                            <div className="bg-black/50 border-l-2 border-brand-orange p-6 hover:bg-white/5 transition-all">
                                <p className="font-mono text-xs text-brand-orange mb-2">{post.date}</p>
                                <h3 className="text-xl font-orbitron text-white group-hover:text-neon-cyan transition-colors">
                                    {post.title}
                                </h3>
                                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
                                    <span>READ_TRANSMISSION</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" className="items-center justify-center text-center">
                <h2 className="text-3xl md:text-5xl font-orbitron mb-8 text-white">INITIALIZE_LINK</h2>
                <p className="font-mono text-gray-400 mb-8 max-w-lg mx-auto text-center">
                    Ready to collaborate on the next frontier? Transmit your signal.
                </p>
                <a
                    href="mailto:rielanalytics4@gmail.com"
                    className="inline-block px-8 py-4 bg-brand-orange text-black font-bold font-orbitron tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,138,0,0.4)] cursor-pointer"
                >
                    ESTABLISH CONNECTION
                </a>

                <div className="flex gap-8 mt-16 justify-center w-full flex-wrap">
                    {socials.map((social, idx) => (
                        <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-orange font-mono text-sm tracking-wider transition-colors">
                            [{social.name}]
                        </a>
                    ))}
                </div>
            </Section>

            <footer className="w-full text-center py-8 font-mono text-xs text-gray-600 flex flex-col gap-2">
                <span>DATADRYFT SYSTEMS © 2026</span>
                <a href="https://sketchfab.com/3d-models/human-brain-e073c2590bc24daaa7323f4daa5b7784" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                    Brain Model by Yash_Dandavate (CC-BY-4.0)
                </a>
            </footer>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-zinc-900 border border-brand-orange/50 p-1 rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(255,138,0,0.2)]"
                        >
                            <div className="relative h-64 w-full bg-zinc-800 overflow-hidden shrink-0">
                                <img
                                    src={projectDetails[selectedProject.title]?.image || "https://placehold.co/800x400/111/orange?text=NO+SIGNAL"}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all border border-white/20"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="p-8 overflow-y-auto">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-3xl font-orbitron text-white">{selectedProject.title}</h2>
                                    <span className="text-xs font-mono text-brand-orange border border-brand-orange px-2 py-1">
                                        {selectedProject.status}
                                    </span>
                                </div>

                                <p className="font-mono text-gray-300 leading-relaxed mb-8">
                                    {projectDetails[selectedProject.title]?.longDesc || selectedProject.desc}
                                </p>

                                <div className="border-t border-white/10 pt-6 flex justify-between items-center">
                                    <div className="flex gap-2">
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a href="https://github.com/Datadryft" target="_blank" rel="noopener noreferrer" className="text-sm font-orbitron text-neon-cyan hover:text-white transition-colors">
                                        VIEW CODEBASE →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
