import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
      client = new Client();
      databases;
      bucket;

      constructor() {
            
      }
}

const service = new Service();
export default Service;