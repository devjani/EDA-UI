// apiHelper.js

class ApiHelper {
    constructor() {
      this.baseURL = process.env.REACT_APP_API_BASE_URL;
    }
  
    async get(endpoint) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        return await response.json();
      } catch (error) {
        console.error("GET request failed", error);
      }
    }
  
    async post(endpoint, data) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        return await response.json();
      } catch (error) {
        console.error("POST request failed", error);
      }
    }
  
    async put(endpoint, data) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        return await response.json();
      } catch (error) {
        console.error("PUT request failed", error);
      }
    }
  
    async patch(endpoint, data) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        return await response.json();
      } catch (error) {
        console.error("PATCH request failed", error);
      }
    }
  
    async delete(endpoint) {
      try {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
          method: "DELETE"
        });
        return await response.json();
      } catch (error) {
        console.error("DELETE request failed", error);
      }
    }
    async uploadFile(endpoint, file) {
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: "POST",
            body: formData
          });
          return await response.json();
        } catch (error) {
          console.error("File upload failed", error);
        }
      }
      async getDummyData() {
        // Simulate an API response with dummy data
        return [
          { id: 1, name: 'Devang Jani', age: 30, profession: 'Software Developer' },
          { id: 2, name: 'Har Shobhit', age: 27, profession: 'Software Developer' },
          { id: 3, name: 'Smit Patel', age: 32, profession: 'Software Developer' },
          { id: 4, name: 'Hemant Bhupatani', age: 28, profession: 'Product Manager' },
        ];
      }
  }
  
  export default ApiHelper;
  