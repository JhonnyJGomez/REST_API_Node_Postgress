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

export async function getTasks(req,res){
    const tasks = Task.findAll({
        attributes: ['id', 'name', 'done', 'projectid'],
        order:[
            ['id', 'DESC']
        ]
    });
    res.json({tasks});
}

export async function getOneTask(req,res){
    const { id } = req.params

    const task = await Task.findOne({
        attributes: ['id','name','done','projectid'],
        where: {id}
    });
    res.json({
        task
    })
    
}
export async function updateTask(req,res){

    const { id } = req.params;
    const { name, done, projectid } = req.body;
    
    await Task.findOne({
        attributes: ['name','done','projectid'],
        where: {id}
    });

    Task.update({
        name,
        done,
        projectid
    },{
        where: {id}            
        
    });
    res.json({
        message: 'Task updated',
        updateTask
    });    
}

export async function deleteTask(req,res){
    const  { id } = req.params;
    const  rowDeleted = await Task.destroy({
        where:{
            id
        }
    }); 
    res.json({
        message: rowDeleted + ' Task deleted succesfully'
    });   
}

export async function getTasksbyProject(req,res){
    const { projectid } = req.params;
    const task = await Task.findAll({
        attributes: ['id','name','done','projectid'],
        where: {
            projectid
        }
    });
    res.json({
        task
    })
}