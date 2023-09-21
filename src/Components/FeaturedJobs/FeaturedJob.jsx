import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('Jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div>
                <h1 className='text-5xl text-center'>Featured Jobs : {jobs.length}</h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJob;