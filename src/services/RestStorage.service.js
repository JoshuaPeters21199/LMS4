import Utils from "../util/utilities";

export default class RestStorageService {
    "use strict"
    constructor(entity, entitySingle, endPoint, options = {}) {
       this.entity = entity;
       this.entitySingle = entitySingle;

       this.model = {};
       this.options = options;

       this.endPoint = endPoint;
       this.lookups = {}
    }
 
 //Getters
    get sortCol(){
       return this.model.list.options.sortCol;
    }
    set sortCol(col){
       this.model.list.options.sortCol=col;
    }
    get sortDir(){
       return this.model.list.options.sortDir;
    }
    set sortDir(dir){
       this.model.list.options.sortDir=dir;
    }
     get filterCol(){
       return this.model.list.options.filterCol;
    }
    set filterCol(col){
       this.model.list.options.filterCol=col;
    }
    get filterStr(){
      return this.model.list.options.filterStr;
   }
   set filterStr(filterStr){
      this.model.list.options.filterStr=filterStr;
   }
   get limit() {
      return this.model.options.limit;
   }
   set limit(limit) {
      this.model.options.limit = limit;
   }
   get size() {
       return this.model.data.length;
   }

   get offset() {
      return this.model.options.offset;
   }

   get options() {
      return this.model.options;
   }

   set options(opt) {
      this.model.options = {
         sortCol: null,
         sortDir: "asc",
         filterCol: "",
         filterStr: "",
         limit: 100,
         offset: null,
      };
      this.model.options = Object.assign(this.model.options, opt);
   }

   get apiName() {
      return this.entity;
      // return `${this.entity}`;
   }

   get hostPrefix() {
      let url = `${this.endPoint.protocol}://${this.endPoint.host}`;
      if (this.endPoint.port) {
         url = `${url}:${this.endPoint.port}`;
      }
      return url;
   }

   get apiUrl() {
      return `${this.hostPrefix}/${this.apiName}`;
   }

   get lookupUrlPrefix() {
      return `${this.hostPrefix}/lookups`;
   }
   
    async list() {
      let url = `${this.apiUrl}/${Utils.getQueryString(this.options)}`;
      try {
         return await this.doQuery(url, {method:"GET"});
      } catch(msg) {
         console.log(msg);
         throw msg;
      }
      // return await this.doQuery(url);
    }

    async getLookup(lookupName) {
      let url = `${this.lookupUrlPrefix}/${lookupName}`;
      return await this.doQuery(url);
    }
 
    //CRUD FUNCTIONS
    async create(obj) {
      let url = `${this.apiUrl}/`;
      try {
         const response = await this.doQuery(url, {
            method: 'POST',
            header: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
         });
         return response;
      } catch (error) {
         throw error;
      }
    }

    async read(getId) {
      let url = `${this.apiUrl}/${getId}`;
      return await this.doQuery(url);
    }

   async update(id, obj) {
      let url = `${this.apiUrl}/${id}`;
      try {
         const response = await this.doQuery(url, {
            method: 'PUT',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
         });
         return response;
      } catch (error) {
         throw error;
      }
    }
 
    async delete(removeId) {
      let url = `${this.apiUrl}/${removeId}`;
      try {
         const response = await this.doQuery(url, {
            method: 'DELETE'
         });
         return response;
      } catch (error) {
         throw error;
      }
    }
 
    //LocalStorage Functions
    reset() {
       localStorage.clear();
       this.model = this.cloneObject(this.origModel);
       this.store();
    }
    clear() {
       localStorage.clear();
    }
    store() {
       localStorage.setItem(this.key, JSON.stringify(this.model));
    }
    retrieve() {
         const storedData = localStorage.getItem(this.key);
         if (storedData) {
          this.model = JSON.parse(storedData);
          return true;
         }
         return false;  //returning false for now
    }
 
    //Sorting and Filtering Functions
    sort(col, direction) {
       const sortedData = this.cloneObject(this.model.data).sort((a, b) => {
          if (direction === 'asc') {
            return a[col] > b[col] ? 1 : -1;
          } else {
            return b[col] > a[col] ? 1 : -1;
          }
        });
      
        this.model.data = sortedData;
        this.model.list.options.sortCol = col;
        this.model.list.options.sortDir = direction;
        this.store();
 
    }
 
    filter(filterObj) {
       return this.model.data.filter(item => {
          for (const key in filterObj) {
            if (item[key] !== filterObj[key]) {
              return false;
            }
          }
          return true;
       });
    }
 
 
    //Utility functions
    async doQuery(url, options) {
      try {
         const response = await fetch(url, options);
         return await response.json();
      } catch (err) {
         throw err;
      }
    }

   getItemIndex(id){
       return this.model.data.findIndex(item => item.id === id);
 
    }

   cloneObject(obj){
       return JSON.parse(JSON.stringify(obj));
    }
 
 }