import '../App.css'
const SectionTitle = ({ title }) => {
    return (
        <h1 className="flex items-center justify-center pt-8 md:pb-6">
            <span className="leading-tight font-primary text-3xl md:text-5xl">{title}</span>
        </h1>
    );
}

export default SectionTitle;