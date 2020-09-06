import Task from '../models/Task';

 export async function createTask(req,res){
    
    try{      
        const  {name, done, projectid} = req.body;
        console.log(req.body);
        const newTask = await Task.create({
            name,
            done,
            projectid
        },{
            fields: ['name','done','projectid']
        });

        if (newTask){
            return res.json({
                message: 'Task created successfully',
                data: newTask
            });
        }
    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
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