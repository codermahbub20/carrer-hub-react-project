import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJobs/FeaturedJob";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;