import { motion } from 'framer-motion'

const SectionHeader = ({ text, desc }: { text: string, desc?: string }) => {
    return (

        <motion.div className="text-center mb-10">
            <h2 className="text-3xl lg:text-5xl font-bold  mb-4">
                {text}
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
                {desc}
            </p>
        </motion.div>
    )
}

export default SectionHeader