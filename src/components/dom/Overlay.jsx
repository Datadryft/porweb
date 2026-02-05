import { Section } from './Section'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const projects = [
    {
        title: "NEURAL NETWORK V1",
        desc: "AI-driven pattern recognition system.",
        tech: ["PyTorch", "React", "WebGL"],
        status: "ONLINE"
    },
    {
        title: "CYBERNETIC ARM",
        desc: "Prosthetic interface prototype.",
        tech: ["C++", "Arduino", "Three.js"],
        status: "PROTOTYPE"
    },
    {
        title: "VOID DRONE",
        desc: "Autonomous surveillance unit.",
        tech: ["Rust", "WASM", "WebGPU"],
        status: "OFFLINE"
    }
]

const blogPosts = [
    {
        title: "The Future of Synthetic Data",
        date: "2026.04.12",
        link: "https://medium.com/@rielanalytics4" // Update with real link
    },
    {
        title: "Optimizing WebGL for Neural Interfaces",
        date: "2026.03.08",
        link: "https://medium.com/@rielanalytics4"
    },
    {
        title: "Ethical AI in Autonomous Systems",
        date: "2026.01.15",
        link: "https://medium.com/@rielanalytics4"
    }
]

const socials = [
    { name: "LINKEDIN", url: "https://linkedin.com/in/yourprofile" },
    { name: "GITHUB", url: "https://github.com/yourusername" },
    { name: "X / TWITTER", url: "https://twitter.com/yourhandle" }
]

const projectDetails = {
    "NEURAL NETWORK V1": {
        longDesc: "A comprehensive system designed to identify complex patterns in unstructured data sets. Utilizing a custom-built transformer architecture, it achieves 99.8% accuracy in edge-case detection.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
    },
    "CYBERNETIC ARM": {
        longDesc: "Tactile feedback interface for next-gen prosthetics. Integrates real-time nerve signal processing with low-latency servo control for near-natural movement.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
    },
    "VOID DRONE": {
        longDesc: "Stealth surveillance drone capable of autonomous navigation in GPS-denied environments. Features onboard SLAM and thermal imaging.",
        image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1000&auto=format&fit=crop"
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

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-y-auto pointer-events-auto">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 text-white mix-blend-difference">
                <div className="font-orbitron font-bold text-xl tracking-widest">
                    DATA<span className="text-brand-orange">DRYFT</span>
                </div>
                <ul className="flex gap-8 font-mono text-sm">
                    <li className="hover:text-brand-orange cursor-pointer transition-colors">[ ABOUT ]</li>
                    <li className="hover:text-brand-orange cursor-pointer transition-colors">[ PROJECTS ]</li>
                    <li className="hover:text-brand-orange cursor-pointer transition-colors">[ CONTACT ]</li>
                </ul>
            </nav>

            {/* Hero Section */}
            <Section className="items-center text-center">
                <h1 className="text-6xl md:text-9xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-4 tracking-tighter filter drop-shadow-[0_0_10px_rgba(255,138,0,0.5)]">
                    DATA DRYFT
                </h1>
                <div className="flex flex-col items-center gap-2 font-mono text-brand-orange text-sm md:text-base tracking-widest">
                    <p>SYSTEM STATUS: ONLINE</p>
                    <p>NODES: CONNECTED</p>
                </div>
            </Section>

            {/* About Section */}
            <Section>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-lg relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50 transform -translate-x-full group-hover:animate-scanline" />

                    <h2 className="text-4xl font-orbitron mb-6 text-white">IDENTITY_LOG</h2>
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
            <Section>
                <h2 className="text-4xl font-orbitron mb-12 text-white border-b border-white/20 pb-4 inline-block">
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
                <h2 className="text-4xl font-orbitron mb-12 text-white border-b border-white/20 pb-4 inline-block">
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
            <Section className="items-center text-center">
                <h2 className="text-5xl font-orbitron mb-8 text-white">INITIALIZE_LINK</h2>
                <p className="font-mono text-gray-400 mb-8 max-w-lg mx-auto text-center">
                    Ready to collaborate on the next frontier? Transmit your signal.
                </p>
                <a
                    href="mailto:rielanalytics4@gmail.com"
                    className="inline-block px-8 py-4 bg-brand-orange text-black font-bold font-orbitron tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,138,0,0.4)] cursor-pointer"
                >
                    ESTABLISH CONNECTION
                </a>

                <div className="flex gap-8 mt-16">
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
                            className="bg-zinc-900 border border-brand-orange/50 p-1 rounded-lg w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(255,138,0,0.2)]"
                        >
                            <div className="relative h-64 w-full bg-zinc-800 overflow-hidden">
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

                            <div className="p-8">
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
                                    <button className="text-sm font-orbitron text-neon-cyan hover:text-white transition-colors">
                                        VIEW CODEBASE →
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
