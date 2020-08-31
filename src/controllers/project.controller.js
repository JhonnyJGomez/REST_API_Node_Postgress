import Project from '../models/Project';

export async function createProject(req, res){
console.log(req.body);

    const {name, priority, description, deliverydate} = req.body;
//try {
    
    let newProject = await Project.createProject({
        name,
        priority,
        description,
        deliverydate
    });

    if (newProject){
        return res.json({
            message: 'Project was created successfully',
            data: newProject
        });
    }else{
//} catch (e) {
    res.status(500).json({
        message: "Something goes wrong",
        data: {}
    });
}
//}

}

