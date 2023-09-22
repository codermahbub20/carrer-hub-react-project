import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdSubtitles } from "react-icons/md";

const Jobdetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    // const {job_description} = jobs;

    const idInt = parseInt(id);
    // console.log(idInt)

    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    return (
        <div>
            <h2 className="h-52 text-2xl flex justify-center items-center bg-rose-400">Job Deatail: {id}</h2>
            
            <div className="grid gap-4 md:grid-cols-4">

                <div className="border md:col-span-3 mt-4 p-4 border-red-600"> 

                <h2 className="text-2xl font-medium mb-4 p-2">Job Description: <small className="text-slate-600">{job.job_description}</small></h2>

                <h2 className="text-2xl font-medium p-2">Job Responsibility: <small className="text-slate-600">{job.job_responsibility}</small></h2>

                <h2 className="text-2xl font-medium p-2">Educational Requirements: <br /> <br /> <small className="text-slate-600">{job.educational_requirements}</small></h2>
                <br />
                <h2 className="text-2xl font-medium">Experiences: <br /> <br /> <small className="text-slate-600">{job.experiences}</small></h2>


                </div>

                <div className="border mt-4 bg-sky-100 p-5 h-fit border-orange-500">
                    <h1 className="text-xl font-medium border-b-2 border-slate-600 p-1">Job Details: </h1>
                    <h2 className="flex gap-2 font-medium text-xl mt-4"><AiFillDollarCircle className="mt-2"></AiFillDollarCircle>Salary: {job.salary}</h2>

                    <h2 className="flex gap-2 font-medium text-xl mt-4"><MdSubtitles className="mt-2 w-14"></MdSubtitles>Job Title: {job.job_title}</h2><br />

                    <h1 className="text-xl font-medium border-b-2 border-slate-600 p-1">Contact Information: </h1>
                    <Link><button className="btn mt-5 w-full btn-primary">Apply Now</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Jobdetails;