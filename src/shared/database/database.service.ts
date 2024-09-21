import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as oracledb from 'oracledb'

@Injectable()
export class DataBaseService implements OnModuleInit, OnModuleDestroy {

    private connection: oracledb.Connection;

    constructor (private configService: ConfigService) {}
    
    async onModuleInit() {
        
      const bindsConnection = {
          user: this.configService.get<string>('DB_USERNAME'),
          password: this.configService.get<number>('DB_PASSWORD'),
          connectString: this.configService.get<string>('DB_URL'),
        }

        console.log(bindsConnection);
      
          try {
            this.connection = await oracledb.getConnection(bindsConnection)

            console.log("Conectado ao OracleDB")


        } catch (error) {
            console.error("Erro ao se conectar ao OracleDB: ", error);
            throw error;
        }
    }

    async onModuleDestroy() {
        try {
          await this.connection.close();
          console.log('Conexão ao OracleDB fechada');
        } catch (error) {
          console.error('Erro ao fechar conexão com OracleDB', error);
        }
      }

}