import './content.css'
import JobsDiv from '../jobsDiv/jobsDiv'
// import { useEffect, useState } from 'react'
function Content(){

    // const [arrayOfJobs , setArrayOfJobs] = useState([])

    // useEffect(()=>{
    //     function Skills(){
    //         fetch("http://localhost:3000/arrayOfJobs").then(
    //             (respose)=>{return respose.json()}
    //         ).then((finalResult)=>{setArrayOfJobs(finalResult)})
    //     }
    //     Skills();
    // } ,[])


    const arrayOfJobs=[
        {
            key: 1,
            Img:"../../../public/assets/images/photosnap.svg",
            companyName: "Photoshot",
            new: true,
            featured: true,
            jobTitle: "Senior Frontend Developer",
            duration: "1d ago",
            time: "Full Time",
            describe: "USA only",
            tools:["Frontend" , "Senior","HTML" , "CSS" ,"JavaScript"]
        },

        {
            key: 2,
            Img:"./src/assets/images/manage.svg",
            companyName: "Manage ",
            new: true,
            featured: true,
            jobTitle: "Fullstack Developer",
            duration: "1d ago",
            time: " Part Time",
            describe: "Remote ",
            tools:["Fullstack" , "Midweight","Python" , "React"]
        },

        {
            key: 3,
            new: true,
            Img:"./src/assets/images/account.svg",
            companyName: "Account ",
            jobTitle: " Junior Frontend Developer",
            duration: "2d ago",
            time: " Part Time",
            describe: " USA only ",
            tools:["Frontend" , "Senior","HTML" , "CSS" ,"JavaScript"]
        },

        {
            key: 4,
            Img:"./src/assets/images/myhome.svg",
            companyName: "My Home ",
            jobTitle: " Junior Frontend Developer",
            duration: "5d ago",
            tim: " Contract",
            describe: " USA only ",
            tools:["Frontend" , "Jonior","React" , "Sass" ,"JavaScript"],
        },

        {
            key: 5,
            Img:"./src/assets/images/loop-studios.svg",
            companyName: "Loop Studios ",
            jobTitle: "Software Engineer",
            duration: "1w ago",
            time: " Full Time",
            describe: "  Worldwide ",
            tools:["Fullstack","Midweight","JavaScript" , "Sass" ,"Ruby"]
        },
        {
        ke: 6,
        Img:"./src/assets/images/faceit.svg",
        companyName: "FaceIt  ",
        jobTitle: "Junior Backend Developer",
        duration: "2w ago",
        time: " Full Time",
        describe: "   UK only ",
        tools:["Backend" , "junior","Ruby" , "RoR"]        }

    ]
    return(
        <div id='content'>
            {arrayOfJobs.map((item)=>{
                return(
                    <JobsDiv 
                    key={item.key}
                    Img={item.Img}
                    tools={item.tools}
                    languages ={item.languages}
                    companyName={item.companyName}
                    new={item.new}
                    featured={item.featured}
                    jobTitle={item.jobTitle}
                    duration={item.duration}
                    time={item.time}
                    describe={item.describe}
                    ></JobsDiv>
                )
            })}

        </div>
    )
}

export default Content