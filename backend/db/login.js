import { DataTypes } from "sequelize";

const login = (db) => {
    return db.define("login", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
