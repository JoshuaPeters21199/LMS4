/* Class LocalStorageService- a class for persistant CRUD in LocalStorage
Some tips on order of implementation:
1.  Implement Utility Functions (cloneObject(done),  getItemIndex)
2.  Implement 'size' getter
3.  Implement localStorage functions 'reset', 'clear', 'store', 'retrieve'
4.  Implement 'read', 'delete', 'create', 'update', 'list'
5.  Implement 'sort', 'filter'
*/
export default class LocalStorageService {
    "use strict"
    constructor(model, key) {
       this.origModel = model;
       this.key = key;
 
       if(!this.retrieve()){
          this.model = this.cloneObject(model);   //get copy of data
       }
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
    async list() {
       //Giving this one to you.  It will automatically
       //return a sorted and filtered array based on the current
       //sort column and direction, and filterStr values
      this.sort(this.sortCol, this.sortDir);
      let filterObj={};
 
      if (this.filterStr){
          filterObj[this.filterCol]=this.filterStr;
          return this.filter(filterObj);
      }
 
      return this.model.data;
    }
 
    //CRUD FUNCTIONS
    async create(obj) {
     //TODO
       //append new object to data store
       // persist in local storage by calling store(
       this.model.data.push(obj);
       this.store();
    }
    async read(getId) {
       //TODO: returns the item in the array with id=getId, null if it is not found
       const item = this.model.data.find(item => item.id === getId);
       return item || null;
    }
   async update(obj) {
       //TODO
       //find index of object in array
       //update object with new contents
       // persist in local storage by calling store()
       const index = this.getItemIndex(obj.id);
       if (index !== -1) {
          this.model.data[index] = obj;
          this.store();
       }
    }
 
    async delete(removeId) {
       //TODO
          //find index of object in array
         //remove object with specified id from model.data (splice?)
         // persist in local storage by calling store()
         const index = this.getItemIndex(removeId);
         if (index !== -1) {
          this.model.data.splice(index, 1);
          this.store();
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
    getItemIndex(id){
       //TODO-IMPLEMENT FIRST
       //return index of team with given id
       //see MDN array 'findIndex' documentation  
       //created separate function for this since multiple methods need to get the index of an item
       return this.model.data.findIndex(item => item.id === id);
 
    }
    cloneObject(obj){
       return JSON.parse(JSON.stringify(obj));
    }
 
 }