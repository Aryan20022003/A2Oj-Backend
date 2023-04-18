import '../App.css'
const SectionTitle = ({ title }) => {
    return (
        <h1 className="flex items-center justify-center pt-8 md:pb-6"
        data-aos="zoom-in-down"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >
            <span className="leading-tight font-primary text-3xl md:text-5xl">{title}</span>
        </h1>
    );
}

export default SectionTitle;