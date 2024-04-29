export default class Utilities {
    static getQueryString(options) {
      let queryString = '';
      for (const key in options) {
        if (options.hasOwnProperty(key)) {
          const value = options[key];
          if (value !== null && value !== undefined && value !== '') {
            queryString += `&${key}=${encodeURIComponent(value)}`;
          }
        }
      }
      // Remove the first '&' if queryString is not empty
      if (queryString.length > 0) {
        queryString = `?${queryString.substring(1)}`;
      }
      return queryString;
    }
  
    static cloneObject(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }
  