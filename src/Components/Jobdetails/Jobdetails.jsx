import { useLoaderData, useParams } from "react-router-dom";


const Jobdetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);
    // console.log(idInt)

    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    return (
        <div>
            <h2 className="h-52 text-2xl flex justify-center items-center bg-rose-400">Job Deatail: {id}</h2>
            
            <div className="grid gap-4 md:grid-cols-4">

                <div className="border md:col-span-3 border-red-600"> </div>

                <div className="border border-orange-500">

                </div>
            </div>
        </div>
    );
};

export default Jobdetails;