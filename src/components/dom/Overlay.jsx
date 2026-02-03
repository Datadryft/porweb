import { Section } from './Section'
import { motion } from 'framer-motion'

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

export const Overlay = () => {
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
                        <motion.div variants={item} key={idx} className="bg-white/5 border border-white/10 p-6 hover:border-brand-orange transition-colors duration-300 group">
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

            {/* Contact Section */}
            <Section className="items-center text-center">
                <h2 className="text-5xl font-orbitron mb-8 text-white">INITIALIZE_LINK</h2>
                <p className="font-mono text-gray-400 mb-8 max-w-lg">
                    Ready to collaborate on the next frontier? Transmit your signal.
                </p>
                <button className="px-8 py-4 bg-brand-orange text-black font-bold font-orbitron tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,138,0,0.4)]">
                    ESTABLISH CONNECTION
                </button>
            </Section>

            <footer className="w-full text-center py-8 font-mono text-xs text-gray-600">
                DATADRYFT SYSTEMS © 2026
            </footer>
        </div>
    )
}
