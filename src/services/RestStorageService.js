import Utils from "../util/utilities";

export default class RestStorageService {
    "use strict"
    constructor(entity, endPoint, options = {}) {
       this.entity = entity;

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
    /*KJ: Todo add filterStr*/
    get filterStr(){
      return this.model.list.options.filterStr;
   }
   set filterStr(filterStr){
      this.model.list.options.filterStr=filterStr;
   }
    get size() {
       //TODO: should return the number of items in model.data
       return this.model.data.length;
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
      return `${this.entity}`;
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
      return await this.doQuery(url);
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
               'content-type': 'application/json'
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
       //TODO-IMPLEMENT FIRST
       //should clear local storage 
       //should restore model from origModel 
       //(use utility function 'cloneObject' at bottom of file)
       localStorage.clear();
       this.model = this.cloneObject(this.origModel);
       this.store();
    }
    clear() {
       //TODO-IMPLEMENT FIRST
       //TODO: should clear local storage
       localStorage.clear();
    }
    store() {
       //TODO-IMPLEMENT FIRST
       //TODO: should store 'this.model' in localStorage
       localStorage.setItem(this.key, JSON.stringify(this.model));
    }
    retrieve() {
      //TODO
         //should retrieve your model from localStorage using this.key
         //If data retrieved from LocalStorage, updates this.model
         //hint:  remember to 'parse' the LocalStorage string value back into an object!
         //return true if model retrieved from localStorage, false if key wasn't found in localStorage 
         const storedData = localStorage.getItem(this.key);
         if (storedData) {
          this.model = JSON.parse(storedData);
          return true;
         }
         return false;  //returning false for now
    }
 
    //Sorting and Filtering Functions
    sort(col, direction) {
       //TODO
         //returns a copy of the model.data (util func 'cloneArray'), sorted using the 'col' and 'direction' specifications (see index.html for example)
         // storageSvc.sort('name','asc')
         // if 'perm' param is set to true, you should update the internal model.data 
         //with the sorted list, and call 'store' to store in local storage
         //also, store the sort col and direction in the 'app' portion of the model
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
         //returns a copy of the filtered array
         //filterObj contains an object with all the key/value pairs you 
         //will filter model.data with.
         //See MDN array 'filter' function documentation
         //Example call: storageSvc.filter({coachLicenseLevel:1,coachLast:"Jenson"});
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
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         return await response.json();
      } catch (error) {
         throw error;
      }
    }

    getItemIndex(id){
       //TODO-IMPLEMENT FIRST
       //return index of team with given id
       //see MDN array 'findIndex' documentation  
       //created separate function for this since multiple methods need to get the index of an item
       return this.model.data.findIndex(item => item.id === id);
 
    }

    static cloneObject(obj){
       return JSON.parse(JSON.stringify(obj));
    }
 
 }