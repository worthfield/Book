export const getErrorHandler = (statusCode, message) => {
  const error = new Error();
//   if (statusCode) {
//     switch (statusCode) {
//       case 11000:
//       case 11001:
//         error.statusCode = 400;
//         error.message = getUniqueErrorMessage(message);

//         break;
//         default:
//             error.message= "Something went wrong"
//     }
//   } else {
    error.statusCode = 400;
    error.message = message;
//   }

  return error;
};
// const getUniqueErrorMessage = (message) => {
//   let output;
//   try {
//       let fieldName = message.substring(message.lastIndexOf("index") + 7 , message.lastIndexOf('_1') );
//       output = fieldName.charAt(0).toUpperCase()+ fieldName.slice(1) + " already exists";
//    } catch (error) {
//     output = "Unique field already exists";
//   }
//   return output;
// };
