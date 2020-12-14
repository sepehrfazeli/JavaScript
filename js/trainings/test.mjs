const Calculate = {
    sum(inputArray) {
        if(Array.from(inputArray).length != 0){
      return Array.from(inputArray).reduce((sum, value) => {
        return sum + value;
      });
      };
    },
  }
  
//   module.exports = Calculate;