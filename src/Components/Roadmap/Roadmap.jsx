import SectionTitle from '../SectionTitle';
import './roadmap.css';
import Data from './RoadmapData';


const Roadmap = () => {
    return (
        <section className='bg-black min-h-screen'>
            <SectionTitle title="Roadmaps" />
            <p className='text-white text-center mx-auto my-6 px-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac euismod neque. Mauris arcu arcu, lobortis <span className='text-red-500'>nec maximus egestas, maximus eget lacus</span>
            </p>
            <div className='min-h-screen flex justify-center items-center box-border'>
                <div className="roadmap_timeline my-4 mx-auto">
                    <div className='roadmap_items'>
                        {
                            Data.map((item, index) => {
                                return <div key={index} className="roadmap_item">
                                    <div className="roadmap_item_date font-semibold text-white">{item.date}</div>
                                    <div className="roadmap_item_dot" />
                                    <div className="roadmap_item_content drop-shadow-sm bg-white py-6 px-4 rounded">
                                        {item.text}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
