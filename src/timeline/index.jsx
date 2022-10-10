import React, { useState } from 'react'
//import {Row,Col} from 'react-bootstrap'
import { Gantt} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import TimelineModal from './modal';
import task0 from '../photos/conceptualise.png';
import task1 from '../photos/sketches.jpg';
import task2 from '../photos/color_profile.jpg';
import task3 from '../photos/html.png';
import task4 from '../photos/js.jpg';
import task5 from '../photos/budget.jpg';
import task6 from '../photos/spam.jpg';
import task7 from '../photos/eat.jpg';
import task8 from '../photos/delivery_of_task.jpg';


const currentDate = new Date();

let defaultTask= [
    //defining the stages and their respective tasks 
    //first stage enquiry
        {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(),1),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 11),
        name: "Enquiry",
        id: "Enquiry",
        progress: 100,
        type: "project",
        hideChildren: false,
        displayOrder: 1,
        
      },
      //tasks for first stage 
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(),1 ),
        end: new Date(currentDate.getFullYear(),currentDate.getMonth(),6 ),
        name: "conceptualize",
        id: "Task 0",
        progress: 100,
        type: "task",
        project: "Enquiry",
        displayOrder: 2,
        details:"This is an enquiry about Coneptualized Details",
        person:"Naruto",
        image: task0,
        description:"conceptualisation of tasks and how to tackle them"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
        name: "Sketch",
        id: "Task 1",
        progress: 100,
        dependencies: [],
        type: "task",
        project: "Enquiry",
        displayOrder: 3,
        details:"This is an enquiry about progress of sketches",
        person:"Sasuke",
        image:task1,
        description:"sketches of the tasks"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 11),
        name: "color profiles",
        id: "Task 2",
        progress: 100,
        dependencies: [],
        type: "task",
        project: "Enquiry",
        displayOrder: 4,
        details:"This is an enquiry about color profiles used for sketches",
        person:"Sakura",
        image: task2,
        description:"color profiles has to be selected that suits best for the sketches"
      },
    //second stage booking
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: "Booking",
        id: "Booking",
        progress: 100,
        type: "project",
        hideChildren: false,
        displayOrder: 5,
        },
        //tasks in booking stage
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(),currentDate.getMonth(), 11 ),
        name: "HTML",
        id: "Task 3",
        progress: 100,
        type: "task",
        project: "Booking",
        displayOrder: 6,
        details:"progress happened in HTML code required",
        person:"Shikamaru",
        image:task3,
        description:"basic layout and reusabel html codes are needed"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 12),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: "Write the JS",
        id: "Task 4",
        progress: 100,
        dependencies: [],
        type: "task",
        project: "Booking",
        displayOrder: 7,
        details:"implementing of JS into code to achieve the client requirement",
        person:"kakashi",
        image:task4,
        description:"considering the clients requirement implementing the js into html"
    },
    // third stage retail
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 22),
        name: "Retail",
        id: "Retail",
        progress: 100,
        type: "project",
        hideChildren: false,
        displayOrder: 8,
        },
        // tasks in retail stage
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
        end: new Date(currentDate.getFullYear(),currentDate.getMonth(), 19 ),
        name: "Advertise",
        id: "Task 5",
        progress: 100,
        type: "task",
        project: "Retail",
        displayOrder: 9,
        details:"budget for advertisement campaign needs to be finalised",
        person:"jiraiah",
        image:task5,
        description:"ensure proper adds campaign for the project"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 20),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 22),
        name: "Spam links",
        id: "Task 6",
        progress: 100,
        dependencies: [],
        type: "task",
        project: "Retail",
        displayOrder: 10,
        details:"Spam links need to be sorted from genuine links",
        person:"neji",
        image:task6,
        description:"security has to be given extra care to filter spam links"
    },
    // fourth stage delivery
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 27),
        name: "Delivery",
        id: "Delivery",
        progress: 100,
        type: "project",
        hideChildren: false,
        displayOrder: 11,
        },
    //tasks in fourth stage
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
        end: new Date(currentDate.getFullYear(),currentDate.getMonth(), 22 ),
        name: "Eat",
        id: "Task 7",
        progress: 100,
        type: "task",
        project: "Delivery",
        displayOrder: 12,
        details:"eating arrangements for clients during their visit",
        person:"ten ten",
        image:task7,
        description:"eatery places needs to be booked before hand for the team outing"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 23),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 27),
        name: "Delivery task",
        id: "Task 8",
        progress: 100,
        dependencies: [],
        type: "task",
        project: "Delivery",
        displayOrder: 13,
        details:"finalisation of delivery of task has to be done",
        person:"rock lee",
        image:task8,
        description:"delivery of task before deadline at any cost"
    },
];

//to display the timeline 
const TimeLine=()=>{
    //initial valuse of task before clicking is defailttask
    const [tasks, setTasks] = useState(defaultTask);
    //initial setstate is false for show before clicking
    const [show, setShow] = useState(false);
    //initial value will be empty object for selectedtask before clicking
    const [selectedTask, setselectedTask] = useState({})

   // to display contents of task bar on hover
    const toolTipContent=(e)=>{
        console.log(e)
        if(e.task.type==="project")
        return
        return(
            <div className='coverlay d-flex'>
                <ul>Duedate:<b>{e.task.end.toDateString()}</b></ul>
                <ul>Assigned to:<b className=''>{e.task.person}</b></ul>
                <ul>last updated at:<b>{e.task.start.toDateString()}</b></ul>
                <ul>last updated by:<b>{e.task.person}</b></ul>
            </div>
            
             )
    }
    //expanding and hiding of tasks on clicking the stages
    const handleExpanderClick = (task) => {
        let newTasks=tasks.map(t => (t.id === task.id ? task : t))
        setTasks(newTasks);
        console.log("On expander click Id:" + task.id);
      };
      //onclick state of show changes from false to true and the clicked task will be taken aas selected task
      const onClick=(task) => {
        setShow(true)
        setselectedTask(task)
    
      
      }
      //  changing the setonhide state
      const onHide=() =>{
            setShow(false)
      }
      


    return(
        <>
        <TimelineModal
        show={show}
        onHide={onHide}
        selectedTask={selectedTask}
        />

        <Gantt
        onClick={onClick} 
        barProgressColor="#007bff" 
        barProgressSelectedColor="#6c757d" 
        barBackgroundColor="#0077c0"
        TooltipContent={toolTipContent}   
        onExpanderClick={handleExpanderClick} 
        tasks={tasks}
         />

        </>
    )

}


  
  

export default TimeLine