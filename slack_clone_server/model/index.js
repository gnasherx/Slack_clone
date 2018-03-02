import Sequelize from 'sequelize'

const sequelize = new Sequelize('slack', 'postgress', 'postgress', {
    dialect: 'postgres'
}) //..Database name, Username, Password

// Database object
const models = {
    user: sequelize.import('./users'),
    channel: sequelize.import('./channel'),
    message: sequelize.import('./member.js'),
    team: sequelize.import('./team.js')
}

Object.keys(models).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        models[modelName].associate(models)
    }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models