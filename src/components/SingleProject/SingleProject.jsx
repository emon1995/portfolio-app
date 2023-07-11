import './SingleProject.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
    const [project, setProject] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("../../../public/projects.json")
            .then(res => res.json())
            .then(data => {
                const project = data.filter(d => parseInt(id) === d.id);
                setProject(project);
            })
    }, [id]);

    console.log(project[0]?.technologies);

    return (
        <div className='single-project'>
            {/* <h1>SingleProject</h1> */}
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    project[0]?.images?.map((img, i) => <SwiperSlide key={i}>
                        <img className='slide-img' src={`../../../public/${img}`} alt="img" />
                    </SwiperSlide>)
                }

                {/* <SwiperSlide>
                    <img className='slide-img' src={`../../../public/${project[0]?.images[1]}`} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='slide-img' src={`../../../public/${project[0]?.images[2]}`} alt="img" />
                </SwiperSlide> */}
            </Swiper>
            <div className="description">
                <h1>Project Name: {project[0]?.name}</h1>
                <h2>Description:</h2>
                <ul className="description">
                    {
                        project[0]?.descriptions?.map((d, i) => <li key={i}>{d}</li>)
                    }
                </ul>
            </div>
            <div className="">
                <h2>Social Links:</h2>
                <ul className="">
                    <li>1. Website: <a href={`${project[0]?.socialLinks?.website}`}>{project[0]?.socialLinks?.website}</a></li>
                    <li>2. GitHub-Client: <a href={`${project[0]?.socialLinks?.["github-client"]}`}>{project[0]?.socialLinks?.["github-client"]}</a></li>
                    <li>3. GitHub-Server: <a href={`${project[0]?.socialLinks?.["github-server"]}`}>{project[0]?.socialLinks?.["github-server"]}</a></li>
                </ul>
            </div>
            <div className="technology">
                <h2>Technology</h2>
                <ul>
                    {
                        project[0]?.technologies?.map((t, i) => <li key={i}>{t}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default SingleProject;