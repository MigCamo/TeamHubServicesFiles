const { document } = require('../Models');

class FileDAO {

    static async saveNewFile(file) {
        return await document.create(file);
    }

    static async getAllProjectDocument(idProject) {
        return await document.findAll({
          where: {
            IdProject: idProject,
          },
        });
    }
          
    static async deleteDocumentByID(IdDocument) {
        return await document.destroy({ where: { IdDocument } });
    }
    
}

module.exports = FileDAO;