import { motion } from 'framer-motion'

export const Section = ({ children, className = '' }) => {
    return (
        <section className={`min-h-screen w-full flex flex-col justify-center items-start px-8 md:px-24 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl w-full"
            >
                {children}
            </motion.div>
        </section>
    )
}
