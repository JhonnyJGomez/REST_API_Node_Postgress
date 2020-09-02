import Project from '../models/Project';

// consulta toda la tabla de projects 
export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (e) {
        console.log(e);
    }
}

// crea un registro en la tabla de projects
export async function createProject(req, res) {

    const { name, priority, description, deliverydate } = req.body;
    try {

        let newProject = await Project.create({
            name: name,
            priority: priority,
            description: description,
            deliverydate: deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });

        if (newProject) {
            return res.json({
                message: 'Project was created successfully',
                data: newProject
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function getOneProject(req, res){
    const {id } = req.params;
    const project = await Project.findOne({
        where: {
            id
        }
    });
    res.json(project);
}


export async function deleteProject(req, res){
    const {id} = req.params;
    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Project deleted successfully', 
        deleteRowCount: deleteRowCount
    });
}
/* 
export async function updateProject(req, res){
   const {id} = req.params;
   const {name, priority, description, deliverydate};

    Project.findAll({
        attributes: ['id','name','priority', 'description','deliverydate'],
        where: {
            id
        }
    });

    if()
   const update = await Project.update({

})
}
 */
