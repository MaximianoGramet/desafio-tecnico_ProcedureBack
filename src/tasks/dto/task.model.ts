import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/database';

//NOTA: En este archivo se define el modelo de datos que se va a utilizar en la base de datos
//Lo hice con la documentación de secuelize, pero NEST tiene otro tipo de configuración distinta para esto
//Por lo que este archivo no se va a utilizar en el proyecto
//lo dejo como referencia para que veas como se hace con secuelize y lo compares con el de NEST (yo del futuro)

class Task extends Model {
    public id!: number;
    public title!: string;
    public description: string;
    public status!: string;
}

Task.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    description: {
        type: new DataTypes.STRING(256),
    },
    status: {
        type: new DataTypes.ENUM('OPEN', 'IN_PROGRESS', 'DONE'),
        defaultValue: 'IN_PROGRESS',
        allowNull: false,
    },
}, {
    modelName: 'Task',
    tableName: 'tasks',
    sequelize,
});

//no voy a exportar esto, porque me hace confundir con el modelo de NEST
//export default Task;