const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');
const path = require('path');
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');

const SaveFile = require('../Controller/FilegRPCController').SaveFile;

const port = process.env.PORT;;

class ServerApp {

    constructor(){
        //this.app = express();
        this.port = process.env.PORT;
        this.Proto_File = process.env.PROTO_FILE;
        this.packageDef = protoLoader.loadSync(path.resolve(__dirname, this.Proto_File));
        this.grpcObj = grpc.loadPackageDefinition(this.packageDef);
        this.filePackage = this.grpcObj.filePackage;
        this.server = this.getServer();
        //this.middleware();
        //this.routes();
    }
 
    middleware(){
       // this.app.use(cors());
        //this.app.use(express.json());
        //this.app.use(express.static('public'));
    }
    routes(){
        //this.app.use('/TeamHub/File', require('../Routes/FileRoute'));
    }

    listen(){
        this.server.bindAsync(`127.0.0.1:${this.port}`, grpc.ServerCredentials.createInsecure(),
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Your server as started on port ${this.port}`);
        });
    }

    getServer(){
        const server = new grpc.Server();
        server.addService(this.filePackage.FileManagement.service, { SaveFile });
        return server;
    }
}

module.exports = ServerApp;