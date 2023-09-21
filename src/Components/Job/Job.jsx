/* eslint-disable react/prop-types */

import { FaLocationArrow } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";

const Job = ({ job }) => {
    const { logo,job_title,company_name,remote_or_onsite,job_type,location,salary } = job;
    return (

        <div className="max-w-lg mt-3 p-5 mb-2 bg-white border border-gray-200  rounded-xl dark:bg-gray-800 shadow-xl dark:border-gray-700">
            <img className="w-28 h-9 text-gray-500 dark:text-gray-400 mb-2" src={logo} alt="" />
            <a href="#">
                <h5 className="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{job_title}</h5>
            </a>
            <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">{company_name}</p>
            <div>
            <button className="px-4 py-2 font-medium border rounded border-solid text-cyan-500 border-blue-500">{remote_or_onsite}</button>
            <button className="px-4 py-2 ml-3 font-medium rounded border border-solid text-cyan-500 border-blue-500">{job_type}</button>
            </div>

            <div className="mt-2 flex gap-5">
                <h2 className="flex gap-2"><FaLocationArrow className="mt-1"></FaLocationArrow>{location}</h2>
                <h2 className="flex gap-2"><AiFillDollarCircle className="mt-1"></AiFillDollarCircle>{salary}</h2>
            </div>
          
           <button className="btn btn-primary mt-4">View Details</button>
        </div>

    );
};



export default Job;

