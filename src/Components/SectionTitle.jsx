import '../App.css'
const SectionTitle = ({ title }) => {
    return (
        <h1 className="flex items-center justify-center py-4">
            <span className="mx-3 leading-tight font-primary text-4xl md:text-5xl">{title}</span>
        </h1>
    );
}

export default SectionTitle;