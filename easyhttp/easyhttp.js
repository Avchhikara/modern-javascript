function easyHTTP() {
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback(`Error: ${this.http.status}`);
    }
  };
  this.http.send();
};

//setting up post request things
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("content-type", "application/json");
  this.http.onload = () => {
    //No need to check the status here,
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

//setting up a put request thing
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

//setting up delete request thing
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error : " + this.http.status);
    }
  };
  this.http.send();
};
