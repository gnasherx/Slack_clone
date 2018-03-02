export default (sequelize, DataTypes) => {
    const Team = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
    })

    Team.associate = (models) => {
        Team.belongsToMany(models.User, {
            through: 'member',
            foreignKey: 'teamId'
        })
        Team.belongsTo(models.User, {
            foreignKey: 'owner'
        })
    }

    return Team
}
