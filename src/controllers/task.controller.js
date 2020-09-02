import Task from '../models/Task';


export async function createTask(req,resp){
    const  {name, done, projectid} = req.body;

    const newTask = Task.create({
        name,
        done,
        projectid
    },{
        fields: ['name','done','projectid']
    });
    resp.json({message: 'Task created successfully'});
}
export function getTask(req,resp){
    
}
export function getOneTask(req,resp){
    
}
export function updateTask(req,resp){
    
}
export function deleteTask(req,resp){
    
}
export function getTasksbyProject(req,resp){
    
}