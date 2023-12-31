import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);

    const [datalength,setDatalength] = useState(4);

    useEffect(() => {
        fetch('Jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className="mb-5">
            <div>
                <h1 className='text-5xl text-center'>Featured Jobs : {jobs.length}</h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2">
                {
                    jobs.slice(0,datalength).map(job => <Job key={job.id} job={job}></Job>)
                }
                </div>

            </div>
            <div className={datalength === jobs.length && 'hidden' || "flex mt-5 justify-center"}>
                <button className="btn btn-primary" onClick={() => setDatalength(jobs.length)}>Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;